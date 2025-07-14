import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { CreditCard, Shield, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { BookingFormData } from '../../types/booking';
import { BOOKING_PLANS, PAYSTACK_CONFIG } from '../../config/booking';
import { BookingService } from '../../services/supabase';

interface PaymentProcessingProps {
  formData: BookingFormData;
  onPaymentSuccess: () => void;
}

const PaymentProcessing: React.FC<PaymentProcessingProps> = ({ formData, onPaymentSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedPlan = BOOKING_PLANS.find(plan => plan.id === formData.planId);

  if (!selectedPlan) return null;

  const paystackConfig = {
    reference: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    email: formData.customerInfo?.email || '',
    amount: selectedPlan.price * 100, // Paystack expects amount in kobo (cents)
    publicKey: PAYSTACK_CONFIG.publicKey,
    text: `Pay $${selectedPlan.price}`,
    currency: PAYSTACK_CONFIG.currency,
    channels: PAYSTACK_CONFIG.channels,
    metadata: {
      custom_fields: [
        {
          display_name: "Booking Plan",
          variable_name: "booking_plan",
          value: selectedPlan.name
        },
        {
          display_name: "Duration",
          variable_name: "duration",
          value: `${selectedPlan.duration} minutes`
        },
        {
          display_name: "Date",
          variable_name: "booking_date",
          value: formData.preferredDate || ''
        },
        {
          display_name: "Time",
          variable_name: "booking_time",
          value: formData.preferredTime || ''
        }
      ]
    }
  };

  const handlePaymentSuccess = async (reference: any) => {
    setIsProcessing(true);
    setPaymentStatus('processing');

    try {
      // Create or get customer
      let customer = await BookingService.getCustomerByEmail(formData.customerInfo?.email || '');
      
      if (!customer) {
        customer = await BookingService.createCustomer({
          firstName: formData.customerInfo?.firstName || '',
          lastName: formData.customerInfo?.lastName || '',
          email: formData.customerInfo?.email || '',
          phone: formData.customerInfo?.phone || '',
          company: formData.customerInfo?.company,
          businessType: formData.customerInfo?.businessType
        });
      }

      // Create booking record
      const booking = await BookingService.createBooking({
        planId: formData.planId,
        customerId: customer.id,
        communicationMethod: formData.communicationMethod || 'whatsapp',
        scheduledDate: formData.preferredDate || '',
        scheduledTime: formData.preferredTime || '',
        duration: selectedPlan.duration,
        price: selectedPlan.price,
        paymentStatus: 'completed',
        paymentId: reference.reference,
        status: 'scheduled'
      });

      // Create payment record
      await BookingService.createPaymentRecord({
        bookingId: booking.id,
        customerId: customer.id,
        amount: selectedPlan.price,
        currency: PAYSTACK_CONFIG.currency,
        paymentMethod: 'card',
        paystackReference: reference.reference,
        status: 'success'
      });

      // Generate meeting link based on communication method
      let meetingLink = '';
      if (formData.communicationMethod === 'whatsapp') {
        meetingLink = 'https://wa.me/2348121096818';
      } else if (formData.communicationMethod === 'zoom') {
        meetingLink = 'https://zoom.us/j/meeting-id'; // This would be generated dynamically
      } else if (formData.communicationMethod === 'google-meet') {
        meetingLink = 'https://meet.google.com/meeting-id'; // This would be generated dynamically
      }

      // Update booking with meeting link
      if (meetingLink) {
        await BookingService.updateBookingStatus(booking.id, 'scheduled');
      }

      // Send confirmation email (this would be implemented with Resend API)
      await sendConfirmationEmail(booking, customer, meetingLink);

      setPaymentStatus('success');
      setTimeout(() => {
        onPaymentSuccess();
      }, 2000);

    } catch (error) {
      console.error('Booking creation failed:', error);
      setPaymentStatus('error');
      setErrorMessage('Failed to create booking. Please contact support.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentClose = () => {
    setPaymentStatus('idle');
  };

  const sendConfirmationEmail = async (booking: any, customer: any, meetingLink: string) => {
    // This would integrate with Resend API
    // For now, we'll just log the email data
    console.log('Sending confirmation email:', {
      to: customer.email,
      subject: 'Consultation Booking Confirmed - SmartBest Technology',
      booking,
      meetingLink
    });
  };

  if (paymentStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto" />
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Payment Successful!</h3>
        <p className="text-green-700 mb-4">
          Your consultation has been booked successfully. You'll receive a confirmation email shortly.
        </p>
        <div className="bg-green-50 rounded-lg p-4 text-left">
          <h4 className="font-medium text-green-900 mb-2">What's Next?</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Check your email for booking confirmation and meeting details</li>
            <li>• Add the appointment to your calendar</li>
            <li>• Prepare your questions and business information</li>
            <li>• Join the meeting at the scheduled time</li>
          </ul>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <div className="text-center py-8">
        <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
          <AlertCircle className="h-8 w-8 text-red-600 mx-auto" />
        </div>
        <h3 className="text-xl font-bold text-red-900 mb-2">Payment Failed</h3>
        <p className="text-red-700 mb-4">{errorMessage}</p>
        <button
          onClick={() => setPaymentStatus('idle')}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment</h3>
        <p className="text-gray-600">Complete your booking with secure payment processing</p>
      </div>

      {/* Payment Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold">{selectedPlan.name}</h4>
            <p className="text-blue-100">{selectedPlan.duration} minutes consultation</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">${selectedPlan.price}</p>
            <p className="text-blue-100">USD</p>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
          <Shield className="h-6 w-6 text-green-600" />
          <div>
            <p className="font-medium text-green-900">Secure Payment</p>
            <p className="text-sm text-green-700">256-bit SSL encryption</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
          <Lock className="h-6 w-6 text-blue-600" />
          <div>
            <p className="font-medium text-blue-900">Data Protection</p>
            <p className="text-sm text-blue-700">PCI DSS compliant</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
          <CreditCard className="h-6 w-6 text-purple-600" />
          <div>
            <p className="font-medium text-purple-900">Multiple Options</p>
            <p className="text-sm text-purple-700">Card, bank, mobile money</p>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="text-center">
        {PAYSTACK_CONFIG.publicKey && PAYSTACK_CONFIG.publicKey !== 'pk_test_placeholder_key' ? (
          <PaystackButton
            {...paystackConfig}
            onSuccess={handlePaymentSuccess}
            onClose={handlePaymentClose}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5" />
                <span>Pay ${selectedPlan.price} Securely</span>
              </>
            )}
          </PaystackButton>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="text-center">
              <CreditCard className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Payment System Setup Required</h4>
              <p className="text-blue-800 mb-4">
                The booking system is ready! To enable payments, please configure your Paystack API keys.
              </p>
              <div className="bg-white rounded-lg p-4 text-left">
                <h5 className="font-medium text-blue-900 mb-2">To complete setup:</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Add your Paystack public key to environment variables</li>
                  <li>• Configure Supabase database connection</li>
                  <li>• Set up Resend API for email confirmations</li>
                  <li>• Test the complete booking flow</li>
                </ul>
              </div>
              <p className="text-sm text-blue-600 mt-4">
                Contact: info@smartbesttechnology.com for setup assistance
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Payment Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="font-medium text-gray-900 mb-2">Payment Information</h5>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Your payment is processed securely by Paystack</li>
          <li>• You'll receive an email confirmation after successful payment</li>
          <li>• Refunds are available for cancellations made 24+ hours in advance</li>
          <li>• For payment issues, contact our support team</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentProcessing;
