import "./MenuPopup.css";
import closeIcon from "../../images/close-icon.svg";
import { Link } from "react-router-dom";
import SignOutIconWhite from "../../images/sign-out-icon_white.svg";

function MenuPopup({ closePopup, openPopup, isLoggedIn }) {
  return (
    <div className="menu-popup">
      <div className="menu-popup__content">
        <div className="menu-popup__header">
          <h2 className="menu-popup__logo">NewsExplorer</h2>
          <button className="menu-popup__close-button" onClick={closePopup}>
            <img
              className="menu-popup__close-icon"
              src={closeIcon}
              alt="Close"
            />
          </button>
        </div>

        {isLoggedIn ? (
          <div className="menu-popup__links">
            <Link to="/" className="menu-popup__home-link">
              Home
            </Link>
            <Link to="/saved-news" className="menu-popup__saved-news-link">
              Saved Articles
            </Link>
            <button className="menu-popup__sign-out-button">
              Sign out
              <img src={SignOutIconWhite} />
            </button>
          </div>
        ) : (
          <div className="menu-popup__links">
            <Link to="/" className="menu-popup__home-link">
              Home
            </Link>
            <button className='menu-popup__sign-in-button' onClick={() => openPopup('sign-in')}>Sign In</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuPopup;
