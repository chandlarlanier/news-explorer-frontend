import { createContext, useContext, useState } from "react";

export const SavedArticlesContext = createContext();

export const useSavedArticles = () => {
  return useContext(SavedArticlesContext);
};

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  const saveArticle = (article) => {
    setSavedArticles([...savedArticles, article]);
  };

  const removeArticle = (cardInfo) => {
    const updatedArticles = savedArticles.filter(
      (article) => article.publishedAt !== cardInfo.publishedAt
    );
    setSavedArticles(updatedArticles);
  };

  return (
    <SavedArticlesContext.Provider
      value={{ savedArticles, saveArticle, removeArticle }}
    >
      {children}
    </SavedArticlesContext.Provider>
  );
};
