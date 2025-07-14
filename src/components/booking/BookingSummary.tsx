import React from 'react';
import { Calendar, Clock, Phone, User, Mail, Building, DollarSign } from 'lucide-react';
import { BookingFormData } from '../../types/booking';
import { BOOKING_PLANS, COMMUNICATION_METHODS } from '../../config/booking';

interface BookingSummaryProps {
  formData: BookingFormData;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ formData }) => {
  const selectedPlan = BOOKING_PLANS.find(plan => plan.id === formData.planId);
  const selectedMethod = COMMUNICATION_METHODS.find(method => method.id === formData.communicationMethod);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  if (!selectedPlan) return null;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Summary</h3>
        <p className="text-gray-600">Please review your consultation details before payment</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white">
          <h4 className="text-lg font-semibold">{selectedPlan.name}</h4>
          <p className="text-blue-100">{selectedPlan.description}</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Consultation Details */}
          <div>
            <h5 className="font-medium text-gray-900 mb-4">Consultation Details</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium text-gray-900">
                    {formData.preferredDate ? formatDate(formData.preferredDate) : 'Not selected'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time & Duration</p>
                  <p className="font-medium text-gray-900">
                    {formData.preferredTime ? formatTime(formData.preferredTime) : 'Not selected'} 
                    ({selectedPlan.duration} minutes)
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Communication Method</p>
                  <p className="font-medium text-gray-900">
                    {selectedMethod?.name || 'Not selected'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium text-gray-900 text-lg">
                    ${selectedPlan.price}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="border-t pt-6">
            <h5 className="font-medium text-gray-900 mb-4">Your Information</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium text-gray-900">
                    {formData.customerInfo?.firstName} {formData.customerInfo?.lastName}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">
                    {formData.customerInfo?.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">
                    {formData.customerInfo?.phone}
                  </p>
                </div>
              </div>

              {formData.customerInfo?.company && (
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Building className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <p className="font-medium text-gray-900">
                      {formData.customerInfo.company}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Special Requests */}
          {formData.specialRequests && (
            <div className="border-t pt-6">
              <h5 className="font-medium text-gray-900 mb-2">Special Requests</h5>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">{formData.specialRequests}</p>
              </div>
            </div>
          )}

          {/* What's Included */}
          <div className="border-t pt-6">
            <h5 className="font-medium text-gray-900 mb-4">What's Included</h5>
            <div className="space-y-2">
              {selectedPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900">${selectedPlan.price}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Payment Method</p>
              <p className="font-medium text-gray-900">Secure Card Payment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-yellow-50 rounded-lg p-4">
        <h5 className="font-medium text-yellow-900 mb-2">Important Notes</h5>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Payment is required to confirm your booking</li>
          <li>• You'll receive a confirmation email with meeting details after payment</li>
          <li>• Cancellations must be made at least 24 hours in advance for a full refund</li>
          <li>• Rescheduling is available up to 2 hours before your appointment</li>
        </ul>
      </div>
    </div>
  );
};

export default BookingSummary;
