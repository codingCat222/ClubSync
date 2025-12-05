// src/components/common/Tabs/Tabs.jsx
import './Tabs.css'

function Tabs({ tabs, activeTab, onChange, className = '' }) {
  return (
    <div className={`tabs-container ${className}`}>
      <div className="tabs-header">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.icon && <tab.icon className="tab-icon" />}
            <span className="tab-label">{tab.label}</span>
            {tab.badge && <span className="tab-badge">{tab.badge}</span>}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}

export default Tabs