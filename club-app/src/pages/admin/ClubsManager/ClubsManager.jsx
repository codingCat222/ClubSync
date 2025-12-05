// src/pages/admin/ClubsManager/ClubsManager.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faFilter,
  faPlus,
  faEdit,
  faTrash,
  faEye,
  faToggleOn,
  faToggleOff,
  faUsers,
  faCalendar,
  faChartLine,
  faDownload,
  faCheckCircle,
  faTimesCircle,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import './ClubsManager.css';

const ClubsManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const [clubs, setClubs] = useState([
    {
      id: 1,
      name: 'Tech Hub Cafe',
      owner: 'John Smith',
      email: 'john@techhub.com',
      phone: '+1 (555) 123-4567',
      category: 'Technology',
      status: 'active',
      members: 1245,
      revenue: '$12,450',
      createdDate: '2024-01-15',
      lastActive: '2024-12-05',
      verification: 'verified'
    },
    {
      id: 2,
      name: 'Artistic Brews',
      owner: 'Sarah Johnson',
      email: 'sarah@artisticbrews.com',
      phone: '+1 (555) 234-5678',
      category: 'Arts',
      status: 'active',
      members: 567,
      revenue: '$5,670',
      createdDate: '2024-02-20',
      lastActive: '2024-12-04',
      verification: 'verified'
    },
    {
      id: 3,
      name: 'Fitness Fuel Bar',
      owner: 'Mike Wilson',
      email: 'mike@fitnessfuel.com',
      phone: '+1 (555) 345-6789',
      category: 'Health',
      status: 'pending',
      members: 0,
      revenue: '$0',
      createdDate: '2024-12-01',
      lastActive: '2024-12-01',
      verification: 'pending'
    },
    {
      id: 4,
      name: 'Bookworm Brews',
      owner: 'Emma Davis',
      email: 'emma@bookworm.com',
      phone: '+1 (555) 456-7890',
      category: 'Literature',
      status: 'active',
      members: 345,
      revenue: '$3,450',
      createdDate: '2024-03-25',
      lastActive: '2024-12-03',
      verification: 'verified'
    },
    {
      id: 5,
      name: 'Gamer Grind Cafe',
      owner: 'Alex Chen',
      email: 'alex@gamergrind.com',
      phone: '+1 (555) 567-8901',
      category: 'Games',
      status: 'inactive',
      members: 234,
      revenue: '$2,340',
      createdDate: '2024-02-14',
      lastActive: '2024-11-15',
      verification: 'verified'
    },
    {
      id: 6,
      name: 'Sports Hub Cafe',
      owner: 'Robert Brown',
      email: 'robert@sportshub.com',
      phone: '+1 (555) 678-9012',
      category: 'Sports',
      status: 'active',
      members: 892,
      revenue: '$8,920',
      createdDate: '2024-04-10',
      lastActive: '2024-12-04',
      verification: 'verified'
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);

  const categories = ['all', 'Technology', 'Arts', 'Health', 'Literature', 'Games', 'Sports', 'Business'];
  const statuses = ['all', 'active', 'inactive', 'pending', 'suspended'];

  const handleStatusChange = (clubId, newStatus) => {
    setClubs(clubs.map(club => 
      club.id === clubId ? { ...club, status: newStatus } : club
    ));
  };

  const handleDeleteClub = (clubId) => {
    if (window.confirm('Are you sure you want to delete this club?')) {
      setClubs(clubs.filter(club => club.id !== clubId));
    }
  };

  const handleVerification = (clubId, status) => {
    setClubs(clubs.map(club => 
      club.id === clubId ? { ...club, verification: status } : club
    ));
  };

  const handleEditClub = (club) => {
    setSelectedClub(club);
    setIsEditModalOpen(true);
  };

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = 
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || club.status === selectedStatus;
    const matchesCategory = selectedCategory === 'all' || club.category === selectedCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const stats = {
    totalClubs: clubs.length,
    activeClubs: clubs.filter(c => c.status === 'active').length,
    pendingClubs: clubs.filter(c => c.status === 'pending').length,
    totalMembers: clubs.reduce((sum, club) => sum + club.members, 0),
    totalRevenue: clubs.reduce((sum, club) => sum + parseFloat(club.revenue.replace('$', '').replace(',', '')), 0)
  };

  return (
    <div className="clubs-manager">
      {/* Header */}
      <div className="manager-header">
        <div>
          <h1>Clubs Management</h1>
          <p>Manage all clubs in the system</p>
        </div>
        <button 
          className="primary-btn"
          onClick={() => setIsAddModalOpen(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add New Club
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div>
            <h3>{stats.totalClubs}</h3>
            <p>Total Clubs</p>
          </div>
        </div>
        <div className="stat-card active">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div>
            <h3>{stats.activeClubs}</h3>
            <p>Active Clubs</p>
          </div>
        </div>
        <div className="stat-card pending">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div>
            <h3>{stats.pendingClubs}</h3>
            <p>Pending Clubs</p>
          </div>
        </div>
        <div className="stat-card revenue">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div>
            <h3>${stats.totalRevenue.toLocaleString()}</h3>
            <p>Total Revenue</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="controls-section">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search clubs, owners, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <FontAwesomeIcon icon={faFilter} />
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  Status: {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <FontAwesomeIcon icon={faFilter} />
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  Category: {cat === 'all' ? 'All' : cat}
                </option>
              ))}
            </select>
          </div>
          
          <button className="export-btn">
            <FontAwesomeIcon icon={faDownload} />
            Export
          </button>
        </div>
      </div>

      {/* Clubs Table */}
      <div className="clubs-table-container">
        <table className="clubs-table">
          <thead>
            <tr>
              <th>Club Name</th>
              <th>Owner</th>
              <th>Contact</th>
              <th>Category</th>
              <th>Status</th>
              <th>Members</th>
              <th>Revenue</th>
              <th>Verification</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClubs.map(club => (
              <tr key={club.id}>
                <td>
                  <div className="club-cell">
                    <div className="club-avatar">
                      {club.name.charAt(0)}
                    </div>
                    <div>
                      <strong>{club.name}</strong>
                      <small>ID: CLUB-{club.id.toString().padStart(3, '0')}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="owner-info">
                    <strong>{club.owner}</strong>
                    <small>Joined: {club.createdDate}</small>
                  </div>
                </td>
                <td>
                  <div className="contact-info">
                    <div>{club.email}</div>
                    <small>{club.phone}</small>
                  </div>
                </td>
                <td>
                  <span className="category-tag">{club.category}</span>
                </td>
                <td>
                  <div className="status-cell">
                    <span className={`status-badge ${club.status}`}>
                      {club.status.charAt(0).toUpperCase() + club.status.slice(1)}
                    </span>
                    <small>Last active: {club.lastActive}</small>
                  </div>
                </td>
                <td>
                  <div className="member-count">
                    <FontAwesomeIcon icon={faUsers} />
                    {club.members.toLocaleString()}
                  </div>
                </td>
                <td className="revenue-cell">{club.revenue}</td>
                <td>
                  <div className="verification-cell">
                    {club.verification === 'verified' ? (
                      <span className="verified-badge">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Verified
                      </span>
                    ) : club.verification === 'pending' ? (
                      <button 
                        className="verify-btn"
                        onClick={() => handleVerification(club.id, 'verified')}
                      >
                        Verify Now
                      </button>
                    ) : (
                      <span className="unverified-badge">
                        <FontAwesomeIcon icon={faTimesCircle} />
                        Unverified
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="action-btn view"
                      onClick={() => {/* View club details */}}
                      title="View Details"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button 
                      className="action-btn edit"
                      onClick={() => handleEditClub(club)}
                      title="Edit Club"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button 
                      className="action-btn toggle" 
                      onClick={() => handleStatusChange(
                        club.id, 
                        club.status === 'active' ? 'inactive' : 'active'
                      )}
                      title={club.status === 'active' ? 'Deactivate' : 'Activate'}
                    >
                      <FontAwesomeIcon icon={club.status === 'active' ? faToggleOn : faToggleOff} />
                    </button>
                    <button 
                      className="action-btn delete" 
                      onClick={() => handleDeleteClub(club.id)}
                      title="Delete"
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

      {/* Add Club Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Club</h3>
            <form>
              <div className="form-group">
                <label>Club Name</label>
                <input type="text" placeholder="Enter club name" />
              </div>
              <div className="form-group">
                <label>Owner Name</label>
                <input type="text" placeholder="Enter owner name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select>
                  {categories.filter(c => c !== 'all').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Add Club
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Club Modal */}
      {isEditModalOpen && selectedClub && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Club</h3>
            <form>
              <div className="form-group">
                <label>Club Name</label>
                <input 
                  type="text" 
                  defaultValue={selectedClub.name}
                  placeholder="Enter club name" 
                />
              </div>
              <div className="form-group">
                <label>Owner Name</label>
                <input 
                  type="text" 
                  defaultValue={selectedClub.owner}
                  placeholder="Enter owner name" 
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  defaultValue={selectedClub.email}
                  placeholder="Enter email" 
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input 
                  type="tel" 
                  defaultValue={selectedClub.phone}
                  placeholder="Enter phone number" 
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select defaultValue={selectedClub.category}>
                  {categories.filter(c => c !== 'all').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select defaultValue={selectedClub.status}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredClubs.length === 0 && (
        <div className="no-results">
          <p>No clubs found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ClubsManager;