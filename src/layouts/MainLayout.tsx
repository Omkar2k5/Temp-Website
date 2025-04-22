import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadershipInfo from '../components/LeadershipInfo';

const MainLayout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-marathi">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <LeadershipInfo />
      <Footer />
    </div>
  );
};

export default MainLayout;