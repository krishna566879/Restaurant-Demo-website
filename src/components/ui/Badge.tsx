import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'sage' | 'champagne' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'outline', className = '' }: BadgeProps) {
  const variants = {
    sage: 'bg-sage/10 text-sage border-sage/20 group-hover:bg-sage/15 group-hover:border-sage/40',
    champagne: 'bg-champagne/10 text-champagne border-champagne/20 group-hover:bg-champagne/15 group-hover:border-champagne/40',
    outline: 'bg-transparent text-ivory-dim border-noir-700 group-hover:border-noir-600 group-hover:text-ivory',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[0.65rem] font-sans uppercase tracking-[0.15em] border transition-colors duration-180 ease-luxury ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
