import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faShoppingCart, 
  faBars, 
  faTimes,
  faGlassMartiniAlt,
  faSignInAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState('')
  const [cartItems, setCartItems] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const storedUserType = localStorage.getItem('userType')
    
    if (token) {
      setIsLoggedIn(true)
      setUserType(storedUserType || '')
    }
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart.length)
    
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
    setIsMenuOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    setIsLoggedIn(false)
    setUserType('')
    setIsMenuOpen(false)
    navigate('/')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getDashboardLink = () => {
    if (userType === 'user') return '/home'
    if (userType === 'club-owner') return '/dashboard'
    if (userType === 'admin') return '/admin'
    return '/'
  }

  const getDashboardText = () => {
    if (userType === 'user') return 'Dashboard'
    if (userType === 'club-owner') return 'Club Dashboard'
    if (userType === 'admin') return 'Admin Panel'
    return 'Dashboard'
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-icon">
              <FontAwesomeIcon icon={faGlassMartiniAlt} />
            </span>
            <span className="logo-text">ClubSync</span>
          </Link>
        </div>

        <div className="navbar-menu">
          <Link to="/clubs" className="nav-link">Clubs</Link>
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
          <Link to="/for-clubs" className="nav-link">For Clubs</Link>
          {isLoggedIn && (
            <Link to={getDashboardLink()} className="nav-link">
              {getDashboardText()}
            </Link>
          )}
        </div>

        <div className="navbar-actions desktop-actions">
          {isLoggedIn ? (
            <>
              {userType === 'user' && (
                <Link to="/cart" className="nav-cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
                </Link>
              )}
              
              <div className="user-menu">
                <Link to="/profile" className="nav-profile">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                <button onClick={handleLogout} className="btn btn-outline">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <button onClick={handleLogin} className="btn btn-text">
                <FontAwesomeIcon icon={faSignInAlt} className="btn-icon" />
                Login
              </button>
              <Link to="/signup" className="btn btn-primary">
                <FontAwesomeIcon icon={faUserPlus} className="btn-icon" />
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

        {/* Mobile Sidebar Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
              <span className="logo-icon">
                <FontAwesomeIcon icon={faGlassMartiniAlt} />
              </span>
              <span className="logo-text">ClubSync</span>
            </Link>
            <button className="mobile-menu-close" onClick={toggleMenu} aria-label="Close menu">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="mobile-menu-content">
            <Link to="/clubs" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Clubs
            </Link>
            <Link to="/how-it-works" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/for-clubs" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              For Clubs
            </Link>
            
            {isLoggedIn && (
              <>
                <Link to={getDashboardLink()} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  {getDashboardText()}
                </Link>
                {userType === 'user' && (
                  <Link to="/cart" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Cart
                    {cartItems > 0 && <span className="mobile-cart-badge">{cartItems}</span>}
                  </Link>
                )}
                <Link to="/profile" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  <FontAwesomeIcon icon={faUser} />
                  Profile
                </Link>
              </>
            )}
          </div>

          <div className="mobile-menu-footer">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn btn-outline full-width">
                Logout
              </button>
            ) : (
              <>
                <button onClick={handleLogin} className="btn btn-outline full-width">
                  <FontAwesomeIcon icon={faSignInAlt} className="btn-icon" />
                  Login
                </button>
                <Link to="/signup" className="btn btn-primary full-width" onClick={() => setIsMenuOpen(false)}>
                  <FontAwesomeIcon icon={faUserPlus} className="btn-icon" />
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar