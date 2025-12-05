// src/pages/club-owner/QRScannerPage/QRScannerPage.jsx
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faQrcode, 
  faCamera, 
  faCheckCircle, 
  faTimesCircle,
  faClock,
  faUser,
  faShoppingBag,
  faMoneyBillWave,
  faHistory
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import Button from '../../../components/common/Button/Button'
import './QRScannerPage.css'

function QRScannerPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scannedData, setScannedData] = useState(null)
  const [scanHistory, setScanHistory] = useState([
    { id: 1, orderId: '#ORD-001', customer: 'John Doe', amount: '₦8,500', time: '10:30 AM', status: 'success' },
    { id: 2, orderId: '#ORD-002', customer: 'Jane Smith', amount: '₦12,300', time: '11:45 AM', status: 'success' },
    { id: 3, orderId: '#ORD-003', customer: 'Mike Johnson', amount: '₦5,800', time: '12:15 PM', status: 'failed' },
    { id: 4, orderId: '#ORD-004', customer: 'Sarah Wilson', amount: '₦9,700', time: '1:30 PM', status: 'success' }
  ])

  const mockOrderDetails = {
    orderId: '#ORD-005',
    customer: 'David Brown',
    items: [
      { name: 'Blue Lagoon', quantity: 2, price: '₦8,000' },
      { name: 'Mojito', quantity: 1, price: '₦3,500' },
      { name: 'Heineken', quantity: 3, price: '₦3,600' }
    ],
    total: '₦15,100',
    status: 'ready',
    orderTime: '2:45 PM',
    pickupTime: '3:00 PM'
  }

  const handleScan = () => {
    setIsScanning(true)
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false)
      setScannedData(mockOrderDetails)
    }, 2000)
  }

  const handleConfirmPickup = () => {
    console.log('Confirming pickup for:', scannedData.orderId)
    
    // Add to history
    const newScan = {
      id: scanHistory.length + 1,
      orderId: scannedData.orderId,
      customer: scannedData.customer,
      amount: scannedData.total,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'success'
    }
    
    setScanHistory([newScan, ...scanHistory])
    setScannedData(null)
  }

  const handleRejectPickup = () => {
    console.log('Rejecting pickup for:', scannedData.orderId)
    
    // Add to history
    const newScan = {
      id: scanHistory.length + 1,
      orderId: scannedData.orderId,
      customer: scannedData.customer,
      amount: scannedData.total,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'failed'
    }
    
    setScanHistory([newScan, ...scanHistory])
    setScannedData(null)
  }

  return (
    <div className="qr-scanner-page">
      <div className="qr-scanner-header">
        <div className="header-content">
          <h1 className="page-title">QR Code Scanner</h1>
          <p className="page-subtitle">Scan customer QR codes to verify order pickups</p>
        </div>
      </div>

      <div className="qr-scanner-content">
        <div className="scanner-section">
          <Card className="scanner-card">
            <div className="scanner-header">
              <div className="scanner-icon">
                <FontAwesomeIcon icon={faQrcode} />
              </div>
              <div className="scanner-info">
                <h3>QR Code Scanner</h3>
                <p>Point camera at customer's QR code</p>
              </div>
            </div>

            <div className="scanner-preview">
              {isScanning ? (
                <div className="scanning-animation">
                  <div className="scanner-beam"></div>
                  <div className="scanner-overlay">
                    <div className="scanning-text">
                      <FontAwesomeIcon icon={faCamera} spin />
                      <span>Scanning QR Code...</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="scanner-placeholder">
                  <FontAwesomeIcon icon={faQrcode} />
                  <p>Ready to scan</p>
                </div>
              )}
            </div>

            <div className="scanner-actions">
              {!scannedData && (
                <Button 
                  variant="primary" 
                  size="large" 
                  onClick={handleScan}
                  loading={isScanning}
                  fullWidth
                >
                  <FontAwesomeIcon icon={faCamera} />
                  {isScanning ? 'Scanning...' : 'Start Scanning'}
                </Button>
              )}
            </div>
          </Card>
        </div>

        {scannedData && (
          <div className="order-details-section">
            <Card className="order-details-card zoom-in">
              <div className="order-header">
                <h3>Order Details</h3>
                <div className={`order-status ${scannedData.status}`}>
                  {scannedData.status}
                </div>
              </div>

              <div className="order-info">
                <div className="info-row">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                      <label>Customer</label>
                      <strong>{scannedData.customer}</strong>
                    </div>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <div>
                      <label>Order ID</label>
                      <strong>{scannedData.orderId}</strong>
                    </div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faClock} />
                    <div>
                      <label>Order Time</label>
                      <strong>{scannedData.orderTime}</strong>
                    </div>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faClock} />
                    <div>
                      <label>Pickup Time</label>
                      <strong>{scannedData.pickupTime}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-items">
                <h4>Order Items</h4>
                <div className="items-list">
                  {scannedData.items.map((item, index) => (
                    <div key={index} className="item-row">
                      <div className="item-info">
                        <span className="item-name">{item.name}</span>
                        <span className="item-quantity">x{item.quantity}</span>
                      </div>
                      <span className="item-price">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-total">
                <div className="total-label">Total Amount</div>
                <div className="total-amount">{scannedData.total}</div>
              </div>

              <div className="order-actions">
                <Button 
                  variant="success" 
                  onClick={handleConfirmPickup}
                  fullWidth
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  Confirm Pickup
                </Button>
                <Button 
                  variant="danger" 
                  onClick={handleRejectPickup}
                  fullWidth
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                  Reject Pickup
                </Button>
              </div>
            </Card>
          </div>
        )}

        <div className="scan-history-section">
          <Card>
            <div className="section-header">
              <h3>
                <FontAwesomeIcon icon={faHistory} />
                Scan History
              </h3>
              <Button variant="outline" size="small">
                Clear History
              </Button>
            </div>
            
            <div className="history-table">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {scanHistory.map(scan => (
                    <tr key={scan.id}>
                      <td><strong>{scan.orderId}</strong></td>
                      <td>{scan.customer}</td>
                      <td>{scan.amount}</td>
                      <td>{scan.time}</td>
                      <td>
                        <span className={`scan-status ${scan.status}`}>
                          {scan.status === 'success' ? (
                            <FontAwesomeIcon icon={faCheckCircle} />
                          ) : (
                            <FontAwesomeIcon icon={faTimesCircle} />
                          )}
                          <span>{scan.status}</span>
                        </span>
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

export default QRScannerPage