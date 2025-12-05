// src/pages/public/ClubDetails/ClubDetails.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft,
  faUsers, 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faGlobe, 
  faEnvelope,
  faPhone,
  faClock,
  faDollarSign,
  faStar,
  faShareAlt,
  faBookmark as faBookmarkSolid,
  faUserPlus,
  faCalendarPlus,
  faImage,
  faTag,
  faUserTie,
  faHeart,
  faComment,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import './ClubDetails.css';

const ClubDetails = () => {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  // Mock club data - in real app, fetch by clubId
  const club = {
    id: clubId || '1',
    name: 'Tech Innovators Club',
    category: 'Technology & Programming',
    description: 'A vibrant community of tech enthusiasts, developers, and innovators who collaborate on projects, share knowledge, and host regular hackathons and workshops.',
    longDescription: 'Founded in 2018, the Tech Innovators Club has grown to become one of the largest tech communities in the region. We focus on practical learning through hands-on projects, mentorship programs, and industry collaborations. Our members range from beginners to experienced professionals, creating a diverse learning environment.',
    memberCount: 1245,
    onlineMembers: 345,
    location: 'San Francisco, CA',
    meetingLocation: 'Tech Hub Center, 123 Innovation Drive',
    meetingTime: 'Every Thursday, 6:00 PM - 8:00 PM',
    website: 'https://techinnovators.example.com',
    email: 'contact@techinnovators.example.com',
    phone: '+1 (555) 123-4567',
    membershipFee: '$25/month',
    rating: 4.8,
    reviewCount: 342,
    organizer: {
      name: 'Alex Johnson',
      role: 'Founder & Lead Organizer',
      experience: '10+ years in tech industry'
    },
    isActive: true,
    founded: '2018',
    events: [
      { id: 1, title: 'Monthly Hackathon', date: 'Jan 20, 2024', time: '10:00 AM', participants: 120 },
      { id: 2, title: 'AI Workshop', date: 'Jan 27, 2024', time: '3:00 PM', participants: 85 },
      { id: 3, title: 'Networking Night', date: 'Feb 3, 2024', time: '6:00 PM', participants: 200 }
    ],
    gallery: [
      { id: 1, url: 'https://picsum.photos/400/300?random=1', caption: 'Annual Hackathon 2023' },
      { id: 2, url: 'https://picsum.photos/400/300?random=2', caption: 'Workshop Session' },
      { id: 3, url: 'https://picsum.photos/400/300?random=3', caption: 'Community Meetup' }
    ],
    upcomingEvents: [
      { id: 1, title: 'React Workshop', date: 'Tomorrow', time: '6:00 PM', type: 'Workshop' },
      { id: 2, title: 'Startup Pitch Night', date: 'Jan 25', time: '7:30 PM', type: 'Networking' }
    ]
  };

  const handleJoinClub = () => {
    setIsJoined(!isJoined);
    alert(isJoined ? `You left ${club.name}` : `Successfully joined ${club.name}!`);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = async () => {
    const shareData = {
      title: club.name,
      text: club.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="club-details-page">
      {/* Header */}
      <div className="club-header-section">
        <button className="back-button" onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
        
        <div className="header-actions">
          <button className="icon-button" onClick={handleBookmark}>
            <FontAwesomeIcon icon={isBookmarked ? faBookmarkSolid : faBookmarkRegular} />
          </button>
          <button className="icon-button" onClick={handleShare}>
            <FontAwesomeIcon icon={faShareAlt} />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="club-hero">
        <div className="club-banner">
          <div className="club-badge">{club.category}</div>
          <h1 className="club-title">{club.name}</h1>
          <div className="club-rating">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <span>{club.rating}</span>
            <span className="review-count">({club.reviewCount} reviews)</span>
          </div>
        </div>

        <div className="club-stats">
          <div className="stat-item">
            <FontAwesomeIcon icon={faUsers} />
            <div>
              <span className="stat-value">{club.memberCount.toLocaleString()}</span>
              <span className="stat-label">Members</span>
            </div>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <div>
              <span className="stat-value">{club.events.length}</span>
              <span className="stat-label">Events</span>
            </div>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faCheckCircle} />
            <div>
              <span className="stat-value">{club.onlineMembers}</span>
              <span className="stat-label">Online Now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button 
          className={`join-button ${isJoined ? 'joined' : ''}`}
          onClick={handleJoinClub}
        >
          <FontAwesomeIcon icon={faUserPlus} />
          {isJoined ? 'Joined' : 'Join Club'}
        </button>
        <button className="secondary-button">
          <FontAwesomeIcon icon={faCalendarPlus} />
          View Events
        </button>
      </div>

      {/* Tabs */}
      <div className="club-tabs">
        {['about', 'events', 'gallery', 'members'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'about' && (
          <div className="about-section">
            <div className="section">
              <h3>About This Club</h3>
              <p>{club.longDescription}</p>
            </div>

            <div className="details-grid">
              <div className="detail-card">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div>
                  <h4>Location</h4>
                  <p>{club.location}</p>
                  <small>{club.meetingLocation}</small>
                </div>
              </div>
              
              <div className="detail-card">
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <h4>Meeting Time</h4>
                  <p>{club.meetingTime}</p>
                </div>
              </div>
              
              <div className="detail-card">
                <FontAwesomeIcon icon={faDollarSign} />
                <div>
                  <h4>Membership Fee</h4>
                  <p>{club.membershipFee}</p>
                </div>
              </div>
              
              <div className="detail-card">
                <FontAwesomeIcon icon={faTag} />
                <div>
                  <h4>Founded</h4>
                  <p>{club.founded}</p>
                </div>
              </div>
            </div>

            <div className="organizer-section">
              <h3>Organizer</h3>
              <div className="organizer-card">
                <FontAwesomeIcon icon={faUserTie} className="organizer-icon" />
                <div>
                  <h4>{club.organizer.name}</h4>
                  <p>{club.organizer.role}</p>
                  <small>{club.organizer.experience}</small>
                </div>
              </div>
            </div>

            <div className="contact-section">
              <h3>Contact Information</h3>
              <div className="contact-links">
                <a href={club.website} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGlobe} />
                  Website
                </a>
                <a href={`mailto:${club.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </a>
                <a href={`tel:${club.phone}`}>
                  <FontAwesomeIcon icon={faPhone} />
                  Phone
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="events-section">
            <h3>Upcoming Events</h3>
            {club.upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <span className="event-day">{event.date}</span>
                  <span className="event-time">{event.time}</span>
                </div>
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <span className="event-type">{event.type}</span>
                </div>
                <button className="event-action">RSVP</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="gallery-section">
            <h3>Club Gallery</h3>
            <div className="gallery-grid">
              {club.gallery.map(image => (
                <div key={image.id} className="gallery-item">
                  <img src={image.url} alt={image.caption} />
                  <p>{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="members-section">
            <h3>Club Members ({club.memberCount})</h3>
            <div className="members-stats">
              <div className="member-stat">
                <span className="stat-number">1,245</span>
                <span className="stat-label">Total Members</span>
              </div>
              <div className="member-stat">
                <span className="stat-number">345</span>
                <span className="stat-label">Active This Week</span>
              </div>
              <div className="member-stat">
                <span className="stat-number">89</span>
                <span className="stat-label">New This Month</span>
              </div>
            </div>
            <div className="featured-members">
              <h4>Featured Members</h4>
              <p>Connect with active members of the community</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubDetails;