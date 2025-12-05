// src/pages/admin/SupportTickets/SupportTickets.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faFilter,
  faPlus,
  faEye,
  faReply,
  faCheckCircle,
  faClock,
  faExclamationTriangle,
  faTimesCircle,
  faUser,
  faCalendar,
  faDownload,
  faPaperclip,
  faPhone,
  faEnvelope,
  faTag,
  faSort,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import './SupportTickets.css';

const SupportTickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [expandedTicket, setExpandedTicket] = useState(null);
  const [sortBy, setSortBy] = useState('newest');

  const [tickets, setTickets] = useState([
    {
      id: 'TICKET-001',
      subject: 'Payment issue for premium membership',
      user: {
        name: 'John Smith',
        email: 'john.smith@example.com',
        membership: 'premium'
      },
      category: 'billing',
      priority: 'high',
      status: 'open',
      createdAt: '2024-01-16 10:30 AM',
      lastUpdated: '2024-01-16 11:15 AM',
      messages: 2,
      attachments: 2,
      agent: 'Sarah Johnson'
    },
    {
      id: 'TICKET-002',
      subject: 'Cannot access premium features',
      user: {
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        membership: 'premium'
      },
      category: 'technical',
      priority: 'high',
      status: 'in-progress',
      createdAt: '2024-01-15 02:45 PM',
      lastUpdated: '2024-01-16 09:30 AM',
      messages: 5,
      attachments: 1,
      agent: 'Mike Chen'
    },
    {
      id: 'TICKET-003',
      subject: 'Club registration problem',
      user: {
        name: 'Alex Rodriguez',
        email: 'alex.rodriguez@example.com',
        membership: 'free'
      },
      category: 'registration',
      priority: 'medium',
      status: 'open',
      createdAt: '2024-01-16 09:15 AM',
      lastUpdated: '2024-01-16 09:15 AM',
      messages: 1,
      attachments: 0,
      agent: 'Unassigned'
    },
    {
      id: 'TICKET-004',
      subject: 'Feature request: Dark mode',
      user: {
        name: 'Sophia Lee',
        email: 'sophia.lee@example.com',
        membership: 'premium'
      },
      category: 'feature',
      priority: 'low',
      status: 'resolved',
      createdAt: '2024-01-14 04:20 PM',
      lastUpdated: '2024-01-15 11:00 AM',
      messages: 3,
      attachments: 0,
      agent: 'David Kim'
    },
    {
      id: 'TICKET-005',
      subject: 'Account deletion request',
      user: {
        name: 'Robert Brown',
        email: 'robert.brown@example.com',
        membership: 'free'
      },
      category: 'account',
      priority: 'medium',
      status: 'closed',
      createdAt: '2024-01-13 11:30 AM',
      lastUpdated: '2024-01-14 03:45 PM',
      messages: 4,
      attachments: 1,
      agent: 'Sarah Johnson'
    }
  ]);

  const [replyMessages, setReplyMessages] = useState({});

  const handleStatusChange = (ticketId, newStatus) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    ));
  };

  const handleAssignToMe = (ticketId) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, agent: 'You' } : ticket
    ));
  };

  const handleReply = (ticketId) => {
    const message = replyMessages[ticketId];
    if (message && message.trim()) {
      // In real app, this would be an API call
      const updatedTickets = tickets.map(ticket => {
        if (ticket.id === ticketId) {
          return {
            ...ticket,
            messages: ticket.messages + 1,
            lastUpdated: new Date().toLocaleString(),
            status: ticket.status === 'open' ? 'in-progress' : ticket.status
          };
        }
        return ticket;
      });
      setTickets(updatedTickets);
      setReplyMessages({ ...replyMessages, [ticketId]: '' });
      alert(`Reply sent to ${ticketId}`);
    }
  };

  const toggleExpand = (ticketId) => {
    setExpandedTicket(expandedTicket === ticketId ? null : ticketId);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open': return <FontAwesomeIcon icon={faExclamationTriangle} />;
      case 'in-progress': return <FontAwesomeIcon icon={faClock} />;
      case 'resolved': return <FontAwesomeIcon icon={faCheckCircle} />;
      case 'closed': return <FontAwesomeIcon icon={faTimesCircle} />;
      default: return null;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#dc2626';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return '#f59e0b';
      case 'in-progress': return '#3b82f6';
      case 'resolved': return '#10b981';
      case 'closed': return '#6b7280';
      default: return '#9ca3af';
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = 
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.user.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = selectedStatus === 'all' || ticket.status === selectedStatus;
    const matchesPriority = selectedPriority === 'all' || ticket.priority === selectedPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in-progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length
  };

  return (
    <div className="support-tickets-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Support Tickets</h1>
          <p>Manage and respond to user support requests</p>
        </div>
        <div className="header-actions">
          <button className="new-ticket-btn">
            <FontAwesomeIcon icon={faPlus} />
            New Ticket
          </button>
          <button className="export-btn">
            <FontAwesomeIcon icon={faDownload} />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <div>
            <h3>{stats.total}</h3>
            <p>Total Tickets</p>
          </div>
        </div>
        <div className="stat-card open">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <div>
            <h3>{stats.open}</h3>
            <p>Open</p>
          </div>
        </div>
        <div className="stat-card progress">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div>
            <h3>{stats.inProgress}</h3>
            <p>In Progress</p>
          </div>
        </div>
        <div className="stat-card resolved">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div>
            <h3>{stats.resolved}</h3>
            <p>Resolved</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search tickets, users, or subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-controls">
          <div className="filter-group">
            <FontAwesomeIcon icon={faFilter} />
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          
          <div className="filter-group">
            <FontAwesomeIcon icon={faFilter} />
            <select value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)}>
              <option value="all">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          
          <div className="filter-group">
            <FontAwesomeIcon icon={faSort} />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="tickets-table-container">
        <table className="tickets-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>User</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
              <th>Agent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map(ticket => (
              <React.Fragment key={ticket.id}>
                <tr className="ticket-row">
                  <td className="ticket-id">
                    <strong>{ticket.id}</strong>
                    <div className="ticket-meta">
                      <span>
                        <FontAwesomeIcon icon={faCalendar} />
                        {ticket.createdAt}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="ticket-subject">
                      <strong>{ticket.subject}</strong>
                      <div className="ticket-info">
                        <span>
                          <FontAwesomeIcon icon={faEnvelope} />
                          {ticket.messages} messages
                        </span>
                        {ticket.attachments > 0 && (
                          <span>
                            <FontAwesomeIcon icon={faPaperclip} />
                            {ticket.attachments} files
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div>
                        <strong>{ticket.user.name}</strong>
                        <small>{ticket.user.email}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="category-tag">{ticket.category}</span>
                  </td>
                  <td>
                    <span 
                      className="priority-badge"
                      style={{ backgroundColor: getPriorityColor(ticket.priority) }}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(ticket.status) }}
                    >
                      {getStatusIcon(ticket.status)}
                      {ticket.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="date-cell">{ticket.createdAt}</td>
                  <td>
                    <div className="agent-info">
                      {ticket.agent === 'Unassigned' ? (
                        <button 
                          className="assign-btn"
                          onClick={() => handleAssignToMe(ticket.id)}
                        >
                          Assign to me
                        </button>
                      ) : (
                        <span className="agent-name">{ticket.agent}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="action-btn view"
                        onClick={() => toggleExpand(ticket.id)}
                        title={expandedTicket === ticket.id ? "Collapse" : "View Details"}
                      >
                        <FontAwesomeIcon icon={expandedTicket === ticket.id ? faEye : faEye} />
                      </button>
                      <button 
                        className="action-btn reply"
                        onClick={() => toggleExpand(ticket.id)}
                        title="Reply"
                      >
                        <FontAwesomeIcon icon={faReply} />
                      </button>
                      <button className="action-btn more">
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </button>
                    </div>
                  </td>
                </tr>
                
                {/* Expanded Details */}
                {expandedTicket === ticket.id && (
                  <tr className="expanded-row">
                    <td colSpan="9">
                      <div className="ticket-details-expanded">
                        <div className="details-header">
                          <h4>Ticket Details: {ticket.subject}</h4>
                          <div className="detail-actions">
                            <button className="detail-btn call">
                              <FontAwesomeIcon icon={faPhone} />
                              Call User
                            </button>
                            <button className="detail-btn email">
                              <FontAwesomeIcon icon={faEnvelope} />
                              Email User
                            </button>
                            <button className="detail-btn tag">
                              <FontAwesomeIcon icon={faTag} />
                              Add Tag
                            </button>
                          </div>
                        </div>
                        
                        <div className="details-content">
                          <div className="message-history">
                            <h5>Message History</h5>
                            <div className="messages">
                              <div className="message user">
                                <div className="message-header">
                                  <strong>{ticket.user.name}</strong>
                                  <span>{ticket.createdAt}</span>
                                </div>
                                <p>Hello, I'm having an issue with {ticket.subject.toLowerCase()}...</p>
                              </div>
                              <div className="message agent">
                                <div className="message-header">
                                  <strong>{ticket.agent}</strong>
                                  <span>{ticket.lastUpdated}</span>
                                </div>
                                <p>I'm looking into this issue for you...</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="reply-section">
                            <h5>Reply to User</h5>
                            <textarea
                              value={replyMessages[ticket.id] || ''}
                              onChange={(e) => setReplyMessages({
                                ...replyMessages,
                                [ticket.id]: e.target.value
                              })}
                              placeholder="Type your reply here..."
                              rows="4"
                            />
                            <div className="reply-actions">
                              <button className="attach-btn">
                                <FontAwesomeIcon icon={faPaperclip} />
                                Attach Files
                              </button>
                              <div>
                                <button 
                                  className="status-change-btn"
                                  onClick={() => handleStatusChange(
                                    ticket.id, 
                                    ticket.status === 'open' ? 'in-progress' :
                                    ticket.status === 'in-progress' ? 'resolved' : 'closed'
                                  )}
                                >
                                  {ticket.status === 'open' ? 'Mark as In Progress' :
                                   ticket.status === 'in-progress' ? 'Mark as Resolved' :
                                   ticket.status === 'resolved' ? 'Close Ticket' : 'Reopen'}
                                </button>
                                <button 
                                  className="send-btn"
                                  onClick={() => handleReply(ticket.id)}
                                >
                                  <FontAwesomeIcon icon={faReply} />
                                  Send Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="page-btn">Previous</button>
        <div className="page-numbers">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>10</span>
        </div>
        <button className="page-btn">Next</button>
      </div>
    </div>
  );
};

export default SupportTickets;