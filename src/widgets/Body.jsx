import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Advantages from './Advantages';
import Testimonials from './Testimonials';
import AboutContact from './AboutContact';

const Body = () => {
  return (
    <main className="relative flex-grow transition-colors duration-500 animate-fade-in-up">
      {/* Fixed Construction Video Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-90"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-building-a-new-house-construction-site-42618-large.mp4" type="video/mp4" />
        </video>
        {/* Soft overlay to let text remain readable without hiding the video */}
        <div className="absolute inset-0 bg-yellow-50/40 dark:bg-slate-950/70"></div>
      </div>
      
      {/* Page Content */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <Advantages />
        <Testimonials />
        <AboutContact />
      </div>
    </main>
  );
};

export default Body;
