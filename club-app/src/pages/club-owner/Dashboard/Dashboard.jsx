// src/pages/club-owner/Dashboard/Dashboard.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faShoppingCart, 
  faMoneyBillWave, 
  faUsers, 
  faClock,
  faChartLine,
  faArrowUp,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../Components/common/Card/Card'
import Button from '../../../Components/common/Button/Button'
import './Dashboard.css'

function Dashboard() {
  const stats = [
    {
      title: 'Today\'s Orders',
      value: '42',
      change: '+12%',
      trend: 'up',
      icon: faShoppingCart,
      color: 'primary'
    },
    {
      title: 'Revenue',
      value: '₦245,800',
      change: '+18%',
      trend: 'up',
      icon: faMoneyBillWave,
      color: 'success'
    },
    {
      title: 'Active Staff',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: faUsers,
      color: 'warning'
    },
    {
      title: 'Pending Orders',
      value: '6',
      change: '-3',
      trend: 'down',
      icon: faClock,
      color: 'danger'
    }
  ]

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', amount: '₦8,500', status: 'completed', time: '10 min ago' },
    { id: '#ORD-002', customer: 'Jane Smith', amount: '₦12,300', status: 'preparing', time: '25 min ago' },
    { id: '#ORD-003', customer: 'Mike Johnson', amount: '₦5,800', status: 'pending', time: '40 min ago' },
    { id: '#ORD-004', customer: 'Sarah Wilson', amount: '₦9,700', status: 'completed', time: '1 hour ago' },
    { id: '#ORD-005', customer: 'David Brown', amount: '₦15,200', status: 'preparing', time: '2 hours ago' }
  ]

  const popularItems = [
    { name: 'Blue Lagoon', orders: 42, revenue: '₦168,000' },
    { name: 'Mojito', orders: 38, revenue: '₦152,000' },
    { name: 'Whiskey Sour', orders: 31, revenue: '₦124,000' },
    { name: 'Margarita', orders: 28, revenue: '₦112,000' },
    { name: 'Old Fashioned', orders: 24, revenue: '₦96,000' }
  ]

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="header-content">
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back! Here's what's happening with your club today.</p>
        </div>
        <div className="header-actions">
          <Button variant="primary">
            <FontAwesomeIcon icon={faChartLine} />
            View Analytics
          </Button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card zoom-in">
            <div className="stat-content">
              <div className="stat-info">
                <p className="stat-title">{stat.title}</p>
                <h3 className="stat-value">{stat.value}</h3>
                <div className={`stat-change ${stat.trend}`}>
                  <FontAwesomeIcon icon={stat.trend === 'up' ? faArrowUp : faArrowDown} />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className={`stat-icon bg-${stat.color}`}>
                <FontAwesomeIcon icon={stat.icon} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="content-grid">
          <div className="content-column">
            <Card className="section-card">
              <div className="section-header">
                <h2 className="section-title">Recent Orders</h2>
                <Button variant="outline" size="small">
                  View All
                </Button>
              </div>
              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map(order => (
                      <tr key={order.id}>
                        <td><strong>{order.id}</strong></td>
                        <td>{order.customer}</td>
                        <td>{order.amount}</td>
                        <td>
                          <span className={`status-badge ${order.status}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>{order.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="content-column">
            <Card className="section-card">
              <div className="section-header">
                <h2 className="section-title">Popular Items</h2>
                <Button variant="outline" size="small">
                  View Menu
                </Button>
              </div>
              <div className="popular-items">
                {popularItems.map((item, index) => (
                  <div key={index} className="popular-item">
                    <div className="item-rank">{index + 1}</div>
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>{item.orders} orders</p>
                    </div>
                    <div className="item-revenue">
                      <strong>{item.revenue}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="section-card">
              <div className="section-header">
                <h2 className="section-title">Quick Actions</h2>
              </div>
              <div className="quick-actions-grid">
                <button className="quick-action">
                  <div className="action-icon">➕</div>
                  <span>Add New Item</span>
                </button>
                <button className="quick-action">
                  <div className="action-icon">👥</div>
                  <span>Manage Staff</span>
                </button>
                <button className="quick-action">
                  <div className="action-icon">📱</div>
                  <span>View Scanner</span>
                </button>
                <button className="quick-action">
                  <div className="action-icon">📊</div>
                  <span>View Reports</span>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard