// src/components/common/Input/Input.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Input.css'

function Input({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon,
  error,
  label,
  className = '',
  ...props 
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className={`input-container ${error ? 'input-error' : ''}`}>
        {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-field"
          {...props}
        />
      </div>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  )
}

export default Input