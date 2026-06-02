import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, LogIn, LayoutDashboard } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleAuthClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-yofs-dark/85 dark:bg-yofs-dark/85 backdrop-blur-md border-b border-yofs-cyan/10 shadow-lg shadow-yofs-dark/50' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/yofs-logo.jpg" alt="YOFS Logo" className="w-8 h-8 rounded-lg object-cover shadow-md shadow-yofs-cyan/20" />
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-yofs-cyan transition-colors duration-300">
            YOFS<span className="text-gradient">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-300 hover:text-yofs-cyan ${
                  isActive ? 'text-yofs-cyan font-semibold' : 'text-yofs-lightslate'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border border-yofs-lightnavy bg-yofs-navy/30 flex items-center justify-center text-yofs-lightslate hover:text-yofs-cyan hover:border-yofs-cyan/30 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <Button 
            variant={isAuthenticated ? 'secondary' : 'primary'} 
            size="sm"
            onClick={handleAuthClick}
            icon={isAuthenticated ? LayoutDashboard : LogIn}
          >
            {isAuthenticated ? 'Dashboard' : 'Portal Login'}
          </Button>
        </div>

        {/* Mobile Toggle & Theme button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border border-yofs-lightnavy bg-yofs-navy/30 flex items-center justify-center text-yofs-lightslate hover:text-yofs-cyan transition-all duration-300"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex items-center justify-center text-yofs-lightslate hover:text-yofs-cyan transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-yofs-navy/95 border-b border-yofs-cyan/15 backdrop-blur-lg flex flex-col p-6 gap-4 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `text-base font-medium py-2 transition-colors border-b border-yofs-lightnavy/30 ${
                  isActive ? 'text-yofs-cyan' : 'text-yofs-lightslate'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button 
            variant={isAuthenticated ? 'secondary' : 'primary'} 
            onClick={() => {
              setIsOpen(false);
              handleAuthClick();
            }}
            icon={isAuthenticated ? LayoutDashboard : LogIn}
            className="w-full mt-2"
          >
            {isAuthenticated ? 'SaaS Dashboard' : 'Portal Login'}
          </Button>
        </div>
      )}
    </nav>
  );
}
