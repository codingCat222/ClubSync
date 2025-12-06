// src/components/layout/Footer/Footer.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🍸</span>
              <span className="logo-text">ClubSync</span>
            </div>
            <p className="footer-description">
              Order drinks instantly from your favorite clubs. Skip the wait, enjoy the night.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>For Users</h3>
            <ul className="footer-links">
              <li><Link to="/clubs">Find Clubs</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>For Clubs</h3>
            <ul className="footer-links">
              <li><Link to="/for-clubs">Club Benefits</Link></li>
              <li><Link to="/signup/club-owner">Sign Up</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/club-faq">Club FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/press">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ClubSync. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer