import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, Mail, Phone, ArrowRight, Home } from 'lucide-react';

const BookingSuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Thank you for booking your consultation with SmartBest Technology. 
            We're excited to help you automate and scale your business with AI.
          </p>

          {/* Booking Details Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Your Consultation Details
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Date & Time</p>
                  <p className="text-gray-600">Details will be sent via email</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Confirmation Email</p>
                  <p className="text-gray-600">Check your inbox for meeting details</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Communication Method</p>
                  <p className="text-gray-600">Meeting link will be provided</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">What Happens Next?</h3>
            <div className="text-left space-y-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                <p className="text-blue-800">You'll receive a confirmation email with all the details</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                <p className="text-blue-800">We'll send you a meeting link 24 hours before your consultation</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                <p className="text-blue-800">Come prepared with questions about your business automation needs</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200"
            >
              <Home className="h-5 w-5" />
              <span>Back to Homepage</span>
            </Link>
            
            <a
              href="mailto:info@smartbesttechnology.com"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Support</span>
            </a>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Need to reschedule or have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:info@smartbesttechnology.com" className="text-blue-600 hover:text-blue-700">
                info@smartbesttechnology.com
              </a>
              <a href="tel:+2348121096818" className="text-blue-600 hover:text-blue-700">
                +234 812 109 6818
              </a>
              <a href="https://wa.me/2348121096818" className="text-blue-600 hover:text-blue-700">
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccessPage;
