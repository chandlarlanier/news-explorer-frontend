import "./Main.css";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NoSearchResultsMessage from "../NoSearchResultsMessage/NoSearchResultsMessage";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Main({
  openPopup,
  isLoggedIn,
  searchIsLoading,
  searchResults,
  noResultsFound,
  handleSearchFormSubmit,
  latestKeyword
}) {
  return (
    <div className="main">
      <Header
        openPopup={openPopup}
        isLoggedIn={isLoggedIn}
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
      {searchIsLoading && <Preloader />}
      {noResultsFound && <NoSearchResultsMessage />}
      {searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} isLoggedIn={isLoggedIn} latestKeyword={latestKeyword}/>
      )}
      <About />
      <Footer />
    </div>
  );
}

export default Main;
