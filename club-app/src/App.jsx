import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Public Pages
import LandingPage from './pages/public/LandingPage/LandingPage'
import Login from './pages/public/Login/Login'
import SignupChoice from './pages/public/SignupChoice/SignupChoice'
import SignupUser from './pages/public/SignupUser/SignupUser'
import SignupClubOwner from './pages/public/SignupClubOwner/SignupClubOwner'
import Clubs from './pages/public/Clubs/Clubs'
import ClubDetails from './pages/public/ClubDetails/ClubDetails'

// User Pages
import Home from './pages/user/Home/Home'
import Cart from './pages/user/Cart/Cart'
import Checkout from './pages/user/Checkout/Checkout'
import Orders from './pages/user/Orders/Orders'
import QRCodePage from './pages/user/QRCodePage/QRCodePage'
import Profile from './pages/user/Profile/Profile'
import OrderTracking from './pages/user/OrderTracking/OrderTracking'

// Club Owner Pages
import Dashboard from './pages/club-owner/Dashboard/Dashboard'
import ClubOrders from './pages/club-owner/ClubOrders/ClubOrders'
import MenuManager from './pages/club-owner/MenuManager/MenuManager'
import StaffManager from './pages/club-owner/StaffManager/StaffManager'
import QRScannerPage from './pages/club-owner/QRScannerPage/QRScannerPage'
import Earnings from './pages/club-owner/Earnings/Earnings'
import ClubSettings from './pages/club-owner/ClubSettings/ClubSettings'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard'
import ClubApprovals from './pages/admin/ClubApprovals/ClubApprovals'
import UsersManager from './pages/admin/UsersManager/UsersManager'
import ClubsManager from './pages/admin/ClubsManager/ClubsManager'
import SupportTickets from './pages/admin/SupportTickets/SupportTickets'

import NotFound from './pages/shared/NotFound/NotFound'

// Layout Components
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignupChoice />} />
              <Route path="/signup/user" element={<SignupUser />} />
              <Route path="/signup/club-owner" element={<SignupClubOwner />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/clubs/:id" element={<ClubDetails />} />

              {/* User Routes */}
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderTracking />} />
              <Route path="/qr/:orderId" element={<QRCodePage />} />
              <Route path="/profile" element={<Profile />} />

              {/* Club Owner Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/club-orders" element={<ClubOrders />} />
              <Route path="/menu" element={<MenuManager />} />
              <Route path="/staff" element={<StaffManager />} />
              <Route path="/scanner" element={<QRScannerPage />} />
              <Route path="/earnings" element={<Earnings />} />
              <Route path="/settings" element={<ClubSettings />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/approvals" element={<ClubApprovals />} />
              <Route path="/admin/users" element={<UsersManager />} />
              <Route path="/admin/clubs" element={<ClubsManager />} />
              <Route path="/admin/support" element={<SupportTickets />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--gray-800)',
                color: 'var(--light-color)',
                borderRadius: 'var(--radius-md)',
              },
            }}
          />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App