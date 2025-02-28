import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top animate-on-scroll">
          <h2>Connect With Us</h2>
          <p>Follow us on social media for updates and news</p>
        </div>
        
        <div className="social-media-icons animate-on-scroll">
          {[
            { icon: <FaFacebook />, label: 'Facebook', link: '#' },
            { icon: <FaInstagram />, label: 'Instagram', link: '#' },
            { icon: <FaTwitter />, label: 'Twitter', link: '#' },
            { icon: <FaEnvelope />, label: 'Email', link: 'mailto:info@capillitrading.com' }
          ].map((social, index) => (
            <a 
              key={social.label}
              href={social.link}
              className="social-media-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="social-icon">{social.icon}</span>
              <span className="social-label">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="footer-bottom animate-on-scroll">
          <div className="contact-info">
            <p>Contact Us: +123 456 7890</p>
            <p>Address: 123 Trading Street, Business District</p>
          </div>
          <p className="copyright">© 2023 Capilli Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;