import "./ConfirmRegisterPopup.css";
import closeIcon from "../../images/close-icon.svg";

function ConfirmRegisterPopup({ openPopup, closePopup }) {
  return (
    <div className="confirm-register-popup">
      <div className="confirm-register-popup__content">
        <button
          onClick={closePopup}
          className="confirm-register-popup__close-button"
        >
          <img
            className="confirm-register-popup__close-icon"
            src={closeIcon}
            alt="Close"
          />
        </button>
        <h2 className="confirm-register-popup__title">
          Registration successfully completed!
        </h2>
        <button
          className="confirm-register-popup__sign-in-button"
          onClick={() => openPopup("sign-in")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default ConfirmRegisterPopup;
