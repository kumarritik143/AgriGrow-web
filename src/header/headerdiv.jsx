import React from 'react';
import telePhone from './png/call.png';
import email from './png/email.png';
import location from './png/location.png';

function Headerdiv() {
  return (
    <div id='header div' className='flex flex-row justify-start items-center space-x-4 py-2'> {/* space between items, aligned to top */}
      
      {/* Phone Section */}
      <div className='p-1 flex items-center space-x-2'>
        <img src={telePhone} alt="phone" className="h-6 w-6" /> {/* Smaller size for icon */}
        <div>
          <h3 className='text-zinc-400 text-sm'>Call anytime</h3> {/* Smaller font size */}
          <h3 className='font-serif text-sm'>+91 7807191094</h3> {/* Smaller font size */}
        </div>
      </div>

      <span className="text-3xl opacity-30 font-thin">|</span> {/* Decreased pipe size */}

      {/* Email Section */}
      <div className='flex items-center space-x-2'>
        <img src={email} alt="email" className="h-6 w-6" /> {/* Smaller size for icon */}
        <div>
          <h3 className='text-zinc-400 text-sm'>Send email</h3> {/* Smaller font size */}
          <h3 className='font-serif text-sm'>abhishekdod1246@gmail.com</h3> {/* Smaller font size */}
        </div>
      </div>

      <span className="text-3xl opacity-30 font-thin">|</span> {/* Decreased pipe size */}

      {/* Location Section */}
      <div className='flex items-center space-x-2'>
        <img src={location} alt="location" className="h-6 w-6" /> {/* Smaller size for icon */}
        <div>
          <h3 className='text-zinc-400 text-sm'>325 Thanesar Road</h3> {/* Smaller font size */}
          <h3 className='font-serif text-sm'>Haryana, India</h3> {/* Smaller font size */}
        </div>
      </div>

    </div>
  );
}

export default Headerdiv;
