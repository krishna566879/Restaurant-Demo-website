import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../layout/PageTransition';
import { LUXURY_EASE, staggerContainer, fadeUpItem, fadeUpSubtle } from '../../utils/motion';

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
          <motion.div
            variants={staggerContainer(0.06, 0.03)}
            initial="hidden"
            animate="visible"
            className="max-w-md w-full"
          >
            <motion.div variants={fadeUpSubtle}>
              <Link to="/" className="inline-block font-serif text-xl tracking-[0.2em] uppercase text-ivory hover:text-champagne transition-colors duration-180 ease-luxury">
                NOIR & SAGE
              </Link>
            </motion.div>
            <motion.h1 variants={fadeUpItem} className="font-serif text-heading-2 text-ivory mt-8 sm:mt-12">{title}</motion.h1>
            <motion.p variants={fadeUpSubtle} className="text-ivory-dim text-sm mt-2">{subtitle}</motion.p>
            <motion.div variants={fadeUpItem} className="mt-8 sm:mt-10">
              {children}
            </motion.div>
          </motion.div>
        </div>
        <div className="hidden lg:block relative min-h-screen bg-noir-900 overflow-hidden">
          <motion.img
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, ease: LUXURY_EASE }}
            src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&w=1200&q=80"
            srcSet="https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&w=1200&q=80 1200w"
            sizes="50vw"
            width={1200}
            height={1600}
            alt="NOIR & SAGE Dining"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent flex flex-col justify-end p-12">
            <p className="font-serif text-2xl text-ivory italic">"A symphony of flavors, a masterpiece of design."</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
