
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f26b21" className="mr-2">
            <path d="M17 12c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1zm5-8h-2v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H6v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-1 16h-18v-10h18v10z" />
          </svg>
          <span className="text-xl font-bold text-bitebuddy-orange">Bite Buddy</span>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/login" className="text-gray-700 hover:text-bitebuddy-orange mr-4">Login</Link>
        <Link to="/register" className="bg-bitebuddy-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
