import React from 'react';

interface Category {
  name: string;
  slug: string;
}

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <nav aria-label="Menu categories" className="sticky top-[56px] md:top-[64px] z-30 border-b border-noir-700 w-full backdrop-blur-md bg-noir-950/95">
      <div className="max-w-site mx-auto px-5 sm:px-6 md:px-12">
        <div className="flex flex-row items-center justify-start sm:justify-center gap-6 sm:gap-8 py-4 overflow-x-auto no-scrollbar">
          {categories.map((category) => {
            const isActive = activeCategory === category.slug;
            return (
              <button
                key={category.slug}
                type="button"
                aria-current={isActive ? 'true' : undefined}
                onClick={() => onCategoryChange(category.slug)}
                className={`relative whitespace-nowrap shrink-0 font-sans text-xs uppercase tracking-[0.15em] pb-1.5 transition-[color,transform] duration-180 ease-luxury active:scale-95 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:origin-left after:transition-transform after:duration-200 after:ease-luxury ${
                  isActive
                    ? 'text-sage after:bg-sage after:scale-x-100'
                    : 'text-ivory-dim hover:text-champagne hover:-translate-y-[1px] after:bg-champagne/70 after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
