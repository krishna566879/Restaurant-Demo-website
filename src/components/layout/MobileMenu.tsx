import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-noir-950 flex flex-col"
        >
          <div className="flex items-center justify-between p-6">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] uppercase text-ivory" onClick={onClose}>
              NOIR & SAGE
            </Link>
            <button
              onClick={onClose}
              className="text-ivory hover:text-sage transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navigationLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={onClose}
                className="font-serif text-3xl text-ivory hover:text-sage transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/signin"
              onClick={onClose}
              className="font-serif text-3xl text-ivory hover:text-sage transition-colors"
            >
              Sign In
            </Link>
          </div>

          <div className="p-8 flex flex-col items-center gap-8 border-t border-noir-700">
            <Button variant="primary" size="md" href="/reservations" onClick={onClose} className="w-full">
              Reserve a Table
            </Button>
            <SocialLinks />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
