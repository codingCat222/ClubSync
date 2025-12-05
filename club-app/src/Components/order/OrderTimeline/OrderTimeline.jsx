// src/components/order/OrderTimeline/OrderTimeline.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClock } from '@fortawesome/free-solid-svg-icons'
import './OrderTimeline.css'

function OrderTimeline({ steps = [], currentStep = 0, className = '' }) {
  return (
    <div className={`order-timeline ${className}`}>
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`timeline-step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'current' : ''}`}
        >
          <div className="step-indicator">
            {index < currentStep ? (
              <FontAwesomeIcon icon={faCheck} className="step-icon" />
            ) : (
              <span className="step-number">{index + 1}</span>
            )}
          </div>
          <div className="step-content">
            <h4 className="step-title">{step.title}</h4>
            <p className="step-description">{step.description}</p>
            {step.time && (
              <div className="step-time">
                <FontAwesomeIcon icon={faClock} />
                <span>{step.time}</span>
              </div>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`step-line ${index < currentStep ? 'completed' : ''}`}></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default OrderTimeline