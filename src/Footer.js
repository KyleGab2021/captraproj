import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay to ensure content is rendered
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      label: 'Facebook', 
      link: 'https://facebook.com/capillitradinginc'  // Updated link
    },
    { 
      icon: <FaInstagram />, 
      label: 'Instagram', 
      link: 'https://instagram.com/capillitradinginc'  // Updated link
    },
    { 
      icon: <FaLinkedin />, 
      label: 'LinkedIn', 
      link: 'https://linkedin.com/company/capillitradinginc'  // Updated link
    },
    { 
      icon: <FaEnvelope />, 
      label: 'info@capillitrading.com', 
      link: 'mailto:info@capillitrading.com'  // This one is correct
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className={`footer-left ${isVisible ? 'animate-in' : ''}`}>
          <h2>Connect With Us</h2>
          <p>Follow us on social media for updates and news</p>
          <div className="social-media-icons">
            {socialLinks.map((social, index) => (
              <a 
                key={social.label}
                href={social.link}
                className="social-media-item"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  textDecoration: 'none'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-label">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={`footer-right ${isVisible ? 'animate-in' : ''}`}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Address: Cagayan De Oro City, Misamis Oriental</p>
          </div>
          <p className="copyright">©2021 Capilli Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;