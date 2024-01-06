import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import MenuPopup from "../MenuPopup/MenuPopup";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import searchKeyword from "../../utils/NewsApi";
import { SavedArticlesProvider } from "../../contexts/SavedArticlesContext";
import { CurrentUserProvider, useCurrentUser } from "../../contexts/CurrentUserContext";
import ConfirmRegisterPopup from "../ConfirmRegisterPopup/ConfirmRegisterPopup";

function App() {
  const [activePopup, setActivePopup] = useState("registered");
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [latestKeyword, setLatestKeyword] = useState("");

  const handleSearchFormSubmit = (keyword) => {
    setNoResultsFound(false);
    setSearchIsLoading(true);
    setLatestKeyword(keyword);
    setSearchResults([]);

    return searchKeyword(keyword).then((res) => {
      const results = res.articles;
      setSearchResults(results);

      if (results.length > 0) {
        setNoResultsFound(false);
        setSearchIsLoading(false);
      } else {
        setNoResultsFound(true);
        setSearchIsLoading(false);
      }
    });
  };

  const handleLogin = (userInfo) => {
    setIsLoggedIn(true);
    // addCurrentUser(userInfo);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    // removeCurrentUser();
  }

  const closePopup = () => {
    setActivePopup("");
  };

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  };

  const handleRegisterUser = (userInfo) => {
    // addCurrentUser(userInfo);
    setActivePopup('registered');
  }

  return (
    <div className="app">
      <CurrentUserProvider>
        <SavedArticlesProvider>
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Main
                    openPopup={openPopup}
                    isLoggedIn={isLoggedIn}
                    searchIsLoading={searchIsLoading}
                    searchResults={searchResults}
                    noResultsFound={noResultsFound}
                    handleSearchFormSubmit={handleSearchFormSubmit}
                    latestKeyword={latestKeyword}
                  />
                }
              />
              <Route
                path="/saved-news"
                element={<SavedNews isLoggedIn={true} openPopup={openPopup} />}
              />
            </Routes>
            {activePopup === "sign-in" && (
              <SignInPopup closePopup={closePopup} openPopup={openPopup} handleLogin={handleLogin}/>
            )}
            {activePopup === "sign-up" && (
              <SignUpPopup closePopup={closePopup} openPopup={openPopup} />
            )}
            {activePopup === "menu" && (
              <MenuPopup
                closePopup={closePopup}
                openPopup={openPopup}
                isLoggedIn={isLoggedIn}
                activePopup={activePopup}
              />
            )}
            {activePopup === 'registered' && (
              <ConfirmRegisterPopup openPopup={openPopup} closePopup={closePopup} />
            )}
          </Router>
        </SavedArticlesProvider>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
