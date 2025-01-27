import React from "react";
import image from './png/logo.jpg';
import Headerdiv from './headerdiv';
import twitter from './png/twitter.jpg';
import facebook from './png/facebook.png';
import instagram from './png/instagram.png';
import AgricultureHero from '../Background/agriculturehero';

const Header = () => {
  return (
    <>
      {/* Header Section */}
      <header className="bg-white border-t-4 border-green-400 flex items-center z-10 relative">
        <div className="container mx-auto p-4 flex justify-between items-center w-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={image} alt="Logo" className="h-20 w-auto" />
          </div>

          {/* Social Media and Contact Section */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <img src={twitter} alt="Twitter" className="h-8 w-auto cursor-pointer" />
              <img src={facebook} alt="Facebook" className="h-8 w-auto cursor-pointer" />
              <img src={instagram} alt="Instagram" className="h-8 w-auto cursor-pointer" />
            </div>
            <Headerdiv />
          </div>
        </div>
      </header>

      {/* Background Section */}
      <div id="backgroundHero">
        <AgricultureHero />
      </div>
    </>
  );
};

export default Header;
