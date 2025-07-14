import { BookingPlan } from '../types/booking';

// Booking plans configuration
export const BOOKING_PLANS: BookingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Consultation',
    duration: 15,
    price: 35,
    description: 'Quick consultation to discuss your immediate needs and get expert advice.',
    features: [
      '15-minute focused session',
      'Business needs assessment',
      'Technology recommendations',
      'Next steps guidance',
      'Follow-up email summary'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Consultation',
    duration: 30,
    price: 70,
    description: 'Comprehensive consultation to dive deep into your business challenges and solutions.',
    features: [
      '30-minute detailed session',
      'In-depth business analysis',
      'Custom solution roadmap',
      'Technology stack recommendations',
      'Implementation timeline',
      'Follow-up email with action plan'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium Strategy Session',
    duration: 60,
    price: 120,
    description: 'Complete strategic session with detailed planning and comprehensive solution design.',
    features: [
      '1-hour comprehensive session',
      'Complete business audit',
      'Custom automation strategy',
      'Detailed implementation plan',
      'ROI projections and timeline',
      'Technology architecture design',
      'Follow-up consultation included',
      'Priority support for 30 days'
    ]
  }
];

// Communication methods
export const COMMUNICATION_METHODS = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Call',
    description: 'Voice or video call via WhatsApp',
    icon: '📱',
    popular: true
  },
  {
    id: 'zoom',
    name: 'Zoom Meeting',
    description: 'Professional video conference via Zoom',
    icon: '💻',
    popular: false
  },
  {
    id: 'google-meet',
    name: 'Google Meet',
    description: 'Video meeting via Google Meet',
    icon: '🎥',
    popular: false
  }
];

// Business hours configuration
export const BUSINESS_HOURS = {
  timezone: 'UTC',
  workingDays: [1, 2, 3, 4, 5], // Monday to Friday
  startTime: '09:00',
  endTime: '17:00',
  slotDuration: 15, // minutes
  bufferTime: 15, // minutes between bookings
  advanceBookingDays: 30, // how many days in advance can be booked
  minimumNotice: 24 // minimum hours notice required
};

// Email templates
export const EMAIL_TEMPLATES = {
  confirmation: {
    subject: 'Consultation Booking Confirmed - SmartBest Technology',
    template: 'booking-confirmation'
  },
  reminder: {
    subject: 'Consultation Reminder - Tomorrow at {time}',
    template: 'booking-reminder'
  },
  cancellation: {
    subject: 'Consultation Cancelled - SmartBest Technology',
    template: 'booking-cancellation'
  }
};

// Paystack configuration
export const PAYSTACK_CONFIG = {
  publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || '',
  currency: 'USD',
  channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer']
};

// Supabase table names
export const SUPABASE_TABLES = {
  bookings: 'bookings',
  customers: 'customers',
  payments: 'payments',
  availability: 'availability'
};
