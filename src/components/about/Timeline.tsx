import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const milestones = [
  { year: '2019', text: "NOIR & SAGE opens its doors on Willow Street, Indore." },
  { year: '2020', text: "Named 'Best New Restaurant' by Indore Dining Guide." },
  { year: '2021', text: "Chef Adrian launches the seasonal Tasting Menu, a seven-course journey." },
  { year: '2022', text: "Private Dining Room and Chef's Counter introduced." },
  { year: '2023', text: "Featured in Condé Nast Traveller India's 'Tables Worth Travelling For.'" },
  { year: '2024', text: "Sustainability initiative launched — 80% locally sourced ingredients." }
];

export default function Timeline() {
  return (
    <section className="py-16 md:py-24 lg:py-section bg-noir-900 overflow-hidden">
      <div className="max-w-narrow mx-auto px-5 sm:px-6 md:px-12">
        <SectionHeading 
          eyebrow="MILESTONES"
          title="Our Journey"
          align="center"
        />
        
        <div className="mt-12 md:mt-16 relative ml-2 md:ml-0">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-noir-700 transform md:-translate-x-1/2" />
          
          <div className="space-y-10 md:space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={milestone.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.38, delay: index * 0.04 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  } pl-8 md:pl-0`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 top-2 md:top-auto w-3 h-3 rounded-full bg-sage transform md:-translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(20,20,20,1)]" />
                  
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'} flex flex-col`}>
                    <span className="font-serif text-champagne text-2xl mb-2">{milestone.year}</span>
                    <p className="text-ivory-dim leading-relaxed">{milestone.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
