import { motion } from 'framer-motion';
import { LUXURY_EASE, DEFAULT_VIEWPORT, staggerContainer, fadeUpSubtle, fadeUpItem } from '../../utils/motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      className={`${alignClasses} ${className}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUpSubtle} className="block text-eyebrow text-sage mb-4 font-sans">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUpItem}
        transition={{ duration: 0.44, ease: LUXURY_EASE }}
        className="font-serif text-heading-2 text-ivory"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUpSubtle}
          className="mt-4 text-ivory-dim font-sans text-base max-w-xl leading-relaxed"
          style={align === 'center' ? { margin: '1rem auto 0' } : undefined}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
