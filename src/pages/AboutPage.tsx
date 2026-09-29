import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import BrandStory from '../components/about/BrandStory';
import Philosophy from '../components/about/Philosophy';
import ChefStory from '../components/about/ChefStory';
import Timeline from '../components/about/Timeline';
import SectionHeading from '../components/ui/SectionHeading';
import ReservationCTA from '../components/home/ReservationCTA';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-noir-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center pt-20">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80" 
              alt="NOIR & SAGE Story" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-noir-950/70" />
          </div>
          
          <div className="relative z-10 text-center px-6">
            <p className="font-sans text-eyebrow uppercase tracking-[0.15em] text-champagne mb-4">About</p>
            <h1 className="font-serif text-heading-1 italic text-ivory whitespace-pre-line">
              {"The Story Behind\nEvery Plate"}
            </h1>
          </div>
        </section>

        <BrandStory />
        
        <Philosophy />
        
        <ChefStory />

        {/* Ingredients / Sustainability Section */}
        <section className="py-section bg-noir-950">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className="w-full h-[60vh] min-h-[400px] rounded-sm overflow-hidden mb-16">
              <img 
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80" 
                alt="Fresh ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            
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
