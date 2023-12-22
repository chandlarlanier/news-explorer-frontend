import "./About.css";
import authorImage from '../../images/author.jpg';

function About() {
    return (
        <div className='about'>
            <img className="about__author-image" src={authorImage} alt="Author"/>
            <div className='about__text'>
                <h2 className='about__title'>About the author</h2>
                <p className='about__description'>This app was developed by Chandlar Lanier. Chandlar is a student in TripleTen's software engineering bootcamp. She holds a Bachelors degree in information science from the University of North Carolina at Chapel Hill.</p>
            </div>
        </div>
    );
}

export default About;
