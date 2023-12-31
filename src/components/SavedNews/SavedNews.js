import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function SavedNews({isLoggedIn, savedArticles, handleUnsaveArticle}) {
  return (
    <div className="saved-news">
      <SavedNewsHeader isLoggedIn={isLoggedIn}/>
      <NewsCardList currentPage='saved-news' content={savedArticles} savedArticles={savedArticles} handleUnsaveArticle={handleUnsaveArticle}/>
      <Footer />
    </div>
  );
}

export default SavedNews;
