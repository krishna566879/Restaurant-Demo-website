import React from 'react';
import { motion } from 'framer-motion';

export interface MenuItemCardProps {
  name: string;
  description: string;
  price: string;
  dietary?: string[];
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  name,
  description,
  price,
  dietary,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15px' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-noir-700/50 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0"
    >
      <div className="flex justify-between items-baseline gap-4">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap min-w-0">
          <h4 className="font-serif text-base sm:text-lg text-ivory">{name}</h4>
          {dietary && dietary.length > 0 && (
            <div className="flex gap-1.5 sm:gap-2">
              {dietary.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] uppercase tracking-wider text-sage border border-sage/30 rounded-full bg-sage/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="text-champagne font-sans text-sm tracking-wide whitespace-nowrap shrink-0">
          {price}
        </div>
      </div>
      <p className="text-sm text-ivory-dim mt-1 sm:max-w-[85%]">{description}</p>
    </motion.div>
  );
};
