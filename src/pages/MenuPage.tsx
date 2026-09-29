import React, { useState, useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import CategoryNav from '../components/menu/CategoryNav';
import MenuCategory from '../components/menu/MenuCategory';
import Button from '../components/ui/Button';
import { menuData } from '../data/menu';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].slug);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map(cat => document.getElementById(cat.slug));
      const scrollPosition = window.scrollY + 200; // Offset for sticky header
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          if (activeCategory !== menuData[i].slug) {
            setActiveCategory(menuData[i].slug);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  return (
    <PageTransition>
      <div className="bg-noir-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[45vh] sm:h-[50vh] min-h-[340px] sm:min-h-[400px] w-full flex items-center justify-center pt-20">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80" 
              alt="NOIR & SAGE Menu"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-noir-950/70" />
          </div>
          
          <div className="relative z-10 text-center px-5 sm:px-6">
            <p className="font-sans text-eyebrow uppercase tracking-[0.15em] text-champagne mb-4">The Menu</p>
            <h1 className="font-serif text-heading-1 italic text-ivory mb-4 sm:mb-6">Tonight, at NOIR & SAGE</h1>
            <p className="text-ivory-dim text-base sm:text-lg max-w-md mx-auto">Seasonally composed, thoughtfully presented.</p>
          </div>
        </section>

        {/* Category Navigation */}
        <CategoryNav 
          categories={menuData} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />

        {/* Menu Content */}
        <section className="py-16 md:py-24 lg:py-section max-w-narrow mx-auto px-5 sm:px-6 md:px-12">
          {menuData.map((category) => (
            <MenuCategory 
              key={category.slug}
              name={category.name}
              slug={category.slug}
              items={category.items}
            />
          ))}
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 border-t border-noir-800 text-center px-5 sm:px-6">
          <h2 className="font-serif text-heading-3 text-ivory mb-8">Reserve your table to experience the full menu.</h2>
          <Button href="/reservations" variant="primary" className="w-full sm:w-auto">
            Make a Reservation
          </Button>
        </section>
      </div>
    </PageTransition>
  );
}
