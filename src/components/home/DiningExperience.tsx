import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

export default function DiningExperience() {
  return (
    <section className="py-section-lg relative w-full overflow-hidden bg-noir-950">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      
      <Container className="relative z-10 flex items-center lg:aspect-[21/9]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl py-12 lg:py-24"
        >
          <span className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 block">
            THE EXPERIENCE
          </span>
          <h2 className="font-serif text-heading-1 text-ivory mb-6 italic">
            Designed for<br />Lingering
          </h2>
          <p className="text-ivory-dim text-lg mb-12 max-w-md">
            Every detail — from the warmth of the lighting to the weight of the silverware — is considered. NOIR & SAGE is a place to slow down, to savor, to be present.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-champagne font-medium tracking-wide uppercase text-sm">Private Dining</span>
              <span className="text-ivory-dim text-sm">Intimate spaces for up to 12 guests</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-champagne font-medium tracking-wide uppercase text-sm">Sommelier's Table</span>
              <span className="text-ivory-dim text-sm">Curated wine pairings each evening</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-champagne font-medium tracking-wide uppercase text-sm">Chef's Counter</span>
              <span className="text-ivory-dim text-sm">Watch the kitchen in action</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
