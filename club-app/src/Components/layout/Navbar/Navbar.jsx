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
      <div className="navbar-container container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-icon">🍸</span>
            <span className="logo-text">ClubSync</span>
          </Link>
        </div>

        <div className="navbar-actions desktop-actions">
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

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="menu-content">
            <Link to="/clubs" className="nav-link hover-lift" onClick={() => setIsMenuOpen(false)}>
              Clubs
            </Link>
            
            {isLoggedIn && (
              <Link to={getDashboardLink()} className="nav-link hover-lift" onClick={() => setIsMenuOpen(false)}>
                {getDashboardText()}
              </Link>
            )}
            
            <Link to="/how-it-works" className="nav-link hover-lift" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/for-clubs" className="nav-link hover-lift" onClick={() => setIsMenuOpen(false)}>
              For Clubs
            </Link>
            
            <div className="mobile-actions">
              {isLoggedIn ? (
                <>
                  {userType === 'user' && (
                    <Link to="/cart" className="nav-cart hover-lift mobile-cart" onClick={() => setIsMenuOpen(false)}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                      Cart {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
                    </Link>
                  )}
                  
                  <Link to="/profile" className="nav-link hover-lift" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faUser} style={{marginRight: '8px'}} />
                    Profile
                  </Link>
                  
                  <button onClick={handleLogout} className="btn btn-outline logout-btn full-width">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-outline full-width" onClick={handleLogin}>
                    Login
                  </button>
                  <Link to="/signup" className="btn btn-primary full-width" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar