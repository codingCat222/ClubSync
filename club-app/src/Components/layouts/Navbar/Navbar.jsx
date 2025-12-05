import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faShoppingCart, 
  faBars, 
  faTimes, 
  faChampagneGlasses,
  faRightToBracket,
  faUserPlus,
  faMartiniGlass,
  faGlassCheers,
  faStore,
  faArrowRight,
  faArrowRightToBracket,
  faUserCircle,
  faCircleUser,
  faCocktail, // Added for cocktail icon
  faGlassMartini,
  faGlassMartiniAlt,
  faWineGlassAlt,
  faBeer,
  faChevronRight,
  faSignInAlt,
  faUserCheck,
  faWineBottle, // Alternative cocktail icon
  faWhiskeyGlass // Alternative cocktail icon
} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const user = null
  const cartItems = 0

  const handleLogin = () => {
    navigate('/login')
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSignup = () => {
    navigate('/signup')
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            {/* Using FontAwesome cocktail icon for 🍸 */}
            <FontAwesomeIcon icon={faCocktail} className="logo-icon" />
            <span className="logo-text">ClubSync</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-menu desktop-only">
          <Link to="/clubs" className="nav-link hover-lift">
            Clubs
          </Link>
          <Link to="/how-it-works" className="nav-link hover-lift">
            How It Works
          </Link>
          <Link to="/for-clubs" className="nav-link hover-lift">
            For Clubs
          </Link>
        </div>

        {/* Desktop User Actions */}
        <div className="navbar-actions desktop-only">
          {user ? (
            <>
              <Link to="/cart" className="nav-cart hover-lift">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
              </Link>
              <Link to="/profile" className="nav-profile hover-lift">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </>
          ) : (
            <div className="desktop-user-actions">
              <Link to="/cart" className="nav-cart hover-lift">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger Menu Button */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              {/* Using FontAwesome cocktail icon for mobile menu 🍸 */}
              <FontAwesomeIcon icon={faCocktail} className="mobile-logo-icon" />
              <span className="mobile-logo-text">ClubSync</span>
            </div>
            <button className="mobile-close-btn" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="mobile-menu-content">
            {/* Navigation Links */}
            <div className="mobile-nav-section">
              <h3 className="mobile-section-title">Navigation</h3>
              <Link to="/clubs" className="mobile-nav-link" onClick={toggleMenu}>
                <div className="mobile-nav-icon">
                  <FontAwesomeIcon icon={faMartiniGlass} />
                </div>
                <span className="mobile-nav-text">Clubs</span>
                <FontAwesomeIcon icon={faChevronRight} className="mobile-nav-arrow" />
              </Link>
              
              <Link to="/how-it-works" className="mobile-nav-link" onClick={toggleMenu}>
                <div className="mobile-nav-icon">
                  <FontAwesomeIcon icon={faGlassCheers} />
                </div>
                <span className="mobile-nav-text">How It Works</span>
                <FontAwesomeIcon icon={faChevronRight} className="mobile-nav-arrow" />
              </Link>
              
              <Link to="/for-clubs" className="mobile-nav-link" onClick={toggleMenu}>
                <div className="mobile-nav-icon">
                  <FontAwesomeIcon icon={faStore} />
                </div>
                <span className="mobile-nav-text">For Clubs</span>
                <FontAwesomeIcon icon={faChevronRight} className="mobile-nav-arrow" />
              </Link>
            </div>

            {/* User Section with Login/Signup inside hamburger */}
            <div className="mobile-user-section">
              <h3 className="mobile-section-title">Account</h3>
              
              {user ? (
                <>
                  <Link to="/profile" className="mobile-nav-link user-profile-link" onClick={toggleMenu}>
                    <div className="mobile-nav-icon profile-icon">
                      <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                    <div className="mobile-user-info">
                      <span className="mobile-nav-text">My Profile</span>
                      <span className="mobile-user-email">user@example.com</span>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className="mobile-nav-arrow" />
                  </Link>
                  
                  <Link to="/cart" className="mobile-nav-link" onClick={toggleMenu}>
                    <div className="mobile-nav-icon">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <div className="mobile-user-info">
                      <span className="mobile-nav-text">My Cart</span>
                      <span className="mobile-cart-items">{cartItems} items</span>
                    </div>
                    {cartItems > 0 && <span className="mobile-cart-badge">{cartItems}</span>}
                  </Link>
                </>
              ) : (
                <div className="mobile-auth-buttons-clubsync">
                  {/* Login Button inside hamburger */}
                  <button className="mobile-login-btn-clubsync" onClick={handleLogin}>
                    <div className="auth-btn-icon-clubsync">
                      {/* Using FontAwesome cocktail icon for login button 🍸 */}
                      <FontAwesomeIcon icon={faCocktail} />
                    </div>
                    <div className="auth-btn-content-clubsync">
                      <span className="auth-btn-title-clubsync">Login</span>
                      <span className="auth-btn-subtitle-clubsync">Sign in to ClubSync</span>
                    </div>
                    <div className="auth-btn-arrow-clubsync">
                      <FontAwesomeIcon icon={faArrowRightToBracket} />
                    </div>
                  </button>

                  {/* Sign Up Button inside hamburger */}
                  <button className="mobile-signup-btn-clubsync" onClick={handleSignup}>
                    <div className="auth-btn-icon-clubsync">
                      {/* Using FontAwesome cocktail icon for signup button 🍸 */}
                      <FontAwesomeIcon icon={faCocktail} />
                    </div>
                    <div className="auth-btn-content-clubsync">
                      <span className="auth-btn-title-clubsync">Sign Up</span>
                      <span className="auth-btn-subtitle-clubsync">Join ClubSync today</span>
                    </div>
                    <div className="auth-btn-arrow-clubsync">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </div>
                  </button>

                  <div className="mobile-auth-note-clubsync">
                    {/* Using FontAwesome cocktail icon for note 🍸 */}
                    <FontAwesomeIcon icon={faCocktail} className="note-icon-clubsync" />
                    <p>Join ClubSync to book clubs, manage reservations, and enjoy exclusive perks!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </div>
    </nav>
  )
}

export default Navbar