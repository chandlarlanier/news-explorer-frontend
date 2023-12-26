import "./NoSearchResultsMessage.css";
import noSearchResultsIcon from "../../images/search-not-found-icon.svg";

function NoSearchResultsMessage() {
  return (
    <div className="no-search-results-message">
      <img
        className="no-search-results-message__image"
        src={noSearchResultsIcon}
        alt="No search results found"
      />
      <div className="no-search-results-message__text">
        <h3 className="no-search-results-message__title">Nothing found</h3>
        <p className="no-search-results-message__description">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
}

export default NoSearchResultsMessage;
