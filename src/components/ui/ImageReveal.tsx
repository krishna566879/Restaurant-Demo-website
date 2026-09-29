import { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImageReveal({ src, alt, className = '', aspectRatio }: ImageRevealProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px', amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-full overflow-hidden bg-noir-900 ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          decoding="async"
          loading="lazy"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-noir-900 via-noir-800 to-noir-950 p-6 text-center">
          <span className="font-serif italic text-ivory-dim text-sm">{alt}</span>
        </div>
      )}
    </motion.div>
  );
}
