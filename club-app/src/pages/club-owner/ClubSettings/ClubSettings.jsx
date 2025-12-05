// src/pages/club-owner/ClubSettings/ClubSettings.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSave, 
  faUpload, 
  faMapMarkerAlt,
  faClock,
  faPhone,
  faGlobe,
  faBuilding,
  faInfoCircle,
  faToggleOn,
  faToggleOff
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import Button from '../../../components/common/Button/Button'
import Input from '../../../components/common/Input/Input'
import './ClubSettings.css'

function ClubSettings() {
  const [settings, setSettings] = useState({
    clubName: 'Midnight Lounge',
    email: 'info@midnightlounge.com',
    phone: '+234 801 234 5678',
    address: '123 Night Street, Victoria Island',
    city: 'Lagos',
    state: 'Lagos',
    description: 'Premium lounge with signature cocktails and live music',
    website: 'https://midnightlounge.com',
    instagram: '@midnightlounge',
    twitter: '@midnight_lounge'
  })

  const [hours, setHours] = useState({
    monday: { open: '17:00', close: '02:00', enabled: true },
    tuesday: { open: '17:00', close: '02:00', enabled: true },
    wednesday: { open: '17:00', close: '02:00', enabled: true },
    thursday: { open: '17:00', close: '03:00', enabled: true },
    friday: { open: '16:00', close: '04:00', enabled: true },
    saturday: { open: '14:00', close: '04:00', enabled: true },
    sunday: { open: '18:00', close: '01:00', enabled: true }
  })

  const [features, setFeatures] = useState({
    onlineOrders: true,
    tableBooking: true,
    liveMusic: true,
    outdoorSeating: false,
    valetParking: true,
    wheelchairAccessible: true
  })

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleHoursChange = (day, field, value) => {
    setHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value
      }
    }))
  }

  const toggleHours = (day) => {
    setHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled
      }
    }))
  }

  const toggleFeature = (feature) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }))
  }

  const handleSave = () => {
    console.log('Saving settings:', { settings, hours, features })
  }

  const handleLogoUpload = () => {
    console.log('Uploading logo...')
  }

  return (
    <div className="club-settings-page">
      <div className="club-settings-header">
        <div className="header-content">
          <h1 className="page-title">Club Settings</h1>
          <p className="page-subtitle">Manage your club information and preferences</p>
        </div>
        <div className="header-actions">
          <Button variant="primary" onClick={handleSave}>
            <FontAwesomeIcon icon={faSave} />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="settings-content">
        <div className="settings-grid">
          <div className="settings-column">
            <Card className="settings-section">
              <div className="section-header">
                <h3>
                  <FontAwesomeIcon icon={faBuilding} />
                  Basic Information
                </h3>
              </div>
              <div className="section-content">
                <div className="logo-upload">
                  <div className="logo-preview">
                    <div className="logo-placeholder">ML</div>
                    <div className="logo-info">
                      <h4>Club Logo</h4>
                      <p>Recommended: 500x500px PNG or JPG</p>
                    </div>
                  </div>
                  <Button variant="outline" size="small" onClick={handleLogoUpload}>
                    <FontAwesomeIcon icon={faUpload} />
                    Upload Logo
                  </Button>
                </div>

                <Input
                  label="Club Name"
                  value={settings.clubName}
                  onChange={(e) => handleInputChange('clubName', e.target.value)}
                  icon={faBuilding}
                />

                <Input
                  label="Email Address"
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  icon={faInfoCircle}
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  icon={faPhone}
                />

                <div className="form-row">
                  <Input
                    label="City"
                    value={settings.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                  <Input
                    label="State"
                    value={settings.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="input-label">Club Description</label>
                  <textarea
                    value={settings.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="description-textarea"
                    rows="4"
                    placeholder="Describe your club, atmosphere, and specialty"
                  />
                </div>
              </div>
            </Card>

            <Card className="settings-section">
              <div className="section-header">
                <h3>
                  <FontAwesomeIcon icon={faClock} />
                  Operating Hours
                </h3>
                <p>Set your club's opening and closing times</p>
              </div>
              <div className="section-content">
                {Object.entries(hours).map(([day, hoursData]) => (
                  <div key={day} className="hours-row">
                    <div className="day-label">
                      <span className="day-name">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                      <button 
                        className={`toggle-switch ${hoursData.enabled ? 'on' : 'off'}`}
                        onClick={() => toggleHours(day)}
                      >
                        <FontAwesomeIcon icon={hoursData.enabled ? faToggleOn : faToggleOff} />
                      </button>
                    </div>
                    <div className="hours-inputs">
                      <Input
                        type="time"
                        value={hoursData.open}
                        onChange={(e) => handleHoursChange(day, 'open', e.target.value)}
                        disabled={!hoursData.enabled}
                        className="time-input"
                      />
                      <span className="hours-separator">to</span>
                      <Input
                        type="time"
                        value={hoursData.close}
                        onChange={(e) => handleHoursChange(day, 'close', e.target.value)}
                        disabled={!hoursData.enabled}
                        className="time-input"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="settings-column">
            <Card className="settings-section">
              <div className="section-header">
                <h3>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  Location & Address
                </h3>
              </div>
              <div className="section-content">
                <Input
                  label="Full Address"
                  value={settings.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  icon={faMapMarkerAlt}
                />

                <div className="map-preview">
                  <div className="map-placeholder">
                    <div className="map-marker">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <p>Map Preview</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="settings-section">
              <div className="section-header">
                <h3>Club Features</h3>
                <p>Select features available at your club</p>
              </div>
              <div className="section-content">
                <div className="features-grid">
                  {Object.entries(features).map(([feature, enabled]) => (
                    <div key={feature} className="feature-item">
                      <label className="feature-label">
                        <input
                          type="checkbox"
                          checked={enabled}
                          onChange={() => toggleFeature(feature)}
                          className="feature-checkbox"
                        />
                        <span className="feature-custom"></span>
                        <span className="feature-text">
                          {feature.split(/(?=[A-Z])/).join(' ')}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="settings-section">
              <div className="section-header">
                <h3>
                  <FontAwesomeIcon icon={faGlobe} />
                  Social Media & Links
                </h3>
              </div>
              <div className="section-content">
                <Input
                  label="Website"
                  value={settings.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  icon={faGlobe}
                />

                <Input
                  label="Instagram"
                  value={settings.instagram}
                  onChange={(e) => handleInputChange('instagram', e.target.value)}
                  prefix="@"
                />

                <Input
                  label="Twitter"
                  value={settings.twitter}
                  onChange={(e) => handleInputChange('twitter', e.target.value)}
                  prefix="@"
                />

                <div className="social-preview">
                  <h4>Social Preview</h4>
                  <p>Your club will appear with these links on your public profile</p>
                </div>
              </div>
            </Card>

            <Card className="settings-section danger">
              <div className="section-header">
                <h3>Danger Zone</h3>
                <p>Irreversible actions</p>
              </div>
              <div className="section-content">
                <div className="danger-actions">
                  <Button variant="outline" size="small">
                    Temporarily Close Club
                  </Button>
                  <Button variant="danger" size="small">
                    Delete Club Account
                  </Button>
                </div>
                <p className="danger-note">
                  Deleting your club account will remove all data permanently.
                  This action cannot be undone.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubSettings