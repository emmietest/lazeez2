import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-lazeez-cream pt-20 pb-12 px-4 relative">
      <div className="max-w-md mx-auto text-center flex flex-col items-center gap-8">
        
        {/* Logo Text
        <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-lazeez-dark">
          Eats Lazeez
        </h2> */}

        <p className="font-sans text-gray-700 text-lg md:text-xl leading-relaxed max-w-sm">
          Come taste the dedication to quality and flavor that makes us the true Home of the Falafel.
        </p>

        <h2 className="font-display text-5xl md:text-7xl leading-none text-lazeez-green uppercase">
          The Home<br />
          Of Falafel
        </h2>

        <div className="relative w-full flex flex-col items-center">
           {/* Halal Badge */}
            <div className="absolute -top-4 left-4 md:left-0 z-10">
                <div className="w-20 h-20 rounded-full bg-green-700 text-white flex items-center justify-center border-2 border-white shadow-lg">
                    <span className="font-bold text-xs">100%<br/>HALAL</span>
                </div>
            </div>

            <img 
                // src="https://picsum.photos/500/400?random=2" 
                src={`${import.meta.env.BASE_URL}assets/Lazeez_Eats-01.jpg`}
                alt="Lazeez_Eats-01" 
                className="w-full max-w-[350px] object-cover rounded-lg shadow-xl rotate-[-2deg]"
            />
        </div>

        <div className="mt-12 w-full max-w-[350px]">
             <img 
                src={`${import.meta.env.BASE_URL}assets/Lazeez_Eats-04.jpg`} 
                alt="Lazeez_Eats-04" 
                className="w-full h-auto rounded-full border-4 border-lazeez-green shadow-xl"
            />
        </div>
      </div>
    </section>
  );
};

export default About;