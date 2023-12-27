import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function SavedNews({isLoggedIn}) {
  return (
    <div className="saved-news">
      <SavedNewsHeader isLoggedIn={isLoggedIn}/>
      <NewsCardList currentPage='saved-news'/>
      <Footer />
    </div>
  );
}

export default SavedNews;
