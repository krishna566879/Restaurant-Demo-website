import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import { prefetchRoute } from '../../utils/routePrefetch';
import { LUXURY_EASE } from '../../utils/motion';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuListVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: LUXURY_EASE },
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: LUXURY_EASE }}
          className="fixed inset-0 z-[60] bg-noir-950 flex flex-col overflow-y-auto"
        >
          <div className="flex items-center justify-between px-5 py-5 sm:p-6 shrink-0">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] uppercase text-ivory hover:text-champagne transition-colors duration-180 ease-luxury" onClick={onClose}>
              NOIR & SAGE
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="text-ivory hover:text-sage transition-[color,transform] duration-180 ease-luxury hover:scale-105 active:scale-95 p-1.5 -mr-1.5"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <motion.nav
            aria-label="Mobile navigation"
            variants={menuListVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 py-6 px-6"
          >
            {navigationLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div key={item.label} variants={menuItemVariants}>
                  <Link
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    onTouchStart={() => prefetchRoute(item.path)}
                    onMouseEnter={() => prefetchRoute(item.path)}
                    onClick={onClose}
                    className={`inline-block font-serif text-2xl sm:text-3xl transition-[color,transform] duration-180 ease-luxury active:scale-95 ${
                      isActive ? 'text-sage' : 'text-ivory hover:text-champagne hover:-translate-y-0.5'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <div className="p-6 sm:p-8 flex flex-col items-center gap-6 sm:gap-8 border-t border-noir-700 shrink-0">
            <Button variant="primary" size="md" href="/contact" onClick={onClose} className="w-full max-w-sm">
              Contact Us
            </Button>
            <SocialLinks />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
