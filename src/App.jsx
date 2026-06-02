import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { AuthProvider } from './hooks/useAuth';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Website Pages
import Home from './pages/website/Home';
import Services from './pages/website/Services';
import About from './pages/website/About';
import Portfolio from './pages/website/Portfolio';
import Testimonials from './pages/website/Testimonials';
import Contact from './pages/website/Contact';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Dashboard Pages
import Overview from './pages/dashboard/Overview';
import Settings from './pages/dashboard/Settings';

// Error Pages
import NotFound from './pages/errors/NotFound';
import ServerError from './pages/errors/ServerError';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Corporate Website Routing */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/500" element={<ServerError />} />
            </Route>

            {/* Authentication Gateway Routing */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* SaaS Administrative Dashboard Routing */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Overview />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Fallback Not Found Routing */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
