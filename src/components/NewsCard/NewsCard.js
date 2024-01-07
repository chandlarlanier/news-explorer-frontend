import "./NewsCard.css";
import deleteIconBlack from "../../images/delete-icon-black.svg";
import deleteIconGray from "../../images/delete-icon-gray.svg";
import saveIconGray from "../../images/save-icon-gray.svg";
import saveIconBlack from "../../images/save-icon-black.svg";
import saveIconFill from "../../images/save-icon-fill.svg";
import { useState } from "react";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";

function NewsCard({ currentPage, isLoggedIn, cardInfo, latestKeyword }) {
  const [deleteHoverActive, setDeleteHoverActive] = useState(false);
  const [saveHoverActive, setSaveHoverActive] = useState(false);
  const { savedArticles, saveArticle, removeArticle } = useSavedArticles();

  const handleClickSave = () => {
    if (
      savedArticles.some(
        (article) => article.publishedAt === cardInfo.publishedAt
      )
    ) {
      removeArticle(cardInfo);
    } else {
      const card = {
        keyword: latestKeyword,
        publishedAt: cardInfo.publishedAt,
        urlToImage: cardInfo.urlToImage,
        title: cardInfo.title,
        content: cardInfo.content,
        source: {
          name: cardInfo.source.name,
        },
      };
      saveArticle(card);
    }
  };

  const handleClickDelete = () => {
    removeArticle(cardInfo);
  };

  const formatDate = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const newDate = new Date(date);
    const monthIndex = newDate.getUTCMonth();
    const day = newDate.getUTCDate();
    const year = newDate.getUTCFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
  };

  return (
    <div className="news-card">
      {/* Displays when user is logged in and on saved news page */}
      {currentPage === "saved-news" && (
        <div className="news-card__keyword-container">
          <p className="news-card__keyword">
            {cardInfo.keyword.charAt(0).toUpperCase() +
              cardInfo.keyword.slice(1).toLowerCase()}
          </p>
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
          onClick={handleClickDelete}
        >
          {" "}
          <img
            src={deleteHoverActive ? deleteIconBlack : deleteIconGray}
            alt="Delete"
          />
        </button>
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
              savedArticles.some(
                (article) => article.publishedAt === cardInfo.publishedAt
              )
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
        <p className="news-card__date">{formatDate(cardInfo.publishedAt)}</p>
        <h3 className="news-card__title">{cardInfo.title}</h3>
        <p className="news-card__article">{cardInfo.content}</p>
        <p className="news-card__source">
          {cardInfo.source.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
