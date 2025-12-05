// src/components/ui/Rating/Rating.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.css'

function Rating({ 
  value = 0, 
  max = 5, 
  size = 'medium',
  readOnly = false,
  onChange,
  className = ''
}) {
  const [hoverValue, setHoverValue] = useState(0)

  const handleClick = (newValue) => {
    if (!readOnly && onChange) {
      onChange(newValue)
    }
  }

  const handleMouseEnter = (newValue) => {
    if (!readOnly) {
      setHoverValue(newValue)
    }
  }

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(0)
    }
  }

  return (
    <div className={`rating rating-${size} ${className}`}>
      {[...Array(max)].map((_, index) => {
        const ratingValue = index + 1
        const displayValue = hoverValue || value
        
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`rating-star ${ratingValue <= displayValue ? 'filled' : 'empty'}`}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: readOnly ? 'default' : 'pointer' }}
          />
        )
      })}
    </div>
  )
}

export default Rating