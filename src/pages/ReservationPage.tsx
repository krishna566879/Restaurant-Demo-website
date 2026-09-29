import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/layout/Container';
import ReservationForm from '../components/reservation/ReservationForm';
import ContactInfo from '../components/reservation/ContactInfo';

export default function ReservationPage() {
  return (
    <PageTransition>
      <div className="bg-noir-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] sm:min-h-[350px] w-full flex items-center justify-center pt-20">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" 
              alt="NOIR & SAGE Atmosphere"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-noir-950/70" />
          </div>
          
          <div className="relative z-10 text-center px-5 sm:px-6">
            <p className="font-sans text-eyebrow uppercase tracking-[0.15em] text-champagne mb-4">Reservations</p>
            <h1 className="font-serif text-heading-1 italic text-ivory">Reserve Your Evening</h1>
          </div>
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
