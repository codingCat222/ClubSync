// src/components/layout/Sidebar/Sidebar.jsx
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTachometerAlt, 
  faShoppingCart, 
  faUsers, 
  faQrcode, 
  faChartLine,
  faCog,
  faSignOutAlt,
  faClipboardList,
  faGlassMartiniAlt
} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

function Sidebar() {
  const userType = localStorage.getItem('userType')

  const userLinks = [
    { to: '/home', icon: faTachometerAlt, label: 'Home' },
    { to: '/cart', icon: faShoppingCart, label: 'Cart' },
    { to: '/orders', icon: faClipboardList, label: 'Orders' },
    { to: '/qr', icon: faQrcode, label: 'QR Code' },
    { to: '/profile', icon: faUsers, label: 'Profile' }
  ]

  const clubOwnerLinks = [
    { to: '/dashboard', icon: faTachometerAlt, label: 'Dashboard' },
    { to: '/orders', icon: faClipboardList, label: 'Orders' },
    { to: '/menu', icon: faGlassMartiniAlt, label: 'Menu' },
    { to: '/staff', icon: faUsers, label: 'Staff' },
    { to: '/scanner', icon: faQrcode, label: 'Scanner' },
    { to: '/earnings', icon: faChartLine, label: 'Earnings' },
    { to: '/settings', icon: faCog, label: 'Settings' }
  ]

  const links = userType === 'club-owner' ? clubOwnerLinks : userLinks

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">🍸</span>
          <span className="logo-text">ClubFlow</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-links">
          {links.map(link => (
            <li key={link.to}>
              <NavLink 
                to={link.to} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={link.icon} className="nav-icon" />
                <span className="nav-label">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-button">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar