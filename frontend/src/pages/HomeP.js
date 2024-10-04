import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";


function HomeP() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Home/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default HomeP;
