import React from 'react';
import { 
  Users, 
  Settings, 
  Clock, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ValueProposition = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Human-like Interaction Quality',
      description: 'Our AI systems communicate naturally, understanding context and emotions to provide authentic customer experiences.',
      features: ['Natural conversation flow', 'Emotional intelligence', 'Context awareness', 'Personalized responses'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Settings,
      title: 'Complete Customization',
      description: 'Tailored AI solutions designed specifically for your business type, industry, and unique requirements.',
      features: ['Industry-specific training', 'Custom workflows', 'Brand voice matching', 'Flexible integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Significant Time Savings',
      description: 'Automate repetitive tasks and free up your team to focus on high-value activities that drive growth.',
      features: ['24/7 availability', 'Instant responses', 'Automated scheduling', 'Reduced manual work'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Improved Conversion Rates',
      description: 'AI-powered lead nurturing and follow-up systems that consistently convert prospects into customers.',
      features: ['Lead qualification', 'Timely follow-ups', 'Personalized outreach', 'Performance tracking'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Fully-Managed Setup',
      description: 'Complete implementation with comprehensive training and ongoing support to ensure success.',
      features: ['Professional setup', 'Team training', 'Ongoing support', 'Performance optimization'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Smartbest AI</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI Business Automation solutions deliver measurable results that transform how you operate and grow your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Measurable ROI from Day One
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our clients typically see immediate improvements in efficiency and customer satisfaction, 
                with significant cost savings and revenue increases within the first month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <span>Book a Strategic Call</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="https://wa.me/12602340752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <span>WhatsApp Us</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
                <div className="text-gray-300 text-sm">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">75%</div>
                <div className="text-gray-300 text-sm">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
