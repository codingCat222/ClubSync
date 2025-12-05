// src/components/menu/MenuSection/MenuSection.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import DrinkCard from '../DrinkCard/DrinkCard'
import './MenuSection.css'

function MenuSection({ 
  title, 
  description, 
  items = [], 
  onItemClick,
  loading = false,
  className = ''
}) {
  if (loading) {
    return (
      <div className={`menu-section ${className}`}>
        <div className="section-header">
          <div className="section-title-skeleton"></div>
        </div>
        <div className="menu-items-grid">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="drink-card-skeleton"></div>
          ))}
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className={`menu-section ${className}`}>
        <div className="section-header">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="empty-menu">
          <div className="empty-icon">🍸</div>
          <h3>No drinks available</h3>
          <p>Check back later for new additions</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`menu-section ${className}`}>
      <div className="section-header">
        <div className="section-info">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <button className="section-filter">
          <FontAwesomeIcon icon={faFilter} />
          Sort
        </button>
      </div>
      <div className="menu-items-grid">
        {items.map(item => (
          <DrinkCard 
            key={item.id} 
            drink={item} 
            onClick={() => onItemClick?.(item)}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuSection