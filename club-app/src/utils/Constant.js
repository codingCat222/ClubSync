// src/utils/constants.js
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  READY: 'ready',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
}

export const USER_ROLES = {
  USER: 'user',
  CLUB_OWNER: 'club-owner',
  STAFF: 'staff',
  ADMIN: 'admin'
}

export const CLUB_CATEGORIES = [
  { id: 'lounge', name: 'Lounge' },
  { id: 'bar', name: 'Bar' },
  { id: 'nightclub', name: 'Nightclub' },
  { id: 'pub', name: 'Pub' },
  { id: 'restaurant', name: 'Restaurant & Bar' },
  { id: 'rooftop', name: 'Rooftop Bar' },
  { id: 'jazz', name: 'Jazz Bar' },
  { id: 'sports', name: 'Sports Bar' }
]

export const STAFF_ROLES = [
  { id: 'manager', name: 'Manager', permissions: ['all'] },
  { id: 'bartender', name: 'Bartender', permissions: ['view_orders', 'update_order_status'] },
  { id: 'waiter', name: 'Waiter', permissions: ['view_orders', 'update_order_status'] },
  { id: 'cashier', name: 'Cashier', permissions: ['view_orders', 'process_payments'] },
  { id: 'security', name: 'Security', permissions: ['scan_qr'] }
]

export const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit/Debit Card' },
  { id: 'transfer', name: 'Bank Transfer' },
  { id: 'wallet', name: 'Digital Wallet' },
  { id: 'cash', name: 'Cash on Pickup' }
]