import "./Footer.css";
import githubLogo from "../../images/github.svg";
import linkedinLogo from "../../images/linkedin.svg";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'><span>&#169;</span> Supersite, Powered by News API</div>
            <div className='footer__right'>
                {/* <Link to='/'> */}
                    <p>Home</p>
                {/* </Link> */}
                {/* <Link to='/'> */}
                    <p>TripleTen</p>
                {/* </Link> */}
                {/* <Link to=""> */}
                    <img src={githubLogo} alt='GitHub logo'/>
                {/* </Link> */}
                {/* <Link to=""> */}
                <img src={linkedinLogo} alt='LinkedIn logo'/>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Footer;
