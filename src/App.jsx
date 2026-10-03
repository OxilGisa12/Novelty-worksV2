import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import MemberReviews from './components/MemberReviews';
import FAQs from './components/FAQs';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';

import AboutUs from './pages/AboutUs';
import StartConversation from './components/StartConversation';
import Services from './pages/Services';
import ReachUs from './pages/ReachUs';
import Insights from './pages/Insights';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <MissionVision />
      <MemberReviews />
      <FAQs />
      <StartConversation />
      <Footer />
    </>
  );
}

function App() {
  return (
    
      <div className="min-h-screen bg-[#F3F7F4]">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reach-us" element={<ReachUs />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
        <ScrollToTopButton />
      </div>
    
  );
}

export default App;