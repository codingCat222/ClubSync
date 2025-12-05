// src/components/common/Badge/Badge.jsx
import './Badge.css'

function Badge({ 
  children, 
  variant = 'default', 
  size = 'medium',
  pill = false,
  className = '',
  ...props 
}) {
  return (
    <span 
      className={`badge badge-${variant} badge-${size} ${pill ? 'badge-pill' : ''} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge