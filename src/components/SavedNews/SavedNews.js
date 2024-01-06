import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import { useSavedArticles } from "../../contexts/SavedArticlesContext";

function SavedNews({ isLoggedIn, openPopup, handleLogout }) {
  const { savedArticles } = useSavedArticles();

  const reverseArray = (array) => {
    return [...array].reverse();
  };

  return (
    <section className="saved-news">
      <SavedNewsHeader
        isLoggedIn={isLoggedIn}
        openPopup={openPopup}
        handleLogout={handleLogout}
      />
      {savedArticles.length > 0 && (
        <NewsCardList
          currentPage="saved-news"
          content={reverseArray(savedArticles)}
        />
      )}
      <Footer />
    </section>
  );
}

export default SavedNews;
