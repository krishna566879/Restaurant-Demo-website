import React, { useState } from 'react';
import Button from '../ui/Button';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-noir-800 border border-sage p-8 text-center text-ivory">
        <h3 className="font-serif text-heading-3 text-sage mb-2">Thank you.</h3>
        <p className="font-sans text-ivory-dim">We'll confirm your reservation shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Date</label>
          <input
            type="date"
            required
            className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
          />
        </div>
        <div>
          <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Time</label>
          <select
            required
            className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
          >
            <option value="" disabled selected>Select time</option>
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
        <div>
          <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Guests</label>
          <select
            required
            className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
          >
            <option value="" disabled selected>Select guests</option>
            {[1, 2, 3, 4, 5, 6, 7, '8+'].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">First Name</label>
          <input
            type="text"
            required
            placeholder="Jane"
            className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
          />
        </div>
        <div>
          <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Last Name</label>
          <input
            type="text"
            required
            placeholder="Doe"
            className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Email</label>
          <input
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
          />
        </div>
        <div>
          <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Phone</label>
          <input
            type="tel"
            required
            placeholder="(555) 000-0000"
            className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Special Requests</label>
        <textarea
          rows={4}
          placeholder="Dietary requirements, celebrations, etc."
          className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted resize-none"
        ></textarea>
      </div>

      <Button type="submit" className="w-full">
        Request a Reservation
      </Button>
    </form>
  );
}
