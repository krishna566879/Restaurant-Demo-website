import React from 'react';
import { motion } from 'framer-motion';
import ImageReveal from '../ui/ImageReveal';
import { DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

export default function ChefStory() {
  return (
    <section className="py-16 md:py-24 lg:py-section bg-noir-950 overflow-hidden">
      <div className="max-w-site mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] w-full max-w-lg mx-auto lg:max-w-none">
              <ImageReveal 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" 
                alt="Chef Adrian Vale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <motion.div
            variants={staggerContainer(0.07, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            className="lg:col-span-3"
          >
            <motion.div variants={fadeUpSubtle}>
              <p className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4">
                The Chef
              </p>
              
              <h2 className="font-serif text-heading-2 text-ivory mb-2">
                Chef Adrian Vale
              </h2>
              
              <p className="text-champagne text-sm uppercase tracking-wider mb-6 md:mb-8">
                Executive Chef & Founder
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeUpItem}
              className="text-ivory-dim leading-relaxed space-y-6"
            >
              <p>
                With over two decades of experience across Michelin-starred kitchens in Lyon, Copenhagen, and London, Chef Adrian Vale brings a philosophy of restraint, seasonality, and deep respect for ingredients to every plate at NOIR & SAGE.
              </p>
              <p>
                Trained under the legendary Marc Dupont in Lyon, Adrian spent five years at Copenhagen's Nørrebro before leading the kitchen at London's celebrated Ember & Vine. In 2019, he returned to India to create something deeply personal — a restaurant that bridges the precision of European technique with the vibrancy of local, seasonal produce.
              </p>
            </motion.div>

            <motion.blockquote
              variants={fadeUpItem}
              className="font-serif italic text-base sm:text-lg text-ivory border-l-2 border-sage pl-5 sm:pl-6 mt-8 py-2"
            >
              "I believe the finest dishes are born from patience, the best ingredients, and a willingness to let simplicity speak."
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
