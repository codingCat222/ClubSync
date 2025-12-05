// src/components/menu/CategoryTabs/CategoryTabs.jsx
import './CategoryTabs.css'

function CategoryTabs({ 
  categories = [], 
  activeCategory = '', 
  onChange,
  className = ''
}) {
  return (
    <div className={`category-tabs ${className}`}>
      <div className="tabs-scroll">
        <button
          className={`category-tab ${!activeCategory ? 'active' : ''}`}
          onClick={() => onChange?.('')}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => onChange?.(category.id)}
          >
            {category.name}
            {category.count && (
              <span className="category-count">{category.count}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryTabs