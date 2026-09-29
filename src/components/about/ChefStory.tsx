import React from 'react';
import { motion } from 'framer-motion';
import ImageReveal from '../ui/ImageReveal';

export default function ChefStory() {
  return (
    <section className="py-section bg-noir-950">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] w-full">
              <ImageReveal 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" 
                alt="Chef Adrian Vale"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4">
                The Chef
              </p>
              
              <h2 className="font-serif text-heading-2 text-ivory mb-2">
                Chef Adrian Vale
              </h2>
              
              <p className="text-champagne text-sm uppercase tracking-wider mb-8">
                Executive Chef & Founder
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif italic text-lg text-ivory border-l-2 border-sage pl-6 mt-8 py-2"
            >
              "I believe the finest dishes are born from patience, the best ingredients, and a willingness to let simplicity speak."
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
