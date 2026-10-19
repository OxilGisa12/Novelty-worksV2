import React from 'react';
import { Routes, Route } from 'react-router-dom';

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

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';

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

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {children}
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#F3F7F4]">
      <Routes>
        {/* PUBLIC WEBSITE */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutUs />
            </PublicLayout>
          }
        />

        <Route
          path="/services"
          element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          }
        />

        <Route
          path="/reach-us"
          element={
            <PublicLayout>
              <ReachUs />
            </PublicLayout>
          }
        />

        <Route
          path="/insights"
          element={
            <PublicLayout>
              <Insights />
            </PublicLayout>
          }
        />

        {/* ADMIN PAGES — NO PUBLIC NAVBAR */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;