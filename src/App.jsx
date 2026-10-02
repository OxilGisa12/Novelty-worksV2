import React from 'react';
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
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-[#F3F7F4]">
      <Navbar />
      {path === '/about' ? (
        <AboutUs />
      ) :
       path === '/services' ? (
        <Services />
      ) : 
      path === '/reach-us' ? (
        <ReachUs />
      ) :
      path == '/insights' ? (
        <Insights />
      ) :
      (
        <Home />
      )}
    </div>
  );
}

export default App;