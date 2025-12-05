
// src/pages/admin/AdminDashboard/AdminDashboard.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUsers, 
  faBuilding, 
  faMoneyBillWave, 
  faChartLine,
  faArrowUp,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import './AdminDashboard.css'

function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '12,450',
      change: '+18%',
      trend: 'up',
      icon: faUsers,
      color: 'primary'
    },
    {
      title: 'Active Clubs',
      value: '342',
      change: '+12%',
      trend: 'up',
      icon: faBuilding,
      color: 'success'
    },
    {
      title: 'Total Revenue',
      value: '₦45.2M',
      change: '+24%',
      trend: 'up',
      icon: faMoneyBillWave,
      color: 'warning'
    },
    {
      title: 'Pending Approvals',
      value: '18',
      change: '-5',
      trend: 'down',
      icon: faChartLine,
      color: 'danger'
    }
  ]

  const recentActivities = [
    { id: 1, action: 'New club registration', user: 'Elite Lounge', time: '10 min ago', status: 'pending' },
    { id: 2, action: 'Club approved', user: 'Sky Bar', time: '25 min ago', status: 'approved' },
    { id: 3, action: 'User reported issue', user: 'John Doe', time: '1 hour ago', status: 'pending' },
    { id: 4, action: 'Payment processed', user: 'Blue Velvet', time: '2 hours ago', status: 'completed' },
    { id: 5, action: 'New user signup', user: 'Sarah Wilson', time: '3 hours ago', status: 'completed' }
  ]

  return (
    <div className="admin-dashboard-page">
      <div className="admin-header">
        <div className="header-content">
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Platform overview and management</p>
        </div>
      </div>

      <div className="admin-stats">
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
      </div>

      <div className="admin-content">
        <div className="content-grid">
          <div className="content-column">
            <Card className="section-card">
              <div className="section-header">
                <h3>Recent Activities</h3>
              </div>
              <div className="activities-list">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">
                      {activity.status === 'pending' ? '⏳' : 
                       activity.status === 'approved' ? '✅' : '📝'}
                    </div>
                    <div className="activity-details">
                      <h4>{activity.action}</h4>
                      <p>{activity.user} • {activity.time}</p>
                    </div>
                    <div className={`activity-status ${activity.status}`}>
                      {activity.status}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="content-column">
            <Card className="section-card">
              <div className="section-header">
                <h3>Quick Actions</h3>
              </div>
              <div className="quick-actions-grid">
                <button className="quick-action">
                  <div className="action-icon">👥</div>
                  <span>Manage Users</span>
                </button>
                <button className="quick-action">
                  <div className="action-icon">🏢</div>
                  <span>Club Approvals</span>
                </button>
                <button className="quick-action">
                  <div className="action-icon">💰</div>
                  <span>View Revenue</span>
                </button>
                <button className="quick-action">
                  <div className="action-icon">📋</div>
                  <span>Support Tickets</span>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard