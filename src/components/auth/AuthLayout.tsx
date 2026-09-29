import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../layout/PageTransition';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <PageTransition>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-noir-950">
        <div className="flex items-center justify-center px-5 py-10 sm:p-8 lg:p-12">
          <div className="max-w-md w-full">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] uppercase text-ivory hover:text-sage transition-colors">
              NOIR & SAGE
            </Link>
            <h1 className="font-serif text-heading-2 text-ivory mt-8 sm:mt-12">{title}</h1>
            <p className="text-ivory-dim text-sm mt-2">{subtitle}</p>
            <div className="mt-8 sm:mt-10">
              {children}
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative min-h-screen bg-noir-900">
          <img
            src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?w=1200&q=80"
            alt="NOIR & SAGE Dining"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent flex flex-col justify-end p-12">
            <p className="font-serif text-2xl text-ivory italic">"A symphony of flavors, a masterpiece of design."</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
