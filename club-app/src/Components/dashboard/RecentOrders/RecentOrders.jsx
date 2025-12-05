// src/components/dashboard/RecentOrders/RecentOrders.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Button from '../../common/Button/Button'
import './RecentOrders.css'

function RecentOrders({ orders = [], title = 'Recent Orders', showViewAll = true, className = '' }) {
  return (
    <div className={`recent-orders ${className}`}>
      <div className="section-header">
        <h3>{title}</h3>
        {showViewAll && (
          <Button variant="outline" size="small" as={Link} to="/orders">
            View All
          </Button>
        )}
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
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
                <td>
                  <Button 
                    variant="outline" 
                    size="small"
                    as={Link}
                    to={`/orders/${order.id.slice(1)}`}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentOrders