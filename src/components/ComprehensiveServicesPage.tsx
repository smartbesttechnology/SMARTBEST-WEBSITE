import React from 'react';
import { 
  Brain, 
  Smartphone, 
  Send, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  MessageCircle,
  Mic,
  Database,
  Calendar,
  Users,
  Code,
  Globe,
  Target,
  Zap
} from 'lucide-react';

const ComprehensiveServicesPage = () => {
  const allServices = [
    {
      category: 'AI Business Automation Solutions',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      services: [
        {
          icon: MessageCircle,
          title: 'AI Chat Agents',
          description: '24/7 customer support on websites, WhatsApp, Telegram, and mobile apps',
          features: ['Multi-platform support', 'Human-like conversations', 'Lead qualification', 'CRM integration'],
          setupTime: '3-5 days',
          pricing: 'Starting at $299/month'
        },
        {
          icon: Mic,
          title: 'Voice AI Assistants',
          description: 'Answer calls, book appointments, and speak naturally like a human agent',
          features: ['Natural speech processing', 'Appointment booking', 'Call screening', 'Voice recognition'],
          setupTime: '5-7 days',
          pricing: 'Starting at $499/month'
        },
        {
          icon: Database,
          title: 'AI CRM Automations',
          description: 'Follow up on leads, close deals, handle objections, improve conversion rates',
          features: ['Automated follow-ups', 'Deal closure', 'Objection handling', 'Conversion optimization'],
          setupTime: '4-6 days',
          pricing: 'Starting at $399/month'
        },
        {
          icon: Calendar,
          title: 'Smart Scheduling AI',
          description: 'Auto-bookings, calendar sync, payment reminders, email responses',
          features: ['Auto-booking', 'Calendar sync', 'Payment reminders', 'Email automation'],
          setupTime: '3-4 days',
          pricing: 'Starting at $199/month'
        }
      ]
    },
    {
      category: 'Mobile & Web App Development',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      services: [
        {
          icon: Smartphone,
          title: 'Custom Mobile Apps',
          description: 'Native Android and iOS applications with modern technologies',
          features: ['Native development', 'App Store optimization', 'Push notifications', 'Offline functionality'],
          setupTime: '4-8 weeks',
          pricing: 'Starting at $2,999'
        },
        {
          icon: Code,
          title: 'Cross-Platform Development',
          description: 'Flutter (Dart) and React Native for maximum efficiency',
          features: ['Single codebase', 'Native performance', 'Rapid development', 'Cost-effective'],
          setupTime: '3-6 weeks',
          pricing: 'Starting at $2,499'
        },
        {
          icon: Globe,
          title: 'Web Applications',
          description: 'Modern web apps using Node.js, React.js, Supabase, Firebase, Next.js',
          features: ['React.js & Next.js', 'Node.js backend', 'Progressive Web Apps', 'SEO optimization'],
          setupTime: '2-5 weeks',
          pricing: 'Starting at $1,999'
        },
        {
          icon: Database,
          title: 'API Integration',
          description: 'Payment gateways, admin dashboards, third-party integrations',
          features: ['Payment gateways', 'Admin dashboards', 'Third-party APIs', 'Custom integrations'],
          setupTime: '1-3 weeks',
          pricing: 'Starting at $999'
        }
      ]
    },
    {
      category: 'Telegram Bots & Telegram Shops',
      icon: Send,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      services: [
        {
          icon: Send,
          title: 'Custom Telegram Bots',
          description: 'Customer service, notifications, onboarding, and sales automation',
          features: ['Customer service', 'Notifications', 'User onboarding', 'Interactive menus'],
          setupTime: '2-4 days',
          pricing: 'Starting at $199/month'
        },
        {
          icon: Users,
          title: 'Telegram Shop Setup',
          description: 'Digital product sales, subscriptions, order handling, auto-responders',
          features: ['Digital products', 'Subscription management', 'Order processing', 'Payment integration'],
          setupTime: '3-5 days',
          pricing: 'Starting at $299/month'
        },
        {
          icon: Brain,
          title: 'AI Integration',
          description: 'Google Sheets, CRMs, and payment systems integration',
          features: ['Google Sheets sync', 'CRM integration', 'Payment systems', 'Data automation'],
          setupTime: '2-4 days',
          pricing: 'Starting at $149/month'
        }
      ]
    },
    {
      category: 'Lead Generation & Sales Growth Systems',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      services: [
        {
          icon: Target,
          title: 'Clean & Validated Leads',
          description: 'Targeted B2B/B2C leads with 95% accuracy rate',
          features: ['B2B decision makers', 'B2C consumers', 'Email verification', 'Industry targeting'],
          setupTime: '1-2 days',
          pricing: 'Starting at $0.50/lead'
        },
        {
          icon: Globe,
          title: 'Lead Magnets & Landing Pages',
          description: 'Custom lead magnets with high-converting landing pages',
          features: ['Custom lead magnets', 'Landing pages', 'A/B testing', 'Mobile responsive'],
          setupTime: '3-5 days',
          pricing: 'Starting at $499'
        },
        {
          icon: MessageCircle,
          title: 'AI-Driven Outreach',
          description: 'Email, WhatsApp, Telegram automation with AI personalization',
          features: ['Email sequences', 'WhatsApp automation', 'Telegram campaigns', 'AI personalization'],
          setupTime: '2-4 days',
          pricing: 'Starting at $299/month'
        },
        {
          icon: Database,
          title: 'Sales Pipeline Setup',
          description: 'CRM dashboards, funnel tracking, automated workflows',
          features: ['CRM setup', 'Pipeline tracking', 'Funnel analytics', 'Automated workflows'],
          setupTime: '4-6 days',
          pricing: 'Starting at $399/month'
        }
      ]
    }
  ];

  const industryUseCases = [
    { industry: 'Influencers', icon: '🌟', description: 'Audience engagement, content distribution, monetization' },
    { industry: 'Traders', icon: '📈', description: 'Signal distribution, market analysis, educational content' },
    { industry: 'Studios', icon: '🎨', description: 'Client communication, project management, booking' },
    { industry: 'Coaches', icon: '🎯', description: 'Client onboarding, session booking, progress tracking' },
    { industry: 'Forex Educators', icon: '💰', description: 'Educational content, trading signals, community management' },
    { industry: 'Airdrop Platforms', icon: '🎮', description: 'User registration, task automation, reward distribution' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete <span className="text-yellow-300">Business Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              From AI Business Automation to Custom Apps, Telegram Solutions to Lead Generation - 
              everything you need to scale your business with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Explore All Services</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2348121096818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>WhatsApp +234 812 109 6818</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {allServices.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className="mb-20">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center space-x-2 ${category.bgColor} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                    <CategoryIcon className="h-4 w-4" />
                    <span>{category.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {category.category}
                  </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div
                        key={serviceIndex}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                      >
                        {/* Icon */}
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                          <ServiceIcon className="h-8 w-8 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Setup Time and Pricing */}
                        <div className="grid grid-cols-1 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium text-green-700">Setup: {service.setupTime}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium text-blue-700">{service.pricing}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex space-x-3">
                          <a
                            href="#contact"
                            className="flex-1 inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-sm"
                          >
                            <span>Get Started</span>
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perfect for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Every Industry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are tailored for various industries and business models, delivering targeted functionality for specific needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industryUseCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{useCase.industry}</h4>
                <p className="text-xs text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get more clients, automate operations, and reduce stress with our comprehensive technology solutions. 
            Setup typically takes 3-5 days depending on your package.
          </p>
          <div className="flex justify-center">
            <a
              href="#services"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-6 text-blue-100">
            smartbesttechnology.com | info@smartbesttechnology.com
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesPage;
