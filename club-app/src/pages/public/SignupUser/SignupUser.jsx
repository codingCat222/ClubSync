// src/pages/public/SignupUser/SignupUser.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../components/common/Button/Button'
import Input from '../../../components/common/Input/Input'
import Card from '../../../components/common/Card/Card'
import './SignupUser.css'

function SignupUser() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setLoading(false)
    navigate('/home')
  }

  return (
    <div className="signup-user-page">
      <div className="container">
        <div className="signup-user-content">
          <div className="signup-user-form-container">
            <Card className="signup-user-form-card">
              <div className="form-header">
                <h1 className="form-title">Create User Account</h1>
                <p className="form-subtitle">Join thousands enjoying instant drink ordering</p>
              </div>

              <form onSubmit={handleSubmit} className="signup-user-form">
                <Input
                  label="Full Name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  icon={faUser}
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  icon={faEnvelope}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  icon={faPhone}
                  required
                />

                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  icon={faLock}
                  required
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  icon={faLock}
                  required
                />

                <div className="form-actions">
                  <Button
                    type="submit"
                    loading={loading}
                    fullWidth
                  >
                    Create Account
                  </Button>
                </div>

                <div className="form-footer">
                  <p>
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                  <p className="terms-notice">
                    By creating an account, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                  </p>
                </div>
              </form>
            </Card>
          </div>

          <div className="signup-user-benefits">
            <h2 className="benefits-title">Why Join ClubSync?</h2>
            
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <div className="benefit-content">
                  <h3>Instant Ordering</h3>
                  <p>Order drinks from your favorite clubs in seconds</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">📱</div>
                <div className="benefit-content">
                  <h3>Real-time Tracking</h3>
                  <p>Track your order status live from preparation to pickup</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <div className="benefit-content">
                  <h3>Exclusive Offers</h3>
                  <p>Get access to member-only discounts and promotions</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">⭐</div>
                <div className="benefit-content">
                  <h3>Skip the Lines</h3>
                  <p>Pick up your order without waiting in queues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupUser