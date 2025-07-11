import React from 'react';
import { 
  MessageCircle, 
  Mic, 
  Database, 
  Calendar, 
  Send, 
  Users,
  Brain,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Target,
  Phone,
  Globe
} from 'lucide-react';

const AIBusinessAutomation = () => {
  const aiServices = [
    {
      icon: MessageCircle,
      title: 'AI Chat Agents',
      description: 'Provide 24/7 customer support on websites, WhatsApp, Telegram, and mobile apps with human-like conversations.',
      features: [
        '24/7 customer support across all platforms',
        'Human-like conversation with context understanding',
        'Lead qualification and scoring',
        'Multi-language support',
        'Seamless handoff to human agents',
        'Integration with existing systems'
      ],
      setupTime: '3-5 days',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mic,
      title: 'Voice AI Assistants',
      description: 'Answer calls, book appointments, and speak naturally like a human agent with advanced voice technology.',
      features: [
        'Natural speech processing and generation',
        'Appointment booking and management',
        'Call screening and routing',
        'Voice authentication and recognition',
        'Real-time conversation analytics',
        'Integration with calendar systems'
      ],
      setupTime: '5-7 days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'AI CRM Automations',
      description: 'Follow up on leads, close deals, handle objections, and improve conversion rates automatically.',
      features: [
        'Automated lead follow-up sequences',
        'Intelligent objection handling',
        'Deal closure automation',
        'Conversion rate optimization',
        'Pipeline management and forecasting',
        'Custom workflow creation'
      ],
      setupTime: '4-6 days',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling AI',
      description: 'Auto-bookings, calendar sync, payment reminders, and email responses handled intelligently.',
      features: [
        'Automated appointment booking',
        'Real-time calendar synchronization',
        'Payment reminder automation',
        'Email response management',
        'Conflict resolution and rescheduling',
        'Multi-timezone support'
      ],
      setupTime: '3-4 days',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Send,
      title: 'WhatsApp & Telegram AI',
      description: 'Instant replies and inquiry closure on WhatsApp and Telegram with intelligent automation.',
      features: [
        'Instant message responses',
        'Inquiry qualification and closure',
        'Product catalog integration',
        'Order processing automation',
        'Customer support workflows',
        'Broadcast and campaign management'
      ],
      setupTime: '2-3 days',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Sales Assistant AI',
      description: 'Qualify leads, answer questions, and book meetings automatically with intelligent sales support.',
      features: [
        'Lead qualification and scoring',
        'Intelligent question answering',
        'Automated meeting booking',
        'Sales process optimization',
        'Customer journey tracking',
        'Performance analytics and reporting'
      ],
      setupTime: '4-5 days',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const industries = [
    { name: 'Real Estate', icon: '🏠', benefits: 'Lead qualification, property inquiries, appointment booking' },
    { name: 'E-commerce', icon: '🛒', benefits: 'Customer support, order tracking, product recommendations' },
    { name: 'EdTech', icon: '🎓', benefits: 'Student inquiries, course enrollment, assignment reminders' },
    { name: 'Media', icon: '📺', benefits: 'Content inquiries, booking management, audience engagement' },
    { name: 'Logistics', icon: '🚚', benefits: 'Shipment tracking, delivery updates, customer notifications' },
    { name: 'Law Firms', icon: '⚖️', benefits: 'Client intake, consultation booking, document requests' },
    { name: 'Wellness Studios', icon: '🧘', benefits: 'Appointment booking, service inquiries, treatment reminders' },
    { name: 'Financial Services', icon: '💰', benefits: 'Client onboarding, inquiry handling, appointment scheduling' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="h-4 w-4" />
            <span>AI Business Automation Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Automation</span> for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive AI solutions. Get more clients, automate processes, and reduce stress with intelligent automation that works 24/7.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service, index) => {
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

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Industries Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              AI Solutions by Industry
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI automation solutions are tailored for specific industries, delivering measurable results across various business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{industry.name}</h4>
                <p className="text-xs text-gray-600">{industry.benefits}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get more clients, reduce stress, and automate your operations with our AI solutions. Setup typically takes 3-5 days depending on your package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Request Demo</span>
                <ArrowRight className="h-5 w-5" />
              </a>
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

export default AIBusinessAutomation;
