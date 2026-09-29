import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import ImageReveal from '../ui/ImageReveal';
import { chefData } from '../../data/chef';

export default function ChefSection() {
  return (
    <section className="py-section bg-noir-900 text-ivory">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <span className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 block">
              THE CHEF
            </span>
            <h2 className="font-serif text-heading-2 text-ivory mb-2">
              {chefData.name}
            </h2>
            <p className="text-champagne text-sm uppercase tracking-wider mb-6">
              {chefData.role}
            </p>
            <p className="text-ivory-dim leading-relaxed mb-8">
              {chefData.bio}
            </p>
            
            <blockquote className="border-l-2 border-sage pl-6 font-serif italic text-lg text-ivory mt-4">
              "{chefData.philosophy}"
            </blockquote>
          </motion.div>

          <div className="relative aspect-[3/4] w-full order-1 lg:order-2">
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
