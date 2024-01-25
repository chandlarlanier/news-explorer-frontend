import { createContext, useContext, useState } from "react";

export const SavedArticlesContext = createContext();

export const useSavedArticles = () => {
  return useContext(SavedArticlesContext);
};

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  const addArticle = (article) => {
    setSavedArticles([...savedArticles, article]);
  };

  const removeArticle = (cardInfo) => {
    const date = cardInfo.publishedAt || cardInfo.date;

    const updatedArticles = savedArticles.filter(
      (article) => article.date !== date
    );
    setSavedArticles(updatedArticles);
  };

  return (
    <SavedArticlesContext.Provider
      value={{ savedArticles, addArticle, removeArticle, setSavedArticles }}
    >
      {children}
    </SavedArticlesContext.Provider>
  );
};
