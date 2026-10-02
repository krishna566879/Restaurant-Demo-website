import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

export default function DiningExperience() {
  return (
    <section className="py-16 md:py-24 lg:py-section-lg relative w-full overflow-hidden bg-noir-950">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
          srcSet="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80 1600w"
          sizes="100vw"
          width={1600}
          height={900}
          alt="Ambient evening dining room and sommelier table at NOIR & SAGE"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
      </div>
      
      <Container className="relative z-10 flex items-center">
        <motion.div 
          variants={staggerContainer(0.07, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="max-w-xl py-8 sm:py-12 lg:py-16"
        >
          <motion.span variants={fadeUpSubtle} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 block">
            THE EXPERIENCE
          </motion.span>
          <motion.h2 variants={fadeUpItem} className="font-serif text-heading-1 text-ivory mb-6 italic">
            Designed for<br />Lingering
          </motion.h2>
          <motion.p variants={fadeUpItem} className="text-ivory-dim text-base sm:text-lg mb-10 sm:mb-12 max-w-md">
            Every detail — from the warmth of the lighting to the weight of the silverware — is considered. NOIR & SAGE is a place to slow down, to savor, to be present.
          </motion.p>
          
          <motion.div variants={staggerContainer(0.06)} className="space-y-6">
            <motion.div variants={fadeUpSubtle} className="group flex flex-col gap-1 pl-4 border-l border-noir-700 hover:border-sage transition-colors duration-200 ease-luxury">
              <span className="text-champagne group-hover:text-ivory transition-colors duration-180 ease-luxury font-medium tracking-wide uppercase text-sm">Private Dining</span>
              <span className="text-ivory-dim text-sm">Intimate spaces for up to 12 guests</span>
            </motion.div>
            <motion.div variants={fadeUpSubtle} className="group flex flex-col gap-1 pl-4 border-l border-noir-700 hover:border-sage transition-colors duration-200 ease-luxury">
              <span className="text-champagne group-hover:text-ivory transition-colors duration-180 ease-luxury font-medium tracking-wide uppercase text-sm">Sommelier's Table</span>
              <span className="text-ivory-dim text-sm">Curated wine pairings each evening</span>
            </motion.div>
            <motion.div variants={fadeUpSubtle} className="group flex flex-col gap-1 pl-4 border-l border-noir-700 hover:border-sage transition-colors duration-200 ease-luxury">
              <span className="text-champagne group-hover:text-ivory transition-colors duration-180 ease-luxury font-medium tracking-wide uppercase text-sm">Chef's Counter</span>
              <span className="text-ivory-dim text-sm">Watch the kitchen in action</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
