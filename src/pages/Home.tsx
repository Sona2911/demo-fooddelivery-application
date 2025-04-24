
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FoodCategory from '../components/FoodCategory';
import CTAButton from '../components/CTAButton';
import AppDownloadSection from '../components/AppDownloadSection';

const Home = () => {
  const foodCategories = [
    { name: "Pizza", icon: "/icons/pizza.svg" },
    { name: "Burger", icon: "/icons/burger.svg" },
    { name: "Sushi", icon: "/icons/sushi.svg" },
    { name: "Pasta", icon: "/icons/pasta.svg" },
    { name: "Curry", icon: "/icons/curry.svg" },
    { name: "Dessert", icon: "/icons/dessert.svg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-bitebuddy-light-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gray-800 block">Your Favorite Food</span>
            <span className="text-bitebuddy-orange">Delivered Fast & Fresh</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Order from the best local restaurants with easy, on-demand delivery.
          </p>
          <p className="mb-8">Get started by creating an account or logging in</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/register" text="Create Account" />
            <CTAButton to="/login" text="Login" isPrimary={false} />
          </div>
        </div>
      </section>
      
      {/* Food Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Food Categories</h2>
            <a href="#" className="text-bitebuddy-orange hover:underline flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {foodCategories.map((category) => (
              <FoodCategory key={category.name} name={category.name} icon={category.icon} />
            ))}
          </div>
        </div>
      </section>
      
      {/* App Download Section */}
      <AppDownloadSection />
      
      <Footer />
    </div>
  );
};

export default Home;
