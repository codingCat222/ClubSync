// src/pages/club-owner/Earnings/Earnings.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMoneyBillWave, 
  faChartLine, 
  faArrowUp, 
  faArrowDown,
  faCalendarAlt,
  faDownload,
  faFilter,
  faCreditCard,
  faWallet,
  faReceipt
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../Components/common/Card/Card'
import Button from '../../../Components/common/Button/Button'
import './Earnings.css'

function Earnings() {
  const [timeRange, setTimeRange] = useState('week')
  const [selectedDate, setSelectedDate] = useState('')

  const earningsData = {
    totalEarnings: '₦2,450,800',
    todayEarnings: '₦245,800',
    totalOrders: 420,
    averageOrder: '₦5,835',
    change: '+18.5%'
  }

  const transactions = [
    { id: 1, orderId: '#ORD-001', customer: 'John Doe', amount: '₦8,500', type: 'order', status: 'completed', date: '2024-01-15', time: '10:30 AM' },
    { id: 2, orderId: '#ORD-002', customer: 'Jane Smith', amount: '₦12,300', type: 'order', status: 'completed', date: '2024-01-15', time: '11:45 AM' },
    { id: 3, orderId: '#ORD-003', customer: 'Mike Johnson', amount: '₦15,800', type: 'order', status: 'completed', date: '2024-01-14', time: '2:15 PM' },
    { id: 4, orderId: '#ORD-004', customer: 'Sarah Wilson', amount: '₦9,700', type: 'order', status: 'completed', date: '2024-01-14', time: '4:30 PM' },
    { id: 5, orderId: '#ORD-005', customer: 'David Brown', amount: '₦10,200', type: 'order', status: 'completed', date: '2024-01-13', time: '7:45 PM' },
    { id: 6, orderId: '#PAY-001', customer: 'Withdrawal', amount: '-₦500,000', type: 'withdrawal', status: 'processing', date: '2024-01-12', time: '9:00 AM' },
    { id: 7, orderId: '#FEE-001', customer: 'Platform Fee', amount: '-₦12,540', type: 'fee', status: 'completed', date: '2024-01-11', time: '12:00 PM' }
  ]

  const timeRanges = [
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' }
  ]

  const chartData = [
    { day: 'Mon', earnings: 185000 },
    { day: 'Tue', earnings: 220000 },
    { day: 'Wed', earnings: 195000 },
    { day: 'Thu', earnings: 245800 },
    { day: 'Fri', earnings: 320000 },
    { day: 'Sat', earnings: 410000 },
    { day: 'Sun', earnings: 385000 }
  ]

  const maxEarnings = Math.max(...chartData.map(d => d.earnings))

  const handleDownloadReport = () => {
    console.log('Downloading earnings report...')
  }

  const handleRequestWithdrawal = () => {
    console.log('Requesting withdrawal...')
  }

  const getTransactionIcon = (type) => {
    switch(type) {
      case 'order': return faReceipt
      case 'withdrawal': return faWallet
      case 'fee': return faCreditCard
      default: return faReceipt
    }
  }

  const getTransactionColor = (type) => {
    switch(type) {
      case 'order': return '#10B981'
      case 'withdrawal': return '#EF4444'
      case 'fee': return '#F59E0B'
      default: return '#6B7280'
    }
  }

  return (
    <div className="earnings-page">
      <div className="earnings-header">
        <div className="header-content">
          <h1 className="page-title">Earnings Dashboard</h1>
          <p className="page-subtitle">Track your revenue and manage payouts</p>
        </div>
        <div className="header-actions">
          <Button variant="outline">
            <FontAwesomeIcon icon={faCalendarAlt} />
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </Button>
          <Button variant="primary" onClick={handleDownloadReport}>
            <FontAwesomeIcon icon={faDownload} />
            Download Report
          </Button>
        </div>
      </div>

      <div className="earnings-stats">
        <div className="stats-grid">
          <Card className="stat-card primary">
            <div className="stat-content">
              <div className="stat-icon">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <div className="stat-info">
                <p className="stat-label">Total Earnings</p>
                <h3 className="stat-value">{earningsData.totalEarnings}</h3>
                <div className="stat-change positive">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <span>{earningsData.change}</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div className="stat-info">
                <p className="stat-label">Today's Earnings</p>
                <h3 className="stat-value">{earningsData.todayEarnings}</h3>
                <div className="stat-change positive">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <span>+12.3%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">
                <FontAwesomeIcon icon={faReceipt} />
              </div>
              <div className="stat-info">
                <p className="stat-label">Total Orders</p>
                <h3 className="stat-value">{earningsData.totalOrders}</h3>
                <div className="stat-change positive">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <span>+8.2%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              <div className="stat-info">
                <p className="stat-label">Average Order</p>
                <h3 className="stat-value">{earningsData.averageOrder}</h3>
                <div className="stat-change positive">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <span>+5.7%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="earnings-content">
        <div className="content-row">
          <div className="content-column">
            <Card className="chart-card">
              <div className="chart-header">
                <h3>Earnings Overview</h3>
                <div className="time-filters">
                  {timeRanges.map(range => (
                    <button
                      key={range.id}
                      className={`time-filter ${timeRange === range.id ? 'active' : ''}`}
                      onClick={() => setTimeRange(range.id)}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="chart-container">
                <div className="chart-bars">
                  {chartData.map((data, index) => (
                    <div key={index} className="chart-bar-container">
                      <div className="chart-bar">
                        <div 
                          className="bar-fill" 
                          style={{ 
                            height: `${(data.earnings / maxEarnings) * 100}%`,
                            background: `linear-gradient(to top, var(--primary-color), var(--primary-light))`
                          }}
                        />
                      </div>
                      <div className="bar-label">{data.day}</div>
                      <div className="bar-value">₦{(data.earnings / 1000).toFixed(0)}K</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="withdrawal-card">
              <div className="withdrawal-header">
                <h3>Available Balance</h3>
                <div className="balance-amount">₦1,950,800</div>
              </div>
              <p className="withdrawal-info">
                Funds are automatically processed. Next payout: <strong>Jan 20, 2024</strong>
              </p>
              <div className="withdrawal-actions">
                <Button variant="primary" onClick={handleRequestWithdrawal} fullWidth>
                  <FontAwesomeIcon icon={faWallet} />
                  Request Withdrawal
                </Button>
              </div>
            </Card>
          </div>

          <div className="content-column">
            <Card className="transactions-card">
              <div className="transactions-header">
                <h3>Recent Transactions</h3>
                <div className="transactions-controls">
                  <Button variant="outline" size="small">
                    <FontAwesomeIcon icon={faFilter} />
                    Filter
                  </Button>
                </div>
              </div>

              <div className="transactions-list">
                {transactions.map(transaction => (
                  <div key={transaction.id} className="transaction-item">
                    <div className="transaction-icon" style={{ color: getTransactionColor(transaction.type) }}>
                      <FontAwesomeIcon icon={getTransactionIcon(transaction.type)} />
                    </div>
                    <div className="transaction-info">
                      <div className="transaction-main">
                        <strong>{transaction.customer}</strong>
                        <span className="transaction-id">{transaction.orderId}</span>
                      </div>
                      <div className="transaction-details">
                        <span className="transaction-date">{transaction.date} • {transaction.time}</span>
                        <span className={`transaction-status ${transaction.status}`}>
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                    <div className={`transaction-amount ${transaction.amount.startsWith('-') ? 'negative' : 'positive'}`}>
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>

              <div className="transactions-footer">
                <Button variant="outline" fullWidth>
                  View All Transactions
                </Button>
              </div>
            </Card>

            <Card className="summary-card">
              <h3>Earnings Summary</h3>
              <div className="summary-list">
                <div className="summary-item">
                  <span>Gross Revenue</span>
                  <strong>₦2,450,800</strong>
                </div>
                <div className="summary-item">
                  <span>Platform Fees</span>
                  <strong className="negative">-₦122,540</strong>
                </div>
                <div className="summary-item">
                  <span>Taxes</span>
                  <strong className="negative">-₦147,048</strong>
                </div>
                <div className="summary-item total">
                  <span>Net Earnings</span>
                  <strong className="positive">₦2,181,212</strong>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Earnings