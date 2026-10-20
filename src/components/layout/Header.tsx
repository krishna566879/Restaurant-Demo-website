import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import { prefetchRoute } from '../../utils/routePrefetch';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-260 ease-luxury ${scrolled ? 'bg-noir-950/95 backdrop-blur-md py-3.5 md:py-4 shadow-md' : 'bg-transparent py-5 md:py-6'}`}>
        <div className="mx-auto px-5 sm:px-6 md:px-12 max-w-site flex items-center justify-between gap-4">
          <Link
            to="/"
            onMouseEnter={() => prefetchRoute('/')}
            className="font-serif text-xl sm:text-2xl tracking-[0.18em] sm:tracking-[0.2em] uppercase text-ivory hover:text-champagne transition-colors duration-180 ease-luxury whitespace-nowrap shrink-0"
          >
            NOIR & SAGE
          </Link>
          
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  onMouseEnter={() => prefetchRoute(item.path)}
                  onFocus={() => prefetchRoute(item.path)}
                  className={`relative py-1 text-sm font-sans tracking-widest uppercase whitespace-nowrap transition-[color,transform] duration-180 ease-luxury after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:origin-left after:transition-transform after:duration-200 after:ease-luxury ${
                    isActive
                      ? 'text-sage after:bg-sage after:scale-x-100'
                      : 'text-ivory hover:text-champagne hover:-translate-y-[1px] after:bg-champagne/80 after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Button variant="primary" size="sm" href="/contact">
              Contact Us
            </Button>
          </div>

          <button 
            type="button"
            className="lg:hidden text-ivory hover:text-sage transition-[color,transform] duration-180 ease-luxury hover:scale-105 active:scale-95 p-1.5 -mr-1.5"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
