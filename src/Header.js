import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (e, path) => {
        e.preventDefault();
        // First navigate to the path
        window.location.href = path;
        // Then scroll to top after a small delay to ensure navigation completes
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' 
                : 'bg-transparent py-6'
        }`}>
            <div className="container mx-auto px-6">
                <nav className="flex justify-center items-center">
                    <ul className="flex space-x-32">
                        {[
                            { path: '/', label: 'HOME' },
                            { path: '/about', label: 'ABOUT' }
                        ].map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path}
                                    onClick={(e) => handleNavigation(e, item.path)}
                                    className={`relative text-2xl font-bold transition-colors duration-300
                                        ${isScrolled 
                                            ? 'text-green-600 hover:text-green-700' 
                                            : 'text-white hover:text-green-400'}
                                        before:content-[''] before:absolute before:bottom-0 before:left-0 
                                        before:w-full before:h-0.5 before:bg-green-400
                                        before:transform before:scale-x-0 before:origin-right
                                        before:transition-transform before:duration-300
                                        hover:before:scale-x-100 hover:before:origin-left
                                        ${location.pathname === item.path ? 'before:scale-x-100' : ''}
                                    `}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;