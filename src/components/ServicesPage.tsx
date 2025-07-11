import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  Users, 
  Calendar, 
  Zap, 
  Target,
  Brain,
  ArrowRight,
  CheckCircle,
  Bot,
  Mic,
  Database,
  Star,
  DollarSign
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots that provide 24/7 customer support and engagement with human-like conversations.',
      detailedDescription: 'Our AI chatbots are trained to understand context, emotions, and intent, providing personalized responses that feel natural and helpful. They can handle complex inquiries, qualify leads, and seamlessly transfer to human agents when needed.',
      features: [
        '24/7 Customer Support',
        'Lead Qualification & Scoring',
        'Multi-language Support',
        'WhatsApp & Website Integration',
        'CRM Integration',
        'Sentiment Analysis',
        'Automated Follow-ups',
        'Performance Analytics'
      ],
      useCases: [
        'Customer service automation',
        'Lead generation and qualification',
        'Appointment booking',
        'Product recommendations',
        'Order status inquiries',
        'FAQ handling'
      ],
      pricing: 'Starting at $299/month',
      roi: '300% average ROI increase',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mic,
      title: 'Voice AI',
      description: 'Advanced voice AI for call handling and appointment booking with natural conversation flow.',
      detailedDescription: 'Our Voice AI systems handle phone calls with human-like conversation abilities, managing appointments, screening calls, and providing information with natural speech patterns and emotional intelligence.',
      features: [
        'Natural Speech Processing',
        'Appointment Booking & Management',
        'Call Screening & Routing',
        'Voice Recognition & Authentication',
        'Multi-accent Support',
        'Real-time Transcription',
        'Integration with Calendar Systems',
        'Call Analytics & Reporting'
      ],
      useCases: [
        'Appointment scheduling',
        'Call screening and routing',
        'Customer service calls',
        'Order taking',
        'Information requests',
        'Survey collection'
      ],
      pricing: 'Starting at $499/month',
      roi: '250% reduction in call handling costs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Automated follow-up systems integrated with your CRM for seamless deal closure.',
      detailedDescription: 'Seamlessly integrate AI automation with your existing CRM system to create intelligent workflows that nurture leads, track interactions, and optimize your sales pipeline for maximum conversion.',
      features: [
        'Automated Lead Nurturing',
        'Intelligent Lead Scoring',
        'Pipeline Management',
        'Deal Tracking & Forecasting',
        'Automated Email Sequences',
        'Task Automation',
        'Custom Workflow Creation',
        'Advanced Analytics & Reporting'
      ],
      useCases: [
        'Lead nurturing campaigns',
        'Sales pipeline optimization',
        'Customer onboarding',
        'Retention campaigns',
        'Upselling and cross-selling',
        'Customer lifecycle management'
      ],
      pricing: 'Starting at $399/month',
      roi: '400% improvement in conversion rates',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Business Automation <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive AI solutions designed to automate your business operations, 
              increase efficiency, and drive revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/12602340752"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>WhatsApp Us</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed overview of our AI Business Automation services with pricing, features, and ROI information.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:flex`}
                >
                  {/* Content */}
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.detailedDescription}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & ROI */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <DollarSign className="h-5 w-5 text-blue-600" />
                          <span className="font-semibold text-gray-900">Pricing</span>
                        </div>
                        <p className="text-blue-700 font-bold">{service.pricing}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-gray-900">Expected ROI</span>
                        </div>
                        <p className="text-green-700 font-bold">{service.roi}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="h-5 w-5" />
                      </a>
                      <a
                        href="https://wa.me/12602340752"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                      >
                        <span>WhatsApp Us</span>
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="lg:w-1/3 bg-gray-50 p-8 lg:p-12">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Use Cases</h4>
                    <ul className="space-y-4">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-start space-x-3">
                          <div className="bg-blue-100 rounded-full p-1 mt-1">
                            <CheckCircle className="h-3 w-3 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
