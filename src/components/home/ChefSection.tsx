import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import ImageReveal from '../ui/ImageReveal';
import { chefData } from '../../data/chef';
import { DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

export default function ChefSection() {
  return (
    <section className="py-16 md:py-24 lg:py-section bg-noir-900 text-ivory overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div 
            variants={staggerContainer(0.07, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <motion.span variants={fadeUpSubtle} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 block">
              THE CHEF
            </motion.span>
            <motion.h2 variants={fadeUpItem} className="font-serif text-heading-2 text-ivory mb-2">
              {chefData.name}
            </motion.h2>
            <motion.p variants={fadeUpSubtle} className="text-champagne text-sm uppercase tracking-wider mb-6">
              {chefData.role}
            </motion.p>
            <motion.p variants={fadeUpItem} className="text-ivory-dim leading-relaxed mb-8">
              {chefData.bio}
            </motion.p>
            
            <motion.blockquote variants={fadeUpItem} className="border-l-2 border-sage pl-5 sm:pl-6 font-serif italic text-base sm:text-lg text-ivory mt-2 sm:mt-4">
              "{chefData.philosophy}"
            </motion.blockquote>
          </motion.div>

          <div className="relative aspect-[3/4] w-full max-w-lg mx-auto lg:max-w-none order-1 lg:order-2">
            <ImageReveal 
              src={chefData.portrait} 
              alt={chefData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
