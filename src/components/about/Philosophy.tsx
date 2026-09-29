import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Philosophy() {
  return (
    <section className="py-section bg-noir-900">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="PHILOSOPHY"
          title="What We Believe"
          align="center"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
        >
          {principles.map((principle) => (
            <motion.div key={principle.num} variants={itemVariants} className="flex flex-col">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-serif text-sage text-xl">{principle.num}</span>
                <div className="h-px bg-sage/30 flex-grow" />
              </div>
              <h3 className="font-serif text-heading-3 text-ivory mb-4">{principle.title}</h3>
              <p className="text-ivory-dim leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
