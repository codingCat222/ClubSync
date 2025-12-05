// src/components/order/OrderStatus/OrderStatus.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCheckCircle, faTimesCircle, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import './OrderStatus.css'

function OrderStatus({ status, size = 'medium', showLabel = true, className = '' }) {
  const statusConfig = {
    pending: {
      icon: faClock,
      color: 'warning',
      label: 'Pending'
    },
    confirmed: {
      icon: faCheckCircle,
      color: 'primary',
      label: 'Confirmed'
    },
    preparing: {
      icon: faHourglassHalf,
      color: 'primary',
      label: 'Preparing'
    },
    ready: {
      icon: faCheckCircle,
      color: 'success',
      label: 'Ready'
    },
    completed: {
      icon: faCheckCircle,
      color: 'success',
      label: 'Completed'
    },
    cancelled: {
      icon: faTimesCircle,
      color: 'danger',
      label: 'Cancelled'
    }
  }

  const config = statusConfig[status] || statusConfig.pending

  return (
    <div className={`order-status order-status-${size} ${className}`}>
      <div className={`status-icon status-${config.color}`}>
        <FontAwesomeIcon icon={config.icon} />
      </div>
      {showLabel && (
        <span className="status-label">{config.label}</span>
      )}
    </div>
  )
}

export default OrderStatus