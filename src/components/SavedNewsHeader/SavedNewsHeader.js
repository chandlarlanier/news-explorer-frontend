import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";

function SavedNewsHeader() {
  return <div className="saved-news-header">
    <Navigation currentPage='saved-news' isLoggedIn={true}/>
  </div>;
}

export default SavedNewsHeader;
