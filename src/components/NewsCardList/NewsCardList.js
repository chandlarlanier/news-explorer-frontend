import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({currentPage, isLoggedIn, content, handleSaveArticle, handleUnsaveArticle, savedArticles}) {

  return (
    <div className="news-card-list">
      <div className="news-card-list__cards">

        {currentPage==='saved-news' && (
          content.map((card) => {
            return <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn} key={content.indexOf(card)} cardInfo={card} handleUnsaveArticle={handleUnsaveArticle} savedArticles={savedArticles}/>
          })
        )}
        

        {currentPage === 'main' && (
          content.map((card) => {
            return <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn} key={content.indexOf(card)} cardInfo={card} handleSaveArticle={handleSaveArticle} handleUnsaveArticle={handleUnsaveArticle} savedArticles={savedArticles}/>
          })
        )}
      </div>
    </div>
  );
}

export default NewsCardList;
