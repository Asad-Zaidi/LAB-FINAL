import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Head = () => {
    return (
        <header>
            <nav className="navbar">
                <h1 className="navbar-title"><Link to='/'>Space Traveler's Hub</Link></h1>
                <ul className="nav-list">
                    <li className="nav-item"><Link to='/'>Dragon</Link></li>
                    <li className="nav-item"><Link to='/Mission'>Missions</Link></li>
                    <li className="nav-item"><Link to='/MyProfile'>My Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Head