import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Instagram } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Calculate scroll velocity for dynamic effects
          const velocity = Math.abs(scrollY - lastScrollY);
          setScrollVelocity(velocity);
          setLastScrollY(scrollY);

          setIsScrolled(scrollY > 50);

          // Enhanced scroll progress calculation
          const maxScroll = documentHeight - windowHeight;
          const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
          setScrollProgress(progress);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Velocity decay effect for smoother animations
  useEffect(() => {
    const decayInterval = setInterval(() => {
      setScrollVelocity(prev => Math.max(0, prev * 0.9));
    }, 50);

    return () => clearInterval(decayInterval);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
  ];



  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 smart-liquid-glass ${
      isScrolled ? 'scrolled' : ''
    }`}>
      {/* Simple Gradient Page Loading Indicator */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-200/10 dark:bg-gray-800/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 transition-all duration-300 ease-out relative"
          style={{
            width: `${scrollProgress * 100}%`,
            opacity: scrollProgress > 0 ? 1 : 0,
            boxShadow: scrollProgress > 0 ? '0 0 6px rgba(59, 130, 246, 0.5), 0 0 12px rgba(147, 51, 234, 0.3)' : 'none'
          }}
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuenow={Math.round(scrollProgress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Subtle shimmer effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              transform: `translateX(${scrollProgress * 200 - 100}%)`,
              transition: 'transform 0.3s ease-out'
            }}
          ></div>
        </div>
      </div>
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
                className={`font-medium nav-glass ${
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
                className={`social-glass p-2 ${
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
                className={`social-glass p-2 ${
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
                className={`social-glass p-2 ${
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
              href="#services"
              className="pop-liquid-glass bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 font-medium"
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
          <div className="md:hidden mobile-menu-glass mt-2 py-4">
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
                href="#services"
                className="block w-full text-center pop-liquid-glass bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 font-medium"
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