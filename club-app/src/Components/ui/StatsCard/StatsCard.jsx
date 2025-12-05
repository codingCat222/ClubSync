// src/components/ui/StatsCard/StatsCard.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './StatsCard.css'

function StatsCard({ 
  title, 
  value, 
  change, 
  trend = 'up',
  icon,
  color = 'primary',
  loading = false,
  className = ''
}) {
  return (
    <div className={`stats-card stats-${color} ${className}`}>
      <div className="stats-content">
        <div className="stats-info">
          <p className="stats-title">{title}</p>
          <h3 className="stats-value">{value}</h3>
          {change && (
            <div className={`stats-change ${trend}`}>
              <FontAwesomeIcon icon={trend === 'up' ? faArrowUp : faArrowDown} />
              <span>{change}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="stats-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
      </div>
    </div>
  )
}

export default StatsCard