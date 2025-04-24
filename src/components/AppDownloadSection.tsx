
import React from 'react';

const AppDownloadSection = () => {
  return (
    <section className="bg-bitebuddy-orange text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the BiteBuddy App</h2>
            <p className="text-xl mb-6">Download the app for faster ordering and personalized recommendations</p>
            <div className="flex space-x-4">
              <button className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-bitebuddy-orange transition-colors">
                App Store
              </button>
              <button className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-bitebuddy-orange transition-colors">
                Google Play
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white/20 p-6 rounded-lg text-center">
              <div className="bg-white/20 mx-auto mb-3 w-16 h-16 flex items-center justify-center rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M17.5 0h-11c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-20c0-1.1-.9-2-2-2zm-5.5 22c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5-4h-11v-14h11v14z"/>
                </svg>
              </div>
              <p className="text-lg font-medium">App Screenshot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
