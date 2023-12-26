import "./Main.css";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NoSearchResultsMessage from "../NoSearchResultsMessage/NoSearchResultsMessage";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Main({openPopup, isLoggedIn, searchIsLoading, searchResults}) {
  return (
    <div className="main">
      <Header openPopup={openPopup} isLoggedIn={isLoggedIn}/>
      {searchIsLoading && <Preloader />}
      {!searchResults && <NoSearchResultsMessage />}
      <About />
      <Footer />
    </div>
  );
}

export default Main;
