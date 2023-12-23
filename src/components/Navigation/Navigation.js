// import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/logo.svg";
import signOutIcon from "../../images/sign-out-icon.svg";

function Navigation({ openPopup, isLoggedIn }) {
  return (
    <div className="navigation">
      <div className="navigation__left">
        {/* <Link to="/"> */}
        <img className="navigation__logo" src={logo} alt="News Explorer logo" />
        {/* </Link> */}
      </div>
      {isLoggedIn ? (
        <div className="navigation__right">
          {/* <Link to="/"> */}
          <div className="navigation__home-link">Home</div>
          {/* </Link> */}
          <div className="navigation__profile-link">Saved Articles</div>
          <button className="navigation__sign-out-button">
            <p>Elise</p>
            <img src={signOutIcon} alt="Sign out" />
          </button>
        </div>
      ) : (
        <div className="navigation__right">
          {/* <Link to="/"> */}
          <div className="navigation__home-link">Home</div>
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
