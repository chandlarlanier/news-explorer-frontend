import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults({isLoggedIn, searchResults}) {
  return (
    <div className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search results</h2>
        <NewsCardList currentPage="main" isLoggedIn={isLoggedIn} content={searchResults}/>
        <button className="search-results__show-more-button">Show more</button>
      </div>
    </div>
  );
}

export default SearchResults;
