import "./NewsCard.css";

function NewsCard() {
    return (
    <div className='news-card'>
        <div className='news-card__image-container'>
            <img src="https://images.unsplash.com/photo-1702933017536-44e01bff1111?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt='News graphic' />
        </div>
        <div className='news-card__info'>
            <p className='news-card__date'>December 25, 2023</p>
            <h3 className='news-card__title'>Grand Teton Renews Historic Crest Trail</h3>
            <p className='news-card__article'>“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...</p>
            <p className='news-card__source'>National Parks Traveler</p>
        </div>
    </div>
    )
}

export default NewsCard;
