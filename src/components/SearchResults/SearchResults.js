import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useState, useEffect } from "react";

function SearchResults({isLoggedIn, searchResults}) {
 const [numberOfCardsShown, setNumberOfCardsShown] = useState(3);
 const [limitedSearchResults, setLimitedSearchResults] = useState(searchResults.slice(0, numberOfCardsShown));

 useEffect(() => {setLimitedSearchResults(searchResults.slice(0, numberOfCardsShown))}, [numberOfCardsShown]);

 const handleShowMore = () => {
  setNumberOfCardsShown(numberOfCardsShown + 3);
 }

  return (
    <div className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search results</h2>
        <NewsCardList currentPage="main" isLoggedIn={isLoggedIn} content={limitedSearchResults}/>
        <button className="search-results__show-more-button" onClick={handleShowMore}>Show more</button>
      </div>
    </div>
  );
}

export default SearchResults;
