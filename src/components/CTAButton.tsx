
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  to: string;
  text: string;
  isPrimary?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, text, isPrimary = true }) => {
  return (
    <Link 
      to={to} 
      className={`
        inline-block px-6 py-3 text-center font-medium rounded-md
        ${isPrimary 
          ? "bg-bitebuddy-orange text-white hover:bg-orange-600" 
          : "border border-bitebuddy-orange text-bitebuddy-orange hover:bg-bitebuddy-light-orange"
        }
        transition-colors
      `}
    >
      {text}
    </Link>
  );
};

export default CTAButton;
