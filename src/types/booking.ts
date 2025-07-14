// Booking system type definitions

export interface BookingPlan {
  id: string;
  name: string;
  duration: number; // in minutes
  price: number; // in USD
  description: string;
  features: string[];
  popular?: boolean;
}

export interface BookingFormData {
  planId: string;
  communicationMethod: 'whatsapp' | 'zoom' | 'google-meet';
  preferredDate: string;
  preferredTime: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    businessType?: string;
  };
  specialRequests?: string;
}

export interface BookingRecord {
  id: string;
  planId: string;
  customerId: string;
  communicationMethod: 'whatsapp' | 'zoom' | 'google-meet';
  scheduledDate: string;
  scheduledTime: string;
  duration: number;
  price: number;
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentId?: string;
  meetingLink?: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  businessType?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentRecord {
  id: string;
  bookingId: string;
  customerId: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  paystackReference: string;
  status: 'pending' | 'success' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export interface AvailableTimeSlot {
  date: string;
  time: string;
  available: boolean;
}

export interface BookingStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}
