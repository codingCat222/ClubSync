// src/components/order/OrderCard/OrderCard.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faClock, 
  faCheckCircle, 
  faTimesCircle,
  faUser,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../common/Card/Card'
import Button from '../../common/Button/Button'
import './OrderCard.css'

function OrderCard({ order, variant = 'user', className = '' }) {
  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return faClock
      case 'preparing': return faClock
      case 'completed': return faCheckCircle
      case 'cancelled': return faTimesCircle
      default: return faClock
    }
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'warning'
      case 'preparing': return 'primary'
      case 'completed': return 'success'
      case 'cancelled': return 'danger'
      default: return 'gray'
    }
  }

  return (
    <Card className={`order-card ${className}`}>
      <div className="order-header">
        <div className="order-info">
          <h3 className="order-id">{order.id}</h3>
          <div className="order-meta">
            {variant === 'club' ? (
              <div className="customer-info">
                <FontAwesomeIcon icon={faUser} />
                <span>{order.customer}</span>
              </div>
            ) : (
              <div className="club-info">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span>{order.club}</span>
              </div>
            )}
            <span className="order-time">{order.time}</span>
          </div>
        </div>
        <div className={`order-status ${order.status}`}>
          <FontAwesomeIcon icon={getStatusIcon(order.status)} />
          <span>{order.status}</span>
        </div>
      </div>

      <div className="order-details">
        <div className="detail-row">
          <div className="detail-item">
            <span>Items</span>
            <strong>{order.items}</strong>
          </div>
          <div className="detail-item">
            <span>Amount</span>
            <strong className="amount">{order.amount}</strong>
          </div>
        </div>
      </div>

      <div className="order-actions">
        <Button 
          variant="outline" 
          size="small"
          as={Link}
          to={`/orders/${order.id.slice(1)}`}
        >
          View Details
        </Button>
        
        {variant === 'club' && order.status === 'pending' && (
          <>
            <Button variant="success" size="small">
              Accept
            </Button>
            <Button variant="danger" size="small">
              Reject
            </Button>
          </>
        )}
        
        {order.status === 'preparing' && (
          <Button variant="primary" size="small" as={Link} to={`/qr/${order.id.slice(1)}`}>
            QR Code
          </Button>
        )}
      </div>
    </Card>
  )
}

export default OrderCard