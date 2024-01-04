import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";

function SavedNews({ isLoggedIn, openPopup }) {
  const { savedArticles } = useSavedArticles();

  return (
    <div className="saved-news">
      <SavedNewsHeader isLoggedIn={isLoggedIn} openPopup={openPopup} />
      <NewsCardList currentPage="saved-news" content={savedArticles} />
      <Footer />
    </div>
  );
}

export default SavedNews;
