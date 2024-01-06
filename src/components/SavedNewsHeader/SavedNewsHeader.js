import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function SavedNewsHeader({ isLoggedIn, openPopup, handleLogout }) {
  const { currentUser } = useCurrentUser();

  const { savedArticles } = useSavedArticles();
  const keywords = savedArticles.map((article) => article.keyword);
  const uniqueKeywords = [...new Set(keywords)].map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  const keywordText = (keywords) => {
    if (keywords.length <= 1) {
      return keywords;
    }
    if (keywords.length == 2) {
      return `${keywords[0]} and ${keywords[1]}`;
    }
    return `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} other`;
  };

  return (
    <header className="saved-news-header">
      <Navigation
        currentPage="saved-news"
        isLoggedIn={isLoggedIn}
        openPopup={openPopup}
        handleLogout={handleLogout}
      />
      <div className="saved-news-header__info">
        <p className="saved-news-header__text">Saved articles</p>
        <h2 className="saved-news-header__title">
          {currentUser.username}, you have {savedArticles.length} saved{" "}
          {savedArticles.length == 1 ? "article" : "articles"}
        </h2>
        <p className="saved-news-header__keywords">
          By {uniqueKeywords.length == 1 ? "keyword" : "keywords"}:{" "}
          <span className="saved-news-header__keywords-span">
            {keywordText(uniqueKeywords)}
          </span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
