import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function ReservationCTA() {
  return (
    <section className="py-section-lg relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80)' }}
        />
        <div className="absolute inset-0 bg-noir-950/80" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center"
      >
        <span className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-6 block">
          JOIN US
        </span>
        <h2 className="font-serif text-heading-1 text-ivory mb-6 italic">
          Your table is waiting.
        </h2>
        <p className="text-ivory-dim text-lg mb-10 max-w-md mx-auto">
          Experience the art of dining at NOIR & SAGE. Reserve your evening with us.
        </p>
        
        <Button href="/reservations" variant="primary">
          Make a Reservation
        </Button>
      </motion.div>
    </section>
  );
}
