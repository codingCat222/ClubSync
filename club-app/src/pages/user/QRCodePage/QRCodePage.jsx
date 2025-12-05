// src/pages/user/QRCodePage/QRCodePage.jsx
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import QRCode from 'react-qr-code'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faQrcode, 
  faClock, 
  faCheckCircle,
  faDownload,
  faShareAlt,
  faPrint,
  faCopy,
  faUser,
  faShoppingBag,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/common/Card/Card'
import Button from '../../../components/common/Button/Button'
import './QRCodePage.css'

function QRCodePage() {
  const { orderId } = useParams()
  const [timeLeft, setTimeLeft] = useState(900) // 15 minutes in seconds
  const [isExpired, setIsExpired] = useState(false)
  const [copied, setCopied] = useState(false)

  const orderDetails = {
    id: orderId || 'ORD-001',
    club: 'Midnight Lounge',
    clubAddress: '123 Night Street, Victoria Island, Lagos',
    customer: 'John Doe',
    items: [
      { name: 'Blue Lagoon', quantity: 2, price: '₦8,000' },
      { name: 'Mojito', quantity: 1, price: '₦3,500' },
      { name: 'Heineken', quantity: 3, price: '₦3,600' }
    ],
    total: '₦15,100',
    orderTime: '10:30 PM',
    pickupTime: '10:45 PM',
    status: 'ready'
  }

  const qrValue = JSON.stringify({
    orderId: orderDetails.id,
    club: orderDetails.club,
    customer: orderDetails.customer,
    total: orderDetails.total,
    timestamp: Date.now()
  })

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setIsExpired(true)
    }
  }, [timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleDownload = () => {
    console.log('Downloading QR code...')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Order ${orderDetails.id}`,
        text: `Show this QR code to pick up your order from ${orderDetails.club}`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(orderDetails.id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="qr-code-page">
      <div className="qr-code-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Pickup QR Code</h1>
            <p className="page-subtitle">Show this code to collect your order</p>
          </div>
        </div>
      </div>

      <div className="qr-code-content">
        <div className="container">
          <div className="qr-code-layout">
            <div className="qr-code-section">
              <Card className="qr-code-card">
                <div className="qr-header">
                  <div className="qr-info">
                    <FontAwesomeIcon icon={faQrcode} className="qr-icon" />
                    <div>
                      <h3>Order #{orderDetails.id}</h3>
                      <p>Valid for pickup</p>
                    </div>
                  </div>
                  <div className={`time-remaining ${isExpired ? 'expired' : ''}`}>
                    <FontAwesomeIcon icon={faClock} />
                    <span>{isExpired ? 'Expired' : formatTime(timeLeft)}</span>
                  </div>
                </div>

                <div className="qr-display">
                  <div className="qr-container">
                    <QRCode
                      value={qrValue}
                      size={256}
                      bgColor="white"
                      fgColor="#1f2937"
                      level="H"
                    />
                  </div>
                  <div className="qr-instructions">
                    <p className="instruction-title">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      How to use
                    </p>
                    <ol className="instruction-list">
                      <li>Go to {orderDetails.club}</li>
                      <li>Show this QR code to staff</li>
                      <li>Staff will scan and confirm</li>
                      <li>Collect your order</li>
                    </ol>
                  </div>
                </div>

                <div className="qr-actions">
                  <Button variant="outline" onClick={handleDownload}>
                    <FontAwesomeIcon icon={faDownload} />
                    Download
                  </Button>
                  <Button variant="outline" onClick={handleShare}>
                    <FontAwesomeIcon icon={faShareAlt} />
                    {copied ? 'Copied!' : 'Share'}
                  </Button>
                  <Button variant="outline" onClick={handlePrint}>
                    <FontAwesomeIcon icon={faPrint} />
                    Print
                  </Button>
                </div>
              </Card>
            </div>

            <div className="order-details-section">
              <Card className="order-details-card">
                <h3>Order Details</h3>
                
                <div className="details-section">
                  <div className="detail-row">
                    <FontAwesomeIcon icon={faUser} />
                    <div className="detail-info">
                      <label>Customer</label>
                      <strong>{orderDetails.customer}</strong>
                    </div>
                  </div>
                  <div className="detail-row">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <div className="detail-info">
                      <label>Pickup Location</label>
                      <strong>{orderDetails.club}</strong>
                      <p className="detail-sub">{orderDetails.clubAddress}</p>
                    </div>
                  </div>
                  <div className="detail-row">
                    <FontAwesomeIcon icon={faClock} />
                    <div className="detail-info">
                      <label>Order Time</label>
                      <strong>{orderDetails.orderTime}</strong>
                    </div>
                  </div>
                </div>

                <div className="items-section">
                  <h4>Order Items</h4>
                  <div className="items-list">
                    {orderDetails.items.map((item, index) => (
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

                <div className="total-section">
                  <div className="total-row">
                    <span>Total Amount</span>
                    <span className="total-amount">{orderDetails.total}</span>
                  </div>
                </div>

                <div className="order-status">
                  <div className={`status-badge ${orderDetails.status}`}>
                    {orderDetails.status}
                  </div>
                  <p className="status-note">
                    Your order is ready for pickup. Show QR code at the counter.
                  </p>
                </div>

                <div className="order-actions">
                  <Button variant="outline" onClick={handleCopy}>
                    <FontAwesomeIcon icon={faCopy} />
                    Copy Order ID
                  </Button>
                  <Link to="/orders">
                    <Button variant="primary">
                      View All Orders
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="help-card">
                <h4>Need Help?</h4>
                <p>If you're having trouble with your QR code:</p>
                <ul className="help-list">
                  <li>Make sure your screen brightness is at maximum</li>
                  <li>Ensure the QR code is clearly visible</li>
                  <li>Contact club staff for assistance</li>
                </ul>
                <div className="contact-info">
                  <span>📞 {orderDetails.club}: +234 801 234 5678</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRCodePage