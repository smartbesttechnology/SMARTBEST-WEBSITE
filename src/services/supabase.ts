import { createClient } from '@supabase/supabase-js';
import { BookingRecord, Customer, PaymentRecord } from '../types/booking';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'placeholder_anon_key';

// Create Supabase client with placeholder values to prevent errors
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database service functions
export class BookingService {
  // Create a new customer
  static async createCustomer(customerData: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>) {
    const { data, error } = await supabase
      .from('customers')
      .insert([{
        ...customerData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Get customer by email
  static async getCustomerByEmail(email: string) {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  }

  // Create a new booking
  static async createBooking(bookingData: Omit<BookingRecord, 'id' | 'createdAt' | 'updatedAt'>) {
    const { data, error } = await supabase
      .from('bookings')
      .insert([{
        ...bookingData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Update booking status
  static async updateBookingStatus(bookingId: string, status: BookingRecord['status']) {
    const { data, error } = await supabase
      .from('bookings')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Update booking payment status
  static async updateBookingPayment(bookingId: string, paymentStatus: BookingRecord['paymentStatus'], paymentId?: string) {
    const { data, error } = await supabase
      .from('bookings')
      .update({ 
        payment_status: paymentStatus,
        payment_id: paymentId,
        updated_at: new Date().toISOString()
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Create payment record
  static async createPaymentRecord(paymentData: Omit<PaymentRecord, 'id' | 'createdAt' | 'updatedAt'>) {
    const { data, error } = await supabase
      .from('payments')
      .insert([{
        ...paymentData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Get booking by ID
  static async getBookingById(bookingId: string) {
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        customer:customers(*)
      `)
      .eq('id', bookingId)
      .single();

    if (error) throw error;
    return data;
  }

  // Get available time slots for a date
  static async getAvailableSlots(date: string) {
    const { data, error } = await supabase
      .from('bookings')
      .select('scheduled_date, scheduled_time, duration')
      .eq('scheduled_date', date)
      .eq('status', 'scheduled');

    if (error) throw error;
    return data;
  }

  // Check if time slot is available
  static async isTimeSlotAvailable(date: string, time: string, duration: number) {
    const { data, error } = await supabase
      .from('bookings')
      .select('id')
      .eq('scheduled_date', date)
      .eq('scheduled_time', time)
      .eq('status', 'scheduled');

    if (error) throw error;
    return data.length === 0;
  }
}
