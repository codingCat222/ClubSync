// src/components/club/ClubFilters/ClubFilters.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faTimes, faStar, faClock } from '@fortawesome/free-solid-svg-icons'
import Button from '../../common/Button/Button'
import './ClubFilters.css'

function ClubFilters({ 
  categories = [],
  onFilterChange,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: '',
    rating: '',
    deliveryTime: '',
    priceRange: '',
    openNow: false
  })

  const priceRanges = [
    { id: 'budget', label: '₦₦ - Budget' },
    { id: 'moderate', label: '₦₦₦ - Moderate' },
    { id: 'premium', label: '₦₦₦₦ - Premium' }
  ]

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleClearFilters = () => {
    const clearedFilters = {
      category: '',
      rating: '',
      deliveryTime: '',
      priceRange: '',
      openNow: false
    }
    setFilters(clearedFilters)
    onFilterChange?.(clearedFilters)
  }

  return (
    <div className={`club-filters ${className}`}>
      <div className="filters-header">
        <Button 
          variant="outline" 
          onClick={() => setIsOpen(!isOpen)}
          className="filters-toggle"
        >
          <FontAwesomeIcon icon={faFilter} />
          Filters
          {Object.values(filters).some(v => v) && (
            <span className="active-count">
              {Object.values(filters).filter(v => v).length}
            </span>
          )}
        </Button>

        {Object.values(filters).some(v => v) && (
          <Button 
            variant="text" 
            size="small"
            onClick={handleClearFilters}
            className="clear-filters"
          >
            Clear All
          </Button>
        )}
      </div>

      {isOpen && (
        <div className="filters-panel slide-up">
          <div className="panel-header">
            <h3>Filters</h3>
            <button className="close-panel" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="filter-section">
            <h4>Category</h4>
            <div className="filter-options">
              <button
                className={`filter-option ${!filters.category ? 'active' : ''}`}
                onClick={() => handleFilterChange('category', '')}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-option ${filters.category === category.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange('category', category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Rating</h4>
            <div className="filter-options">
              <button
                className={`filter-option ${!filters.rating ? 'active' : ''}`}
                onClick={() => handleFilterChange('rating', '')}
              >
                Any Rating
              </button>
              {[4.5, 4.0, 3.5, 3.0].map(rating => (
                <button
                  key={rating}
                  className={`filter-option ${filters.rating === rating.toString() ? 'active' : ''}`}
                  onClick={() => handleFilterChange('rating', rating.toString())}
                >
                  <FontAwesomeIcon icon={faStar} />
                  {rating}+
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Delivery Time</h4>
            <div className="filter-options">
              <button
                className={`filter-option ${!filters.deliveryTime ? 'active' : ''}`}
                onClick={() => handleFilterChange('deliveryTime', '')}
              >
                Any Time
              </button>
              {[15, 30, 45].map(minutes => (
                <button
                  key={minutes}
                  className={`filter-option ${filters.deliveryTime === minutes.toString() ? 'active' : ''}`}
                  onClick={() => handleFilterChange('deliveryTime', minutes.toString())}
                >
                  <FontAwesomeIcon icon={faClock} />
                  Under {minutes} min
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="filter-options">
              <button
                className={`filter-option ${!filters.priceRange ? 'active' : ''}`}
                onClick={() => handleFilterChange('priceRange', '')}
              >
                Any Price
              </button>
              {priceRanges.map(range => (
                <button
                  key={range.id}
                  className={`filter-option ${filters.priceRange === range.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange('priceRange', range.id)}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.openNow}
                onChange={(e) => handleFilterChange('openNow', e.target.checked)}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              Open Now
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClubFilters