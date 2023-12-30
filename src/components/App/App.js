import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import { useState } from "react";
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

    return searchKeyword(keyword).then((res) => {
      console.log(res);
      const results = res.articles;

      if (results.length > 0) {
        setSearchResults(results);
        setNoResultsFound(false);
        setSearchIsLoading(false);
      } else {
        setNoResultsFound(true);
        setSearchIsLoading(false);
      }
    });

    // if (results.length > 0) {
    //   setSearchResults(results);
    // } else {
    //   setSearchIsLoading(false);
    //   setNoResultsFound(true);
    // }
  };

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
              />
            }
          />
          <Route path="/saved-news" element={<SavedNews isLoggedIn={true} />} />
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
