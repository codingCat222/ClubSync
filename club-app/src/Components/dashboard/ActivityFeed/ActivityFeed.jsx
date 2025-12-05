// src/components/dashboard/ActivityFeed/ActivityFeed.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faMapMarkerAlt, 
  faUndo, 
  faStar, 
  faEnvelope,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        avatar: 'JD',
        color: 'var(--primary-color)'
      },
      action: 'placed a new order',
      target: '#ORD-7894',
      time: '2 min ago',
      icon: faShoppingCart,
      iconColor: 'var(--primary-color)'
    },
    {
      id: 2,
      user: {
        name: 'Sarah Smith',
        avatar: 'SS',
        color: 'var(--success-color)'
      },
      action: 'updated shipping address for',
      target: '#ORD-7893',
      time: '15 min ago',
      icon: faMapMarkerAlt,
      iconColor: 'var(--success-color)'
    },
    {
      id: 3,
      user: {
        name: 'Mike Johnson',
        avatar: 'MJ',
        color: 'var(--warning-color)'
      },
      action: 'requested a refund for',
      target: '#ORD-7892',
      time: '1 hour ago',
      icon: faUndo,
      iconColor: 'var(--warning-color)'
    },
    {
      id: 4,
      user: {
        name: 'Emma Wilson',
        avatar: 'EW',
        color: 'var(--info-color)'
      },
      action: 'left a 5-star review for',
      target: 'Premium Headphones',
      time: '2 hours ago',
      icon: faStar,
      iconColor: 'var(--warning-color)'
    },
    {
      id: 5,
      user: {
        name: 'Alex Chen',
        avatar: 'AC',
        color: 'var(--purple-500)'
      },
      action: 'subscribed to newsletter',
      target: '',
      time: '5 hours ago',
      icon: faEnvelope,
      iconColor: 'var(--info-color)'
    }
  ];

  return (
    <div className="activity-feed">
      <div className="section-header">
        <h3>Recent Activity</h3>
        <a href="#" className="view-all">
          View All
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
      
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-icon">
              <div 
                className="user-avatar"
                style={{ backgroundColor: activity.user.color }}
              >
                {activity.user.avatar}
              </div>
              <div 
                className="action-icon"
                style={{ color: activity.iconColor }}
              >
                <FontAwesomeIcon icon={activity.icon} />
              </div>
            </div>
            
            <div className="activity-content">
              <div className="activity-text">
                <span className="user-name">{activity.user.name}</span>
                <span className="action">{activity.action}</span>
                {activity.target && (
                  <span className="target">{activity.target}</span>
                )}
              </div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;