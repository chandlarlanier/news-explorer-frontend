import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews({isLoggedIn}) {
  return (
    <div className="saved-news">
      <SavedNewsHeader isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default SavedNews;
