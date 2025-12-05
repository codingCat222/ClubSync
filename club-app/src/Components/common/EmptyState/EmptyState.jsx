// src/components/ui/EmptyState/EmptyState.jsx
import './EmptyState.css'

function EmptyState({ 
  icon = '📦',
  title = 'No data found',
  message = 'There is nothing to display here',
  action,
  className = ''
}) {
  return (
    <div className={`empty-state ${className}`}>
      <div className="empty-icon">{icon}</div>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-message">{message}</p>
      {action && (
        <div className="empty-action">
          {action}
        </div>
      )}
    </div>
  )
}

export default EmptyState