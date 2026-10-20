import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SEO, { baseRestaurantJsonLd } from '../components/ui/SEO';
import CategoryNav from '../components/menu/CategoryNav';
import MenuCategory from '../components/menu/MenuCategory';
import Button from '../components/ui/Button';
import { menuData } from '../data/menu';
import { LUXURY_EASE, DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../utils/motion';

const menuJsonLd = {
  ...baseRestaurantJsonLd,
  hasMenu: {
    '@type': 'Menu',
    name: 'NOIR & SAGE Seasonal Menu',
    hasMenuSection: menuData.map((category) => ({
      '@type': 'MenuSection',
      name: category.name,
      hasMenuItem: category.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.price.replace(/[^0-9.]/g, ''),
          priceCurrency: 'INR',
        },
      })),
    })),
  },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].slug);

  const handleCategoryChange = useCallback((slug: string) => {
    setActiveCategory(slug);
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveCategory(visible[0].target.id);
        }
      },
      {
        rootMargin: '-140px 0px -65% 0px',
        threshold: 0,
      }
    );

    menuData.forEach((cat) => {
      const el = document.getElementById(cat.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
      <SEO
        title="The Menu — NOIR & SAGE Contemporary Fine Dining"
        description="Explore our seasonal Modern European menu at NOIR & SAGE in Indore, featuring starters, small plates, mains, desserts, and sommelier wine pairings."
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
        jsonLd={menuJsonLd}
      />
      <div className="bg-noir-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[45vh] sm:h-[50vh] min-h-[340px] sm:min-h-[400px] w-full flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <motion.img 
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: LUXURY_EASE }}
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
              srcSet="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80 1920w"
              sizes="100vw"
              width={1920}
              height={1080}
              alt="NOIR & SAGE culinary presentation and dining table"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-noir-950/70" />
          </div>
          
          <motion.div
            variants={staggerContainer(0.07, 0.03)}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-5 sm:px-6"
          >
            <motion.p variants={fadeUpSubtle} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-champagne mb-4">The Menu</motion.p>
            <motion.h1 variants={fadeUpItem} className="font-serif text-heading-1 italic text-ivory mb-4 sm:mb-6">Tonight, at NOIR & SAGE</motion.h1>
            <motion.p variants={fadeUpSubtle} className="text-ivory-dim text-base sm:text-lg max-w-md mx-auto">Seasonally composed, thoughtfully presented.</motion.p>
          </motion.div>
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
        <motion.section
          variants={staggerContainer(0.065, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="py-16 md:py-24 border-t border-noir-800 text-center px-5 sm:px-6"
        >
          <motion.h2 variants={fadeUpItem} className="font-serif text-heading-3 text-ivory mb-8">
            Have questions about our seasonal creations or private dining?
          </motion.h2>
          <motion.div variants={fadeUpItem}>
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
