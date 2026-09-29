import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export default function Button({ children, variant = 'primary', size = 'md', href, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center text-center font-sans font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer whitespace-nowrap';

  const variants = {
    primary: 'bg-sage text-noir-950 hover:bg-sage-dark',
    secondary: 'border border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/5',
    ghost: 'text-ivory-dim hover:text-ivory',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs tracking-[0.15em]',
    md: 'px-7 py-3.5 text-xs tracking-[0.15em]',
    lg: 'px-9 py-4 text-sm tracking-[0.15em]',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link to={href} className={classes}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
