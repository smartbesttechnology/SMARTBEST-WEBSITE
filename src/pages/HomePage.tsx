import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ServiceHighlights from '../components/ServiceHighlights';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ValueProposition from '../components/ValueProposition';
import TargetIndustries from '../components/TargetIndustries';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ServiceHighlights />
      <About />
      <Portfolio />
      <ValueProposition />
      <TargetIndustries />
      <SocialProof />
      <Footer />
    </>
  );
};

export default HomePage;
