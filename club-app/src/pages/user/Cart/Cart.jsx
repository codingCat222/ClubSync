// src/pages/user/Cart/Cart.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTrash, 
  faPlus, 
  faMinus, 
  faShoppingCart,
  faArrowLeft,
  faTag
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../Components/common/Card/Card'
import Button from '../../../Components/common/Button/Button'
import Input from '../../../Components/common/Input/Input'
import './Cart.css'

function Cart() {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Blue Lagoon', 
      description: 'Vodka, blue curaçao, lemon juice', 
      price: 4000, 
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 2, 
      name: 'Mojito', 
      description: 'White rum, mint, lime, soda', 
      price: 3500, 
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 3, 
      name: 'Heineken', 
      description: 'Premium lager beer', 
      price: 1200, 
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1586993453037-5c7a5f2c4e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ])

  const [promoCode, setPromoCode] = useState('')
  const [club] = useState({
    id: 1,
    name: 'Midnight Lounge',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  })

  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change
        if (newQuantity < 1) return item
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const serviceFee = Math.round(subtotal * 0.05)
  const tax = Math.round(subtotal * 0.075)
  const total = subtotal + serviceFee + tax

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'club10') {
      console.log('Promo code applied!')
    }
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Your Cart</h1>
            <p className="page-subtitle">Review your order before checkout</p>
          </div>
        </div>
      </div>

      <div className="cart-content">
        <div className="container">
          <div className="cart-layout">
            <div className="cart-items-section">
              <Card className="cart-items-card">
                <div className="club-info">
                  <div className="club-details">
                    <img src={club.image} alt={club.name} className="club-image" />
                    <div>
                      <h3>{club.name}</h3>
                      <Link to={`/clubs/${club.id}`} className="back-link">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to menu
                      </Link>
                    </div>
                  </div>
                  <div className="item-count">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>{cartItems.length} items</span>
                  </div>
                </div>

                {cartItems.length === 0 ? (
                  <div className="empty-cart">
                    <div className="empty-icon">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <h3>Your cart is empty</h3>
                    <p>Add items from your favorite clubs to get started</p>
                    <Button variant="primary" as={Link} to="/home">
                      Browse Clubs
                    </Button>
                  </div>
                ) : (
                  <div className="cart-items-list">
                    {cartItems.map(item => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <div className="item-details">
                          <div className="item-header">
                            <h4>{item.name}</h4>
                            <span className="item-price">₦{(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                          <p className="item-description">{item.description}</p>
                          <div className="item-actions">
                            <div className="quantity-control">
                              <button 
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <span className="quantity">{item.quantity}</span>
                              <button 
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                            <button 
                              className="remove-btn"
                              onClick={() => removeItem(item.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>

            <div className="cart-summary-section">
              <Card className="cart-summary-card">
                <h3>Order Summary</h3>
                
                <div className="summary-details">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="summary-row">
                    <span>Service Fee</span>
                    <span>₦{serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax</span>
                    <span>₦{tax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="promo-section">
                  <div className="promo-header">
                    <FontAwesomeIcon icon={faTag} />
                    <span>Have a promo code?</span>
                  </div>
                  <div className="promo-input">
                    <Input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" size="small" onClick={applyPromoCode}>
                      Apply
                    </Button>
                  </div>
                </div>

                <div className="total-section">
                  <div className="total-row">
                    <span>Total</span>
                    <span className="total-amount">₦{total.toLocaleString()}</span>
                  </div>
                  <p className="tax-note">Includes all applicable taxes and fees</p>
                </div>

                <Button 
                  variant="primary" 
                  size="large" 
                  as={Link}
                  to="/checkout"
                  fullWidth
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Button>

                <div className="payment-methods">
                  <p>Secure Payment</p>
                  <div className="method-icons">
                    <span className="method-icon">💳</span>
                    <span className="method-icon">🏦</span>
                    <span className="method-icon">📱</span>
                    <span className="method-icon">💎</span>
                  </div>
                </div>
              </Card>

              <Card className="order-info-card">
                <h4>Need Help?</h4>
                <p>Contact club support for any questions about your order.</p>
                <div className="contact-info">
                  <span>📞 +234 801 234 5678</span>
                  <span>✉️ support@ClubSync.com</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart