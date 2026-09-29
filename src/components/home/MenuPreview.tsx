import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { menuData } from '../../data/menu';

export default function MenuPreview() {
  // Use first 4 categories and slice their items to max 3
  const previewCategories = menuData.slice(0, 4).map(cat => ({
    ...cat,
    items: cat.items.slice(0, 3)
  }));

  return (
    <section className="py-16 md:py-24 lg:py-section bg-noir-950 text-ivory">
      <Container>
        <SectionHeading 
          eyebrow="A TASTE"
          title="From the Menu"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-12 md:gap-y-16 mt-12 md:mt-16">
          {previewCategories.map((category, catIdx) => (
            <motion.div 
              key={category.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.38, delay: catIdx * 0.05 }}
            >
              <h3 className="font-serif text-heading-3 text-sage mb-6 md:mb-8 border-b border-noir-700 pb-4">
                {category.name}
              </h3>
              <ul className="space-y-6 md:space-y-8">
                {category.items.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <span className="font-serif text-base sm:text-lg text-ivory min-w-0">{item.name}</span>
                      <div className="hidden sm:block mx-3 flex-grow border-b border-dotted border-noir-700 relative top-[-6px] min-w-[1.5rem]" />
                      <span className="font-sans text-champagne shrink-0 text-sm sm:text-base">{item.price}</span>
                    </div>
                    <p className="text-sm text-ivory-dim sm:pr-12">{item.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-14 md:mt-20 flex justify-center">
          <Button href="/menu" variant="secondary" className="w-full sm:w-auto">
            View Full Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
