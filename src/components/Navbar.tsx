import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import logo from '../../assets/logo.png';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lazeez-dark text-white px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        
        {/* Left Section: Logo (image) */}
        <a href="#" className="relative group flex items-center shrink-0">
            <img src={logo} alt="Lazeez Eats" className="h-16 w-36 md:w-48 object-contain" />
        </a>

        {/* Center Section: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-12 font-display tracking-wide text-lg lg:text-xl items-center">
            <a href="#" className="hover:text-lazeez-green transition-colors">Home</a>
            <a href="#menu" className="hover:text-lazeez-green transition-colors">Menu</a>
            <a href="#about" className="hover:text-lazeez-green transition-colors">About</a>
            <a href="#contact" className="hover:text-lazeez-green transition-colors">Contact</a>
        </div>

        {/* Right Section: Big Order Button & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
            
            {/* Big Desktop Order Button */}
            <a 
                href="#" 
                className="hidden md:flex items-center gap-2 bg-lazeez-green text-white font-display uppercase tracking-widest text-lg px-6 lg:px-8 py-3 hover:bg-white hover:text-lazeez-dark transition-all duration-300 transform skew-x-[-10deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 group"
            >
                <div className="skew-x-[10deg] flex items-center gap-3">
                    <span>Order Now</span>
                    {/* <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" /> */}
                </div>
            </a>

            {/* Mobile Order Icon Button (Compact) */}
            <a 
                href="#" 
                className="flex md:hidden items-center gap-2 bg-lazeez-green text-white font-display uppercase tracking-widest text-lg px-6 lg:px-8 py-3 hover:bg-white hover:text-lazeez-dark transition-all duration-300 transform skew-x-[-10deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 group"
            >
                <div className="skew-x-[10deg] flex items-center gap-3">
                    <span>Order Now</span>
                    {/* <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" /> */}
                </div>
            </a>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="md:hidden text-white hover:text-lazeez-green transition-colors">
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-lazeez-dark border-t border-gray-800 p-6 flex flex-col items-center space-y-6 font-display text-xl tracking-wider shadow-2xl h-[calc(100vh-80px)] overflow-y-auto">
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-lazeez-green">Home</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="hover:text-lazeez-green">Menu</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-lazeez-green">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-lazeez-green">Contact</a>
            
            <div className="pt-8 w-full max-w-xs">
                 <a href="#" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-lazeez-green text-white px-8 py-4 w-full text-center hover:bg-white hover:text-lazeez-dark transition-colors font-bold uppercase tracking-widest text-2xl skew-x-[-10deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                    <div className="skew-x-[10deg] flex items-center gap-2">
                         {/* <ShoppingBag className="w-6 h-6" /> */}
                        Order Online
                    </div>
                </a>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;