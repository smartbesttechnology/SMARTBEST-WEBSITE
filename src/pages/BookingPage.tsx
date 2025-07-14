import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to SmartBest Technology</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Book Consultation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Book Your Consultation
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Choose from our consultation packages and get expert advice for your business automation needs.
          </p>

          {/* Simple pricing display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">$35</p>
              <p className="text-gray-600">15 minutes</p>
            </div>
            <div className="border rounded-lg p-6 text-center bg-blue-50 border-blue-200">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">$70</p>
              <p className="text-gray-600">30 minutes</p>
              <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mt-2">Most Popular</span>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">$120</p>
              <p className="text-gray-600">1 hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
