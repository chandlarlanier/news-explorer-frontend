import "./NewsCard.css";
import deleteIconBlack from "../../images/delete-icon-black.svg";
import deleteIconGray from "../../images/delete-icon-gray.svg";
import saveIconGray from "../../images/save-icon-gray.svg";
import saveIconBlack from "../../images/save-icon-black.svg";
import saveIconFill from "../../images/save-icon-fill.svg";
import { useState } from "react";

function NewsCard({ currentPage, isLoggedIn, isSaved, cardInfo, handleSaveArticle }) {
  const [deleteHoverActive, setDeleteHoverActive] = useState(false);
  const [saveHoverActive, setSaveHoverActive] = useState(false);
  const [articleIsSaved, setArticleIsSaved] = useState(false);

  const handleClickSave = () => {
    handleSaveArticle(cardInfo);
    setArticleIsSaved(true);
  }


  // Put save/unsave functionality into same function ?
  const handleClickUnsave = () => {
    
  }

  return (
    <div className="news-card">
      {/* Displays when user is logged in and on saved news page */}
      {currentPage === "saved-news" && (
        <div className="news-card__keyword-container">
          <p>Parks</p>
        </div>
      )}
      {currentPage === "saved-news" && deleteHoverActive && (
        <div className="news-card__delete-message">
          <p>Remove from saved</p>
        </div>
      )}
      {currentPage === "saved-news" && (
        <button
          className={`news-card__delete-button ${
            deleteHoverActive ? "news-card__delete-button_hover" : ""
          }`}
          onMouseEnter={() => setDeleteHoverActive(true)}
          onMouseLeave={() => setDeleteHoverActive(false)}
        ></button>
      )}

      {/* Displays when user is on main page and not logged in */}
      {currentPage === "main" && !isLoggedIn && saveHoverActive && (
        <div className="news-card__sign-in-message">
          <p>Sign in to save articles</p>
        </div>
      )}

      {currentPage === "main" && !isLoggedIn && (
        <button
          className="news-card__save-button"
          onMouseEnter={() => setSaveHoverActive(true)}
          onMouseLeave={() => setSaveHoverActive(false)}
        >
          <img
            src={saveHoverActive ? saveIconBlack : saveIconGray}
            alt="Save"
          />
        </button>
      )}

      {/* Displays when user is logged in and on main page */}
      {currentPage === "main" && isLoggedIn && (
        <button
          className="news-card__save-button"
          onMouseEnter={() => setSaveHoverActive(true)}
          onMouseLeave={() => setSaveHoverActive(false)}
          onClick={handleClickSave}
        >
          <img
            src={
              articleIsSaved
                ? saveIconFill
                : saveHoverActive
                ? saveIconBlack
                : saveIconGray
            }
            alt="Save"
          />
        </button>
      )}

      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={cardInfo.urlToImage}
          alt="News graphic"
        />
      </div>
      <div className="news-card__info">
        <p className="news-card__date">{cardInfo.publishedAt}</p>
        <h3 className="news-card__title">
          {cardInfo.title}
        </h3>
        <p className="news-card__article">
          {cardInfo.content}
        </p>
        <p className="news-card__source">{cardInfo.source.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
