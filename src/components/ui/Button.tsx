import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { prefetchRoute } from '../../utils/routePrefetch';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export default function Button({ children, variant = 'primary', size = 'md', href, className = '', ...props }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center text-center font-sans font-medium tracking-wide uppercase cursor-pointer whitespace-nowrap select-none will-change-transform transition-[transform,background-color,border-color,color,box-shadow] duration-180 ease-luxury hover:-translate-y-[1px] hover:scale-[1.015] active:translate-y-0 active:scale-[0.99]';

  const variants = {
    primary:
      'bg-sage text-noir-950 hover:bg-sage-light hover:shadow-[0_8px_24px_-6px_rgba(138,154,123,0.35)]',
    secondary:
      'border border-ivory/30 text-ivory hover:border-champagne hover:text-champagne hover:bg-ivory/[0.06] hover:shadow-[0_6px_20px_-6px_rgba(201,185,154,0.2)]',
    ghost: 'text-ivory-dim hover:text-ivory',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs tracking-[0.15em]',
    md: 'px-7 py-3.5 text-xs tracking-[0.15em]',
    lg: 'px-9 py-4 text-sm tracking-[0.15em]',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        to={href}
        onMouseEnter={() => prefetchRoute(href)}
        onFocus={() => prefetchRoute(href)}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return <button className={classes} {...props}>{children}</button>;
}
