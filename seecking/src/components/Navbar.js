import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import logo from '../../public/images/seeckingLogo.png';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <i class="fab fa-accessible-icon"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    heyyy <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/explore" className="nav-links" onClick={closeMobileMenu}>
                            Explore
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/jobHunting" className="nav-links" onClick={closeMobileMenu}>
                            Job Hunting Tools
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/community" className="nav-links" onClick={closeMobileMenu}>
                            Community
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                            Log In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/singup" className="nav-links" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
