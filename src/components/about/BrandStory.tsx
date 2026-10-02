import React from 'react';
import { motion } from 'framer-motion';
import ImageReveal from '../ui/ImageReveal';
import { DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';
import brandStoryImg from '../../assets/images/noir_sage_brand_story_1790668127447.jpg';
import brandStoryWebp from '../../assets/images/noir_sage_brand_story_1790668127447.webp';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 lg:py-section bg-noir-950 overflow-hidden">
      <div className="max-w-site mx-auto px-5 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer(0.07, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={fadeUpSubtle}
              className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4"
            >
              Our Story
            </motion.p>
            
            <motion.h2
              variants={fadeUpItem}
              className="font-serif text-heading-2 text-ivory mb-6 md:mb-8"
            >
              A Place for the Unhurried
            </motion.h2>
            
            <motion.div
              variants={fadeUpItem}
              className="text-ivory-dim leading-relaxed space-y-6"
            >
              <p>
                NOIR & SAGE was founded in 2019 with a singular vision — to create a dining house where the meal is more than sustenance. It is ritual, conversation, and craft, woven together in a space designed to make time feel irrelevant.
              </p>
              <p>
                Drawing from the culinary traditions of France, Italy, and the Nordic countries, we present a menu that shifts with the seasons — always rooted in the finest ingredients, always guided by restraint and intention.
              </p>
            </motion.div>
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[3/4] w-full max-w-lg mx-auto lg:max-w-none">
              <ImageReveal 
                src={brandStoryImg}
                webpSrc={brandStoryWebp}
                width={896}
                height={1200}
                alt="Artisanal ceramic plates and candlelit crystal wine glasses at NOIR & SAGE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
