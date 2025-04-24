
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="text-bitebuddy-orange text-6xl font-bold mb-4">404</div>
        <h1 className="text-2xl font-semibold mb-6">Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-bitebuddy-orange hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
