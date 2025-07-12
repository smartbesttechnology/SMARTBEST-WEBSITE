import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowUp
} from 'lucide-react';
import { useGeolocation } from '../hooks/useGeolocation';

const Footer = () => {
  const { contactInfo } = useGeolocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper function to render links with proper React Router navigation
  const renderLink = (link: { name: string; href: string }) => {
    const isInternalRoute = link.href.startsWith('/') && !link.href.startsWith('/#');

    if (isInternalRoute) {
      // Use React Router Link for internal routes
      return (
        <Link
          to={link.href}
          className="text-gray-400 hover:text-white transition-colors text-sm"
        >
          {link.name}
        </Link>
      );
    } else {
      // Use regular anchor tag for hash links and external links
      return (
        <a
          href={link.href}
          className="text-gray-400 hover:text-white transition-colors text-sm"
        >
          {link.name}
        </a>
      );
    }
  };

  const footerLinks = {
    services: [
      { name: 'AI Business Automation', href: '#services' },
      { name: 'Mobile & Web Apps', href: '#services' },
      { name: 'Telegram Bots & Shops', href: '#services' },
      { name: 'Lead Generation & Sales', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'AI Chat Agents', href: '#services' },
      { name: 'Voice AI Assistants', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/smartbesttechnology', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/smartbesttech', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://www.instagram.com/smartbesttech', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.postimg.cc/4x9m01tf/Smartbest-logo-transperent.png" 
                alt="Smart Best Technology" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed">
              Empowering businesses through AI automation solutions. We build intelligent systems that think, speak, and close deals like real humans, transforming operations and driving growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{contactInfo.city}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 dark:text-gray-500 text-sm">
              © 2024 Smartbest Technologies. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-200 transition-colors p-2 hover:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transform hover:scale-110"
                    aria-label={`Follow us on ${social.label}`}
                    title={`Follow us on ${social.label}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg flex items-center space-x-2"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;