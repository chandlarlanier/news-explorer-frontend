import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({currentPage, isLoggedIn, content}) {
  return (
    <div className="news-card-list">
      <div className="news-card-list__cards">
        
        {/* <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn} isSaved={true}/>
        <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn} isSaved={false}/>
        <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn}/>
        <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn}/>
        <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn}/> */}
      </div>
    </div>
  );
}

export default NewsCardList;
