import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpItem } from '../../utils/motion';

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
      variants={fadeUpItem}
      className="group border-b border-noir-700/50 hover:border-sage/35 pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0 transition-[border-color,transform] duration-200 ease-luxury hover:translate-x-1"
    >
      <div className="flex justify-between items-baseline gap-4">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap min-w-0">
          <h3 className="font-serif text-base sm:text-lg text-ivory group-hover:text-champagne transition-colors duration-180 ease-luxury">
            {name}
          </h3>
          {dietary && dietary.length > 0 && (
            <div className="flex gap-1.5 sm:gap-2">
              {dietary.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] uppercase tracking-wider text-sage border border-sage/30 group-hover:border-sage/55 group-hover:bg-sage/10 transition-colors duration-180 ease-luxury rounded-full bg-sage/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="text-champagne group-hover:text-ivory transition-colors duration-180 ease-luxury font-sans text-sm tracking-wide whitespace-nowrap shrink-0">
          {price}
        </div>
      </div>
      <p className="text-sm text-ivory-dim mt-1 sm:max-w-[85%]">{description}</p>
    </motion.div>
  );
};
