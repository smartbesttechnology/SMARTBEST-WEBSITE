import React from 'react';
import { 
  Send, 
  Bot, 
  ShoppingCart, 
  MessageCircle, 
  Bell, 
  Users,
  CreditCard,
  Settings,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Target,
  Database,
  Globe,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TelegramSolutions = () => {
  const telegramServices = [
    {
      icon: Bot,
      title: 'Custom Telegram Bots',
      description: 'Advanced Telegram bots for customer service, notifications, onboarding, and automated interactions.',
      features: [
        'Customer service automation',
        'User onboarding and welcome flows',
        'Notification and alert systems',
        'Interactive menu and commands',
        'Multi-language support',
        'Analytics and user tracking'
      ],
      useCases: ['Customer support', 'Lead generation', 'Content delivery', 'Community management'],
      setupTime: '2-4 days',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingCart,
      title: 'Telegram Shop Setup',
      description: 'Complete Telegram shop solutions for digital product sales, subscriptions, and order handling.',
      features: [
        'Digital product catalog',
        'Automated order processing',
        'Subscription management',
        'Payment gateway integration',
        'Inventory tracking',
        'Customer support integration'
      ],
      useCases: ['Digital products', 'Course sales', 'Subscription services', 'E-commerce'],
      setupTime: '3-5 days',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: 'AI-Powered Telegram Bots',
      description: 'Intelligent Telegram bots with AI integration for natural conversations and smart responses.',
      features: [
        'Natural language processing',
        'Context-aware conversations',
        'Intelligent query handling',
        'Automated decision making',
        'Learning and adaptation',
        'Seamless human handoff'
      ],
      useCases: ['Sales automation', 'Customer inquiries', 'Lead qualification', 'Support tickets'],
      setupTime: '4-6 days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CreditCard,
      title: 'Payment & Subscription Systems',
      description: 'Integrated payment processing and subscription management for Telegram-based businesses.',
      features: [
        'Multiple payment gateways',
        'Recurring subscription billing',
        'Invoice generation',
        'Payment confirmation automation',
        'Refund and dispute handling',
        'Financial reporting'
      ],
      useCases: ['Subscription services', 'Course payments', 'Product sales', 'Membership fees'],
      setupTime: '2-3 days',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'CRM & Data Integration',
      description: 'Seamless integration with Google Sheets, CRMs, and external databases for data management.',
      features: [
        'Google Sheets integration',
        'CRM system connectivity',
        'Real-time data synchronization',
        'Automated data entry',
        'Custom database connections',
        'Data export and reporting'
      ],
      useCases: ['Lead management', 'Customer data', 'Sales tracking', 'Analytics'],
      setupTime: '2-4 days',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Bell,
      title: 'Notification & Broadcasting',
      description: 'Advanced notification systems and broadcasting capabilities for audience engagement.',
      features: [
        'Scheduled message broadcasting',
        'Targeted audience segmentation',
        'Event-triggered notifications',
        'Rich media support',
        'Delivery tracking and analytics',
        'A/B testing for messages'
      ],
      useCases: ['Marketing campaigns', 'Event notifications', 'Product updates', 'Community engagement'],
      setupTime: '1-3 days',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const useCaseCategories = [
    {
      category: 'Influencers & Content Creators',
      icon: '🌟',
      applications: [
        'Audience engagement and community building',
        'Content distribution and notifications',
        'Monetization through subscriptions',
        'Fan interaction and Q&A sessions'
      ]
    },
    {
      category: 'Traders & Financial Educators',
      icon: '📈',
      applications: [
        'Trading signal distribution',
        'Market analysis and alerts',
        'Educational content delivery',
        'Subscription-based premium signals'
      ]
    },
    {
      category: 'Studios & Creative Agencies',
      icon: '🎨',
      applications: [
        'Client communication and updates',
        'Project management and tracking',
        'Portfolio showcase and booking',
        'Service inquiry handling'
      ]
    },
    {
      category: 'Coaches & Consultants',
      icon: '🎯',
      applications: [
        'Client onboarding and support',
        'Session booking and reminders',
        'Resource sharing and delivery',
        'Progress tracking and feedback'
      ]
    },
    {
      category: 'Forex & Crypto Educators',
      icon: '💰',
      applications: [
        'Educational content distribution',
        'Trading signal automation',
        'Community management',
        'Subscription and payment handling'
      ]
    },
    {
      category: 'Airdrop & Gaming Platforms',
      icon: '🎮',
      applications: [
        'User registration and verification',
        'Task automation and tracking',
        'Reward distribution systems',
        'Community engagement tools'
      ]
    }
  ];

  const integrationFeatures = [
    { icon: Zap, title: 'AI Integration', description: 'Smart responses and automation' },
    { icon: Database, title: 'Google Sheets', description: 'Real-time data synchronization' },
    { icon: Globe, title: 'CRM Systems', description: 'Seamless customer management' },
    { icon: CreditCard, title: 'Payment Gateways', description: 'Secure transaction processing' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Send className="h-4 w-4" />
            <span>Telegram Bots & Shops</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Advanced <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Telegram Solutions</span> for Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom Telegram bots and shop setups with AI integration, payment systems, and CRM connectivity. Perfect for influencers, traders, studios, coaches, and digital businesses.
          </p>
        </div>

        {/* Telegram Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {telegramServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Setup Time */}
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-700">Setup: {service.setupTime}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span
                        key={useCaseIndex}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Use Cases by Industry */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Telegram solutions are tailored for various industries and business models, delivering targeted functionality for specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCaseCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-4 text-center">{category.category}</h4>
                <ul className="space-y-2">
                  {category.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {integrationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Launch Your Telegram Solution?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a custom Telegram bot or shop setup with AI integration and payment systems. Setup typically takes 2-6 days depending on complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Book a Strategic Call</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/2348121096818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>WhatsApp +234 812 109 6818</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 text-blue-100 text-sm">
              smartbesttechnology.com | info@smartbesttechnology.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramSolutions;
