import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
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

export default App;
