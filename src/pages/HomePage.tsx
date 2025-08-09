import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Process from '../components/sections/Process';
import CaseStudies from '../components/sections/CaseStudies';
import FAQ from '../components/sections/FAQ';
import WhatsAppFloat from '../components/ui/WhatsAppFloat';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <CaseStudies />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HomePage;
