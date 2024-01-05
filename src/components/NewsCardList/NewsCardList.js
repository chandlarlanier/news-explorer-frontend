import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({currentPage, isLoggedIn, content, latestKeyword}) {

  return (
    <div className='news-card-list'>
      <div className='news-card-list__cards'>

        {currentPage==='saved-news' && (
          content.map((card) => {
            return <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn} key={content.indexOf(card)} cardInfo={card}/>
          })
        )}
        

        {currentPage === 'main' && (
          content.map((card) => {
            return <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn} key={content.indexOf(card)} cardInfo={card} latestKeyword={latestKeyword}/>
          })
        )}
      </div>
    </div>
  );
}

export default NewsCardList;
