# SmartBest Technology Booking System

## Overview

A comprehensive consultation booking system integrated into the SmartBest Technology website. This system allows customers to book paid consultations with automated payment processing, email confirmations, and calendar management.

## Features

### 🎯 **Consultation Packages**
- **Basic Plan**: 15 minutes - $35
- **Standard Plan**: 30 minutes - $70 (Most Popular)
- **Premium Plan**: 1 hour - $120

### 💳 **Payment Integration**
- Secure payment processing via Paystack
- Multiple payment methods (Card, Bank Transfer, Mobile Money)
- Automatic booking confirmation after payment
- Payment records stored in database

### 📧 **Email Automation**
- Confirmation emails with meeting details
- Reminder emails before appointments
- Cancellation/rescheduling notifications
- Integration with Resend API

### 📅 **Calendar Management**
- Real-time availability checking
- Business hours enforcement (9 AM - 5 PM UTC, Mon-Fri)
- Automatic time slot blocking after booking
- 24-hour advance booking requirement

### 🔗 **Communication Options**
- WhatsApp Call (Recommended)
- Zoom Meeting
- Google Meet
- Automatic meeting link generation

## Technical Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons

### Backend Services
- **Database**: Supabase (PostgreSQL)
- **Payments**: Paystack
- **Email**: Resend API
- **Authentication**: Supabase Auth

### Key Dependencies
```json
{
  "@supabase/supabase-js": "^2.x",
  "react-paystack": "^3.x",
  "react-datepicker": "^4.x"
}
```

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the project root:

```env
# Supabase Configuration
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key

# Paystack Configuration
REACT_APP_PAYSTACK_PUBLIC_KEY=your_paystack_public_key

# Resend Email Configuration
REACT_APP_RESEND_API_KEY=your_resend_api_key

# Application Configuration
REACT_APP_APP_URL=http://localhost:3000
REACT_APP_COMPANY_EMAIL=info@smartbesttechnology.com
REACT_APP_COMPANY_PHONE=+2348121096818
REACT_APP_COMPANY_WHATSAPP=https://wa.me/2348121096818
```

### 2. Database Setup

1. Create a new Supabase project
2. Run the SQL schema from `database/schema.sql` in your Supabase SQL editor
3. Configure Row Level Security policies as needed

### 3. Paystack Setup

1. Create a Paystack account
2. Get your public key from the dashboard
3. Configure webhooks for payment verification (optional)

### 4. Resend Setup

1. Create a Resend account
2. Get your API key
3. Configure email templates (optional)

## File Structure

```
src/
├── components/
│   ├── BookingModal.tsx          # Main booking modal
│   ├── BookingButton.tsx         # Reusable booking button
│   └── booking/
│       ├── PlanSelection.tsx     # Plan selection step
│       ├── CommunicationMethodSelection.tsx
│       ├── DateTimeSelection.tsx # Calendar and time picker
│       ├── CustomerInfoForm.tsx  # Customer information form
│       ├── BookingSummary.tsx    # Booking review
│       └── PaymentProcessing.tsx # Payment handling
├── types/
│   └── booking.ts                # TypeScript interfaces
├── config/
│   └── booking.ts                # Configuration constants
├── services/
│   └── supabase.ts               # Database service functions
└── database/
    └── schema.sql                # Database schema
```

## Usage

### Basic Implementation

Replace existing "Book a Call" buttons with the new BookingButton component:

```tsx
import BookingButton from './components/BookingButton';

// Basic usage
<BookingButton />

// With custom text and styling
<BookingButton
  text="Schedule Consultation"
  variant="primary"
  size="lg"
  initialPlanId="standard"
/>
```

### Booking Flow

1. **Plan Selection**: Customer chooses consultation package
2. **Communication Method**: Select WhatsApp, Zoom, or Google Meet
3. **Date & Time**: Pick from available time slots
4. **Customer Info**: Provide contact and business details
5. **Payment**: Secure payment via Paystack
6. **Confirmation**: Email sent with meeting details

## API Integration

### Supabase Tables

- `customers`: Customer information
- `bookings`: Booking records
- `payments`: Payment transactions
- `availability`: Time slot management

### Key Functions

```typescript
// Create a booking
const booking = await BookingService.createBooking(bookingData);

// Process payment
const payment = await BookingService.createPaymentRecord(paymentData);

// Check availability
const isAvailable = await BookingService.isTimeSlotAvailable(date, time, duration);
```

## Customization

### Booking Plans

Edit `src/config/booking.ts` to modify:
- Plan prices and durations
- Features included in each plan
- Business hours and availability

### Email Templates

Configure email templates in your Resend dashboard or modify the email service functions.

### Payment Methods

Adjust Paystack configuration in `src/config/booking.ts` to enable/disable payment channels.

## Security Considerations

- All payment processing is handled securely by Paystack
- Customer data is protected with Supabase RLS policies
- Environment variables keep sensitive keys secure
- Input validation on all form fields

## Testing

1. Test the booking flow with Paystack test keys
2. Verify email delivery in development
3. Check database records are created correctly
4. Test responsive design on mobile devices

## Support

For technical support or customization requests, contact:
- Email: info@smartbesttechnology.com
- WhatsApp: +234 812 109 6818

## License

This booking system is proprietary to SmartBest Technology and is not licensed for redistribution.
