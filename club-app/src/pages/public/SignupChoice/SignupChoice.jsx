// src/pages/public/SignupChoice/SignupChoice.jsx
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBuilding, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Card from '../../../Components/common/Card/Card'
import './SignupChoice.css'

function SignupChoice() {
  return (
    <div className="signup-choice-page">
      <div className="container">
        <div className="signup-choice-header">
          <h1 className="page-title">Join ClubSync</h1>
          <p className="page-subtitle">Choose how you want to use ClubSync</p>
        </div>

        <div className="signup-options">
          <div className="option-grid">
            <Link to="/signup/user" className="option-link">
              <Card hoverable className="signup-option zoom-in">
                <div className="option-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h2 className="option-title">Sign up as User</h2>
                <p className="option-description">
                  Order drinks from your favorite clubs, track orders, and skip the lines.
                </p>
                <div className="option-features">
                  <div className="feature">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Browse clubs & menus</span>
                  </div>
                  <div className="feature">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Order & pay instantly</span>
                  </div>
                  <div className="feature">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Real-time order tracking</span>
                  </div>
                  <div className="feature">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>QR code pickup</span>
                  </div>
                </div>
                <div className="option-action">
                  <button className="btn btn-primary btn-full">
                    Continue as User
                  </button>
                </div>
              </Card>
            </Link>

            <Link to="/signup/club-owner" className="option-link">
              <Card hoverable className="signup-option zoom-in">
                <div className="option-icon">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <h2 className="option-title">Sign up as Club Owner</h2>
                <p className="option-description">
                  Manage your club, accept orders, and grow your business with our platform.
                </p>
                <div className="option-features">
                  <div className="feature">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Menu management</span>
                  </div>
                  <div className="feature">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Order management dashboard</span>
                  </div>
                  <div className="feature">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Staff management</span>
                  </div>
                  <div className="feature">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Revenue analytics</span>
                  </div>
                </div>
                <div className="option-action">
                  <button className="btn btn-outline btn-full">
                    Continue as Club Owner
                  </button>
                </div>
              </Card>
            </Link>
          </div>

          <div className="signup-login">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupChoice