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
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.span variants={item} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-6 block">
          MODERN EUROPEAN FINE DINING
        </motion.span>
        
        <motion.h1 variants={item} className="font-serif text-display text-ivory mb-6 leading-tight">
          A Table <em className="italic">Worth</em><br />
          <em className="italic">Remembering.</em>
        </motion.h1>
        
        <motion.p variants={item} className="text-ivory-dim max-w-lg mx-auto text-lg mb-10 leading-relaxed">
          Seasonal ingredients, thoughtful technique, and an atmosphere designed for lingering.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button href="/reservations" variant="primary">
            Reserve a Table
          </Button>
          <Button href="/menu" variant="secondary">
            Explore the Menu
          </Button>
        </motion.div>
        
        <motion.div variants={item} className="text-xs text-ivory-muted uppercase tracking-widest flex items-center gap-3">
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
