import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import searchKeyword from "../../utils/NewsApi";
// import SavedArticlesContext from "../../contexts/SavedArticlesContext";
import { SavedArticlesProvider } from "../../contexts/SavedArticlesContext";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [savedArticles, setSavedArticles] = useState([]);

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

  // const handleSaveArticle = (article) => {
  //   setSavedArticles([...savedArticles, article]);
  // };

  // const handleUnsaveArticle = (article) => {
  //   const newSavedArticles = savedArticles;
  //   const indexOfArticle = newSavedArticles.indexOf(article);
  //   newSavedArticles.splice(indexOfArticle, 1);
  //   setSavedArticles(newSavedArticles);
  //   console.log(savedArticles.length);
  // };

  const closePopup = () => {
    setActivePopup("");
  };

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  };

  return (
    <div className="app">
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
                  // handleSaveArticle={handleSaveArticle}
                  // handleUnsaveArticle={handleUnsaveArticle}
                  // savedArticles={savedArticles}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  isLoggedIn={true}
                  // savedArticles={savedArticles}
                  // handleUnsaveArticle={handleUnsaveArticle}
                />
              }
            />
          </Routes>
          {activePopup === "sign-in" && (
            <SignInPopup closePopup={closePopup} openPopup={openPopup} />
          )}
          {activePopup === "sign-up" && (
            <SignUpPopup closePopup={closePopup} openPopup={openPopup} />
          )}
        </Router>
      </SavedArticlesProvider>
    </div>
  );
}

export default App;
