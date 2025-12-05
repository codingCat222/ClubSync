import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState('')
  const [cartItems, setCartItems] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is logged in on component mount
    const token = localStorage.getItem('token')
    const storedUserType = localStorage.getItem('userType')
    
    if (token) {
      setIsLoggedIn(true)
      setUserType(storedUserType || '')
    }
    
    // Load cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart.length)
    
    // Listen for storage changes
    const handleStorageChange = () => {
      const newToken = localStorage.getItem('token')
      const newUserType = localStorage.getItem('userType')
      setIsLoggedIn(!!newToken)
      setUserType(newUserType || '')
      
      const newCart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartItems(newCart.length)
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    setIsLoggedIn(false)
    setUserType('')
    navigate('/')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Determine dashboard link based on user type
  const getDashboardLink = () => {
    if (userType === 'user') return '/home'
    if (userType === 'club-owner') return '/dashboard'
    if (userType === 'admin') return '/admin'
    return '/'
  }

  // Determine dashboard text based on user type
  const getDashboardText = () => {
    if (userType === 'user') return 'Dashboard'
    if (userType === 'club-owner') return 'Club Dashboard'
    if (userType === 'admin') return 'Admin Panel'
    return 'Dashboard'
  }

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <span className="logo-icon">🍸</span>
            <span className="logo-text">ClubSync</span>
          </Link>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/clubs" className="nav-link hover-lift">Clubs</Link>
          
          {isLoggedIn && (
            <Link to={getDashboardLink()} className="nav-link hover-lift">
              {getDashboardText()}
            </Link>
          )}
          
          <Link to="/how-it-works" className="nav-link hover-lift">How It Works</Link>
          <Link to="/for-clubs" className="nav-link hover-lift">For Clubs</Link>
        </div>

        <div className="navbar-actions">
          {isLoggedIn ? (
            <>
              {userType === 'user' && (
                <Link to="/cart" className="nav-cart hover-lift">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
                </Link>
              )}
              
              <div className="user-menu">
                <Link to="/profile" className="nav-profile hover-lift">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                <button onClick={handleLogout} className="btn btn-outline logout-btn">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <button className="btn btn-outline" onClick={handleLogin}>
                Login
              </button>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar