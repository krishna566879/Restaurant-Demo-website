import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { signatureDishes } from '../../data/menu';

export default function SignatureDishes() {
  return (
    <section className="py-section bg-noir-900 text-ivory">
      <Container>
        <SectionHeading 
          eyebrow="THE KITCHEN"
          title="Signature Dishes"
          subtitle="A curated selection from our seasonal menu."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-sm">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mb-2">
                <Badge variant="sage">{dish.category}</Badge>
              </div>
              <h3 className="font-serif text-lg text-ivory mb-2">{dish.name}</h3>
              <p className="text-sm text-ivory-dim flex-grow mb-4">{dish.description}</p>
              <span className="text-champagne font-sans text-sm font-medium">{dish.price}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
