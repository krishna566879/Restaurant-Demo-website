import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { menuData } from '../../data/menu';
import { DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

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
        
        <motion.div
          variants={staggerContainer(0.07, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-12 md:gap-y-16 mt-12 md:mt-16"
        >
          {previewCategories.map((category) => (
            <motion.div 
              key={category.slug}
              variants={fadeUpItem}
            >
              <h3 className="font-serif text-heading-3 text-sage mb-6 md:mb-8 border-b border-noir-700 pb-4">
                {category.name}
              </h3>
              <motion.ul variants={staggerContainer(0.05, 0.02)} className="space-y-6 md:space-y-8">
                {category.items.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={fadeUpSubtle}
                    className="group flex flex-col transition-transform duration-180 ease-luxury hover:translate-x-1"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <span className="font-serif text-base sm:text-lg text-ivory group-hover:text-champagne transition-colors duration-180 ease-luxury min-w-0">
                        {item.name}
                      </span>
                      <div className="hidden sm:block mx-3 flex-grow border-b border-dotted border-noir-700 group-hover:border-sage/40 transition-colors duration-180 ease-luxury relative top-[-6px] min-w-[1.5rem]" />
                      <span className="font-sans text-champagne group-hover:text-ivory transition-colors duration-180 ease-luxury shrink-0 text-sm sm:text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-ivory-dim sm:pr-12">{item.description}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          className="mt-14 md:mt-20 flex justify-center"
        >
          <Button href="/menu" variant="secondary" className="w-full sm:w-auto">
            View Full Menu
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
