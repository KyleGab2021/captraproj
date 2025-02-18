import React from 'react'; // Importing the React library
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import './Header.css'; // Importing the CSS file for styling
import logo from './assets/capillitradinglogotext.png'; // Correct the path to the logo

const Header = () => {
    return (
        <header className="header sticky"> {/* Header container with a class for styling */}
            <nav className="nav"> {/* Navigation container */}
                <ul> {/* Unordered list for navigation links */}
                    <li><Link to="/">HOME</Link></li> {/* Link to Home page */}
                    <li><Link to="/about">ABOUT</Link></li> {/* Link to About page */}
                    <li><Link to="/news">NEWS</Link></li> {/* Link to News page */}
                </ul>
            </nav>
        </header>
    );
};

export default Header; // Exporting the Header component as the default export