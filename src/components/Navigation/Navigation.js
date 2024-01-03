import { Link } from "react-router-dom";
import "./Navigation.css";
import signOutIconWhite from "../../images/sign-out-icon_white.svg";
import signOutIconBlack from "../../images/sign-out-icon_black.svg";

function Navigation({ openPopup, isLoggedIn, currentPage }) {
  return (
    <div className="navigation">
      <div className="navigation__left">
        <Link
          to="/"
          className={`navigation__logo ${
            currentPage === "home"
              ? "navigation__logo_home"
              : "navigation__logo_saved-news"
          }`}
        >
          NewsExplorer
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="navigation__right">
          <Link
            to="/"
            className={`navigation__home-link ${
              currentPage === "home"
                ? "navigation__home-link_home"
                : "navigation__home-link_saved-news"
            }`}
          >
            Home
          </Link>
          <Link
            to="/saved-news"
            className={`navigation__profile-link ${
              currentPage === "home"
                ? "navigation__profile-link_home"
                : "navigation__profile-link_saved-news"
            }`}
          >
            Saved Articles
          </Link>
          <button
            className={`navigation__sign-out-button ${
              currentPage === "home"
                ? "navigation__sign-out-button_home"
                : "navigation__sign-out-button_saved-news"
            }`}
          >
            <p>Elise</p>
            <img
              src={currentPage === "home" ? signOutIconWhite : signOutIconBlack}
              alt="Sign out"
            />
          </button>
        </div>
      ) : (
        <div className="navigation__right">
          {/* <Link to="/"> */}
          <div
            className={`navigation__home-link ${
              currentPage === "home"
                ? "navigation__home-link_home"
                : "navigation__home-link_saved-news"
            }`}
          >
            Home
          </div>
          {/* </Link> */}
          <button
            className="navigation__sign-in-button"
            onClick={() => openPopup("sign-in")}
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
