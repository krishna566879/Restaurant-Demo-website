import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { LUXURY_EASE, DEFAULT_VIEWPORT, staggerContainer, fadeUpItem } from '../../utils/motion';

const inputClasses =
  'w-full min-w-0 bg-noir-800 border border-noir-700 text-ivory px-4 py-3 transition-[border-color,background-color,box-shadow] duration-180 ease-luxury hover:border-noir-600 focus:border-sage focus:bg-noir-800/90 focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.38, ease: LUXURY_EASE }}
        className="bg-noir-800 border border-sage p-8 text-center text-ivory"
      >
        <h3 className="font-serif text-heading-3 text-sage mb-2">Thank you.</h3>
        <p className="font-sans text-ivory-dim">We'll confirm your reservation shortly.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={staggerContainer(0.06, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <motion.div variants={fadeUpItem} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="min-w-0">
          <label htmlFor="res-date" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Date</label>
          <input
            id="res-date"
            name="date"
            type="date"
            required
            className={inputClasses}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="res-time" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Time</label>
          <select
            id="res-time"
            name="time"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>Select time</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
            <option value="21:30">9:30 PM</option>
            <option value="22:00">10:00 PM</option>
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="res-guests" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Guests</label>
          <select
            id="res-guests"
            name="guests"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>Select guests</option>
            {[1, 2, 3, 4, 5, 6, 7, '8+'].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </motion.div>

      <motion.div variants={fadeUpItem} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="min-w-0">
          <label htmlFor="res-first-name" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">First Name</label>
          <input
            id="res-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Jane"
            className={inputClasses}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="res-last-name" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Last Name</label>
          <input
            id="res-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Doe"
            className={inputClasses}
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUpItem} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="min-w-0">
          <label htmlFor="res-email" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Email</label>
          <input
            id="res-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="jane@example.com"
            className={inputClasses}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="res-phone" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Phone</label>
          <input
            id="res-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(555) 000-0000"
            className={inputClasses}
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUpItem}>
        <label htmlFor="res-requests" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Special Requests</label>
        <textarea
          id="res-requests"
          name="requests"
          rows={4}
          placeholder="Dietary requirements, celebrations, etc."
          className={`${inputClasses} resize-none`}
        ></textarea>
      </motion.div>

      <motion.div variants={fadeUpItem}>
        <Button type="submit" className="w-full">
          Request a Reservation
        </Button>
      </motion.div>
    </motion.form>
  );
}
