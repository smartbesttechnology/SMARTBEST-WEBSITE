import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceHighlights from './components/ServiceHighlights';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ValueProposition from './components/ValueProposition';
import TargetIndustries from './components/TargetIndustries';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <Services />
        <ServiceHighlights />
        <About />
        <Portfolio />
        <ValueProposition />
        <TargetIndustries />
        <SocialProof />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;