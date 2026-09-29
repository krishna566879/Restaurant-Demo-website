import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function SignInForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded border-noir-700 bg-noir-800 text-sage focus:ring-sage focus:ring-offset-noir-950" />
          <span className="text-sm text-ivory-dim">Remember me</span>
        </label>
        <a href="#" className="text-sm text-sage hover:text-ivory transition-colors">Forgot password?</a>
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>

      <div className="relative flex items-center py-2">
        <div className="flex-grow border-t border-noir-700"></div>
        <span className="flex-shrink-0 mx-4 text-xs font-sans uppercase tracking-[0.15em] text-ivory-dim">Or</span>
        <div className="flex-grow border-t border-noir-700"></div>
      </div>

      <div className="space-y-4">
        <Button variant="secondary" className="w-full justify-center">
          Continue with Google
        </Button>
        <Button variant="secondary" className="w-full justify-center">
          Continue with Apple
        </Button>
      </div>

      <p className="text-center text-sm text-ivory-dim mt-8">
        Don't have an account?{' '}
        <Link to="/signup" className="text-sage hover:text-ivory transition-colors">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
