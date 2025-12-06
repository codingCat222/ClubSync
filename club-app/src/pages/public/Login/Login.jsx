// src/pages/public/Login/Login.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../Components/common/Button/Button'
import Input from '../../../Components/common/Input/Input'
import Card from '../../../Components/common/Card/Card'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

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
    <div className="login-page">
      <div className="container">
        <div className="login-content">
          <Card className="login-form-card">
            <div className="form-header">
              <h1 className="form-title">Welcome Back</h1>
              <p className="form-subtitle">Sign in to your ClubSync account</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
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
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                icon={faLock}
                required
              />

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  Remember me
                </label>
                
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>

              <div className="form-actions">
                <Button
                  type="submit"
                  loading={loading}
                  fullWidth
                >
                  Sign In
                </Button>
              </div>

              <div className="form-divider">
                <span>Or continue with</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-button google">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
              </div>

              <div className="form-footer">
                <p>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </form>
          </Card>

          <div className="login-features">
            <h2 className="features-title">ClubSync Features</h2>
            
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <h3>Fast Ordering</h3>
                <p>Order drinks in seconds from anywhere</p>
              </div>

              <div className="feature">
                <div className="feature-icon">📊</div>
                <h3>Live Tracking</h3>
                <p>Track your order from preparation to pickup</p>
              </div>

              <div className="feature">
                <div className="feature-icon">🔒</div>
                <h3>Secure Payments</h3>
                <p>Your payments are safe and encrypted</p>
              </div>

              <div className="feature">
                <div className="feature-icon">🎯</div>
                <h3>Exclusive Deals</h3>
                <p>Get special offers and discounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login