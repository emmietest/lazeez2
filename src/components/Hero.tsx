import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh Mediterranean Hummus Bowl"
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    alt: "Healthy Salad Bowl with Fresh Veggies"
  },
  {
    src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    alt: "Authentic Chicken Shawarma"
  },
  {
    src: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&w=800&q=80",
    alt: "Crispy Falafel Platter"
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative bg-lazeez-cream pt-12 pb-24 px-4 overflow-hidden">
      <div className="max-w-md mx-auto text-center relative z-10">
        <p className="font-sans text-sm md:text-base mb-2 font-medium text-gray-800">
          fresh ingredients & flavor.
        </p>
        
        <h1 className="font-display text-6xl md:text-8xl leading-[0.9] text-lazeez-dark uppercase mb-6">
          Your Bowl,<br />
          The <br />
          <span className="text-lazeez-green">Authentic</span><br />
          Way
        </h1>

        <div 
          className="relative mt-8 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            {/* Decorative Splatter effect behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Carousel Container */}
            <div className="relative w-full max-w-[400px] mx-auto aspect-square">
              {CAROUSEL_IMAGES.map((img, index) => (
                <img 
                    key={index}
                    src={img.src} 
                    alt={img.alt} 
                    className={`absolute inset-0 w-full h-full rounded-full shadow-2xl border-4 border-white object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                />
              ))}

              {/* Navigation Controls */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white/90 hover:bg-lazeez-green hover:text-white text-lazeez-dark p-3 rounded-full shadow-lg transition-all backdrop-blur-sm transform hover:scale-110"
                aria-label="Previous dish"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white/90 hover:bg-lazeez-green hover:text-white text-lazeez-dark p-3 rounded-full shadow-lg transition-all backdrop-blur-sm transform hover:scale-110"
                aria-label="Next dish"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {CAROUSEL_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'w-8 bg-lazeez-green' 
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
        </div>
      </div>
      
      {/* Chevron Divider */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20">
         <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-8 md:h-12 text-lazeez-cream fill-current drop-shadow-sm">
             <polygon points="0,0 50,10 100,0" className="fill-transparent stroke-lazeez-green stroke-[0.5]" />
         </svg>
         {/* Using a pseudo-element style approach with SVG for the sharp V shape divider */}
         <div className="w-full h-6 flex justify-center items-end">
            <div className="w-0 h-0 
                border-l-[50vw] border-l-transparent
                border-r-[50vw] border-r-transparent
                border-t-[30px] border-t-lazeez-cream">
            </div>
         </div>
         {/* Green accent line following the V */}
         <div className="absolute top-6 left-0 w-full flex justify-center pointer-events-none">
             <div className="w-0 h-0 
                border-l-[50vw] border-l-transparent
                border-r-[50vw] border-r-transparent
                border-t-[4px] border-t-lazeez-green">
             </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;