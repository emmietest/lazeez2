import React from 'react';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-lazeez-dark text-white pt-20 pb-12 px-6">
      
      {/* Top SVG Divider */}
<div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
  <svg
    viewBox="0 0 100 24"
    preserveAspectRatio="none"
    className="w-full h-12"
  >
    {/* Cream fill */}
    <polygon
      points="0,0 100,0 50,22"
      fill="#F5F1EC" // lazeez-cream
    />

    {/* Green edge */}
    <polyline
      points="0,0 50,22 100,0"
      fill="none"
      stroke="#7CB342" // lazeez-green
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
</div>

      <div className="max-w-md mx-auto flex flex-col items-center text-center space-y-10">
        
        {/* Footer Logo */}
        <img src={logo} alt="Lazeez Eats" className="w-48 object-contain" />

        {/* Hours */}
        <div className="space-y-2">
            <h3 className="font-display text-3xl uppercase tracking-wide">Hours</h3>
            <p className="font-sans font-medium text-lg text-gray-300">Mon - Fri: 10 AM — 10 PM</p>
            <p className="font-sans font-medium text-lg text-gray-300">Sat: 9 AM — 10 PM</p>
            <p className="font-sans font-medium text-lg text-gray-300">Sun: 9 AM — 7 AM</p>
        </div>

        {/* Location */}
        <div className="space-y-2">
            <h3 className="font-display text-3xl uppercase tracking-wide">Location</h3>
            <p className="font-sans font-medium text-lg text-gray-300 underline underline-offset-4 decoration-lazeez-green">
                2643 Ellsworth Rd, Ypsilanti, MI<br />
                48197
            </p>
            <p className="font-sans font-medium text-lg text-gray-300">
                (734) 340-3576
            </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2 pt-6">
            <a href="#menu" className="font-display text-4xl uppercase hover:text-lazeez-green transition-colors">View Menu</a>
            <a href="#" className="font-display text-4xl uppercase text-lazeez-green hover:text-white transition-colors">Order Now</a>
        </div>
      </div>
      
      <div className="mt-16 text-center text-xs text-gray-600 font-sans">
        © {new Date().getFullYear()} Lazeez Eats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;