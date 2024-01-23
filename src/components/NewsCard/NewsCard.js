import "./NewsCard.css";
import deleteIconBlack from "../../images/delete-icon-black.svg";
import deleteIconGray from "../../images/delete-icon-gray.svg";
import saveIconGray from "../../images/save-icon-gray.svg";
import saveIconBlack from "../../images/save-icon-black.svg";
import saveIconFill from "../../images/save-icon-fill.svg";
import { useState, useEffect } from "react";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";
import { saveArticle, unsaveArticle } from "../../utils/MainApi";

function NewsCard({
  currentPage,
  isLoggedIn,
  cardInfo,
  latestKeyword,
  openPopup,
}) {
  const [deleteHoverActive, setDeleteHoverActive] = useState(false);
  const [saveHoverActive, setSaveHoverActive] = useState(false);
  const [articleId, setArticleId] = useState("");
  const { savedArticles, addArticle, removeArticle } = useSavedArticles();

  useEffect(() => {
    if (
      savedArticles.some((article) => {
        return (
          article.date === cardInfo.publishedAt ||
          article.date === cardInfo.date
        );
      })
    ) {
      savedArticles.forEach((savedArticle) => {
        if (
          savedArticle.date === cardInfo.publishedAt ||
          savedArticle.date === cardInfo.date
        ) {
          const tempId = savedArticle._id;
          setArticleId(tempId);
        }
      });
    } else {
      setArticleId("");
    }
  }, [savedArticles, cardInfo.date, cardInfo.publishedAt]);

  const openSignUpPopup = () => {
    openPopup("sign-up");
  };

  const handleClickSave = () => {
    // if no user is logged in, open sign up popup
    if (!isLoggedIn) {
      openPopup("sign-up");
      return;
    }

    // if article is already saved, remove it from saved articles context and delete from database
    if (
      savedArticles.some((article) => article.date === cardInfo.publishedAt)
    ) {
      return handleClickDelete();

      // if card has not already been saved, add it to saved cards context and save to database
    } else {
      const card = {
        keyword: latestKeyword,
        date: cardInfo.publishedAt,
        image: cardInfo.urlToImage,
        title: cardInfo.title,
        text: cardInfo.content,
        source: cardInfo.source,
        link: cardInfo.url,
      };

      return saveArticle(card, localStorage.getItem("jwt"))
        .then((res) => {
          addArticle(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClickDelete = () => {
    return unsaveArticle(articleId, localStorage.getItem("jwt"))
      .then(() => {
        removeArticle(cardInfo);
      })
      .catch((error) => {
        console.log(error);
      });
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
          onClick={openSignUpPopup}
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
              articleId
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
          src={cardInfo.urlToImage || cardInfo.image}
          alt="News graphic"
        />
      </div>
      <div className="news-card__info">
        <p className="news-card__date">
          {formatDate(cardInfo.publishedAt || cardInfo.date)}
        </p>
        <h3 className="news-card__title">{cardInfo.title}</h3>
        <p className="news-card__article">
          {cardInfo.content || cardInfo.text}
        </p>
        <p className="news-card__source">{cardInfo.source.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default NewsCard;
