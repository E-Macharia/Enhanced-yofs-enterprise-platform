import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GidiAssistant } from '../components/GidiAssistant';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-yofs-dark transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* React Router Outlet renders matching sub-routes */}
        <Outlet />
      </main>
      <Footer />
      {/* Floating AI System Widget */}
      <GidiAssistant />
    </div>
  );
}
export default MainLayout;
