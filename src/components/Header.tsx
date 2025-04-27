import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { getTranslation } from '../utils/translations';
import { Menu, X, Sun, Moon, Search, Globe, User, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'km' : 'en');
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => document.getElementById('search-input')?.focus(), 200);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Search for:', searchQuery);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'khmerMovies', path: '/khmer-movies' },
    { name: 'international', path: '/international' },
    { name: 'series', path: '/series' },
    { name: 'upcoming', path: '/upcoming' },
    { name: 'myList', path: '/my-list' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'header-solid py-2' 
          : 'header-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-header">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.h1 
            className="text-2xl md:text-3xl font-bold gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getTranslation('appName', language)}
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Link 
                to={link.path} 
                className={`text-text-light-primary dark:text-text-dark-primary hover:text-accent-primary dark:hover:text-accent-primary transition-colors relative group ${
                  location.pathname === link.path ? 'font-medium text-accent-primary' : ''
                }`}
              >
                {getTranslation(link.name, language)}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          <motion.button 
            className="btn-ghost rounded-full p-2"
            aria-label="Search"
            onClick={toggleSearch}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Search className="w-5 h-5" />
          </motion.button>

          <motion.button 
            className="btn-ghost rounded-full p-2"
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Globe className="w-5 h-5" />
            <span className="ml-1 hidden sm:inline-block">
              {language === 'en' ? '🇺🇸' : '🇰🇭'}
            </span>
          </motion.button>

          <motion.button 
            className="btn-ghost rounded-full p-2"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>

          <motion.button 
            className="btn-primary h-10 sm:h-auto sm:px-4 sm:py-2 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <LogIn className="w-5 h-5 sm:mr-2" />
            <span className="hidden sm:inline">{getTranslation('login', language)}</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden btn-ghost rounded-full p-2 ml-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            className="absolute top-full left-0 w-full bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light-tertiary dark:text-text-dark-tertiary" />
                  <input 
                    id="search-input"
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === 'en' ? 'Search for movies, genres, actors...' : 'ស្វែងរកភាពយន្ត ប្រភេទ តួសម្ដែង...'}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-light-tertiary dark:bg-dark-tertiary focus:ring-2 focus:ring-accent-primary focus:outline-none placeholder:text-text-light-tertiary dark:placeholder:text-text-dark-tertiary"
                  />
                </div>
                <button type="submit" className="btn-primary py-3 px-6 rounded-xl">
                  {getTranslation('search', language)}
                </button>
                <button 
                  type="button" 
                  onClick={() => setSearchOpen(false)}
                  className="btn-ghost py-3 px-4 rounded-xl"
                >
                  {language === 'en' ? 'Cancel' : 'បោះបង់'}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-light-surface dark:bg-dark-primary shadow-lg z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 px-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    className={`block py-2 text-text-light-primary dark:text-text-dark-primary hover:text-accent-primary transition-colors ${
                      location.pathname === link.path ? 'text-accent-primary font-medium' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {getTranslation(link.name, language)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;