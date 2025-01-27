import React from "react";
import background from './Png/background.png'; // Background image
import overlayImage from './Png/elements.png';

const AgricultureHero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`, // Dynamically set the background image
      }}
    >
      {/* Overlay PNG Element */}
      <img
        src={overlayImage}
        alt="Overlay Element"
        className="absolute  left-8" // Position and size the PNG
      />

      {/* Text Content */}
      <div className="text-center text-white px-4 relative">
        
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default AgricultureHero;
