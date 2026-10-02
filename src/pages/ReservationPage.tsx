import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SEO, { baseRestaurantJsonLd } from '../components/ui/SEO';
import Container from '../components/layout/Container';
import ReservationForm from '../components/reservation/ReservationForm';
import ContactInfo from '../components/reservation/ContactInfo';
import { LUXURY_EASE, staggerContainer, fadeUpItem, fadeUpSubtle } from '../utils/motion';

export default function ReservationPage() {
  return (
    <PageTransition>
      <SEO
        title="Reservations & Contact — NOIR & SAGE"
        description="Reserve your evening at NOIR & SAGE on 42 Willow Street, Indore. Open Monday–Thursday 6:00 PM – 11:00 PM and Friday–Sunday 6:00 PM – 12:00 AM."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
        jsonLd={baseRestaurantJsonLd}
      />
      <div className="bg-noir-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] sm:min-h-[350px] w-full flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <motion.img 
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: LUXURY_EASE }}
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
              srcSet="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=640&q=80 640w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80 1920w"
              sizes="100vw"
              width={1920}
              height={1080}
              alt="NOIR & SAGE evening table reservation atmosphere"
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
            <motion.p variants={fadeUpSubtle} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-champagne mb-4">Reservations</motion.p>
            <motion.h1 variants={fadeUpItem} className="font-serif text-heading-1 italic text-ivory">Reserve Your Evening</motion.h1>
          </motion.div>
        </section>

        {/* Main Section */}
        <section className="py-16 md:py-24 lg:py-section">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-3 min-w-0">
                <ReservationForm />
              </div>
              <div className="lg:col-span-2 min-w-0">
                <ContactInfo />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}
