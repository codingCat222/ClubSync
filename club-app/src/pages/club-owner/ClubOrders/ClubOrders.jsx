// src/pages/club-owner/ClubOrders/ClubOrders.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSearch, 
  faFilter,
  faCheckCircle,
  faTimesCircle,
  faClock,
  faEye,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../Components/common/Card/Card'
import Button from '../../../Components/common/Button/Button'
import Input from '../../../Components/common/Input/Input'
import './ClubOrders.css'

function ClubOrders() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const orders = [
    { 
      id: '#ORD-001', 
      customer: 'John Doe', 
      items: 3, 
      amount: '₦8,500', 
      status: 'completed', 
      time: '10 min ago',
      itemsList: ['Blue Lagoon', 'Mojito', 'Heineken']
    },
    { 
      id: '#ORD-002', 
      customer: 'Jane Smith', 
      items: 2, 
      amount: '₦12,300', 
      status: 'preparing', 
      time: '25 min ago',
      itemsList: ['Merlot', 'Old Fashioned']
    },
    { 
      id: '#ORD-003', 
      customer: 'Mike Johnson', 
      items: 4, 
      amount: '₦15,800', 
      status: 'pending', 
      time: '40 min ago',
      itemsList: ['Mojito', 'Heineken', 'Tequila Shot', 'Blue Lagoon']
    },
    { 
      id: '#ORD-004', 
      customer: 'Sarah Wilson', 
      items: 2, 
      amount: '₦9,700', 
      status: 'completed', 
      time: '1 hour ago',
      itemsList: ['Old Fashioned', 'Merlot']
    },
    { 
      id: '#ORD-005', 
      customer: 'David Brown', 
      items: 3, 
      amount: '₦10,200', 
      status: 'preparing', 
      time: '2 hours ago',
      itemsList: ['Blue Lagoon', 'Mojito', 'Heineken']
    },
    { 
      id: '#ORD-006', 
      customer: 'Lisa Taylor', 
      items: 1, 
      amount: '₦4,500', 
      status: 'pending', 
      time: '3 hours ago',
      itemsList: ['Old Fashioned']
    }
  ]

  const statusOptions = [
    { value: 'all', label: 'All Orders', icon: faFilter },
    { value: 'pending', label: 'Pending', icon: faClock, color: 'warning' },
    { value: 'preparing', label: 'Preparing', icon: faClock, color: 'primary' },
    { value: 'completed', label: 'Completed', icon: faCheckCircle, color: 'success' }
  ]

  const filteredOrders = orders.filter(order => {
    if (filterStatus !== 'all' && order.status !== filterStatus) return false
    if (searchTerm && !order.customer.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const handleAcceptOrder = (orderId) => {
    console.log('Accepting order:', orderId)
  }

  const handleRejectOrder = (orderId) => {
    console.log('Rejecting order:', orderId)
  }

  const handleCompleteOrder = (orderId) => {
    console.log('Completing order:', orderId)
  }

  return (
    <div className="club-orders-page">
      <div className="club-orders-header">
        <div className="header-content">
          <h1 className="page-title">Order Management</h1>
          <p className="page-subtitle">Manage and track incoming orders</p>
        </div>
        <div className="stats-summary">
          <div className="stat-item">
            <span className="stat-label">Today's Orders</span>
            <strong className="stat-value">42</strong>
          </div>
          <div className="stat-item">
            <span className="stat-label">Pending</span>
            <strong className="stat-value warning">6</strong>
          </div>
          <div className="stat-item">
            <span className="stat-label">Revenue</span>
            <strong className="stat-value success">₦245,800</strong>
          </div>
        </div>
      </div>

      <div className="orders-controls">
        <Card className="controls-card">
          <div className="controls-content">
            <div className="search-section">
              <Input
                type="text"
                placeholder="Search orders by customer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={faSearch}
                className="search-input"
              />
            </div>
            <div className="status-filters">
              {statusOptions.map(option => (
                <button
                  key={option.value}
                  className={`status-filter ${filterStatus === option.value ? 'active' : ''}`}
                  onClick={() => setFilterStatus(option.value)}
                >
                  <FontAwesomeIcon 
                    icon={option.icon} 
                    className={`filter-icon ${option.color || ''}`}
                  />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="orders-list">
        {filteredOrders.map(order => (
          <Card key={order.id} className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3 className="order-id">{order.id}</h3>
                <div className="customer-info">
                  <span className="customer-name">{order.customer}</span>
                  <span className="order-time">{order.time}</span>
                </div>
              </div>
              <div className="order-stats">
                <div className="stat">
                  <span className="stat-label">Items</span>
                  <strong className="stat-value">{order.items}</strong>
                </div>
                <div className="stat">
                  <span className="stat-label">Total</span>
                  <strong className="stat-value amount">{order.amount}</strong>
                </div>
                <div className={`status-badge ${order.status}`}>
                  {order.status}
                </div>
              </div>
            </div>

            <div className="order-items">
              <h4>Items:</h4>
              <div className="items-list">
                {order.itemsList.map((item, index) => (
                  <span key={index} className="item-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="order-actions">
              {order.status === 'pending' && (
                <>
                  <Button 
                    variant="success" 
                    size="small"
                    onClick={() => handleAcceptOrder(order.id)}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                    Accept Order
                  </Button>
                  <Button 
                    variant="danger" 
                    size="small"
                    onClick={() => handleRejectOrder(order.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                    Reject Order
                  </Button>
                </>
              )}
              {order.status === 'preparing' && (
                <Button 
                  variant="primary" 
                  size="small"
                  onClick={() => handleCompleteOrder(order.id)}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  Mark as Ready
                </Button>
              )}
              <Button variant="outline" size="small">
                <FontAwesomeIcon icon={faEye} />
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="empty-orders">
          <Card className="empty-card">
            <div className="empty-content">
              <div className="empty-icon">📭</div>
              <h3>No Orders Found</h3>
              <p>No orders match your current filters</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default ClubOrders