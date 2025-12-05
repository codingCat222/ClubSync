// src/components/common/Alert/Alert.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheckCircle, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './Alert.css'

function Alert({ type = 'info', title, message, onClose, className = '' }) {
  const icons = {
    success: faCheckCircle,
    warning: faExclamationTriangle,
    danger: faTimes,
    info: faInfoCircle
  }

  return (
    <div className={`alert alert-${type} ${className}`}>
      <div className="alert-icon">
        <FontAwesomeIcon icon={icons[type]} />
      </div>
      <div className="alert-content">
        {title && <h4 className="alert-title">{title}</h4>}
        {message && <p className="alert-message">{message}</p>}
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  )
}

export default Alert