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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-noir-950/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="mx-auto px-6 max-w-site flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-ivory">
            NOIR & SAGE
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((item) => (
              <Link key={item.label} to={item.path} className="text-sm font-sans tracking-widest uppercase text-ivory hover:text-sage transition-colors duration-400">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/signin" className="text-sm font-sans tracking-widest uppercase text-ivory hover:text-sage transition-colors duration-400">
              Sign In
            </Link>
            <Button variant="primary" size="sm" href="/reservations">
              Reserve a Table
            </Button>
          </div>

          <button 
            className="md:hidden text-ivory hover:text-sage transition-colors"
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
