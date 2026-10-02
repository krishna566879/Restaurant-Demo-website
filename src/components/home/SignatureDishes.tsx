import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { signatureDishes } from '../../data/menu';
import { optimizeUnsplashUrl, getUnsplashSrcSet } from '../../utils/images';
import { DEFAULT_VIEWPORT, staggerContainer, cardRevealItem } from '../../utils/motion';

export default function SignatureDishes() {
  return (
    <section className="py-16 md:py-24 lg:py-section bg-noir-900 text-ivory">
      <Container>
        <SectionHeading 
          eyebrow="THE KITCHEN"
          title="Signature Dishes"
          subtitle="A curated selection from our seasonal menu."
        />
        
        <motion.div
          variants={staggerContainer(0.075, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mt-12 md:mt-16"
        >
          {signatureDishes.map((dish) => (
            <motion.div
              key={dish.name}
              variants={cardRevealItem}
              className="group flex flex-col will-change-transform transition-transform duration-240 ease-luxury hover:-translate-y-1.5"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-5 sm:mb-6 rounded-sm bg-noir-800 border border-noir-800/80 group-hover:border-sage/35 transition-[border-color,box-shadow] duration-240 ease-luxury group-hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.7)]">
                <img 
                  src={optimizeUnsplashUrl(dish.image, 600)}
                  srcSet={getUnsplashSrcSet(dish.image, [400, 600, 800])}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  width={600}
                  height={800}
                  alt={`${dish.name} — ${dish.description}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover will-change-transform transition-transform duration-260 ease-luxury group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-240 ease-luxury pointer-events-none" />
              </div>
              <div className="mb-2">
                <Badge variant="sage">{dish.category}</Badge>
              </div>
              <h3 className="font-serif text-lg text-ivory group-hover:text-champagne transition-colors duration-180 ease-luxury mb-2">
                {dish.name}
              </h3>
              <p className="text-sm text-ivory-dim flex-grow mb-4">{dish.description}</p>
              <span className="text-champagne group-hover:text-ivory transition-colors duration-180 ease-luxury font-sans text-sm font-medium">
                {dish.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
