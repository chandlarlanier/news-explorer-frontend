import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";
// import SavedArticlesContext from "../../contexts/SavedArticlesContext";

function SavedNews({ isLoggedIn }) {
  const { savedArticles } = useSavedArticles();

  return (
    <div className="saved-news">
      <SavedNewsHeader isLoggedIn={isLoggedIn} />
      <NewsCardList currentPage="saved-news" content={savedArticles} />
      <Footer />
    </div>
  );
}

export default SavedNews;
