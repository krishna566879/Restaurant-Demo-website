import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 sm:gap-3 pointer-events-none"
    >
      <span className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-ivory-dim">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-px h-7 sm:h-8 bg-gradient-to-b from-ivory-dim to-transparent"
      />
    </motion.div>
  );
}
