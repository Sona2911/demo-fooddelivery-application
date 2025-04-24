
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bitebuddy-dark-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">BiteBuddy</h3>
            <p className="text-gray-300 mb-4">
              Your favorite food, delivered fast and fresh to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About BiteBuddy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">For Restaurants</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Partner with us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Apps for Restaurants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Restaurant Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© 2025 BiteBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
