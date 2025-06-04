import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'मुख्य पृष्ठ', path: '/' },
    { title: 'कार्यकारिणी', path: '/executive-committee' },
    { title: 'सभासद', path: '/members' },
    { title: 'उपक्रम', path: '/activities' },
    { title: 'वधू-वर', path: '/bride-groom' },
    { title: 'संपर्क', path: '/contact' },
    { title: 'खानेसुमारी', path: '/census' },
    { title: 'समाजवार्ता', path: '/community-news' },
    { title: 'न्यूज चॅनल', path: '/news-channel' },
    { title: 'जी.आर', path: '/government-resolutions' },
    { title: 'अभिप्राय', path: '/feedback' },
    { title: 'देणगी', path: '/donation' },
    { title: 'जमाखर्च', path: '/income-expenditure' },
  ];

  const socialLinks = [
    { icon: <Youtube size={18} />, title: 'YouTube', url: 'https://www.youtube.com/channel/UCTLGuy_9k3XleqrNQ_EbnVA' },
    { icon: <Facebook size={18} />, title: 'Facebook', url: 'https://www.facebook.com/people/%E0%A4%85%E0%A4%96%E0%A4%BF%E0%A4%B2-%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4%E0%A5%80%E0%A4%AF-%E0%A4%B2%E0%A5%8B%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C/pfbid02DyMLJRFW19PHaPrb3iXFYdsV4grHGBsautxXAZsUWgmKQGtjxAM4kkEozgt5gQM2l/' },
    { icon: <Twitter size={18} />, title: 'X (Twitter)', url: 'https://x.com/yuwarajjadhav1' },
    { icon: <Mail size={18} />, title: 'Gmail', url: 'mailto:info@gadiloharsamaj.com' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-primary-50'}`}>
      {/* Top bar with social icons and contact */}
      <div className="hidden md:block bg-primary-700 text-white py-1">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:text-secondary-400 flex items-center gap-1"
                aria-label={link.title}
              >
                {link.icon}
                <span className="text-xs">{link.title}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+919869358864" className="text-xs flex items-center gap-1">
              <Phone size={16} />
              <span>९८६९३५८८६४</span>
            </a>
            <Link
              to="/admin/login"
              className="text-xs text-white hover:text-secondary-400 transition-colors"
            >
              प्रशासक
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-primary-700">गाडी लोहार समाज उन्नती मंडळ</h1>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-700 hover:bg-primary-50 focus:outline-none"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) => 
                  `nav-link nav-link-desktop px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-primary-700 text-white' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'}`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => 
                `nav-link nav-link-mobile ${isActive ? 'bg-primary-700 text-white' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5 gap-2">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-700"
                aria-label={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;