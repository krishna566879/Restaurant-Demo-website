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
    <section className="py-section bg-noir-950 text-ivory">
      <Container>
        <SectionHeading 
          eyebrow="A TASTE"
          title="From the Menu"
        />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-16 mt-16">
          {previewCategories.map((category, catIdx) => (
            <motion.div 
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              <h3 className="font-serif text-heading-3 text-sage mb-8 border-b border-noir-700 pb-4">
                {category.name}
              </h3>
              <ul className="space-y-8">
                {category.items.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <div className="flex items-baseline mb-2">
                      <span className="font-serif text-lg text-ivory whitespace-nowrap">{item.name}</span>
                      <div className="mx-4 flex-grow border-b border-dotted border-noir-700 relative top-[-6px]" />
                      <span className="font-sans text-champagne">{item.price}</span>
                    </div>
                    <p className="text-sm text-ivory-dim pr-12">{item.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <Button href="/menu" variant="secondary">
            View Full Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
