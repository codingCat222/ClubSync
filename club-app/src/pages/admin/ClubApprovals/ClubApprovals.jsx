// src/pages/admin/ClubApprovals/ClubApprovals.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCheckCircle, 
  faTimesCircle, 
  faEye,
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import Button from '../../../components/common/Button/Button'
import Input from '../../../components/common/Input/Input'
import './ClubApprovals.css'

function ClubApprovals() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const pendingClubs = [
    {
      id: 1,
      name: 'Elite Lounge',
      owner: 'Michael Chen',
      email: 'michael@elitelounge.com',
      phone: '+234 801 111 2222',
      address: '456 Luxury Avenue, Ikoyi',
      category: 'Lounge',
      submittedDate: '2024-01-14',
      documents: ['business_registration.pdf', 'id_card.jpg']
    },
    {
      id: 2,
      name: 'Sky Bar',
      owner: 'Sarah Johnson',
      email: 'sarah@skybar.com',
      phone: '+234 802 222 3333',
      address: '789 Sky Tower, Victoria Island',
      category: 'Rooftop Bar',
      submittedDate: '2024-01-13',
      documents: ['business_registration.pdf']
    },
    {
      id: 3,
      name: 'Jazz & Blues',
      owner: 'David Wilson',
      email: 'david@jazzblues.com',
      phone: '+234 803 333 4444',
      address: '321 Music Lane, Ikeja',
      category: 'Jazz Bar',
      submittedDate: '2024-01-12',
      documents: ['business_registration.pdf', 'tax_certificate.pdf']
    }
  ]

  const handleApprove = (clubId) => {
    console.log('Approving club:', clubId)
  }

  const handleReject = (clubId) => {
    console.log('Rejecting club:', clubId)
  }

  const handleViewDetails = (clubId) => {
    console.log('Viewing details for club:', clubId)
  }

  return (
    <div className="club-approvals-page">
      <div className="approvals-header">
        <div className="header-content">
          <h1 className="page-title">Club Approvals</h1>
          <p className="page-subtitle">Review and approve new club registrations</p>
        </div>
      </div>

      <div className="approvals-content">
        <Card className="controls-card">
          <div className="controls-content">
            <div className="search-section">
              <Input
                type="text"
                placeholder="Search clubs by name or owner..."
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
            <div className="stats-summary">
              <div className="stat">
                <span>Pending</span>
                <strong>{pendingClubs.length}</strong>
              </div>
              <div className="stat">
                <span>This Week</span>
                <strong>8</strong>
              </div>
              <div className="stat">
                <span>Approved</span>
                <strong className="success">24</strong>
              </div>
            </div>
          </div>
        </Card>

        <div className="clubs-list">
          {pendingClubs.map(club => (
            <Card key={club.id} className="club-card">
              <div className="club-header">
                <div className="club-info">
                  <h3>{club.name}</h3>
                  <div className="club-meta">
                    <span className="category">{club.category}</span>
                    <span className="date">Submitted: {club.submittedDate}</span>
                  </div>
                </div>
                <div className="club-status pending">
                  Pending Review
                </div>
              </div>

              <div className="club-details">
                <div className="detail-row">
                  <div className="detail-item">
                    <label>Owner</label>
                    <span>{club.owner}</span>
                  </div>
                  <div className="detail-item">
                    <label>Email</label>
                    <span>{club.email}</span>
                  </div>
                  <div className="detail-item">
                    <label>Phone</label>
                    <span>{club.phone}</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-item full">
                    <label>Address</label>
                    <span>{club.address}</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-item">
                    <label>Documents</label>
                    <div className="documents-list">
                      {club.documents.map((doc, index) => (
                        <span key={index} className="document-tag">
                          📄 {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="club-actions">
                <Button 
                  variant="success" 
                  size="small"
                  onClick={() => handleApprove(club.id)}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  Approve
                </Button>
                <Button 
                  variant="danger" 
                  size="small"
                  onClick={() => handleReject(club.id)}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                  Reject
                </Button>
                <Button 
                  variant="outline" 
                  size="small"
                  onClick={() => handleViewDetails(club.id)}
                >
                  <FontAwesomeIcon icon={faEye} />
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClubApprovals