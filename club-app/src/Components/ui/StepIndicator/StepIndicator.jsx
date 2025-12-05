// src/components/ui/StepIndicator/StepIndicator.jsx
import './StepIndicator.css'

function StepIndicator({ steps, currentStep = 0, className = '' }) {
  return (
    <div className={`step-indicator ${className}`}>
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`step ${index <= currentStep ? 'completed' : ''} ${index === currentStep ? 'current' : ''}`}
        >
          <div className="step-number">
            {index < currentStep ? '✓' : index + 1}
          </div>
          <div className="step-label">{step.label}</div>
          {index < steps.length - 1 && (
            <div className={`step-line ${index < currentStep ? 'completed' : ''}`}></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default StepIndicator