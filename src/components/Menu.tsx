import React from 'react';
import MenuCard from './MenuCard';
import { MenuItem } from '../types';

const MENU_ITEMS: MenuItem[] = [
  // --- SANDWICHES ---
  {
    category: "Sandwiches",
    name: "Chicken",
    price: "$10.93",
    description: "Savory & Spiced",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    details: ["Unlimited Toppings", "Premium options available (+0.75)", "Make it a combo +$4.95"]
  },
  {
    category: "Sandwiches",
    name: "Ribeye",
    price: "$11.97",
    description: "Tender Steak",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80",
    details: ["Unlimited Toppings", "Premium options available (+0.75)", "Make it a combo +$4.95"]
  },
  {
    category: "Sandwiches",
    name: "Makali",
    price: "$8.84",
    description: "Deep Fried Veggies",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
    details: ["Unlimited Toppings", "Premium options available (+0.75)", "Make it a combo +$4.95"]
  },
  {
    category: "Sandwiches",
    name: "Chicken / Ribeye",
    price: "$14.05",
    description: "Mixed Meat Delight",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80",
    details: ["Unlimited Toppings", "Premium options available (+0.75)", "Make it a combo +$4.95"]
  },
  {
    category: "Sandwiches",
    name: "Chicken / Falafel",
    price: "$10.93",
    description: "Best of Both Worlds",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    details: ["Unlimited Toppings", "Premium options available (+0.75)", "Make it a combo +$4.95"]
  },
  
  // --- BOWLS ---
  {
    category: "Bowls",
    name: "Falafel Bowl",
    price: "$11.97",
    description: "Rice or Lettuce Base",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    details: ["Base: Rice or Lettuce", "Unlimited Toppings", "Premium options: Cauliflower, Eggplant", "Combo available +$4.95"]
  },
  {
    category: "Bowls",
    name: "Chicken Bowl",
    price: "$14.05",
    description: "Rice or Lettuce Base",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    details: ["Base: Rice or Lettuce", "Unlimited Toppings", "Premium options available", "Combo available +$4.95"]
  },
  {
    category: "Bowls",
    name: "Steak Ribeye Bowl",
    price: "$15.09",
    description: "Rice or Lettuce Base",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    details: ["Base: Rice or Lettuce", "Unlimited Toppings", "Premium options available", "Combo available +$4.95"]
  },
  {
    category: "Bowls",
    name: "Chicken / Steak",
    price: "$17.18",
    description: "The Ultimate Mix",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80",
    details: ["Base: Rice or Lettuce", "Unlimited Toppings", "Premium options available", "Combo available +$4.95"]
  },

  // --- DIPPING BOWLS ---
  {
    category: "Dipping Bowls",
    name: "Hummus",
    price: "$8.32 / $12.49",
    description: "Creamy Chickpea Dip",
    image: "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?auto=format&fit=crop&w=600&q=80",
    details: ["Small: $8.32", "Large: $12.49", "Add Protein +$2.99", "Served with fresh pita"]
  },
  {
    category: "Dipping Bowls",
    name: "Baba Ganoush",
    price: "$8.49 / $11.97",
    description: "Roasted Eggplant Dip",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80",
    details: ["Small: $8.49", "Large: $11.97", "Add Protein +$2.99", "Served with fresh pita"]
  },

  // --- FALAFEL (SIDES) ---
  {
    category: "Falafel",
    name: "6 pcs",
    price: "$4.16",
    description: "Small side",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    details: ["Golden brown", "Crispy exterior", "Soft, herbed interior"]
  },
  
  // --- SIDES ---
  {
    category: "Sides",
    name: "Fries",
    price: "$3.95",
    description: "Golden Crisp Seasoned",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80",
    details: ["One Size", "Seasoned salt", "Crispy texture"]
  },
  {
    category: "Sides",
    name: "Garlic Sauce",
    price: "$6.24",
    description: "8oz Container",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=600&q=80",
    details: ["Famous Toum", "Creamy texture", "Powerful garlic flavor"]
  },

  // --- DRINKS ---
  {
    category: "Drinks",
    name: "Soda Can",
    price: "$2.07",
    description: "Assorted Flavors",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    details: ["Coke, Diet Coke, Sprite", "Chilled"]
  },
  {
    category: "Drinks",
    name: "Water Bottle",
    price: "$1.03",
    description: "Spring Water",
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=600&q=80",
    details: ["Purified", "Chilled"]
  },

  // --- DESSERT ---
  {
    category: "Dessert",
    name: "Baklava",
    price: "$4.16",
    description: "Sweet Walnut Pastry",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80",
    details: ["Layers of filo", "Chopped nuts", "Sweetened with syrup"]
  },
  {
    category: "Dessert",
    name: "Slice of Cake",
    price: "$5.20",
    description: "Various Flavors",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    details: ["Carrot", "Mousse", "Pistachio", "Oreo", "Snickers", "Double Chocolate"]
  }
];

const CATEGORIES = ["Sandwiches", "Bowls", "Dipping Bowls", "Falafel", "Sides", "Drinks", "Dessert"];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-lazeez-dark uppercase mb-4 break-words">
            Our <span className="text-lazeez-green">Menu</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-2xl mx-auto text-lg whitespace-normal break-words">
            Authentic recipes passed down through generations. Prepared fresh daily.
          </p>
        </div>

        {CATEGORIES.map((category) => (
          <div key={category} className="mb-20 last:mb-0">
            <div className="flex items-center mb-10">
                <div className="h-[2px] bg-lazeez-green flex-1"></div>
                <h3 className="font-display text-3xl md:text-4xl px-8 text-lazeez-dark uppercase tracking-wide text-center">
                    {category}
                </h3>
                <div className="h-[2px] bg-lazeez-green flex-1"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {MENU_ITEMS.filter(item => item.category === category).map((item, index) => (
                <MenuCard
                  key={index}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  details={item.details}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center bg-lazeez-cream p-8 rounded-2xl border-2 border-lazeez-dark/5">
            <h4 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 text-lazeez-dark">Catering Available</h4>
            <p className="font-sans text-gray-600">Please speak to management about prices and options for your next event.</p>
        </div>

      </div>
    </section>
  );
};

export default Menu;