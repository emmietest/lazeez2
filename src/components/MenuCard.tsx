import React, { useRef, useState, useEffect } from 'react';

interface MenuCardProps {
  name: string;
  price: string;
  description?: string;
  details?: string[];
  image: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, price, description, details, image }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group w-full h-[340px] [perspective:1000px] cursor-pointer md:cursor-default"
      ref={cardRef}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] 
          ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
          md:group-hover:[transform:rotateY(180deg)]`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden flex flex-col [backface-visibility:hidden]">
          
          {/* Image Section */}
          <div className="relative h-[55%] w-full overflow-hidden">
             <img 
               src={image} 
               alt={name} 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
             />
             <div className="absolute top-3 right-3 bg-lazeez-green text-white font-display px-3 py-1 text-lg shadow-md rounded-sm rotate-1">
                {price}
             </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-5 flex flex-col items-center justify-center text-center">
            <h3 className="font-display text-2xl uppercase text-lazeez-dark leading-tight mb-2">{name}</h3>
            {description && (
              <p className="font-sans text-gray-500 text-sm font-medium">{description}</p>
            )}
          </div>

          <div className="pb-4 text-center">
             <span className="text-[15px] font-bold text-white- uppercase tracking-widest border-t border-gray-100 pt-2 px-4">Tap for details</span>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-lazeez-dark rounded-xl shadow-xl p-6 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border-2 border-lazeez-green">
          <h4 className="font-display text-2xl text-lazeez-green mb-6 border-b border-gray-700 pb-2 w-full">Details</h4>
          <ul className="space-y-3 w-full">
            {details && details.length > 0 ? (
                details.map((detail, idx) => (
                    <li key={idx} className="font-sans text-white text-sm font-medium flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-lazeez-green"></div>
                        {detail}
                    </li>
                ))
            ) : (
                <li className="font-sans text-white text-sm">Ask server for details</li>
            )}
          </ul>
           <div className="mt-auto pt-4">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Flip to view item</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;