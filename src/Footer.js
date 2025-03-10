import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FaFacebook className="w-7 h-7" />, // Increased from w-5 h-5
      link: 'https://facebook.com/capillitradinginc',
      ariaLabel: 'Facebook',
      hoverColor: 'hover:bg-blue-600'
    },
    { 
      icon: <FaInstagram className="w-7 h-7" />, // Increased from w-5 h-5
      link: 'https://instagram.com/capillitradinginc',
      ariaLabel: 'Instagram',
      hoverColor: 'hover:bg-pink-600'
    },
    { 
      icon: <FaLinkedin className="w-7 h-7" />, // Increased from w-5 h-5
      link: 'https://linkedin.com/company/capillitradinginc',
      ariaLabel: 'LinkedIn',
      hoverColor: 'hover:bg-blue-700'
    },
    { 
      icon: <FaEnvelope className="w-7 h-7" />, // Increased from w-5 h-5
      link: 'mailto:info@capillitrading.com',
      ariaLabel: 'Email',
      hoverColor: 'hover:bg-red-600'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 text-green-400">Capilli Trading</h3>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <FaMapMarkerAlt className="w-5 h-10 text-green-400" />
              <p className="text-sm">Ipil St, Cagayan de Oro, 9000 Misamis Oriental</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4 text-green-400">Connect With Us</h3>
            <div className="flex justify-center space-x-6"> {/* Increased space-x-4 to space-x-6 */}
              {socialLinks.map((social) => (
                <a
                  key={social.ariaLabel}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className={`
                    p-3 rounded-full bg-gray-800
                    transform transition-all duration-300
                    hover:scale-110 ${social.hoverColor} hover:text-white
                    focus:outline-none focus:ring-2 focus:ring-green-400
                  `}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-400">
              © 2021 Capilli Trading. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;