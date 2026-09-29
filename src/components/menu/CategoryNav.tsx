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
    <div className="sticky top-[80px] z-30 bg-noir-950 border-b border-noir-700 w-full backdrop-blur-md bg-noir-950/90">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="flex flex-row items-center justify-center gap-8 py-4 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => onCategoryChange(category.slug)}
              className={`whitespace-nowrap font-sans text-xs uppercase tracking-[0.15em] pb-1 transition-colors duration-300 ${
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
