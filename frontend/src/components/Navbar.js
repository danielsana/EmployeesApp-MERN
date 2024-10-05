import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav>
          <ul>
            <li className='mylink'><Link to="/">Home</Link></li>
            <li className='mylink'><Link to="/view">View</Link></li>
            <li className='mylink'><Link to="/add">Add</Link></li>
          </ul>
          {/* <a href="/" className='active'>

          </a>
          <a href="/">view</a>
          <a href="/">add</a> */}
        </nav>
    </div>
  )
}

export default Navbar
