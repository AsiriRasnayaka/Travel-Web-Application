import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, LogOut, User as UserIcon } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
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
          
          <div className="flex items-center space-x-6">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
