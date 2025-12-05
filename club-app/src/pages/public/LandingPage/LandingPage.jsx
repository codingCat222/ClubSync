// src/pages/public/LandingPage/LandingPage.jsx
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSearch, 
  faClock, 
  faQrcode, 
  faChartLine, 
  faUsers, 
  faShieldAlt,
  faFire,
  faStar,
  faMobileAlt,
  faMapMarkerAlt,
  faGlassCheers,
  faWallet,
  faCheckCircle,
  faQuestionCircle,
  faArrowRight,
  faCocktail, // Font Awesome cocktail icon
  faRocket,
  faGem,
  faTrophy,
  faBeer
} from '@fortawesome/free-solid-svg-icons'
import Button from '../../../components/common/Button/Button'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [currentAnimatedText, setCurrentAnimatedText] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [counters, setCounters] = useState({
    clubs: 0,
    customers: 0,
    satisfaction: 0,
    pickup: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef(null)

  // Animated texts for hero section
  const animatedTexts = [
    "Secure Payments",
    "Best Clubs", 
    "Instant Pickup",
    "5% Commission",
    "QR Code Access",
    "Zero Wait Time"
  ]

  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Animated text interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimatedText((prev) => (prev + 1) % animatedTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Counter animation on page load and when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            startCounterAnimation()
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [hasAnimated])

  const startCounterAnimation = () => {
    const targets = {
      clubs: 50,
      customers: 10000,
      satisfaction: 98,
      pickup: 5
    }

    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounters({
        clubs: Math.floor(targets.clubs * progress),
        customers: Math.floor(targets.customers * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        pickup: Math.floor(targets.pickup * progress)
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.feature-card, .club-card, .workflow-step, .accordion-item, .stat-card').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const handleUserSignup = () => {
    navigate('/signup/user')
  }

  const handleClubSignup = () => {
    navigate('/signup/club-owner')
  }

  // FAQ Accordion Items
  const faqItems = [
    {
      question: "How does ClubSync work?",
      answer: "ClubSync connects customers with premium clubs. Browse menus, pre-order drinks and food, pay securely, and use QR codes for instant pickup at the venue."
    },
    {
      question: "Is ClubSync safe for payments?",
      answer: "Yes! We use bank-level encryption for all transactions. Your payment information is never stored on our servers."
    },
    {
      question: "What's the commission for clubs?",
      answer: "We charge only 5% commission on all transactions, which is significantly lower than traditional food delivery platforms."
    },
    {
      question: "How do I pick up my order?",
      answer: "After payment, you'll receive a unique QR code. Show this code at the club's pickup counter to receive your order instantly."
    },
    {
      question: "Can clubs customize their menus?",
      answer: "Yes! Club owners have full control over their menus, prices, and special offers through our intuitive dashboard."
    },
    {
      question: "Is there a mobile app?",
      answer: "ClubSync is fully responsive on all devices. You can access it through any web browser on your phone, tablet, or computer."
    }
  ]

  // Stats data with animated counters - USING FONT AWESOME ICON
  const stats = [
    { 
      number: counters.clubs, 
      label: "Premium Clubs", 
      icon: faCocktail, // Font Awesome icon
      suffix: "+"
    },
    { 
      number: counters.customers, 
      label: "Happy Customers", 
      icon: faUsers,
      suffix: "+"
    },
    { 
      number: counters.satisfaction, 
      label: "Satisfaction Rate", 
      icon: faGem,
      suffix: "%"
    },
    { 
      number: counters.pickup, 
      label: "Average Pickup Time", 
      icon: faClock,
      suffix: "min"
    }
  ]

  // Featured clubs
  const featuredClubs = [
    {
      id: 1,
      name: "Neon Lounge",
      rating: 4.5,
      distance: "1.2 km",
      category: "Lounge",
      description: "Upscale lounge with premium cocktails and VIP service",
      features: ["3 Drinks", "2 Food Items"],
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Sky Bar Elite",
      rating: 4.8,
      distance: "2.1 km",
      category: "Rooftop",
      description: "Rooftop bar with stunning city views and exotic cocktails",
      features: ["2 Drinks", "1 Food Item"],
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Velvet Room",
      rating: 4.7,
      distance: "0.8 km",
      category: "Nightclub",
      description: "Exclusive nightclub with top DJs and premium bottle service",
      features: ["5 Drinks", "3 Food Items", "VIP"],
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  // Hero image URL
  const heroImageUrl = "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"

  // Preloader Component - WITH FONT AWESOME ICON
  if (isLoading) {
    return (
      <div className="preloader">
        <div className="preloader-content">
          <div className="preloader-logo">
            <FontAwesomeIcon icon={faCocktail} className="preloader-icon" />
            <span className="logo-text">ClubSync</span>
            <div className="logo-subtext">Nightlife Reimagined</div>
          </div>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <p className="loading-text">Loading your nightlife experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background-animation">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <div className="hero-badge animated-badge">
                <FontAwesomeIcon icon={faFire} className="badge-icon" />
                <span>Trending Worldwide</span>
              </div>
              
              <h1 className="hero-title">
                Experience Nightlife
                <span className="highlight"> Reimagined</span>
              </h1>
              
              <p className="hero-description">
                Skip the lines, avoid the wait. Pre-order your drinks and food from the best clubs 
                in town. Enjoy seamless ordering, secure payments, and instant pickup with QR codes.
              </p>
              
              {/* Animated Text */}
              <div className="animated-text-container">
                <div className="animated-text-wrapper">
                  <span className="animated-text">
                    {animatedTexts[currentAnimatedText]}
                  </span>
                  <div className="animated-underline"></div>
                </div>
              </div>

              {/* Hero Actions */}
              <div className="hero-actions">
                <Button 
                  size="large" 
                  onClick={handleUserSignup}
                  className="btn-hero-primary"
                >
                  <FontAwesomeIcon icon={faGlassCheers} /> Start Ordering
                </Button>
                <Button 
                  variant="outline" 
                  size="large" 
                  onClick={handleClubSignup}
                  className="btn-hero-secondary"
                >
                  <FontAwesomeIcon icon={faChartLine} /> For Club Owners
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image-container">
              <div className="hero-image-card">
                <div className="image-wrapper zoom-container">
                  <img 
                    src={heroImageUrl} 
                    alt="Club atmosphere with people enjoying nightlife" 
                    className="hero-main-image zoom-image"
                  />
                  <div className="image-overlay-gradient"></div>
                  
                  {/* Floating Elements */}
                  <div className="floating-badge floating-badge-1">
                    <FontAwesomeIcon icon={faQrcode} />
                    <span>QR Pickup</span>
                  </div>
                  <div className="floating-badge floating-badge-2">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Secure Payment</span>
                  </div>
                  <div className="floating-badge floating-badge-3">
                    <FontAwesomeIcon icon={faClock} />
                    <span>5 Min Pickup</span>
                  </div>
                </div>
                
                {/* Image Stats */}
                <div className="image-stats">
                  <div className="image-stat">
                    <strong>50+</strong>
                    <span>Premium Clubs</span>
                  </div>
                  <div className="image-stat">
                    <strong>5%</strong>
                    <span>Commission Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secure Payment Badge */}
        <div className="secure-payment-floating">
          <div className="secure-badge">
            <FontAwesomeIcon icon={faShieldAlt} />
            <div className="badge-details">
              <strong>Secure Payments</strong>
              <span>5% Commission Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with COUNTER ANIMATION */}
      <section className="stats-section" ref={counterRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="section-subtitle">Join thousands who trust ClubSync</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card counter-card"
                onMouseEnter={() => !hasAnimated && startCounterAnimation()}
              >
                <div className="stat-icon-wrapper">
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <div className="stat-content">
                  <h3 className="counter-number">
                    {stat.number}
                    {stat.suffix}
                  </h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ClubSync</h2>
            <p className="section-subtitle">Experience the future of nightlife with our innovative platform</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-container">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h3>Smart Discovery</h3>
              <p>Find the best clubs and bars in your area with intelligent recommendations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3>Instant Ordering</h3>
              <p>Place your order in seconds and track preparation in real-time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <FontAwesomeIcon icon={faQrcode} />
              </div>
              <h3>QR Code Pickup</h3>
              <p>Unique QR codes for instant, contactless pickup at the club.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3>Secure Payments</h3>
              <p>Bank-level encryption with multiple secure payment options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <h3>Mobile First</h3>
              <p>Seamless experience across all devices. Access anywhere, anytime.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3>Smart Analytics</h3>
              <p>Real-time insights for club owners to optimize operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clubs Section */}
      <section className="featured-clubs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Clubs</h2>
            <p className="section-subtitle">Discover the hottest spots in town</p>
          </div>
          <div className="clubs-grid">
            {featuredClubs.map(club => (
              <div key={club.id} className="club-card">
                <div className="club-image-container">
                  <img src={club.image} alt={club.name} className="club-image" />
                  <div className="club-image-overlay"></div>
                  <div className="club-badge">
                    <FontAwesomeIcon icon={faFire} /> Trending
                  </div>
                </div>
                <div className="club-content">
                  <div className="club-header">
                    <h3 className="club-name">{club.name}</h3>
                    <div className="club-rating">
                      <FontAwesomeIcon icon={faStar} /> {club.rating}
                    </div>
                  </div>
                  <div className="club-meta">
                    <span className="club-distance">
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> {club.distance}
                    </span>
                    <span className="club-category">{club.category}</span>
                  </div>
                  <p className="club-description">{club.description}</p>
                  <div className="club-features">
                    {club.features.map((feature, index) => (
                      <span key={index} className="club-feature">
                        <FontAwesomeIcon icon={faCheckCircle} /> {feature}
                      </span>
                    ))}
                  </div>
                  <Button 
                    size="medium" 
                    onClick={() => navigate('/signup/user')}
                    className="btn-view-club"
                  >
                    View Menu <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - WORKING ACCORDION */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about ClubSync</p>
          </div>
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <div 
                  className={`faq-question ${activeAccordion === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="question-content">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <h3>{item.question}</h3>
                  </div>
                  <span className="faq-toggle">
                    {activeAccordion === index ? '−' : '+'}
                  </span>
                </div>
                <div className={`faq-answer ${activeAccordion === index ? 'active' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <FontAwesomeIcon icon={faFire} /> Join the Revolution
            </div>
            <h2>Ready to Transform Your Nightlife Experience?</h2>
            <p className="cta-description">
              Join thousands of users and clubs already experiencing the future of nightlife with ClubSync.
            </p>
            <div className="cta-actions">
              <Button 
                size="large" 
                onClick={handleUserSignup}
                className="btn-cta-primary"
              >
                <FontAwesomeIcon icon={faGlassCheers} /> Start Ordering Now
              </Button>
              <Button 
                variant="outline" 
                size="large" 
                onClick={handleClubSignup}
                className="btn-cta-secondary"
              >
                <FontAwesomeIcon icon={faChartLine} /> List Your Club
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage