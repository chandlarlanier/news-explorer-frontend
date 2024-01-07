import "./MenuPopup.css";
import { Link } from "react-router-dom";
import signOutIconWhite from "../../images/sign-out-icon_theme_white.svg";
import Navigation from "../Navigation/Navigation";

function MenuPopup({ closePopup, openPopup, isLoggedIn, activePopup }) {
  return (
    <div className="menu-popup">
      <div className="menu-popup__content">
        <Navigation
          activePopup={activePopup}
          closePopup={closePopup}
          openPopup={openPopup}
          isLoggedIn={isLoggedIn}
        />

        {isLoggedIn ? (
          <div className="menu-popup__links">
            <Link to="/" className="menu-popup__home-link" onClick={closePopup}>
              Home
            </Link>
            <Link
              onClick={closePopup}
              to="/saved-news"
              className="menu-popup__saved-news-link"
            >
              Saved Articles
            </Link>
            <button
              onClick={closePopup}
              className="menu-popup__sign-out-button"
            >
              Sign out
              <img src={signOutIconWhite} alt="Sign out"/>
            </button>
          </div>
        ) : (
          <div className="menu-popup__links">
            <Link to="/" className="menu-popup__home-link" onClick={closePopup}>
              Home
            </Link>
            <button
              className="menu-popup__sign-in-button"
              onClick={() => openPopup("sign-in")}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuPopup;
