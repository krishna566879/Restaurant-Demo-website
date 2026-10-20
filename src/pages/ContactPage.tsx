import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SEO, { baseRestaurantJsonLd } from '../components/ui/SEO';
import Container from '../components/layout/Container';
import ContactDetails from '../components/contact/ContactDetails';
import FakeGoogleMap from '../components/contact/FakeGoogleMap';
import { LUXURY_EASE, staggerContainer, fadeUpItem, fadeUpSubtle } from '../utils/motion';

export default function ContactPage() {
  return (
    <PageTransition>
      <SEO
        title="Contact & Location — NOIR & SAGE"
        description="Get in touch with NOIR & SAGE. Connect via WhatsApp, phone, or Instagram. Located on 42 Willow Street, Vijay Nagar, Indore."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
        jsonLd={baseRestaurantJsonLd}
      />
      <div className="bg-noir-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[42vh] min-h-[320px] sm:min-h-[380px] w-full flex items-center justify-center pt-20 overflow-hidden">
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
              alt="NOIR & SAGE evening dining room atmosphere"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-noir-950/75" />
          </div>
          
          <motion.div
            variants={staggerContainer(0.07, 0.03)}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-5 sm:px-6 max-w-2xl mx-auto"
          >
            <motion.p variants={fadeUpSubtle} className="font-sans text-eyebrow uppercase tracking-[0.15em] text-champagne mb-4">
              Get In Touch
            </motion.p>
            <motion.h1 variants={fadeUpItem} className="font-serif text-heading-1 italic text-ivory mb-4">
              Contact & Concierge
            </motion.h1>
            <motion.p variants={fadeUpSubtle} className="text-ivory-dim font-sans text-sm sm:text-base leading-relaxed">
              For evening table inquiries, private dining salon bookings, or special requests, our team is at your service.
            </motion.p>
          </motion.div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 md:py-24 lg:py-section">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Contact Channels (Calling, WhatsApp, Instagram) */}
              <div className="lg:col-span-6 min-w-0">
                <ContactDetails />
              </div>

              {/* Fake Google Map & Location */}
              <div className="lg:col-span-6 min-w-0">
                <FakeGoogleMap />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}
