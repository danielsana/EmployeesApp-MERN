import React from 'react';
import { Link } from "react-router-dom";
// import '../Navbar.css'; // Import the CSS for styling

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="mylink">
            <Link to="/">Home</Link>
          </li>
          <li className="mylink">
            <Link to="/view">View</Link>
          </li>
          <li className="mylink">
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
