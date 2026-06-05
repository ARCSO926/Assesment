import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Categories from './components/Categories';
import ProductCards from './components/ProductCards';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <Categories />
      <ProductCards />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;