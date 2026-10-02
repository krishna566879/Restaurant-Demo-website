import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SEO, { baseRestaurantJsonLd } from '../components/ui/SEO';
import BrandStory from '../components/about/BrandStory';
import Philosophy from '../components/about/Philosophy';
import ChefStory from '../components/about/ChefStory';
import Timeline from '../components/about/Timeline';
import SectionHeading from '../components/ui/SectionHeading';
import ReservationCTA from '../components/home/ReservationCTA';
import { LUXURY_EASE, DEFAULT_VIEWPORT, staggerContainer, fadeUpItem, fadeUpSubtle } from '../utils/motion';

export default function AboutPage() {
  return (
    <PageTransition>
      <SEO
        title="About Us & Chef Adrian Vale — NOIR & SAGE"
        description="Discover the story behind NOIR & SAGE, founded in 2019 by Executive Chef Adrian Vale on Willow Street, Indore. Rooted in seasonality, restraint, and craft."
        image="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80"
        jsonLd={baseRestaurantJsonLd}
      />
      <div className="bg-noir-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[45vh] sm:h-[50vh] min-h-[340px] sm:min-h-[400px] w-full flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <motion.img 
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: LUXURY_EASE }}
              src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80"
              srcSet="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1920&q=80 1920w"
              sizes="100vw"
              width={1920}
              height={1080}
              alt="NOIR & SAGE dining house ambiance and story"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-noir-950/70" />
          </div>
          
          <motion.div
            variants={staggerContainer(0.07, 0.03)}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-5 sm:px-6"
          >
            <motion.p variants={fadeUpSubtle} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-champagne mb-4">About</motion.p>
            <motion.h1 variants={fadeUpItem} className="font-serif text-heading-1 italic text-ivory whitespace-pre-line">
              {"The Story Behind\nEvery Plate"}
            </motion.h1>
          </motion.div>
        </section>

        <BrandStory />
        
        <Philosophy />
        
        <ChefStory />

        {/* Ingredients / Sustainability Section */}
        <section className="py-16 md:py-24 lg:py-section bg-noir-950">
          <div className="max-w-site mx-auto px-5 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 1.03, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={DEFAULT_VIEWPORT}
              transition={{ duration: 0.45, ease: LUXURY_EASE }}
              className="group w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] min-h-[280px] sm:min-h-[380px] rounded-sm overflow-hidden mb-10 md:mb-16 bg-noir-900"
            >
              <img 
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80"
                srcSet="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80 1200w"
                sizes="(max-width: 1280px) 100vw, 1280px"
                width={1200}
                height={800}
                alt="Freshly harvested seasonal herbs and local produce for the NOIR & SAGE kitchen"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover will-change-transform transition-transform duration-260 ease-luxury group-hover:scale-[1.025]"
              />
            </motion.div>
            
            <SectionHeading 
              eyebrow="SOURCED WITH CARE"
              title="From Earth to Plate"
              subtitle="We work directly with local farms, foragers, and artisan producers. Over 80% of our ingredients are sourced within 200 kilometers of our kitchen."
              align="center"
            />
          </div>
        </section>

        <Timeline />
        
        <ReservationCTA />
      </div>
    </PageTransition>
  );
}
