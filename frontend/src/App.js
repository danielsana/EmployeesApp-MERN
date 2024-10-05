import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomeP from "./pages/HomeP";
import ViewP from "./pages/ViewP";
import HomeP from "./pages/HomeP";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/view" element={<ViewP />} />
          <Route path="/add" element={<ViewP />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
