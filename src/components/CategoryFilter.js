import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="categories">
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
