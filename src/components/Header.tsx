import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Instagram } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/4x9m01tf/Smartbest-logo-transperent.png" 
              alt="Smart Best Technology" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-200'
                    : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Media, Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/smartbesttechnology"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
                    : 'text-white/80 hover:text-white'
                }`}
                aria-label="Follow us on GitHub"
                title="Follow us on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/smartbesttech"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
                    : 'text-white/80 hover:text-white'
                }`}
                aria-label="Follow us on X (Twitter)"
                title="Follow us on X (Twitter)"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/smartbesttech"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
                    : 'text-white/80 hover:text-white'
                }`}
                aria-label="Follow us on Instagram"
                title="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>

            <ThemeToggle size="md" />
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle size="sm" />
            <button
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-900 dark:text-gray-100'
                  : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 py-4 border border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Social Media Links */}
            <div className="px-4 pt-2 pb-2 border-t border-gray-200 dark:border-gray-700 mt-2">
              <div className="flex justify-center space-x-6 mb-4">
                <a
                  href="https://github.com/smartbesttechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                  aria-label="Follow us on GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/smartbesttech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                  aria-label="Follow us on X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/smartbesttech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <a
                href="#contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;