// src/components/layout/Footer/Footer.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons'
import { 
  faMapMarkerAlt, 
  faQuestionCircle, 
  faHeadset,
  faGlassCheers,
  faCrown,
  faDollarSign,
  faBuilding,
  faUserTie,
  faNewspaper,
  faBullhorn,
  faShieldAlt,
  faFileContract,
  faCookieBite
} from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FontAwesomeIcon icon={faGlassCheers} className="logo-icon" />
              <span className="logo-text">ClubSync</span>
            </div>
            <p className="footer-description">
              {/* Order drinks instantly from your favorite clubs. Skip the wait, enjoy the night. */}
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
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="section-icon" />
              For Users
            </h3>
            <ul className="footer-links">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="link-icon" />
                <Link to="/clubs">Find Clubs</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faQuestionCircle} className="link-icon" />
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faQuestionCircle} className="link-icon" />
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faHeadset} className="link-icon" />
                <Link to="/contact">Contact Support</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>
              <FontAwesomeIcon icon={faCrown} className="section-icon" />
              For Clubs
            </h3>
            <ul className="footer-links">
              <li>
                <FontAwesomeIcon icon={faCrown} className="link-icon" />
                <Link to="/for-clubs">Club Benefits</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faUserTie} className="link-icon" />
                <Link to="/signup/club-owner">Sign Up</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faDollarSign} className="link-icon" />
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faQuestionCircle} className="link-icon" />
                <Link to="/club-faq">Club FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>
              <FontAwesomeIcon icon={faBuilding} className="section-icon" />
              Company
            </h3>
            <ul className="footer-links">
              <li>
                <FontAwesomeIcon icon={faBuilding} className="link-icon" />
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faUserTie} className="link-icon" />
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faNewspaper} className="link-icon" />
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faBullhorn} className="link-icon" />
                <Link to="/press">Press</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ClubSync. All rights reserved.</p>
          <div className="legal-links">
            <FontAwesomeIcon icon={faShieldAlt} className="legal-icon" />
            <Link to="/privacy">Privacy Policy</Link>
            <FontAwesomeIcon icon={faFileContract} className="legal-icon" />
            <Link to="/terms">Terms of Service</Link>
            <FontAwesomeIcon icon={faCookieBite} className="legal-icon" />
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer