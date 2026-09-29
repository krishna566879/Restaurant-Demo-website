import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import ImageReveal from '../ui/ImageReveal';
import interiorImg from '../../assets/images/noir_sage_interior_1790668115230.jpg';

export default function IntroStory() {
  return (
    <section className="py-16 md:py-24 lg:py-section bg-noir-950 text-ivory overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] w-full max-w-lg mx-auto lg:max-w-none">
            <ImageReveal 
              src={interiorImg} 
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <span className="font-sans text-eyebrow uppercase tracking-[0.15em] text-sage mb-4 block">
              OUR STORY
            </span>
            <h2 className="font-serif text-heading-2 text-ivory mb-6 md:mb-8">
              Where Craft Meets Occasion
            </h2>
            <p className="text-ivory-dim leading-relaxed mb-8 md:mb-12">
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
