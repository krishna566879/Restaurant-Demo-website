import { useState } from 'react';
import { motion } from 'framer-motion';
import { optimizeUnsplashUrl, getUnsplashSrcSet } from '../../utils/images';
import { LUXURY_EASE, DEFAULT_VIEWPORT } from '../../utils/motion';

interface ImageRevealProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
  sizes?: string;
}

export default function ImageReveal({
  src,
  webpSrc,
  alt,
  className = '',
  aspectRatio,
  width = 896,
  height = 1200,
  sizes = '(max-width: 1024px) 100vw, 50vw',
}: ImageRevealProps) {
  const [hasError, setHasError] = useState(false);
  const optimizedSrc = optimizeUnsplashUrl(src, 1200);
  const srcSet = getUnsplashSrcSet(src, [400, 800, 1200]);
  const imgClasses =
    'w-full h-full object-cover will-change-transform transition-transform duration-260 ease-luxury group-hover:scale-[1.03] hover:scale-[1.03]';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={DEFAULT_VIEWPORT}
      transition={{ duration: 0.45, ease: LUXURY_EASE }}
      className={`group w-full h-full overflow-hidden bg-noir-900 will-change-transform ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!hasError ? (
        webpSrc ? (
          <picture className="block w-full h-full overflow-hidden">
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={optimizedSrc}
              alt={alt}
              width={width}
              height={height}
              referrerPolicy="no-referrer"
              decoding="async"
              loading="lazy"
              onError={() => setHasError(true)}
              className={imgClasses}
            />
          </picture>
        ) : (
          <img
            src={optimizedSrc}
            srcSet={srcSet}
            sizes={srcSet ? sizes : undefined}
            alt={alt}
            width={width}
            height={height}
            referrerPolicy="no-referrer"
            decoding="async"
            loading="lazy"
            onError={() => setHasError(true)}
            className={imgClasses}
          />
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-noir-900 via-noir-800 to-noir-950 p-6 text-center">
          <span className="font-serif italic text-ivory-dim text-sm">{alt}</span>
        </div>
      )}
    </motion.div>
  );
}
