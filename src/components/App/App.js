import "./App.css";
import Main from "../Main/Main";
import SignInPopup from "../SignInPopup/SignInPopup";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import { useState } from "react";

function App() {
  const [activePopup, setActivePopup] = useState("");

  const closePopup = () => {
    setActivePopup("");
  }

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  }

  return (
    <div className="app">
      <Main openPopup={openPopup}/>
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
