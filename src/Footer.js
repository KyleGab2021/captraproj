import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
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
      link: 'https://facebook.com/capillitradinginc',
      ariaLabel: 'Facebook'
    },
    { 
      icon: <FaInstagram />, 
      link: 'https://instagram.com/capillitradinginc',
      ariaLabel: 'Instagram'
    },
    { 
      icon: <FaLinkedin />, 
      link: 'https://linkedin.com/company/capillitradinginc',
      ariaLabel: 'LinkedIn'
    },
    { 
      icon: <FaEnvelope />, 
      link: 'mailto:info@capillitrading.com',
      ariaLabel: 'Email'
    },
    {
      icon: <FaMapMarkerAlt />,
      link: 'https://maps.google.com/?q=Cagayan+De+Oro+City,+Misamis+Oriental',
      ariaLabel: 'Location'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className={`footer-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="social-media-icons">
            {socialLinks.map((social, index) => (
              <a 
                key={social.ariaLabel}
                href={social.link}
                className="social-media-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
              >
                <span className="social-icon">{social.icon}</span>
              </a>
            ))}
          </div>
          <p className="copyright">©2021 Capilli Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;