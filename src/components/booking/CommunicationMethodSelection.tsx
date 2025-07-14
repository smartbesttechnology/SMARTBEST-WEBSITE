import React from 'react';
import { Check, MessageCircle, Video, Phone } from 'lucide-react';
import { COMMUNICATION_METHODS } from '../../config/booking';

interface CommunicationMethodSelectionProps {
  selectedMethod?: string;
  onMethodSelect: (method: 'whatsapp' | 'zoom' | 'google-meet') => void;
}

const CommunicationMethodSelection: React.FC<CommunicationMethodSelectionProps> = ({ 
  selectedMethod, 
  onMethodSelect 
}) => {
  const getMethodIcon = (methodId: string) => {
    switch (methodId) {
      case 'whatsapp':
        return <MessageCircle className="h-8 w-8" />;
      case 'zoom':
        return <Video className="h-8 w-8" />;
      case 'google-meet':
        return <Video className="h-8 w-8" />;
      default:
        return <Phone className="h-8 w-8" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Communication Method</h3>
        <p className="text-gray-600">Select how you'd like to connect for your consultation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COMMUNICATION_METHODS.map((method) => (
          <div
            key={method.id}
            className={`relative bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedMethod === method.id
                ? 'border-blue-500 shadow-lg ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-blue-300'
            } ${method.popular ? 'ring-2 ring-green-200' : ''}`}
            onClick={() => onMethodSelect(method.id as 'whatsapp' | 'zoom' | 'google-meet')}
          >
            {/* Popular Badge */}
            {method.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Recommended
                </div>
              </div>
            )}

            {/* Selection Indicator */}
            {selectedMethod === method.id && (
              <div className="absolute top-4 right-4">
                <div className="bg-blue-500 text-white rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
              </div>
            )}

            {/* Method Content */}
            <div className="text-center">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                selectedMethod === method.id
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {getMethodIcon(method.id)}
              </div>

              {/* Method Name */}
              <h4 className="text-lg font-bold text-gray-900 mb-2">{method.name}</h4>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>

              {/* Method-specific details */}
              <div className="text-xs text-gray-500 space-y-1">
                {method.id === 'whatsapp' && (
                  <>
                    <p>✓ Voice or video call</p>
                    <p>✓ Screen sharing available</p>
                    <p>✓ No app download required</p>
                  </>
                )}
                {method.id === 'zoom' && (
                  <>
                    <p>✓ HD video quality</p>
                    <p>✓ Screen sharing & recording</p>
                    <p>✓ Professional meeting room</p>
                  </>
                )}
                {method.id === 'google-meet' && (
                  <>
                    <p>✓ Browser-based meeting</p>
                    <p>✓ Google Calendar integration</p>
                    <p>✓ Easy access via link</p>
                  </>
                )}
              </div>
            </div>

            {/* Select Button */}
            <div className="mt-6">
              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  selectedMethod === method.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {selectedMethod === method.id ? 'Selected' : 'Select'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">What to Expect</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p className="mb-2">
              <strong>Before the call:</strong> You'll receive a confirmation email with meeting details and preparation tips.
            </p>
          </div>
          <div>
            <p>
              <strong>During the call:</strong> Our expert will discuss your needs, provide recommendations, and answer your questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationMethodSelection;
