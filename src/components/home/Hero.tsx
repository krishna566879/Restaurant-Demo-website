import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ScrollIndicator from '../ui/ScrollIndicator';
import { LUXURY_EASE, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: LUXURY_EASE }}
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
          srcSet="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80 1920w"
          sizes="100vw"
          width={1920}
          height={1080}
          alt="Warmly lit tables and contemporary European fine dining atmosphere at NOIR & SAGE"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40" />
      </div>
      
      <motion.div 
        variants={staggerContainer(0.07, 0.04)}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto flex flex-col items-center w-full"
      >
        <motion.span variants={fadeUpSubtle} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 sm:mb-6 block">
          MODERN EUROPEAN FINE DINING
        </motion.span>
        
        <motion.h1 variants={fadeUpItem} className="font-serif text-display text-ivory mb-6 leading-tight">
          A Table <em className="italic">Worth</em><br />
          <em className="italic">Remembering.</em>
        </motion.h1>
        
        <motion.p variants={fadeUpItem} className="text-ivory-dim max-w-lg mx-auto text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
          Seasonal ingredients, thoughtful technique, and an atmosphere designed for lingering.
        </motion.p>
        
        <motion.div variants={fadeUpItem} className="mb-10 sm:mb-12 w-full sm:w-auto flex justify-center">
          <Button href="/menu" variant="primary" className="w-full sm:w-auto">
            Explore the Menu
          </Button>
        </motion.div>
        
        <motion.div variants={fadeUpSubtle} className="text-xs text-ivory-muted uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
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
