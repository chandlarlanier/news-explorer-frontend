import "./PopupWithForm.css";
import closeIcon from "../../images/close-icon.svg";

function PopupWithForm({ name, closePopup, handleOrButton, children, submitButtonText, orButtonText }) {
  return (
    <div className="popup-with-form">
      <div className="popup-with-form__content">
        <button className="popup-with-form__close-button" onClick={closePopup}>
            <img src={closeIcon} alt="Close"/>
        </button>
        <h3 className="popup-with-form__title">{name}</h3>
        <form className='popup-with-form__formfield'>
          {children}
          <button className='popup-with-form__submit-button' type="submit">{submitButtonText}</button>
          {orButtonText && (
            <div className="popup-with-form__or-button-container">
              <span className='popup-with-form__or-button-span'>or</span>
              <button className='popup-with-form__or-button' onClick={handleOrButton}>{orButtonText}</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;