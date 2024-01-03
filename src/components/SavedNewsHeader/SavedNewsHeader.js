import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";
import { useState, useEffect, useContext } from "react";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";
// import SavedArticlesContext from "../../contexts/SavedArticlesContext";

function SavedNewsHeader({ isLoggedIn }) {
  const { savedArticles } = useSavedArticles();

  return (
    <div className="saved-news-header">
      <Navigation currentPage="saved-news" isLoggedIn={isLoggedIn} />
      <div className="saved-news-header__info">
        <p className="saved-news-header__text">Saved articles</p>
        <h2 className="saved-news-header__title">
          Elise, you have {savedArticles.length} saved{" "}
          {savedArticles.length == 1 ? "article" : "articles"}
        </h2>
        <p className="saved-news-header__keywords">
          By keywords:{" "}
          <span className="saved-news-header__keywords-span">
            Nature, Yellowstone, and 2 others
          </span>
        </p>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
