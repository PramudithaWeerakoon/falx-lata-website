import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, FileText, Settings, LogOut, Clipboard } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../common/Logo';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const sidebarItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Careers', icon: <Clipboard size={20} />, path: '/admin/careers' },
    { name: 'Clients', icon: <Users size={20} />, path: '/admin/clients' },
    { name: 'Services', icon: <Briefcase size={20} />, path: '/admin/services' },
    { name: 'Content', icon: <FileText size={20} />, path: '/admin/content' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <div className="bg-primary-800 text-white w-64 min-h-screen flex-shrink-0 hidden md:block">
      <div className="p-6 border-b border-primary-700">
        <Logo />
        <div className="mt-2 text-xs text-primary-300">Admin Panel</div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary-700 text-white'
                    : 'text-primary-300 hover:bg-primary-700 hover:text-white'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t border-primary-700">
        <button
          onClick={logout}
          className="flex w-full items-center px-4 py-3 text-primary-300 hover:bg-primary-700 hover:text-white rounded-lg transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;