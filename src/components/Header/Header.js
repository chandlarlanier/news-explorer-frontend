import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({openPopup}) {
  return (
    <div className="header">
      <Navigation openPopup={openPopup} isLoggedIn={true}/>
      <div className="header__text">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm />
    </div>
  );
}

export default Header;
