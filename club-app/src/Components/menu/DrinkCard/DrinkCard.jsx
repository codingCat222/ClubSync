// src/components/menu/DrinkCard/DrinkCard.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faStar } from '@fortawesome/free-solid-svg-icons'
import Card from '../../common/Card/Card'
import Button from '../../common/Button/Button'
import './DrinkCard.css'

function DrinkCard({ drink, onClick, className = '' }) {
  const [quantity, setQuantity] = useState(0)

  const handleAddToCart = () => {
    if (quantity > 0) {
      console.log(`Added ${quantity} ${drink.name} to cart`)
      setQuantity(0)
    }
  }

  return (
    <Card className={`drink-card ${className}`}>
      <div className="drink-image" onClick={onClick}>
        <img src={drink.image} alt={drink.name} />
        {!drink.available && (
          <div className="out-of-stock">Out of Stock</div>
        )}
        {drink.isPopular && (
          <div className="popular-badge">
            <FontAwesomeIcon icon={faStar} />
            Popular
          </div>
        )}
      </div>

      <div className="drink-content">
        <div className="drink-header">
          <div className="drink-info">
            <h3 onClick={onClick}>{drink.name}</h3>
            <p className="drink-description">{drink.description}</p>
          </div>
          <div className="drink-price">₦{drink.price.toLocaleString()}</div>
        </div>

        <div className="drink-footer">
          {drink.available ? (
            <>
              <div className="quantity-control">
                <button 
                  className="quantity-btn"
                  onClick={() => setQuantity(prev => Math.max(0, prev - 1))}
                  disabled={quantity === 0}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <Button 
                variant="primary" 
                size="small"
                onClick={handleAddToCart}
                disabled={quantity === 0}
              >
                Add to Cart
              </Button>
            </>
          ) : (
            <div className="unavailable-notice">
              Currently unavailable
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

export default DrinkCard