import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`${alignClasses} ${className}`}
    >
      {eyebrow && (
        <span className="block text-eyebrow text-sage mb-4 font-sans">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-heading-2 text-ivory">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-ivory-dim font-sans text-base max-w-xl leading-relaxed" style={align === 'center' ? { margin: '1rem auto 0' } : undefined}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
