import { Link } from "react-router-dom";
import "./Navigation.css";
import signOutIconWhite from "../../images/sign-out-icon_theme_white.svg";
import signOutIconBlack from "../../images/sign-out-icon_theme_black.svg";
import menuIconWhite from "../../images/menu-icon_theme_white.svg";
import menuIconBlack from "../../images/menu-icon_theme_black.svg";
import closeIcon from "../../images/close-icon.svg";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function Navigation({
  openPopup,
  isLoggedIn,
  currentPage,
  activePopup,
  closePopup,
  handleLogout,
}) {
  const { currentUser } = useCurrentUser();

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__left">
          <Link
            to="/"
            onClick={closePopup}
            className={`navigation__logo ${
              currentPage === "home" || activePopup === "menu"
                ? "navigation__logo_theme_white"
                : "navigation__logo_theme_black"
            }`}
          >
            NewsExplorer
          </Link>
        </div>
        <button className="navigation__menu-button">
          {activePopup === "menu" ? (
            <img
              className="navigation__menu-icon"
              src={closeIcon}
              alt="Close"
              onClick={closePopup}
            />
          ) : (
            <img
              onClick={() => openPopup("menu")}
              src={currentPage === "home" ? menuIconWhite : menuIconBlack}
              alt="Menu"
            />
          )}
        </button>
        {isLoggedIn ? (
          <div className="navigation__links">
            <Link
              to="/"
              className={`navigation__home-link ${
                currentPage === "home"
                  ? "navigation__home-link_theme_white"
                  : "navigation__home-link_theme_black"
              }`}
            >
              Home
            </Link>
            <Link
              to="/saved-news"
              className={`navigation__profile-link ${
                currentPage === "home"
                  ? "navigation__profile-link_theme_white"
                  : "navigation__profile-link_theme_black"
              }`}
            >
              Saved Articles
            </Link>
            <button
              onClick={handleLogout}
              className={`navigation__sign-out-button ${
                currentPage === "home"
                  ? "navigation__sign-out-button_theme_white"
                  : "navigation__sign-out-button_theme_black"
              }`}
            >
              <p className="navigation__username">{currentUser.username}</p>
              <img
                src={
                  currentPage === "home" ? signOutIconWhite : signOutIconBlack
                }
                alt="Sign out"
              />
            </button>
          </div>
        ) : (
          <div className="navigation__links">
            <Link
              to="/"
              className={`navigation__home-link ${
                currentPage === "home"
                  ? "navigation__home-link_theme_white"
                  : "navigation__home-link_theme_black"
              }`}
            >
              Home
            </Link>
            <button
              className="navigation__sign-in-button"
              onClick={() => openPopup("sign-in")}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
