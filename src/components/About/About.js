import "./About.css";
import authorImage from "../../images/author.jpg";

function About() {
  return (
    <div className="about">
      <img className="about__author-image" src={authorImage} alt="Author" />
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This app was developed by Chandlar Lanier. Chandlar is currently
          enrolled in a software engineering bootcamp offered by TripleTen. This
          comprehensive training program delves into cutting-edge technologies
          including React.js, Git, Rest APIs, Webpack, Node.js, Express.js,
          MongoDB, and Google Cloud.
        </p>
        <p className="about__description">
          Before embarking on her journey with TripleTen, Chandlar earned a
          Bachelor of Science degree in Information Science from the University
          of North Carolina at Chapel Hill, which provided a foundation in
          information technology, data management, and user-centered design
          principles.
        </p>
      </div>
    </div>
  );
}

export default About;
