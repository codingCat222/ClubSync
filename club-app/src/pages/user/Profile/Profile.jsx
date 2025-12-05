// src/pages/user/Profile/Profile.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faLock,
  faEdit,
  faSave,
  faCalendarAlt,
  faReceipt,
  faStar,
  faShieldAlt,
  faBell,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import Button from '../../../components/common/Button/Button'
import Input from '../../../components/common/Input/Input'
import './Profile.css'

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+234 801 234 5678',
    address: '123 Main Street, Lagos',
    joinDate: 'January 2023',
    avatar: null
  })

  const stats = [
    { label: 'Total Orders', value: '24', icon: faReceipt },
    { label: 'Total Spent', value: '₦156,800', icon: faReceipt },
    { label: 'Member Since', value: user.joinDate, icon: faCalendarAlt },
    { label: 'Rating', value: '4.8', icon: faStar }
  ]

  const preferences = [
    { label: 'Email Notifications', enabled: true },
    { label: 'SMS Notifications', enabled: true },
    { label: 'Promotional Offers', enabled: false },
    { label: 'Order Updates', enabled: true }
  ]

  const handleInputChange = (field, value) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    setIsEditing(false)
  }

  const togglePreference = (index) => {
    const newPreferences = [...preferences]
    newPreferences[index].enabled = !newPreferences[index].enabled
  }

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  const handleAvatarUpload = () => {
    console.log('Uploading avatar...')
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">My Profile</h1>
            <p className="page-subtitle">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="container">
          <div className="profile-layout">
            <div className="profile-sidebar">
              <Card className="profile-card">
                <div className="avatar-section">
                  <div className="avatar" onClick={handleAvatarUpload}>
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} />
                    ) : (
                      <div className="avatar-initials">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    <div className="avatar-overlay">
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                  </div>
                  <h2 className="user-name">{user.name}</h2>
                  <p className="user-email">{user.email}</p>
                </div>

                <div className="profile-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <div className="stat-icon">
                        <FontAwesomeIcon icon={stat.icon} />
                      </div>
                      <div className="stat-info">
                        <span className="stat-label">{stat.label}</span>
                        <strong className="stat-value">{stat.value}</strong>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sidebar-actions">
                  <Button variant="outline" fullWidth>
                    <FontAwesomeIcon icon={faBell} />
                    Notifications
                  </Button>
                  <Button variant="outline" fullWidth>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    Privacy
                  </Button>
                  <Button variant="danger" fullWidth onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    Logout
                  </Button>
                </div>
              </Card>
            </div>

            <div className="profile-main">
              <Card className="info-card">
                <div className="card-header">
                  <h3>Personal Information</h3>
                  <Button 
                    variant={isEditing ? "primary" : "outline"} 
                    size="small"
                    onClick={isEditing ? handleSave : () => setIsEditing(true)}
                    loading={loading}
                  >
                    {isEditing ? (
                      <>
                        <FontAwesomeIcon icon={faSave} />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faEdit} />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </div>

                <div className="info-form">
                  <Input
                    label="Full Name"
                    value={user.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    icon={faUser}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={user.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    icon={faEnvelope}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={user.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    icon={faPhone}
                    disabled={!isEditing}
                  />
                  <Input
                    label="Address"
                    value={user.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    icon={faMapMarkerAlt}
                    disabled={!isEditing}
                  />
                </div>
              </Card>

              <Card className="security-card">
                <h3>Security</h3>
                <div className="security-actions">
                  <Button variant="outline" fullWidth>
                    <FontAwesomeIcon icon={faLock} />
                    Change Password
                  </Button>
                  <Button variant="outline" fullWidth>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    Two-Factor Authentication
                  </Button>
                </div>
              </Card>

              <Card className="preferences-card">
                <h3>Notification Preferences</h3>
                <div className="preferences-list">
                  {preferences.map((pref, index) => (
                    <div key={index} className="preference-item">
                      <label className="preference-label">
                        <input
                          type="checkbox"
                          checked={pref.enabled}
                          onChange={() => togglePreference(index)}
                          className="preference-checkbox"
                        />
                        <span className="preference-custom"></span>
                        <span className="preference-text">{pref.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="danger-card">
                <h3>Account Actions</h3>
                <p className="danger-note">
                  These actions are irreversible. Please proceed with caution.
                </p>
                <div className="danger-actions">
                  <Button variant="outline" size="small">
                    Deactivate Account
                  </Button>
                  <Button variant="danger" size="small">
                    Delete Account
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile