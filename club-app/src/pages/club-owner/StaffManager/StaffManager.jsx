// src/pages/club-owner/StaffManager/StaffManager.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faSearch, 
  faUser,
  faUserTie,
  faCashRegister,
  faShieldAlt,
  faEnvelope,
  faPhone,
  faCheckCircle,
  faTimesCircle,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import Button from '../../../components/common/Button/Button'
import Input from '../../../components/common/Input/Input'
import Modal from '../../../components/common/Modal/Modal'
import './StaffManager.css'

function StaffManager() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState(null)

  const staffMembers = [
    {
      id: 1,
      name: 'John Manager',
      email: 'john@club.com',
      phone: '+234 801 234 5678',
      role: 'manager',
      status: 'active',
      joinDate: '2023-01-15',
      lastActive: '2 hours ago',
      avatarColor: '#3B82F6'
    },
    {
      id: 2,
      name: 'Sarah Bartender',
      email: 'sarah@club.com',
      phone: '+234 802 345 6789',
      role: 'bartender',
      status: 'active',
      joinDate: '2023-02-20',
      lastActive: '1 hour ago',
      avatarColor: '#10B981'
    },
    {
      id: 3,
      name: 'Mike Waiter',
      email: 'mike@club.com',
      phone: '+234 803 456 7890',
      role: 'waiter',
      status: 'inactive',
      joinDate: '2023-03-10',
      lastActive: '2 days ago',
      avatarColor: '#F59E0B'
    },
    {
      id: 4,
      name: 'Lisa Cashier',
      email: 'lisa@club.com',
      phone: '+234 804 567 8901',
      role: 'cashier',
      status: 'active',
      joinDate: '2023-04-05',
      lastActive: '30 min ago',
      avatarColor: '#8B5CF6'
    },
    {
      id: 5,
      name: 'David Security',
      email: 'david@club.com',
      phone: '+234 805 678 9012',
      role: 'security',
      status: 'active',
      joinDate: '2023-05-12',
      lastActive: '5 hours ago',
      avatarColor: '#EF4444'
    }
  ]

  const roles = [
    { id: 'manager', name: 'Manager', icon: faUserTie, color: '#3B82F6' },
    { id: 'bartender', name: 'Bartender', icon: faUser, color: '#10B981' },
    { id: 'waiter', name: 'Waiter', icon: faUser, color: '#F59E0B' },
    { id: 'cashier', name: 'Cashier', icon: faCashRegister, color: '#8B5CF6' },
    { id: 'security', name: 'Security', icon: faShieldAlt, color: '#EF4444' }
  ]

  const handleAddStaff = () => {
    setShowAddModal(true)
  }

  const handleEditStaff = (staff) => {
    setSelectedStaff(staff)
    setShowAddModal(true)
  }

  const handleDeleteStaff = (staff) => {
    setSelectedStaff(staff)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    console.log('Deleting staff:', selectedStaff)
    setShowDeleteModal(false)
    setSelectedStaff(null)
  }

  const toggleStatus = (staffId) => {
    console.log('Toggling status for staff:', staffId)
  }

  const getRoleIcon = (roleId) => {
    return roles.find(r => r.id === roleId)?.icon || faUser
  }

  const getRoleColor = (roleId) => {
    return roles.find(r => r.id === roleId)?.color || '#6B7280'
  }

  const filteredStaff = staffMembers.filter(staff => 
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="staff-manager-page">
      <div className="staff-manager-header">
        <div className="header-content">
          <h1 className="page-title">Staff Management</h1>
          <p className="page-subtitle">Manage your club staff and permissions</p>
        </div>
        <div className="header-actions">
          <Button variant="primary" onClick={handleAddStaff}>
            <FontAwesomeIcon icon={faPlus} />
            Add Staff
          </Button>
        </div>
      </div>

      <div className="staff-manager-content">
        <Card className="search-card">
          <div className="search-section">
            <Input
              type="text"
              placeholder="Search staff by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={faSearch}
              className="search-input"
            />
            <div className="stats-summary">
              <div className="stat">
                <span>Total Staff</span>
                <strong>{staffMembers.length}</strong>
              </div>
              <div className="stat">
                <span>Active</span>
                <strong className="success">{staffMembers.filter(s => s.status === 'active').length}</strong>
              </div>
              <div className="stat">
                <span>Roles</span>
                <strong>{roles.length}</strong>
              </div>
            </div>
          </div>
        </Card>

        <div className="roles-section">
          <h3>Staff Roles</h3>
          <div className="roles-grid">
            {roles.map(role => (
              <Card key={role.id} className="role-card hover-lift">
                <div className="role-header">
                  <div className="role-icon" style={{ background: role.color }}>
                    <FontAwesomeIcon icon={role.icon} />
                  </div>
                  <div className="role-info">
                    <h4>{role.name}</h4>
                    <p>{staffMembers.filter(s => s.role === role.id).length} staff</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="staff-table-section">
          <Card>
            <div className="table-responsive">
              <table className="staff-table">
                <thead>
                  <tr>
                    <th>Staff Member</th>
                    <th>Role</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStaff.map(staff => (
                    <tr key={staff.id}>
                      <td>
                        <div className="staff-info">
                          <div 
                            className="staff-avatar"
                            style={{ background: staff.avatarColor }}
                          >
                            {staff.name.charAt(0)}
                          </div>
                          <div className="staff-details">
                            <strong>{staff.name}</strong>
                            <span className="staff-email">{staff.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="role-badge" style={{ color: getRoleColor(staff.role) }}>
                          <FontAwesomeIcon icon={getRoleIcon(staff.role)} />
                          <span>{staff.role}</span>
                        </div>
                      </td>
                      <td>
                        <div className="contact-info">
                          <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>{staff.email}</span>
                          </div>
                          <div className="contact-item">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>{staff.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={`status-badge ${staff.status}`}>
                          {staff.status === 'active' ? (
                            <>
                              <FontAwesomeIcon icon={faCheckCircle} />
                              <span>Active</span>
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={faTimesCircle} />
                              <span>Inactive</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="last-active">{staff.lastActive}</span>
                      </td>
                      <td>
                        <div className="staff-actions">
                          <button 
                            className="action-btn"
                            onClick={() => toggleStatus(staff.id)}
                          >
                            {staff.status === 'active' ? (
                              <FontAwesomeIcon icon={faTimesCircle} />
                            ) : (
                              <FontAwesomeIcon icon={faCheckCircle} />
                            )}
                          </button>
                          <button 
                            className="action-btn"
                            onClick={() => handleEditStaff(staff)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button 
                            className="action-btn danger"
                            onClick={() => handleDeleteStaff(staff)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
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

      <Modal
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false)
          setSelectedStaff(null)
        }}
        title={selectedStaff ? 'Edit Staff Member' : 'Add New Staff Member'}
        size="medium"
      >
        <div className="add-staff-form">
          <div className="form-row">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter staff name"
              defaultValue={selectedStaff?.name}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter email address"
              defaultValue={selectedStaff?.email}
            />
          </div>
          <div className="form-row">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              defaultValue={selectedStaff?.phone}
            />
            <div className="form-group">
              <label className="input-label">Role</label>
              <select className="role-select" defaultValue={selectedStaff?.role}>
                {roles.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
            </div>
          </div>
          <Input
            label="Password"
            type="password"
            placeholder="Set initial password"
            defaultValue=""
          />
          <div className="form-group">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" defaultChecked={selectedStaff?.status === 'active'} />
              <span className="checkbox-custom"></span>
              Active Account
            </label>
          </div>
          <div className="modal-actions">
            <Button variant="outline" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button variant="primary">
              {selectedStaff ? 'Update Staff' : 'Add Staff'}
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Staff Member"
        size="small"
      >
        <div className="delete-confirmation">
          <p>Are you sure you want to delete <strong>{selectedStaff?.name}</strong>?</p>
          <p className="warning-text">This staff member will lose all access.</p>
          <div className="modal-actions">
            <Button variant="outline" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default StaffManager