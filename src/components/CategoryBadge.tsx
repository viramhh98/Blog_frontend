import React from 'react';

export const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
 

  const style ="bg-gray-200 text-gray-800";

  return (
    <span className={`text-sm font-semibold px-2 py-1 rounded ${style}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;

