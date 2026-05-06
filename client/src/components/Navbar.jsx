import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, LogOut, User as UserIcon, Menu, X } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-brand-600 hover:text-brand-700 transition">
              <Plane className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight">SriLankaExplorers</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/destinations" className="text-gray-600 hover:text-brand-600 font-medium transition">
              Destinations
            </Link>
            <Link to="/travel-guide" className="text-gray-600 hover:text-brand-600 font-medium transition">
              Travel Guide
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-brand-600 font-medium transition">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-brand-600 font-medium transition">
              Contact
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-500 hover:text-red-700 font-medium transition"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-brand-600 font-medium transition">
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-brand-600 text-white px-4 py-2 rounded-full font-medium hover:bg-brand-700 transition shadow-md shadow-brand-500/20"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-600 focus:outline-none transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            <Link to="/destinations" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              Destinations
            </Link>
            <Link to="/travel-guide" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              Travel Guide
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              About Us
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">
              Contact
            </Link>
            
            <div className="pt-4 border-t border-gray-100">
              {user ? (
                <div className="space-y-3">
                  <span className="px-3 block text-gray-600 flex items-center font-medium">
                    <UserIcon className="h-4 w-4 mr-2" />
                    {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-3 py-2 text-base font-medium text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-3 mt-2">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-2 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition">
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-2 rounded-full font-medium bg-brand-600 text-white hover:bg-brand-700 transition shadow-md shadow-brand-500/20"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
