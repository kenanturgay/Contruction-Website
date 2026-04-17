import React from 'react';
import Header from '../widgets/Header';
import Hero from '../widgets/Hero';
import Services from '../widgets/Services';
import Advantages from '../widgets/Advantages';
import Testimonials from '../widgets/Testimonials';
import AboutContact from '../widgets/AboutContact';
import Footer from '../widgets/Footer';
import CreatedBy from '../widgets/CreatedBy';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Advantages />
        <Testimonials />
        <AboutContact />
      </main>
      <Footer />
      <CreatedBy />
    </div>
  );
};

export default Home;
