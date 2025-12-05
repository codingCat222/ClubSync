// src/pages/user/Orders/Orders.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSearch, 
  faFilter,
  faClock,
  faCheckCircle,
  faTimesCircle,
  faSpinner,
  faEye,
  faQrcode,
  faCalendarAlt,
  faMoneyBillWave,
  faShoppingBag
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import Button from '../../../components/common/Button/Button'
import Input from '../../../components/common/Input/Input'
import './Orders.css'

function Orders() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const orders = [
    {
      id: 'ORD-001',
      club: 'Midnight Lounge',
      clubImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      items: 3,
      amount: '₦8,500',
      status: 'completed',
      date: 'Jan 15, 2024',
      time: '10:30 PM',
      itemsList: ['Blue Lagoon', 'Mojito', 'Heineken']
    },
    {
      id: 'ORD-002',
      club: 'Blue Velvet Bar',
      clubImage: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      items: 2,
      amount: '₦12,300',
      status: 'preparing',
      date: 'Jan 14, 2024',
      time: '09:45 PM',
      itemsList: ['Merlot', 'Old Fashioned']
    },
    {
      id: 'ORD-003',
      club: 'The Jazz Cellar',
      clubImage: 'https://images.unsplash.com/photo-1492684223066-dd23140edf6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      items: 4,
      amount: '₦15,800',
      status: 'pending',
      date: 'Jan 13, 2024',
      time: '11:20 PM',
      itemsList: ['Mojito', 'Heineken', 'Tequila Shot', 'Blue Lagoon']
    },
    {
      id: 'ORD-004',
      club: 'Rooftop Paradise',
      clubImage: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      items: 2,
      amount: '₦9,700',
      status: 'completed',
      date: 'Jan 12, 2024',
      time: '08:15 PM',
      itemsList: ['Old Fashioned', 'Merlot']
    },
    {
      id: 'ORD-005',
      club: 'Midnight Lounge',
      clubImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      items: 3,
      amount: '₦10,200',
      status: 'cancelled',
      date: 'Jan 10, 2024',
      time: '10:00 PM',
      itemsList: ['Blue Lagoon', 'Mojito', 'Heineken']
    }
  ]

  const statusFilters = [
    { id: 'all', label: 'All Orders', icon: faFilter },
    { id: 'pending', label: 'Pending', icon: faClock, color: 'warning' },
    { id: 'preparing', label: 'Preparing', icon: faSpinner, color: 'primary' },
    { id: 'completed', label: 'Completed', icon: faCheckCircle, color: 'success' },
    { id: 'cancelled', label: 'Cancelled', icon: faTimesCircle, color: 'danger' }
  ]

  const filteredOrders = orders.filter(order => {
    if (filterStatus !== 'all' && order.status !== filterStatus) return false
    if (searchTerm && !order.club.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return faClock
      case 'preparing': return faSpinner
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
    <div className="orders-page">
      <div className="orders-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">My Orders</h1>
            <p className="page-subtitle">Track and manage your drink orders</p>
          </div>
        </div>
      </div>

      <div className="orders-content">
        <div className="container">
          <Card className="orders-controls">
            <div className="controls-grid">
              <div className="search-section">
                <Input
                  type="text"
                  placeholder="Search orders by club name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={faSearch}
                  className="search-input"
                />
              </div>
              <div className="stats-summary">
                <div className="stat">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <div>
                    <span>Total Orders</span>
                    <strong>{orders.length}</strong>
                  </div>
                </div>
                <div className="stat">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  <div>
                    <span>Total Spent</span>
                    <strong>₦56,500</strong>
                  </div>
                </div>
                <div className="stat">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <div>
                    <span>This Month</span>
                    <strong>4 orders</strong>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="status-filters">
            {statusFilters.map(filter => (
              <button
                key={filter.id}
                className={`status-filter ${filterStatus === filter.id ? 'active' : ''}`}
                onClick={() => setFilterStatus(filter.id)}
              >
                <FontAwesomeIcon icon={filter.icon} className={`filter-icon ${filter.color || ''}`} />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>

          <div className="orders-list">
            {filteredOrders.map(order => (
              <Card key={order.id} className="order-card hover-lift">
                <div className="order-header">
                  <div className="order-info">
                    <div className="club-info">
                      <img src={order.clubImage} alt={order.club} className="club-image" />
                      <div>
                        <h3 className="club-name">{order.club}</h3>
                        <div className="order-meta">
                          <span className="order-id">#{order.id}</span>
                          <span className="order-date">{order.date} • {order.time}</span>
                        </div>
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
                    </div>
                  </div>
                  <div className={`status-badge ${getStatusColor(order.status)}`}>
                    <FontAwesomeIcon icon={getStatusIcon(order.status)} />
                    <span>{order.status}</span>
                  </div>
                </div>

                <div className="order-items">
                  <h4>Order Items</h4>
                  <div className="items-list">
                    {order.itemsList.map((item, index) => (
                      <span key={index} className="item-tag">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="order-actions">
                  <Button 
                    variant="outline" 
                    size="small"
                    as={Link}
                    to={`/orders/${order.id}`}
                  >
                    <FontAwesomeIcon icon={faEye} />
                    View Details
                  </Button>
                  {order.status === 'completed' && (
                    <Button 
                      variant="primary" 
                      size="small"
                      as={Link}
                      to={`/qr/${order.id}`}
                    >
                      <FontAwesomeIcon icon={faQrcode} />
                      View QR
                    </Button>
                  )}
                  {order.status === 'pending' && (
                    <Button 
                      variant="danger" 
                      size="small"
                    >
                      Cancel Order
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {filteredOrders.length === 0 && (
            <div className="empty-orders">
              <Card className="empty-card">
                <div className="empty-content">
                  <div className="empty-icon">
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </div>
                  <h3>No Orders Found</h3>
                  <p>No orders match your current filters</p>
                  <Button 
                    variant="primary" 
                    as={Link}
                    to="/home"
                  >
                    Browse Clubs
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Orders