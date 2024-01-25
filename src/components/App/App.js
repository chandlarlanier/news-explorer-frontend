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
import ConfirmRegisterPopup from "../ConfirmRegisterPopup/ConfirmRegisterPopup";
import { checkToken, getSavedArticles } from "../../utils/MainApi";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";

function App() {
  const { addCurrentUser } = useCurrentUser();
  const { setSavedArticles } = useSavedArticles();
  const [activePopup, setActivePopup] = useState("");
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [latestKeyword, setLatestKeyword] = useState("");
  const [token, setToken] = useState("");

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
    setToken("");
    setSavedArticles([]);
  };

  const closePopup = () => {
    setActivePopup("");
  };

  useEffect(() => {
    if (!activePopup) return;

    const handleClickOutsidePopup = (e) => {
      if (
        (e.target.classList.contains("popup-with-form")) ||
        (e.target.classList.contains("news-article-popup"))
      ) {
        closePopup();
      }
    };

    const handleEscapePopup = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("click", handleClickOutsidePopup);
    document.addEventListener("keydown", handleEscapePopup);

    return () => {
      document.removeEventListener("click", handleClickOutsidePopup);
      document.removeEventListener("keydown", handleEscapePopup);
    };
  }, [activePopup]);

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
          addCurrentUser(res);
          setIsLoggedIn(true);
        })
        .then(() => {
          getSavedArticles(localStorage.getItem("jwt")).then((res) => {
            setSavedArticles(res);
          });
        })
        .catch(console.error);
    }
  }, [token]);

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
            setToken={setToken}
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
