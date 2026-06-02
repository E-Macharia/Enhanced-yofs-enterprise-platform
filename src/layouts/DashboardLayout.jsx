import React, { useState } from 'react';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Activity, 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  Menu, 
  X,
  ArrowLeft
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export function DashboardLayout() {
  const { user, logout, isAuthenticated } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  // Route protection
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const menuItems = [
    { path: '/dashboard', label: 'Overview', icon: LayoutDashboard, end: true },
    { path: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const notifications = [
    { id: 1, text: 'Threat blockaded on node Tokyo-42', time: '2m ago' },
    { id: 2, text: 'System update completed', time: '12m ago' },
    { id: 3, text: 'Bandwidth threshold exceeded 85%', time: '1h ago' }
  ];

  return (
    <div className="min-h-screen bg-[#070F1E] text-yofs-white flex font-sans">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0A1424] border-r border-yofs-lightnavy/40 shrink-0">
        <div className="p-6 border-b border-yofs-lightnavy/40 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <img src="/yofs-logo.jpg" alt="YOFS Logo" className="w-7 h-7 rounded-lg object-cover" />
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-yofs-cyan transition-colors">
              YOFS SaaS
            </span>
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="flex-grow p-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-yofs-cyan/15 text-yofs-cyan border-l-2 border-yofs-cyan' 
                    : 'text-yofs-lightslate hover:text-white hover:bg-yofs-navy/40'
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer actions */}
        <div className="p-4 border-t border-yofs-lightnavy/40 space-y-2">
          <div className="flex items-center gap-3 px-4 py-2 bg-yofs-navy/40 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-yofs-cyan/20 flex items-center justify-center text-yofs-cyan font-bold text-xs">
              {user?.name ? user.name.charAt(0) : 'A'}
            </div>
            <div className="truncate">
              <span className="block text-xs font-semibold text-white truncate">{user?.name}</span>
              <span className="block text-[10px] text-yofs-slate truncate">{user?.email}</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Sidebar (Mobile Toggle) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="fixed top-0 left-0 bottom-0 w-64 bg-[#0A1424] border-r border-yofs-lightnavy/40 z-50 p-6 flex flex-col justify-between md:hidden animate-slide-right">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-yofs-lightnavy/40">
                  <span className="text-lg font-bold text-white">YOFS Dashboard</span>
                  <button onClick={() => setIsSidebarOpen(false)} className="text-yofs-lightslate hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.end}
                      onClick={() => setIsSidebarOpen(false)}
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive 
                            ? 'bg-yofs-cyan/15 text-yofs-cyan border-l-2 border-yofs-cyan' 
                            : 'text-yofs-lightslate hover:text-white hover:bg-yofs-navy/40'
                        }`
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="space-y-2 pt-4 border-t border-yofs-lightnavy/40">
                <div className="flex items-center gap-3 px-4 py-2 bg-yofs-navy/40 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-yofs-cyan/20 flex items-center justify-center text-yofs-cyan font-bold text-xs">
                    {user?.name ? user.name.charAt(0) : 'A'}
                  </div>
                  <div className="truncate">
                    <span className="block text-xs font-semibold text-white truncate">{user?.name}</span>
                    <span className="block text-[10px] text-yofs-slate truncate">{user?.email}</span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Main content workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-20 border-b border-yofs-lightnavy/30 bg-[#0A1424]/80 backdrop-blur-md flex items-center justify-between px-8 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-yofs-lightslate hover:text-white md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Back to main site */}
            <button
              onClick={() => navigate('/')}
              className="text-xs text-yofs-lightslate hover:text-yofs-cyan flex items-center gap-1.5 transition-colors"
              title="Return to corporate site"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to site</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg bg-yofs-navy/50 border border-yofs-lightnavy/40 flex items-center justify-center text-yofs-lightslate hover:text-yofs-cyan transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Notifications Popover */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-9 h-9 rounded-lg bg-yofs-navy/50 border border-yofs-lightnavy/40 flex items-center justify-center text-yofs-lightslate hover:text-yofs-cyan relative transition-colors"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-yofs-cyan" />
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-72 glass-panel rounded-xl shadow-2xl overflow-hidden z-50"
                    >
                      <div className="p-3 border-b border-yofs-lightnavy/50 bg-[#0A1424] flex items-center justify-between">
                        <span className="text-xs font-bold text-white">SYSTEM EVENTS</span>
                        <span className="text-[10px] text-yofs-cyan uppercase">Live feeds</span>
                      </div>
                      <div className="divide-y divide-yofs-lightnavy/30 max-h-60 overflow-y-auto">
                        {notifications.map((notif) => (
                          <div key={notif.id} className="p-3 hover:bg-yofs-navy/40 transition-colors">
                            <p className="text-xs text-yofs-lightslate leading-snug">{notif.text}</p>
                            <span className="text-[9px] text-yofs-slate mt-1 block">{notif.time}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* User profile identifier */}
            <div className="h-8 w-[1px] bg-yofs-lightnavy/50" />
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs font-semibold text-yofs-lightslate">{user?.name}</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yofs-cyan to-yofs-purple flex items-center justify-center text-white font-bold text-xs border border-yofs-cyan/20">
                {user?.name ? user.name.charAt(0) : 'A'}
              </div>
            </div>
          </div>
        </header>

        {/* Content Page Container */}
        <main className="flex-1 p-8 md:p-12 overflow-y-auto bg-gradient-to-b from-[#070F1E] to-yofs-dark">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default DashboardLayout;
