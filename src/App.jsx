import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeServe from './components/WhatWeServe';
import Reels from './components/Reels';
import Locations from './components/Locations';
import Founder from './components/Founder';
import Gallery from './components/Gallery';
import Franchise from './components/Franchise';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Keep URL clean on hash change just like original site
    const handleHash = () => {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search
        );
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <main className="scroll-smooth overflow-x-hidden min-h-screen bg-beige">
      <Navbar />
      <Hero />
      <WhatWeServe />
      <Reels />
      <Locations />
      <Founder />
      <Gallery />
      <Franchise />
      <MenuSection />
      <Footer />
    </main>
  );
}
