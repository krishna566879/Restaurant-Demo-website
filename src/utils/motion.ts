import { Variants } from 'framer-motion';

/**
 * Custom luxury cubic-bezier curve:
 * Immediate initial response, controlled mid-flight glide, and smooth, bounce-free settling.
 */
export const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Starts immediately upon viewport entry (0px margin, 0.01 threshold)
 * for a responsive, cinematic scroll reveal without lag.
 */
export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.01 as const,
  margin: '0px 0px 0px 0px',
};

export const staggerContainer = (stagger = 0.065, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: LUXURY_EASE,
    },
  },
};

export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: LUXURY_EASE,
    },
  },
};

export const cardRevealItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: LUXURY_EASE,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -16, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.44,
      ease: LUXURY_EASE,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 16, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.44,
      ease: LUXURY_EASE,
    },
  },
};
