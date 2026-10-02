import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import SEO, { baseRestaurantJsonLd } from '../components/ui/SEO';
import Hero from '../components/home/Hero';
import IntroStory from '../components/home/IntroStory';
import SignatureDishes from '../components/home/SignatureDishes';
import DiningExperience from '../components/home/DiningExperience';
import MenuPreview from '../components/home/MenuPreview';
import ChefSection from '../components/home/ChefSection';
import ReservationCTA from '../components/home/ReservationCTA';

export default function HomePage() {
  return (
    <PageTransition>
      <SEO
        title="NOIR & SAGE — Contemporary Fine Dining in Indore"
        description="NOIR & SAGE is a contemporary dining house in Indore where seasonal ingredients, quiet luxury, and inventive European techniques come together."
        jsonLd={baseRestaurantJsonLd}
      />
      <Hero />
      <IntroStory />
      <SignatureDishes />
      <DiningExperience />
      <MenuPreview />
      <ChefSection />
      <ReservationCTA />
    </PageTransition>
  );
}
