import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function SignUpForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

      <div>
        <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Email</label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
        />
      </div>

      <div>
        <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Password</label>
        <input
          type="password"
          required
          placeholder="••••••••"
          className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
        />
      </div>

      <div>
        <label className="text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim mb-2 block">Confirm Password</label>
        <input
          type="password"
          required
          placeholder="••••••••"
          className="w-full bg-noir-800 border border-noir-700 text-ivory px-4 py-3 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage/30 placeholder:text-ivory-muted"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-noir-700 bg-noir-800 text-sage focus:ring-sage focus:ring-offset-noir-950 shrink-0" />
        <span className="text-sm text-ivory-dim">
          I agree to the Terms of Service and Privacy Policy
        </span>
      </label>

      <Button type="submit" className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm text-ivory-dim mt-8">
        Already have an account?{' '}
        <Link to="/signin" className="text-sage hover:text-ivory transition-colors">
          Sign In
        </Link>
      </p>
    </form>
  );
}
