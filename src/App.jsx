import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';

const App = () => {
  const categories = [
    { name: 'Skincare', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500' },
    { name: 'Makeup', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500' },
    { name: 'Body Care', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500' },
    { name: 'Fragrance', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500' },
  ];

  const products = [
    { id: 1, title: 'Radiance Face Cream', category: 'SKINCARE', price: '$45.00', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500' },
    { id: 2, title: 'Hydra Glow Moisturizer', category: 'SKINCARE', price: '$38.00', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500' },
    { id: 3, title: 'Botanical Facial Toner', category: 'SKINCARE', price: '$32.00', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500' },
    { id: 4, title: 'Velvet Body Oil', category: 'BODY CARE', price: '$52.00', img: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E] font-sans antialiased">
      <TopBar />
      <Header />
      <HeroSection />
      <CategorySection categories={categories} />
      <ProductGrid products={products} />
      <PromoBanner />
      <Footer />
    </div>
  );
}

export default App