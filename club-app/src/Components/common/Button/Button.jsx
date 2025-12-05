// src/components/common/Button/Button.jsx
import './Button.css'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
  ...props 
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${loading ? 'btn-loading' : ''} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="btn-loader"></span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button