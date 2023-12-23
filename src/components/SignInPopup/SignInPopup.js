import "./SignInPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignInPopup({closePopup, openPopup}) {
const openSignUpPopup = () => {
    openPopup('sign-up')
}

  return (
    <div className="sign-in-popup">
      <PopupWithForm name="Sign in" closePopup={closePopup} handleOrButton={openSignUpPopup} submitButtonText='Sign in' orButtonText='Sign up'>
        <label className="popup-with-form__label">
          Email
          <input className='popup-with-form__input' type="email" placeholder="Enter email" required name='email' />
        </label>
        <label className="popup-with-form__label">
          Password
          <input className='popup-with-form__input' type="password" placeholder="Enter password" required name='password' />
        </label>
      </PopupWithForm>
    </div>
  );
}

export default SignInPopup;
