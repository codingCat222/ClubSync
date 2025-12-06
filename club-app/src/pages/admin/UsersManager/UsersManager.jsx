// src/pages/admin/UsersManager/UsersManager.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSearch, 
  faFilter,
  faUser,
  faBuilding,
  faShieldAlt,
  faBan,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../Components/common/Card/Card'
import Button from '../../../Components/common/Button/Button'
import Input from '../../../Components/common/Input/Input'
import './UsersManager.css'

function UsersManager() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-01',
      orders: 24,
      type: 'User'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@midnightlounge.com',
      role: 'club-owner',
      status: 'active',
      joinDate: '2024-01-05',
      club: 'Midnight Lounge',
      type: 'Club Owner'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'user',
      status: 'suspended',
      joinDate: '2024-01-10',
      orders: 8,
      type: 'User'
    },
    {
      id: 4,
      name: 'David Chen',
      email: 'david@skybar.com',
      role: 'club-owner',
      status: 'active',
      joinDate: '2024-01-12',
      club: 'Sky Bar',
      type: 'Club Owner'
    },
    {
      id: 5,
      name: 'Lisa Brown',
      email: 'lisa@example.com',
      role: 'user',
      status: 'active',
      joinDate: '2024-01-15',
      orders: 12,
      type: 'User'
    }
  ]

  const roles = [
    { value: 'all', label: 'All Users', icon: faUser },
    { value: 'user', label: 'Regular Users', icon: faUser },
    { value: 'club-owner', label: 'Club Owners', icon: faBuilding },
    { value: 'admin', label: 'Admins', icon: faShieldAlt }
  ]

  const filteredUsers = users.filter(user => {
    if (filterRole !== 'all' && user.role !== filterRole) return false
    if (searchTerm && !user.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !user.email.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const toggleUserStatus = (userId, currentStatus) => {
    console.log(`Toggling status for user ${userId} from ${currentStatus} to ${currentStatus === 'active' ? 'suspended' : 'active'}`)
  }

  return (
    <div className="users-manager-page">
      <div className="users-manager-header">
        <div className="header-content">
          <h1 className="page-title">Users Management</h1>
          <p className="page-subtitle">Manage platform users and permissions</p>
        </div>
      </div>

      <div className="users-manager-content">
        <Card className="controls-card">
          <div className="controls-content">
            <div className="search-section">
              <Input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={faSearch}
                className="search-input"
              />
              <Button variant="outline">
                <FontAwesomeIcon icon={faFilter} />
                Filter
              </Button>
            </div>
            
            <div className="role-filters">
              {roles.map(role => (
                <button
                  key={role.value}
                  className={`role-filter ${filterRole === role.value ? 'active' : ''}`}
                  onClick={() => setFilterRole(role.value)}
                >
                  <FontAwesomeIcon icon={role.icon} />
                  <span>{role.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Card>

        <div className="users-table-section">
          <Card>
            <div className="table-responsive">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Join Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map(user => (
                    <tr key={user.id}>
                      <td>
                        <div className="user-info">
                          <div className="user-avatar">
                            {user.name.charAt(0)}
                          </div>
                          <div className="user-details">
                            <strong>{user.name}</strong>
                            <span>{user.email}</span>
                            {user.club && <span className="user-club">{user.club}</span>}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={`user-type ${user.role}`}>
                          {user.type}
                        </div>
                      </td>
                      <td>
                        <div className={`user-status ${user.status}`}>
                          {user.status}
                        </div>
                      </td>
                      <td>
                        <span className="join-date">{user.joinDate}</span>
                      </td>
                      <td>
                        <div className="user-actions">
                          <button 
                            className="action-btn"
                            onClick={() => toggleUserStatus(user.id, user.status)}
                          >
                            {user.status === 'active' ? (
                              <FontAwesomeIcon icon={faBan} />
                            ) : (
                              <FontAwesomeIcon icon={faCheckCircle} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default UsersManager