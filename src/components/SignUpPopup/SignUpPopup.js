import './SignUpPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpPopup({closePopup, openPopup}) {
    const openSignInPopup = () => {
        openPopup('sign-in');
    }
    
    return (
      <div className="sign-in-popup">
        <PopupWithForm name="Sign up" handleOrButton={openSignInPopup} closePopup={closePopup} submitButtonText='Sign up' orButtonText='Sign in'>
          <label className="popup-with-form__label">
            Email
            <input className='popup-with-form__input' type="email" placeholder="Enter email" required name='email' />
          </label>
          <label className="popup-with-form__label">
            Password
            <input className='popup-with-form__input' type="password" placeholder="Enter password" required name='password' />
          </label>
          <label className="popup-with-form__label">
            Username
            <input className='popup-with-form__input' type="text" placeholder="Enter username" required name='username' />
          </label>
        </PopupWithForm>
      </div>
    );
  }

  export default SignUpPopup;
