import "./SignUpPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from "react";
import { signUp } from "../../utils/MainApi";

function SignUpPopup({ closePopup, openPopup, handleRegisterUser }) {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsTakenMessage, setEmailIsTakenMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    return signUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })
      .then(() => {
        handleRegisterUser();
      })
      .catch((error) => {
        console.log(error);
        if (error === 409) {
          setEmailIsTakenMessage(true);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (
      formData.name &&
      formData.email &&
      formData.password &&
      validateEmail(formData.email)
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const openSignInPopup = () => {
    openPopup("sign-in");
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleCheckEmail = (e) => {
    const email = e.target.value;
    if (validateEmail(email)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  return (
    <div className="sign-in-popup">
      <PopupWithForm
        name="Sign up"
        handleOrButton={openSignInPopup}
        closePopup={closePopup}
        submitButtonText="Sign up"
        orButtonText="Sign in"
        formIsValid={formIsValid}
        handleSubmit={handleSubmit}
      >
        <label className="popup-with-form__label">
          Email
          <input
            className="popup-with-form__input"
            type="email"
            placeholder="Enter email"
            required
            name="email"
            onBlur={handleCheckEmail}
            onChange={handleChange}
          />
          <p
            className={`popup-with-form__invalid-email-message ${
              !emailIsValid
                ? "popup-with-form__invalid-email-message_visible"
                : ""
            }`}
          >
            Invalid email address
          </p>
        </label>
        <label className="popup-with-form__label">
          Password
          <input
            className="popup-with-form__input"
            type="password"
            placeholder="Enter password"
            required
            name="password"
            onChange={handleChange}
          />
        </label>
        <label className="popup-with-form__label">
          Username
          <input
            className="popup-with-form__input"
            type="text"
            placeholder="Enter username"
            required
            name="name"
            onChange={handleChange}
          />
        </label>
        {emailIsTakenMessage && (
          <p className="popup-with-form__email-taken-message">
            This email is not available
          </p>
        )}
      </PopupWithForm>
    </div>
  );
}

export default SignUpPopup;
