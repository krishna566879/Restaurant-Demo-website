import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

export default function ReservationCTA() {
  return (
    <section className="py-20 md:py-28 lg:py-section-lg relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
          srcSet="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80 1600w"
          sizes="100vw"
          width={1600}
          height={900}
          alt="Evening table setting awaiting guests at NOIR & SAGE"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-noir-950/80" />
      </div>
      
      <motion.div 
        variants={staggerContainer(0.07, 0.04)}
        initial="hidden"
        whileInView="visible"
        viewport={DEFAULT_VIEWPORT}
        className="relative z-10 text-center px-5 sm:px-6 max-w-2xl mx-auto flex flex-col items-center w-full"
      >
        <motion.span variants={fadeUpSubtle} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 sm:mb-6 block">
          JOIN US
        </motion.span>
        <motion.h2 variants={fadeUpItem} className="font-serif text-heading-1 text-ivory mb-6 italic">
          Your table is waiting.
        </motion.h2>
        <motion.p variants={fadeUpItem} className="text-ivory-dim text-base sm:text-lg mb-8 sm:mb-10 max-w-md mx-auto">
          Experience the art of dining at NOIR & SAGE. Reserve your evening with us.
        </motion.p>
        
        <motion.div variants={fadeUpItem} className="w-full sm:w-auto">
          <Button href="/reservations" variant="primary" className="w-full sm:w-auto">
            Make a Reservation
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
