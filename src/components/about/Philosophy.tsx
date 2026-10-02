import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { DEFAULT_VIEWPORT, staggerContainer, cardRevealItem } from '../../utils/motion';

const principles = [
  {
    num: '01',
    title: 'Seasonality',
    description: 'Our menu is never static. It breathes with the seasons — celebrating the fleeting, the rare, and the perfectly ripe.'
  },
  {
    num: '02',
    title: 'Restraint',
    description: 'We believe in the power of simplicity. Every ingredient on the plate has earned its place. Nothing more, nothing less.'
  },
  {
    num: '03',
    title: 'Craft',
    description: 'From hand-rolled pasta to house-cultured butter, the details matter. Our kitchen is a place of patience and precision.'
  }
];

export default function Philosophy() {
  return (
    <section className="py-16 md:py-24 lg:py-section bg-noir-900">
      <div className="max-w-site mx-auto px-5 sm:px-6 md:px-12">
        <SectionHeading 
          eyebrow="PHILOSOPHY"
          title="What We Believe"
          align="center"
        />
        
        <motion.div 
          variants={staggerContainer(0.08, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-12 md:mt-16"
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.num}
              variants={cardRevealItem}
              className="group flex flex-col transition-transform duration-240 ease-luxury hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="font-serif text-sage group-hover:text-champagne transition-colors duration-180 ease-luxury text-xl">
                  {principle.num}
                </span>
                <div className="h-px bg-sage/30 group-hover:bg-sage/70 transition-colors duration-240 ease-luxury flex-grow" />
              </div>
              <h3 className="font-serif text-heading-3 text-ivory group-hover:text-champagne transition-colors duration-180 ease-luxury mb-4">
                {principle.title}
              </h3>
              <p className="text-ivory-dim leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
