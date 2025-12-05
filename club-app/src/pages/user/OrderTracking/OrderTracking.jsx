// src/pages/user/OrderTracking/OrderTracking.jsx
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faClock,
  faCheckCircle,
  faShoppingBag,
  faTruck,
  faCheck,
  faMapMarkerAlt,
  faUser,
  faPhone,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import Button from '../../../components/common/Button/Button'
import './OrderTracking.css'

function OrderTracking() {
  const { id } = useParams()
  const [order, setOrder] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const mockOrder = {
      id: `#ORD-${id}`,
      customer: 'John Doe',
      phone: '+234 801 234 5678',
      club: 'Midnight Lounge',
      address: '123 Night Street, Victoria Island',
      items: [
        { name: 'Blue Lagoon', quantity: 2, price: '₦8,000' },
        { name: 'Mojito', quantity: 1, price: '₦3,500' },
        { name: 'Heineken', quantity: 3, price: '₦3,600' }
      ],
      total: '₦15,100',
      orderTime: '2024-01-15 14:45',
      estimatedTime: '15-20 min',
      steps: [
        { id: 1, title: 'Order Placed', description: 'Your order has been received', time: '2:45 PM', completed: true },
        { id: 2, title: 'Order Confirmed', description: 'Club has accepted your order', time: '2:47 PM', completed: true },
        { id: 3, title: 'Preparing', description: 'Your drinks are being prepared', time: '2:50 PM', completed: true },
        { id: 4, title: 'Ready for Pickup', description: 'Order is ready at the bar', time: '3:00 PM', completed: false },
        { id: 5, title: 'Completed', description: 'Order has been picked up', time: null, completed: false }
      ]
    }
    
    setOrder(mockOrder)
    const completedSteps = mockOrder.steps.filter(step => step.completed).length
    setCurrentStep(completedSteps)
  }, [id])

  if (!order) return <div>Loading...</div>

  return (
    <div className="order-tracking-page">
      <div className="order-tracking-header">
        <div className="container">
          <div className="header-content">
            <Link to="/orders" className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Orders
            </Link>
            <h1 className="page-title">Order Tracking</h1>
            <p className="page-subtitle">Track your order in real-time</p>
          </div>
        </div>
      </div>

      <div className="order-tracking-content">
        <div className="container">
          <div className="tracking-layout">
            <div className="tracking-timeline-section">
              <Card className="timeline-card">
                <div className="timeline-header">
                  <h3>Order Status</h3>
                  <div className="order-id">{order.id}</div>
                </div>

                <div className="timeline-steps">
                  {order.steps.map((step, index) => (
                    <div 
                      key={step.id} 
                      className={`timeline-step ${step.completed ? 'completed' : ''} ${index === currentStep ? 'current' : ''}`}
                    >
                      <div className="step-indicator">
                        {step.completed ? (
                          <FontAwesomeIcon icon={faCheck} className="step-icon" />
                        ) : (
                          <span className="step-number">{step.id}</span>
                        )}
                      </div>
                      <div className="step-content">
                        <h4 className="step-title">{step.title}</h4>
                        <p className="step-description">{step.description}</p>
                        {step.time && <span className="step-time">{step.time}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="estimated-time">
                  <FontAwesomeIcon icon={faClock} />
                  <span>Estimated pickup: {order.estimatedTime}</span>
                </div>
              </Card>

              <Card className="help-card">
                <h4>Need Help?</h4>
                <p>Contact the club directly for order inquiries</p>
                <div className="help-actions">
                  <Button variant="outline" size="small" fullWidth>
                    Contact Club
                  </Button>
                  <Button variant="outline" size="small" fullWidth>
                    Contact Support
                  </Button>
                </div>
              </Card>
            </div>

            <div className="order-details-section">
              <Card className="order-info-card">
                <h3>Order Details</h3>
                
                <div className="order-info-grid">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                      <label>Customer</label>
                      <strong>{order.customer}</strong>
                    </div>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <div>
                      <label>Phone</label>
                      <strong>{order.phone}</strong>
                    </div>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <div>
                      <label>Club</label>
                      <strong>{order.club}</strong>
                    </div>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faClock} />
                    <div>
                      <label>Order Time</label>
                      <strong>{order.orderTime}</strong>
                    </div>
                  </div>
                </div>

                <div className="club-address">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{order.address}</span>
                </div>
              </Card>

              <Card className="order-items-card">
                <h3>Order Items</h3>
                <div className="items-list">
                  {order.items.map((item, index) => (
                    <div key={index} className="item-row">
                      <div className="item-info">
                        <span className="item-name">{item.name}</span>
                        <span className="item-quantity">x{item.quantity}</span>
                      </div>
                      <span className="item-price">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="order-total">
                  <div className="total-label">Total Amount</div>
                  <div className="total-amount">{order.total}</div>
                </div>
              </Card>

              <Card className="actions-card">
                <h3>Order Actions</h3>
                <div className="actions-grid">
                  <Button variant="outline" fullWidth>
                    <FontAwesomeIcon icon={faShoppingBag} />
                    View Receipt
                  </Button>
                  <Button variant="primary" fullWidth as={Link} to={`/qr/${id}`}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    View QR Code
                  </Button>
                  <Button variant="outline" fullWidth>
                    <FontAwesomeIcon icon={faTruck} />
                    Reorder
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderTracking