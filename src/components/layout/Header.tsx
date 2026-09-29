import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-noir-950/95 backdrop-blur-md py-3.5 md:py-4 shadow-md' : 'bg-transparent py-5 md:py-6'}`}>
        <div className="mx-auto px-5 sm:px-6 md:px-12 max-w-site flex items-center justify-between gap-4">
          <Link to="/" className="font-serif text-xl sm:text-2xl tracking-[0.18em] sm:tracking-[0.2em] uppercase text-ivory whitespace-nowrap shrink-0">
            NOIR & SAGE
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-sm font-sans tracking-widest uppercase transition-colors duration-200 whitespace-nowrap ${
                    isActive ? 'text-sage' : 'text-ivory hover:text-sage'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Link to="/signin" className="text-sm font-sans tracking-widest uppercase text-ivory hover:text-sage transition-colors duration-200 whitespace-nowrap">
              Sign In
            </Link>
            <Button variant="primary" size="sm" href="/reservations">
              Reserve a Table
            </Button>
          </div>

          <button 
            className="lg:hidden text-ivory hover:text-sage transition-colors p-1.5 -mr-1.5"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
