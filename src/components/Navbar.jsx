import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
    <div className="n-left">
        <div className="n-name">Welcome </div>
        <span>Dali-Lab</span>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/Contact">Contact</Link></li>

            </ul>
        </div>
       
    </div>
    </div>
  )
}

export default Navbar