import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ScrollIndicator from '../ui/ScrollIndicator';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="NOIR & SAGE Fine Dining"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40" />
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto flex flex-col items-center w-full"
      >
        <motion.span variants={item} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 sm:mb-6 block">
          MODERN EUROPEAN FINE DINING
        </motion.span>
        
        <motion.h1 variants={item} className="font-serif text-display text-ivory mb-6 leading-tight">
          A Table <em className="italic">Worth</em><br />
          <em className="italic">Remembering.</em>
        </motion.h1>
        
        <motion.p variants={item} className="text-ivory-dim max-w-lg mx-auto text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
          Seasonal ingredients, thoughtful technique, and an atmosphere designed for lingering.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-12 w-full sm:w-auto justify-center">
          <Button href="/reservations" variant="primary" className="w-full sm:w-auto">
            Reserve a Table
          </Button>
          <Button href="/menu" variant="secondary" className="w-full sm:w-auto">
            Explore the Menu
          </Button>
        </motion.div>
        
        <motion.div variants={item} className="text-xs text-ivory-muted uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span>42 Willow Street</span>
          <span className="w-1 h-1 rounded-full bg-ivory-muted/50" />
          <span>Indore</span>
          <span className="w-1 h-1 rounded-full bg-ivory-muted/50" />
          <span>Open from 6 PM</span>
        </motion.div>
      </motion.div>
      
      <ScrollIndicator />
    </section>
  );
}
