import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { signIn } from "../../utils/MainApi";

function SignInPopup({ closePopup, openPopup, handleLogin }) {
  const { addCurrentUser } = useCurrentUser();
  const [formIsValid, setFormIsValid] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (formData.email && formData.password && validateEmail(formData.email)) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const handleSubmitForm = () => {
    signIn({ email: formData.email, password: formData.password })
      .then((res) => {
        addCurrentUser(res.user);
        localStorage.setItem("jwt", res.token);
        handleLogin();
        closePopup();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const openSignUpPopup = () => {
    openPopup("sign-up");
  };

  return (
    <div className="sign-in-popup">
      <PopupWithForm
        name="Sign in"
        closePopup={closePopup}
        handleOrButton={openSignUpPopup}
        submitButtonText="Sign in"
        orButtonText="Sign up"
        formIsValid={formIsValid}
        handleSubmit={handleSubmitForm}
      >
        <label className="popup-with-form__label">
          Email
          <input
            onChange={handleChange}
            className="popup-with-form__input"
            type="email"
            placeholder="Enter email"
            required
            name="email"
          />
        </label>
        <label className="popup-with-form__label">
          Password
          <input
            onChange={handleChange}
            className="popup-with-form__input"
            type="password"
            placeholder="Enter password"
            required
            name="password"
          />
        </label>
      </PopupWithForm>
    </div>
  );
}

export default SignInPopup;
