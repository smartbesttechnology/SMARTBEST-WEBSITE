import React from 'react';
import { Check, Clock, Star } from 'lucide-react';
import { BOOKING_PLANS } from '../../config/booking';

interface PlanSelectionProps {
  selectedPlanId?: string;
  onPlanSelect: (planId: string) => void;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({ selectedPlanId, onPlanSelect }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Consultation Package</h3>
        <p className="text-gray-600">Select the consultation duration that best fits your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOOKING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedPlanId === plan.id
                ? 'border-blue-500 shadow-lg ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-blue-300'
            } ${plan.popular ? 'ring-2 ring-purple-200' : ''}`}
            onClick={() => onPlanSelect(plan.id)}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star className="h-3 w-3" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}

            {/* Selection Indicator */}
            {selectedPlanId === plan.id && (
              <div className="absolute top-4 right-4">
                <div className="bg-blue-500 text-white rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
              </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{plan.duration} minutes</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                <span className="text-lg text-gray-500">$</span>
                {plan.price}
              </div>
            </div>

            {/* Plan Description */}
            <p className="text-gray-600 text-center mb-6">{plan.description}</p>

            {/* Features List */}
            <div className="space-y-3">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* Select Button */}
            <div className="mt-6">
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  selectedPlanId === plan.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {selectedPlanId === plan.id ? 'Selected' : 'Select Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="bg-blue-50 rounded-lg p-4 mt-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="bg-blue-100 rounded-full p-2">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 mb-1">Flexible Scheduling</h4>
            <p className="text-blue-700 text-sm">
              All consultations can be scheduled during business hours (9 AM - 5 PM UTC) Monday through Friday. 
              We'll send you a confirmation email with meeting details after payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
