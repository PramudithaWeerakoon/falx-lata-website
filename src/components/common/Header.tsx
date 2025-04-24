import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-primary-600'
                  : isScrolled
                  ? 'text-gray-800 hover:text-primary-600'
                  : 'text-gray-800 hover:text-primary-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <Link
              to="/admin"
              className="btn btn-primary"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <Menu size={24} className="text-gray-800" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-20 flex flex-col pt-20 px-8 transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="py-3 text-lg font-medium border-b border-gray-200 text-gray-800"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <Link
              to="/admin"
              className="py-3 mt-4 w-full btn btn-primary text-center"
              onClick={closeMenu}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="py-3 mt-4 w-full btn btn-outline text-center"
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;