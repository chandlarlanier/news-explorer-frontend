import "./Footer.css";
import githubLogo from "../../images/github.svg";
import linkedinLogo from "../../images/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__container'>
      <p className="footer__copyright">
        <span>&#169;</span> Supersite, Powered by News API
      </p>
      <Link className="footer__home-link" to="/">
        Home
      </Link>
      <a
        className="footer__tripleten-link"
        href="https://tripleten.com/"
        target="_blank"
      >
        TripleTen
      </a>
      <a
        className="footer__github-link"
        href="https://github.com/chandlarlanier"
        target="_blank"
      >
        <img src={githubLogo} alt="GitHub logo" />
      </a>
      <a
        className="footer__linkedin-link"
        href="https://www.linkedin.com/in/chandlarklanier"
        target="_blank"
      >
        <img src={linkedinLogo} alt="LinkedIn logo" />
      </a>
      </div>
    </footer>
  );
}

export default Footer;
