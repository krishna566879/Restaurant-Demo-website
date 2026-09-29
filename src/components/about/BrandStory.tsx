import React from 'react';
import { motion } from 'framer-motion';
import ImageReveal from '../ui/ImageReveal';

export default function BrandStory() {
  return (
    <section className="py-section bg-noir-950">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4"
            >
              Our Story
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-heading-2 text-ivory mb-8"
            >
              A Place for the Unhurried
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-ivory-dim leading-relaxed space-y-6"
            >
              <p>
                NOIR & SAGE was founded in 2019 with a singular vision — to create a dining house where the meal is more than sustenance. It is ritual, conversation, and craft, woven together in a space designed to make time feel irrelevant.
              </p>
              <p>
                Drawing from the culinary traditions of France, Italy, and the Nordic countries, we present a menu that shifts with the seasons — always rooted in the finest ingredients, always guided by restraint and intention.
              </p>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[3/4] w-full">
              <ImageReveal 
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80" 
                alt="NOIR & SAGE Interior details"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
