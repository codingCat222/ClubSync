// src/pages/user/Checkout/Checkout.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCreditCard, 
  faWallet, 
  faMobileAlt,
  faShieldAlt,
  faArrowLeft,
  faLock,
  faUser,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../Components/common/Card/Card'
import Button from '../../../Components/common/Button/Button'
import Input from '../../../Components/common/Input/Input'
import Modal from '../../../Components/common/Modal/Modal'
import './Checkout.css'

function Checkout() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [orderDetails, setOrderDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+234 801 234 5678',
    address: '123 Main Street, Lagos',
    notes: ''
  })

  const orderSummary = {
    subtotal: 15800,
    serviceFee: 790,
    tax: 1185,
    total: 17775,
    items: 3,
    club: 'Midnight Lounge',
    estimatedTime: '15-20 min'
  }

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: faCreditCard },
    { id: 'wallet', name: 'Wallet', icon: faWallet },
    { id: 'transfer', name: 'Bank Transfer', icon: faMobileAlt }
  ]

  const handleInputChange = (field, value) => {
    setOrderDetails(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setLoading(false)
    setShowSuccessModal(true)
  }

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
    navigate('/orders')
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Checkout</h1>
            <p className="page-subtitle">Complete your order securely</p>
          </div>
        </div>
      </div>

      <div className="checkout-content">
        <div className="container">
          <div className="checkout-layout">
            <div className="checkout-form-section">
              <Card className="checkout-form-card">
                <div className="form-header">
                  <Link to="/cart" className="back-link">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back to cart
                  </Link>
                  <div className="security-badge">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Secure Checkout</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3>Contact Information</h3>
                    <div className="form-fields">
                      <Input
                        label="Full Name"
                        value={orderDetails.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        icon={faUser}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        value={orderDetails.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        value={orderDetails.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        icon={faPhone}
                        required
                      />
                      <Input
                        label="Delivery Address"
                        value={orderDetails.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        icon={faMapMarkerAlt}
                        required
                      />
                      <div className="form-group">
                        <label className="input-label">Order Notes (Optional)</label>
                        <textarea
                          value={orderDetails.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          className="notes-textarea"
                          placeholder="Any special instructions for your order?"
                          rows="3"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Payment Method</h3>
                    <div className="payment-methods-list">
                      {paymentMethods.map(method => (
                        <div 
                          key={method.id}
                          className={`payment-method ${paymentMethod === method.id ? 'active' : ''}`}
                          onClick={() => setPaymentMethod(method.id)}
                        >
                          <div className="method-icon">
                            <FontAwesomeIcon icon={method.icon} />
                          </div>
                          <span className="method-name">{method.name}</span>
                        </div>
                      ))}
                    </div>

                    {paymentMethod === 'card' && (
                      <div className="card-form slide-up">
                        <Input
                          label="Card Number"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <div className="form-row">
                          <Input
                            label="Expiry Date"
                            placeholder="MM/YY"
                            required
                          />
                          <Input
                            label="CVV"
                            placeholder="123"
                            type="password"
                            required
                          />
                        </div>
                        <Input
                          label="Cardholder Name"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div className="form-actions">
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      loading={loading}
                      fullWidth
                    >
                      <FontAwesomeIcon icon={faLock} />
                      {loading ? 'Processing...' : `Pay ₦${orderSummary.total.toLocaleString()}`}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            <div className="order-summary-section">
              <Card className="order-summary-card">
                <h3>Order Summary</h3>
                
                <div className="club-info">
                  <div className="club-image">
                    <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Club" />
                  </div>
                  <div className="club-details">
                    <h4>{orderSummary.club}</h4>
                    <p>Estimated pickup: {orderSummary.estimatedTime}</p>
                  </div>
                </div>

                <div className="order-items">
                  <h4>Order Items ({orderSummary.items})</h4>
                  <div className="items-list">
                    <div className="item">
                      <span>Blue Lagoon x2</span>
                      <span>₦8,000</span>
                    </div>
                    <div className="item">
                      <span>Mojito x1</span>
                      <span>₦3,500</span>
                    </div>
                    <div className="item">
                      <span>Heineken x3</span>
                      <span>₦3,600</span>
                    </div>
                  </div>
                </div>

                <div className="cost-breakdown">
                  <div className="cost-row">
                    <span>Subtotal</span>
                    <span>₦{orderSummary.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="cost-row">
                    <span>Service Fee</span>
                    <span>₦{orderSummary.serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="cost-row">
                    <span>Tax</span>
                    <span>₦{orderSummary.tax.toLocaleString()}</span>
                  </div>
                  <div className="cost-row total">
                    <span>Total</span>
                    <span>₦{orderSummary.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="policy-info">
                  <p>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    Your payment is secure and encrypted
                  </p>
                  <p className="small-text">
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </Card>

              <Card className="support-card">
                <h4>Need Help?</h4>
                <p>Our support team is available 24/7 to assist you.</p>
                <div className="support-contact">
                  <span>📞 +234 800 123 4567</span>
                  <span>💬 Live Chat</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showSuccessModal}
        onClose={handleSuccessClose}
        title="Order Confirmed!"
        size="medium"
      >
        <div className="success-modal">
          <div className="success-icon">🎉</div>
          <h3>Thank you for your order!</h3>
          <p>Your order has been confirmed and is being prepared.</p>
          
          <div className="order-details">
            <div className="detail-item">
              <span>Order ID</span>
              <strong>#ORD-{Math.random().toString().slice(2, 8)}</strong>
            </div>
            <div className="detail-item">
              <span>Estimated Pickup</span>
              <strong>15-20 minutes</strong>
            </div>
            <div className="detail-item">
              <span>Total Amount</span>
              <strong>₦{orderSummary.total.toLocaleString()}</strong>
            </div>
          </div>

          <div className="modal-actions">
            <Button variant="outline" onClick={handleSuccessClose}>
              View Orders
            </Button>
            <Button 
              variant="primary" 
              onClick={() => navigate('/qr/123')}
            >
              View QR Code
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Checkout