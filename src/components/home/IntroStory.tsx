import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import ImageReveal from '../ui/ImageReveal';

export default function IntroStory() {
  return (
    <section className="py-section bg-noir-950 text-ivory">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] w-full">
            <ImageReveal 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1200&q=80" 
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <span className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 block">
              OUR STORY
            </span>
            <h2 className="font-serif text-heading-2 text-ivory mb-8">
              Where Craft Meets Occasion
            </h2>
            <p className="text-ivory-dim leading-relaxed mb-12">
              Nestled on Willow Street, NOIR & SAGE was born from a simple conviction — that dining should be unhurried, intentional, and memorable. Every element, from the hand-selected produce to the quiet hum of the room, is curated to create an experience that lingers long after the last course.
            </p>
            
            <div className="w-12 h-px bg-sage mb-4" />
            <p className="text-sm text-ivory-muted uppercase tracking-wider">
              Est. 2019 · Indore, India
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
