import React from 'react';
import { motion } from 'framer-motion';
import { MenuItemCard } from './MenuItemCard';
import { MenuItem } from '../../data/menu';

interface MenuCategoryProps {
  name: string;
  slug: string;
  items: MenuItem[];
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ name, slug, items }) => {
  return (
    <div id={slug} className="mb-16 md:mb-24 last:mb-0 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15px' }}
        transition={{ duration: 0.35 }}
        className="flex items-center gap-4 sm:gap-6 mb-8"
      >
        <h3 className="font-serif text-heading-3 text-ivory tracking-wide">{name}</h3>
        <div className="h-px bg-sage/40 flex-grow" />
      </motion.div>

      <div className="flex flex-col">
        {items.map((item) => (
          <MenuItemCard
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            dietary={item.dietary}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
