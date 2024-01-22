import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import MenuPopup from "../MenuPopup/MenuPopup";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import searchKeyword from "../../utils/NewsApi";
// import { SavedArticlesProvider } from "../../contexts/SavedArticlesContext";
// import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import ConfirmRegisterPopup from "../ConfirmRegisterPopup/ConfirmRegisterPopup";
import { checkToken, getSavedArticles } from "../../utils/MainApi";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";

function App() {
  const { addCurrentUser } = useCurrentUser();
  const { addArticle } = useSavedArticles();

  const [activePopup, setActivePopup] = useState("");
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

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  };

  const closePopup = () => {
    setActivePopup("");
  };

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  };

  const handleRegisterUser = () => {
    setActivePopup("registered");
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      checkToken(localStorage.getItem("jwt"))
        .then((res) => {
          console.log(res);
          addCurrentUser(res);
          setIsLoggedIn(true);
        })
        .then(() => {
          getSavedArticles(localStorage.getItem("jwt")).then((res) => {
            console.log(res);
            res.forEach((article) => {
              addArticle(article);
            })
          });
        })
        .catch(console.error);
    }
  }, [localStorage.getItem("jwt")]);

  return (
    <div className="app">
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
                handleLogout={handleLogout}
              />
            }
          />
          <Route
            path="/saved-news"
            isLoggedIn={isLoggedIn}
            element={
              isLoggedIn ? (
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  openPopup={openPopup}
                  handleLogout={handleLogout}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
        {activePopup === "sign-in" && (
          <SignInPopup
            closePopup={closePopup}
            openPopup={openPopup}
            handleLogin={handleLogin}
          />
        )}
        {activePopup === "sign-up" && (
          <SignUpPopup
            closePopup={closePopup}
            openPopup={openPopup}
            handleRegisterUser={handleRegisterUser}
          />
        )}
        {activePopup === "menu" && (
          <MenuPopup
            closePopup={closePopup}
            openPopup={openPopup}
            isLoggedIn={isLoggedIn}
            activePopup={activePopup}
            handleLogout={handleLogout}
          />
        )}
        {activePopup === "registered" && (
          <ConfirmRegisterPopup openPopup={openPopup} closePopup={closePopup} />
        )}
      </Router>
    </div>
  );
}

export default App;
