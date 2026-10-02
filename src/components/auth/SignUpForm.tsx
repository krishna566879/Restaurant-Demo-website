import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const inputClasses =
  'w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 transition-[border-color,background-color,box-shadow] duration-180 ease-luxury hover:border-noir-600 focus:border-sage focus:bg-noir-800/90 focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted';

export default function SignUpForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="signup-first-name" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">First Name</label>
          <input
            id="signup-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Jane"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="signup-last-name" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Last Name</label>
          <input
            id="signup-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Doe"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="signup-email" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Email</label>
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="your@email.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="signup-password" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Password</label>
        <input
          id="signup-password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          placeholder="••••••••"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="signup-confirm-password" className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Confirm Password</label>
        <input
          id="signup-confirm-password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          placeholder="••••••••"
          className={inputClasses}
        />
      </div>

      <label className="group flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-noir-700 bg-noir-800 text-sage focus:ring-sage focus:ring-offset-noir-950 shrink-0 transition-colors duration-180" />
        <span className="text-sm text-ivory-dim group-hover:text-ivory transition-colors duration-180 ease-luxury">
          I agree to the Terms of Service and Privacy Policy
        </span>
      </label>

      <Button type="submit" className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm text-ivory-dim mt-8">
        Already have an account?{' '}
        <Link to="/signin" className="text-sage hover:text-champagne transition-colors duration-180 ease-luxury">
          Sign In
        </Link>
      </p>
    </form>
  );
}
