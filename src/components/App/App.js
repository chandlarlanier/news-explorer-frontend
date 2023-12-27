import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import { useState } from "react";

function App() {
  const [activePopup, setActivePopup] = useState("");
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const closePopup = () => {
    setActivePopup("");
  }

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  }

  return (
    <div className="app">
      <Main openPopup={openPopup} isLoggedIn={isLoggedIn} searchIsLoading={searchIsLoading} searchResults={searchResults}/>
      {/* <SavedNews isLoggedIn={true}/> */}
      {activePopup === "sign-in" && (
        <SignInPopup closePopup={closePopup} openPopup={openPopup}/>
      )}
      {activePopup === "sign-up" && (
        <SignUpPopup closePopup={closePopup} openPopup={openPopup}/>
      )}
    </div>
  );
}

export default App;
