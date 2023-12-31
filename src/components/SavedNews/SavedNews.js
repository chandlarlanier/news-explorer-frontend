import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function SavedNews({isLoggedIn, savedArticles}) {
  return (
    <div className="saved-news">
      <SavedNewsHeader isLoggedIn={isLoggedIn}/>
      <NewsCardList currentPage='saved-news' content={savedArticles}/>
      <Footer />
    </div>
  );
}

export default SavedNews;
