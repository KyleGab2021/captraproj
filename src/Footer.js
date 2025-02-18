import React from 'react'; // Importing the React library
import './Footer.css'; // Importing the CSS file for styling
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
  return (
    <footer className="footer"> {/* Footer container with a class for styling */}
      <div className="footer-content"> {/* Wrapper for the footer content */}
        <p>Capilli Trading Inc | All Rights Reserved</p> {/* Footer text */}
        <div className="social-media-icons"> {/* Container for social media icons */}
          <div className="social-media-item">
            <a href="https://www.facebook.com/capillitradinginc" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" /> {/* Facebook icon */}
            </a>
          </div>
          <div className="social-media-item">
            <a href="https://www.instagram.com/capillitradinginc/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" /> {/* Instagram icon */}
            </a>
          </div>
          <div className="social-media-item">
            <a href="https://ph.linkedin.com/company/capillitradinginc" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" /> {/* LinkedIn icon */}
            </a>
          </div>
          <div className="social-media-item">
            <a href="Capilli.info@capillitrading.com">
              <FaEnvelope className="social-icon" /> {/* Email icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; // Exporting the Footer component as the default export