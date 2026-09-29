import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="flex flex-col items-center gap-3"
    >
      <span className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-ivory-dim">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-px h-8 bg-gradient-to-b from-ivory-dim to-transparent"
      />
    </motion.div>
  );
}
