
import React from 'react';

interface FoodCategoryProps {
  name: string;
  icon: string;
}

const FoodCategory: React.FC<FoodCategoryProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-bitebuddy-light-orange rounded-full p-4 mb-2 w-24 h-24 flex items-center justify-center">
        <img src={icon} alt={name} className="w-12 h-12" />
      </div>
      <span className="text-gray-800 font-medium">{name}</span>
    </div>
  );
};

export default FoodCategory;
