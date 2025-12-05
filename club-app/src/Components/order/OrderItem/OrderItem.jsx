// src/components/order/OrderItem/OrderItem.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './OrderItem.css'

function OrderItem({ item, onRemove, className = '' }) {
  const totalPrice = item.price * item.quantity

  return (
    <div className={`order-item ${className}`}>
      <div className="item-info">
        <div className="item-main">
          <h4 className="item-name">{item.name}</h4>
          <p className="item-description">{item.description}</p>
        </div>
        <div className="item-quantity">
          <span className="quantity-label">Qty:</span>
          <span className="quantity">{item.quantity}</span>
        </div>
        <div className="item-price">
          ₦{totalPrice.toLocaleString()}
        </div>
      </div>
      {onRemove && (
        <button className="remove-item" onClick={() => onRemove(item.id)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  )
}

export default OrderItem