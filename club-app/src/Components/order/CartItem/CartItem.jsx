// src/components/order/CartItem/CartItem.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './CartItem.css'

function CartItem({ item, onUpdateQuantity, onRemove, className = '' }) {
  const [quantity, setQuantity] = useState(item.quantity || 1)

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change)
    setQuantity(newQuantity)
    onUpdateQuantity?.(item.id, newQuantity)
  }

  const handleRemove = () => {
    onRemove?.(item.id)
  }

  const totalPrice = item.price * quantity

  return (
    <div className={`cart-item ${className}`}>
      <img src={item.image} alt={item.name} className="item-image" />
      
      <div className="item-details">
        <div className="item-header">
          <h4 className="item-name">{item.name}</h4>
          <div className="item-price">₦{totalPrice.toLocaleString()}</div>
        </div>
        <p className="item-description">{item.description}</p>
        
        <div className="item-actions">
          <div className="quantity-control">
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(-1)}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(1)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button className="remove-btn" onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrash} />
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem