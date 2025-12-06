// src/pages/public/SignupUser/SignupUser.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope, 
  faLock, 
  faUser, 
  faPhone, 
  faCheckCircle,
  faEye,
  faEyeSlash,
  faShieldAlt,
  faRocket,
  faMobileAlt,
  faPercent,
  faCrown,
  faArrowRight,
  faKey,
  faUserShield,
  faUserCheck
} from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Button from '../../../Components/common/Button/Button'
import Input from '../../../Components/common/Input/Input'
import Card from '../../../Components/common/Card/Card'
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
  const [errors, setErrors] = useState({})
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const validatePhone = (phone) => {
    const re = /^[\+]?[1-9][\d]{0,15}$/
    return re.test(phone.replace(/[\s\-()]/g, ''))
  }

  const checkPasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const validateForm = () => {
    const newErrors = {}

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (passwordStrength < 3) {
      newErrors.password = 'Password is too weak. Use uppercase, lowercase, numbers, and special characters'
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    // Terms acceptance validation
    if (!acceptedTerms) {
      newErrors.terms = 'You must accept the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }

    // Update password strength
    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    
    try {
      // Simulate API call with timeout
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate potential errors
          const randomError = Math.random() > 0.2 // 80% success rate
          if (randomError) {
            resolve()
          } else {
            reject(new Error('Registration failed. Please try again.'))
          }
        }, 1500)
      })
      
      // In real app, you would:
      // 1. Hash the password before sending
      // 2. Send secure HTTPS request
      // 3. Handle server validation
      // 4. Set authentication tokens
      
      // Clear sensitive data
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      })
      
      // Navigate to verification or home
      navigate('/home')
    } catch (error) {
      setErrors({ submit: error.message })
    } finally {
      setLoading(false)
    }
  }

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0: case 1: return '#ef4444' // Red
      case 2: return '#f59e0b' // Yellow
      case 3: return '#10b981' // Green
      case 4: case 5: return '#3b82f6' // Blue
      default: return '#6b7280'
    }
  }

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0: return 'Very Weak'
      case 1: return 'Weak'
      case 2: return 'Fair'
      case 3: return 'Good'
      case 4: case 5: return 'Strong'
      default: return ''
    }
  }

  return (
    <div className="signup-user-page">
      <div className="container">
        <div className="signup-user-content">
          <div className="signup-user-form-container">
            <Card className="signup-user-form-card">
              <div className="form-header">
                <div className="form-logo">
                  <FontAwesomeIcon icon={faShieldAlt} className="logo-icon" />
                  <span>ClubSync</span>
                </div>
                <h1 className="form-title">Join ClubSync</h1>
                <p className="form-subtitle">Secure registration for premium nightlife access</p>
              </div>

              <form onSubmit={handleSubmit} className="signup-user-form" noValidate>
                {/* Full Name Input */}
                <div className="form-group">
                  <label className="form-label">
                    Full Name
                    <span className="required">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      maxLength="100"
                      autoComplete="name"
                      required
                    />
                  </div>
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                {/* Email Input */}
                <div className="form-group">
                  <label className="form-label">
                    Email Address
                    <span className="required">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      autoComplete="email"
                      inputMode="email"
                      required
                    />
                  </div>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                {/* Phone Input */}
                <div className="form-group">
                  <label className="form-label">
                    Phone Number
                    <span className="required">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FontAwesomeIcon icon={faPhone} className="input-icon" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[\+]?[1-9][\d]{0,15}"
                      required
                    />
                  </div>
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                {/* Password Input */}
                <div className="form-group">
                  <label className="form-label">
                    Password
                    <span className="required">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a secure password"
                      className={`form-input ${errors.password ? 'error' : ''}`}
                      autoComplete="new-password"
                      minLength="8"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      aria-label={passwordVisible ? "Hide password" : "Show password"}
                    >
                      <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                    </button>
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="password-strength">
                      <div className="strength-bar">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div 
                            key={i}
                            className="strength-segment"
                            style={{
                              backgroundColor: i <= passwordStrength ? getPasswordStrengthColor() : '#e5e7eb'
                            }}
                          />
                        ))}
                      </div>
                      <span 
                        className="strength-text"
                        style={{ color: getPasswordStrengthColor() }}
                      >
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                  )}
                  
                  {errors.password && <span className="error-message">{errors.password}</span>}
                  
                  {/* Password Requirements */}
                  <div className="password-requirements">
                    <p className="requirements-title">Password must contain:</p>
                    <ul className="requirements-list">
                      <li className={formData.password.length >= 8 ? 'valid' : ''}>
                        <FontAwesomeIcon icon={formData.password.length >= 8 ? faCheckCircle : faKey} />
                        At least 8 characters
                      </li>
                      <li className={/[A-Z]/.test(formData.password) ? 'valid' : ''}>
                        <FontAwesomeIcon icon={/[A-Z]/.test(formData.password) ? faCheckCircle : faKey} />
                        One uppercase letter
                      </li>
                      <li className={/[a-z]/.test(formData.password) ? 'valid' : ''}>
                        <FontAwesomeIcon icon={/[a-z]/.test(formData.password) ? faCheckCircle : faKey} />
                        One lowercase letter
                      </li>
                      <li className={/[0-9]/.test(formData.password) ? 'valid' : ''}>
                        <FontAwesomeIcon icon={/[0-9]/.test(formData.password) ? faCheckCircle : faKey} />
                        One number
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="form-group">
                  <label className="form-label">
                    Confirm Password
                    <span className="required">*</span>
                  </label>
                  <div className="input-with-icon">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                      autoComplete="new-password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                      aria-label={confirmPasswordVisible ? "Hide password" : "Show password"}
                    >
                      <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <span className="error-message">{errors.confirmPassword}</span>
                  )}
                </div>

                {/* Terms Acceptance */}
                <div className="form-group terms-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => {
                        setAcceptedTerms(e.target.checked)
                        if (errors.terms) {
                          setErrors(prev => ({ ...prev, terms: '' }))
                        }
                      }}
                      className="terms-checkbox"
                      required
                    />
                    <span className="checkbox-custom"></span>
                    <span className="terms-text">
                      I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                    </span>
                  </label>
                  {errors.terms && <span className="error-message">{errors.terms}</span>}
                </div>

                {/* Submit Button */}
                <div className="form-actions">
                  {errors.submit && (
                    <div className="form-error-alert">
                      <FontAwesomeIcon icon={faUserShield} />
                      <span>{errors.submit}</span>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    loading={loading}
                    fullWidth
                    className="submit-button"
                    disabled={!acceptedTerms || loading}
                  >
                    <span>Create Secure Account</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </div>

                {/* Divider */}
                <div className="divider">
                  <span>or continue with</span>
                </div>

                {/* Social Signup */}
                <div className="social-signup">
                  <Button
                    type="button"
                    variant="outline"
                    fullWidth
                    className="social-button google"
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                    <span>Sign up with Google</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    fullWidth
                    className="social-button facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                    <span>Sign up with Facebook</span>
                  </Button>
                </div>

                {/* Login Link */}
                <div className="form-footer">
                  <p className="login-link">
                    Already have an account? 
                    <Link to="/login" className="login-link-button">
                      <span>Log in</span>
                      <FontAwesomeIcon icon={faUserCheck} />
                    </Link>
                  </p>
                </div>
              </form>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="signup-user-benefits">
            <div className="benefits-header">
              <h2 className="benefits-title">
                <FontAwesomeIcon icon={faCrown} />
                Premium Benefits
              </h2>
              <p className="benefits-subtitle">Join thousands enjoying exclusive perks</p>
            </div>
            
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon rocket">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <div className="benefit-content">
                  <h3>Instant Ordering</h3>
                  <p>Skip queues and order drinks directly from premium clubs</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon mobile">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </div>
                <div className="benefit-content">
                  <h3>Real-time Tracking</h3>
                  <p>Live order tracking from preparation to pickup</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon percent">
                  <FontAwesomeIcon icon={faPercent} />
                </div>
                <div className="benefit-content">
                  <h3>VIP Offers</h3>
                  <p>Exclusive member discounts and priority access</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon crown">
                  <FontAwesomeIcon icon={faCrown} />
                </div>
                <div className="benefit-content">
                  <h3>Premium Clubs</h3>
                  <p>Access to top-rated venues with special member treatment</p>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="security-badge">
              <FontAwesomeIcon icon={faShieldAlt} className="security-icon" />
              <div className="security-content">
                <h4>Bank-level Security</h4>
                <p>Your data is encrypted and protected with 256-bit SSL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupUser