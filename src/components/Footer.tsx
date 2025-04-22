import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Mail, Phone, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
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
    { icon: <Youtube size={20} />, title: 'YouTube', url: 'https://www.youtube.com/channel/UCTLGuy_9k3XleqrNQ_EbnVA' },
    { icon: <Facebook size={20} />, title: 'Facebook', url: 'https://www.facebook.com/people/%E0%A4%85%E0%A4%96%E0%A4%BF%E0%A4%B2-%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4%E0%A5%80%E0%A4%AF-%E0%A4%B2%E0%A5%8B%E0%A4%B9%E0%A4%BE%E0%A4%B0-%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9C/pfbid02DyMLJRFW19PHaPrb3iXFYdsV4grHGBsautxXAZsUWgmKQGtjxAM4kkEozgt5gQM2l/' },
    { icon: <Twitter size={20} />, title: 'X (Twitter)', url: 'https://x.com/yuwarajjadhav1' },
    { icon: <Instagram size={20} />, title: 'WhatsApp', url: 'https://whatsapp.com' },
    { icon: <Mail size={20} />, title: 'Gmail', url: 'mailto:info@gadiloharsamaj.com' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-secondary-500">गाडी लोहार समाज उन्नती मंडळ</h2>
            <p className="mb-4">
              कल्याण जि. ठाणे, महाराष्ट्र
            </p>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2 text-secondary-500" />
              <span>९८६९३५८८६४</span>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="mr-2 text-secondary-500" />
              <span>info@gadiloharsamaj.com</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 text-secondary-500">महत्वाचे लिंक्स</h2>
            <ul className="space-y-2">
              {navLinks.slice(0, 7).map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="hover:text-secondary-500 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 text-secondary-500">अधिक माहिती</h2>
            <ul className="space-y-2">
              {navLinks.slice(7).map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="hover:text-secondary-500 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-3 text-secondary-500">सोशल मीडिया</h2>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary-500 transition-colors"
                    aria-label={link.title}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} गाडी लोहार समाज उन्नती मंडळ - सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;