import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-lazeez-cream text-lazeez-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default App;