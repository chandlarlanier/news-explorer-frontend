import "./Main.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Main({openPopup}) {
  return (
    <div className="main">
      <Header openPopup={openPopup}/>
      <About />
      <Footer />
    </div>
  );
}

export default Main;
