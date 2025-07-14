import React from 'react';
import { User, Mail, Phone, Building, Briefcase, MessageSquare } from 'lucide-react';

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  businessType?: string;
}

interface CustomerInfoFormProps {
  customerInfo?: CustomerInfo;
  onInfoUpdate: (info: CustomerInfo) => void;
  specialRequests?: string;
  onSpecialRequestsUpdate: (requests: string) => void;
}

const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({
  customerInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    businessType: ''
  },
  onInfoUpdate,
  specialRequests = '',
  onSpecialRequestsUpdate
}) => {
  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    onInfoUpdate({
      ...customerInfo,
      [field]: value
    });
  };

  const businessTypes = [
    'Technology/Software',
    'E-commerce/Retail',
    'Healthcare',
    'Finance/Banking',
    'Education',
    'Manufacturing',
    'Real Estate',
    'Marketing/Advertising',
    'Consulting',
    'Non-profit',
    'Other'
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Information</h3>
        <p className="text-gray-600">Tell us about yourself so we can prepare for your consultation</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="firstName"
                value={customerInfo.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="lastName"
                value={customerInfo.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={customerInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                value={customerInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="company"
                value={customerInfo.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Business Type */}
          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
              Business Type
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="businessType"
                value={customerInfo.businessType}
                onChange={(e) => handleInputChange('businessType', e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                <option value="">Select your business type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div className="mt-6">
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests or Topics to Discuss
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="specialRequests"
              value={specialRequests}
              onChange={(e) => onSpecialRequestsUpdate(e.target.value)}
              rows={4}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us about your specific needs, challenges, or topics you'd like to discuss during the consultation..."
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            This helps us prepare and make the most of your consultation time.
          </p>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h5 className="font-medium text-blue-900 mb-2">Privacy & Data Protection</h5>
        <p className="text-sm text-blue-800">
          Your information is secure and will only be used to provide your consultation service. 
          We follow strict privacy policies and will never share your data with third parties without your consent.
        </p>
      </div>

      {/* Preparation Tips */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="font-medium text-gray-900 mb-2">Consultation Preparation Tips</h5>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Have your current business challenges and goals ready to discuss</li>
          <li>• Prepare any specific questions about automation or technology</li>
          <li>• Consider your budget and timeline for potential projects</li>
          <li>• Be ready to share your current tools and processes</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerInfoForm;
