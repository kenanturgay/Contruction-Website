import React from 'react';
import Header from '../widgets/Header';
import Body from '../widgets/Body';
import Footer from '../widgets/Footer';
import CreatedBy from '../widgets/CreatedBy';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100">
      <Header />
      <Body />
      <Footer />
      <CreatedBy />
    </div>
  );
};

export default Home;
