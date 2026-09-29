import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function ReservationCTA() {
  return (
    <section className="py-20 md:py-28 lg:py-section-lg relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
          alt="Reserve a table at NOIR & SAGE"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-noir-950/80" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 text-center px-5 sm:px-6 max-w-2xl mx-auto flex flex-col items-center w-full"
      >
        <span className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 sm:mb-6 block">
          JOIN US
        </span>
        <h2 className="font-serif text-heading-1 text-ivory mb-6 italic">
          Your table is waiting.
        </h2>
        <p className="text-ivory-dim text-base sm:text-lg mb-8 sm:mb-10 max-w-md mx-auto">
          Experience the art of dining at NOIR & SAGE. Reserve your evening with us.
        </p>
        
        <Button href="/reservations" variant="primary" className="w-full sm:w-auto">
          Make a Reservation
        </Button>
      </motion.div>
    </section>
  );
}
