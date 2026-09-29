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
    <div id={slug} className="mb-24 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-6 mb-8"
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
