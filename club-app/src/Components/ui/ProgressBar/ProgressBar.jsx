// src/components/ui/ProgressBar/ProgressBar.jsx
import './ProgressBar.css'

function ProgressBar({ 
  value = 0, 
  max = 100, 
  color = 'primary',
  size = 'medium',
  showLabel = false,
  label,
  className = ''
}) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={`progress-bar progress-${size} ${className}`}>
      <div className="progress-track">
        <div 
          className={`progress-fill progress-${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showLabel && (
        <div className="progress-label">
          {label || `${Math.round(percentage)}%`}
        </div>
      )}
    </div>
  )
}

export default ProgressBar