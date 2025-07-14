import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ValueProposition from '../components/ValueProposition';
import TargetIndustries from '../components/TargetIndustries';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <ValueProposition />
      <TargetIndustries />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default HomePage;
