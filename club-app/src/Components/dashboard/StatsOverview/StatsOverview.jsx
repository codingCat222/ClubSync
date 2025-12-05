// src/components/dashboard/StatsOverview/StatsOverview.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './StatsOverview.css'

function StatsOverview({ stats = [], className = '' }) {
  return (
    <div className={`stats-overview ${className}`}>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-title">{stat.title}</p>
                <h3 className="stat-value">{stat.value}</h3>
                <div className={`stat-change ${stat.trend}`}>
                  <FontAwesomeIcon icon={stat.trend === 'up' ? faArrowUp : faArrowDown} />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="stat-icon" style={{ background: stat.color }}>
                <FontAwesomeIcon icon={stat.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsOverview