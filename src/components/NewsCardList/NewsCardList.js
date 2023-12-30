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


        

        {currentPage === 'main' && (
          content.map((card) => {
            return <NewsCard currentPage={currentPage} isLoggedIn={isLoggedIn} key={content.indexOf(card)} cardInfo={card}/>
          })
        )}
      </div>
    </div>
  );
}

export default NewsCardList;
