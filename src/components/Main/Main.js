import "./Main.css";
import Header from "../Header/Header";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function Main({openPopup, isLoggedIn, searchIsLoading}) {
  return (
    <div className="main">
      <Header openPopup={openPopup} isLoggedIn={isLoggedIn}/>
      {searchIsLoading && <Preloader />}
      <About />
      <Footer />
    </div>
  );
}

export default Main;
