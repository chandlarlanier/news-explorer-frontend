import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ currentPage, isLoggedIn, content, latestKeyword, openPopup }) {
  return (
    <div className="news-card-list">
      <div className="news-card-list__cards">
        {currentPage === "saved-news" &&
          content.map((card) => {
            return (
              <NewsCard
                currentPage={currentPage}
                isLoggedIn={isLoggedIn}
                key={content.indexOf(card)}
                cardInfo={card}
                openPopup={openPopup}
              />
            );
          })}

        {currentPage === "main" &&
          content.map((card) => {
            return (
              <NewsCard
                currentPage={currentPage}
                isLoggedIn={isLoggedIn}
                key={content.indexOf(card)}
                cardInfo={card}
                latestKeyword={latestKeyword}
                openPopup={openPopup}
              />
            );
          })}
      </div>
    </div>
  );
}

export default NewsCardList;
