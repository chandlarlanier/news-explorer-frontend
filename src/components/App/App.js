import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import searchKeyword from "../../utils/NewsApi";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleSearchFormSubmit = (keyword) => {
    setNoResultsFound(false);
    setSearchIsLoading(true);
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

  const handleSaveArticle = (article) => {
    setSavedArticles([...savedArticles, article]);
  }

  const closePopup = () => {
    setActivePopup("");
  };

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  };

  return (
    <Router>
      <div className="app">
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
                handleSaveArticle={handleSaveArticle}
              />
            }
          />
          <Route path="/saved-news" element={<SavedNews isLoggedIn={true} savedArticles={savedArticles}/>} />
        </Routes>
        {activePopup === "sign-in" && (
          <SignInPopup closePopup={closePopup} openPopup={openPopup} />
        )}
        {activePopup === "sign-up" && (
          <SignUpPopup closePopup={closePopup} openPopup={openPopup} />
        )}
      </div>
    </Router>
  );
}

export default App;
