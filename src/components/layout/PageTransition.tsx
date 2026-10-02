import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { LUXURY_EASE } from '../../utils/motion';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: LUXURY_EASE }}
    >
      {children}
    </motion.div>
  );
}
