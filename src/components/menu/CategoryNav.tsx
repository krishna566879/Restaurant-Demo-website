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
    <div className="sticky top-[56px] md:top-[64px] z-30 border-b border-noir-700 w-full backdrop-blur-md bg-noir-950/95">
      <div className="max-w-site mx-auto px-5 sm:px-6 md:px-12">
        <div className="flex flex-row items-center justify-start sm:justify-center gap-6 sm:gap-8 py-4 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onCategoryChange(category.slug)}
              className={`whitespace-nowrap shrink-0 font-sans text-xs uppercase tracking-[0.15em] pb-1 transition-colors duration-200 ${
                activeCategory === category.slug
                  ? 'text-sage border-b border-sage'
                  : 'text-ivory-dim hover:text-ivory border-b border-transparent'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
