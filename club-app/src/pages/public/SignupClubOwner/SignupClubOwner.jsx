// src/pages/public/SignupClubOwner/SignupClubOwner.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faMapMarkerAlt, faPhone, faEnvelope, faLock, faUpload } from '@fortawesome/free-solid-svg-icons'
import Button from '../../../components/common/Button/Button'
import Input from '../../../components/common/Input/Input'
import Card from '../../../components/common/Card/Card'
import './SignupClubOwner.css'

function SignupClubOwner() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    clubName: '',
    clubAddress: '',
    city: '',
    state: '',
    clubCategory: '',
    clubDescription: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    if (step === 1) {
      const { fullName, email, phone, password, confirmPassword } = formData
      if (!fullName || !email || !phone || !password || !confirmPassword) {
        return
      }
      if (password !== confirmPassword) {
        return
      }
    }
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <div className="signup-club-owner-page">
      <div className="container">
        <div className="signup-club-owner-header">
          <h1 className="page-title">Create Club Owner Account</h1>
          <p className="page-subtitle">Grow your club business with </p>
        </div>

        <div className="signup-club-owner-content">
          <Card className="signup-club-owner-card">
            <div className="signup-steps">
              <div className="step-indicator">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>
                  <div className="step-number">1</div>
                  <div className="step-label">Account Info</div>
                </div>
                <div className="step-line"></div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>
                  <div className="step-number">2</div>
                  <div className="step-label">Club Info</div>
                </div>
                <div className="step-line"></div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>
                  <div className="step-number">3</div>
                  <div className="step-label">Complete</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="signup-club-owner-form">
                {step === 1 && (
                  <div className="form-step slide-up">
                    <h2 className="step-title">Account Information</h2>
                    <p className="step-description">Create your personal account</p>

                    <div className="form-fields">
                      <Input
                        label="Full Name"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        icon={faBuilding}
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
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-step slide-up">
                    <h2 className="step-title">Club Information</h2>
                    <p className="step-description">Tell us about your club</p>

                    <div className="form-fields">
                      <Input
                        label="Club Name"
                        type="text"
                        name="clubName"
                        value={formData.clubName}
                        onChange={handleChange}
                        placeholder="Enter club name"
                        icon={faBuilding}
                        required
                      />

                      <Input
                        label="Club Address"
                        type="text"
                        name="clubAddress"
                        value={formData.clubAddress}
                        onChange={handleChange}
                        placeholder="Enter club address"
                        icon={faMapMarkerAlt}
                        required
                      />

                      <div className="form-row">
                        <Input
                          label="City"
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City"
                          required
                        />

                        <Input
                          label="State"
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="State"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="input-label">Club Category</label>
                        <select
                          name="clubCategory"
                          value={formData.clubCategory}
                          onChange={handleChange}
                          className="category-select"
                          required
                        >
                          <option value="">Select category</option>
                          <option value="lounge">Lounge</option>
                          <option value="bar">Bar</option>
                          <option value="nightclub">Nightclub</option>
                          <option value="pub">Pub</option>
                          <option value="restaurant">Restaurant & Bar</option>
                          <option value="rooftop">Rooftop Bar</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="input-label">Club Description</label>
                        <textarea
                          name="clubDescription"
                          value={formData.clubDescription}
                          onChange={handleChange}
                          placeholder="Describe your club, atmosphere, and specialty"
                          className="description-textarea"
                          rows="4"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="input-label">Club Logo</label>
                        <div className="upload-area">
                          <FontAwesomeIcon icon={faUpload} className="upload-icon" />
                          <p>Click to upload or drag and drop</p>
                          <p className="upload-hint">PNG, JPG up to 5MB</p>
                          <input type="file" className="file-input" accept="image/*" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="form-step slide-up">
                    <h2 className="step-title">Complete Setup</h2>
                    <p className="step-description">Review your information</p>

                    <div className="review-section">
                      <div className="review-card">
                        <h3>Account Information</h3>
                        <div className="review-item">
                          <span>Name:</span>
                          <strong>{formData.fullName}</strong>
                        </div>
                        <div className="review-item">
                          <span>Email:</span>
                          <strong>{formData.email}</strong>
                        </div>
                        <div className="review-item">
                          <span>Phone:</span>
                          <strong>{formData.phone}</strong>
                        </div>
                      </div>

                      <div className="review-card">
                        <h3>Club Information</h3>
                        <div className="review-item">
                          <span>Club Name:</span>
                          <strong>{formData.clubName}</strong>
                        </div>
                        <div className="review-item">
                          <span>Address:</span>
                          <strong>{formData.clubAddress}</strong>
                        </div>
                        <div className="review-item">
                          <span>Location:</span>
                          <strong>{formData.city}, {formData.state}</strong>
                        </div>
                        <div className="review-item">
                          <span>Category:</span>
                          <strong>{formData.clubCategory}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="terms-agreement">
                      <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" required />
                        <span className="checkbox-custom"></span>
                        I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                      </label>
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  
                  {step < 3 ? (
                    <Button type="button" onClick={handleNext} fullWidth={step === 1}>
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit" loading={loading} fullWidth>
                      Complete Signup
                    </Button>
                  )}
                </div>
              </form>

              <div className="signup-login">
                <p>Already have an account? <Link to="/login">Log in</Link></p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SignupClubOwner