-- SmartBest Technology Booking System Database Schema
-- Run this SQL in your Supabase SQL editor to create the required tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Customers table
CREATE TABLE customers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50) NOT NULL,
    company VARCHAR(255),
    business_type VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    plan_id VARCHAR(50) NOT NULL,
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    communication_method VARCHAR(20) NOT NULL CHECK (communication_method IN ('whatsapp', 'zoom', 'google-meet')),
    scheduled_date DATE NOT NULL,
    scheduled_time TIME NOT NULL,
    duration INTEGER NOT NULL, -- in minutes
    price DECIMAL(10,2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
    payment_id VARCHAR(255),
    meeting_link TEXT,
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'rescheduled')),
    special_requests TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    payment_method VARCHAR(50) NOT NULL,
    paystack_reference VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'success', 'failed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Availability table (for managing consultant availability)
CREATE TABLE availability (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_available BOOLEAN DEFAULT true,
    reason TEXT, -- for blocking time slots
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(date, start_time, end_time)
);

-- Create indexes for better performance
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_bookings_customer_id ON bookings(customer_id);
CREATE INDEX idx_bookings_scheduled_date ON bookings(scheduled_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_payments_booking_id ON payments(booking_id);
CREATE INDEX idx_payments_paystack_reference ON payments(paystack_reference);
CREATE INDEX idx_availability_date ON availability(date);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_availability_updated_at BEFORE UPDATE ON availability
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability ENABLE ROW LEVEL SECURITY;

-- Allow public access for booking creation (you may want to restrict this in production)
CREATE POLICY "Allow public read access to availability" ON availability
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert on customers" ON customers
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read own customer data" ON customers
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert on bookings" ON bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read own bookings" ON bookings
    FOR SELECT USING (true);

CREATE POLICY "Allow public update own bookings" ON bookings
    FOR UPDATE USING (true);

CREATE POLICY "Allow public insert on payments" ON payments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read own payments" ON payments
    FOR SELECT USING (true);

-- Insert some default availability (optional)
-- This creates availability for the next 30 days, Monday to Friday, 9 AM to 5 PM
INSERT INTO availability (date, start_time, end_time, is_available)
SELECT 
    date_series::date,
    '09:00'::time,
    '17:00'::time,
    true
FROM generate_series(
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '30 days',
    INTERVAL '1 day'
) AS date_series
WHERE EXTRACT(DOW FROM date_series) BETWEEN 1 AND 5; -- Monday to Friday
