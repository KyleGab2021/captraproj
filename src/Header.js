import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from './assets/capillitradinglogotext.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        setActiveLink(location.pathname);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <ul>
                    {[
                        { path: '/', label: 'HOME' },
                        { path: '/about', label: 'ABOUT' },
                        { path: '/news', label: 'NEWS' }
                    ].map((item, index) => (
                        <li key={item.path}>
                            <Link 
                                to={item.path}
                                className={`nav-link ${activeLink === item.path ? 'active' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {item.label}
                                <span className="link-underline"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;