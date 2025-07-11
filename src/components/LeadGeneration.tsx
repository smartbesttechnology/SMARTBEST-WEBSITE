import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Mail, 
  MessageCircle, 
  BarChart3,
  Funnel,
  Search,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Globe,
  Database,
  Send,
  DollarSign,
  Eye,
  Filter
} from 'lucide-react';

const LeadGeneration = () => {
  const leadServices = [
    {
      icon: Target,
      title: 'Clean & Validated Leads',
      description: 'High-quality, targeted B2B and B2C leads that are verified, validated, and ready for outreach.',
      features: [
        'B2B decision-maker leads',
        'B2C consumer targeting',
        'Email and phone verification',
        'Industry-specific filtering',
        'Geographic targeting',
        'Real-time lead validation'
      ],
      benefits: ['95% accuracy rate', 'Industry-specific targeting', 'GDPR compliant'],
      setupTime: '1-2 days',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Funnel,
      title: 'Lead Magnets & Landing Pages',
      description: 'Custom lead magnets and high-converting landing pages designed to capture and qualify prospects.',
      features: [
        'Custom lead magnet creation',
        'High-converting landing pages',
        'A/B testing and optimization',
        'Mobile-responsive design',
        'Analytics and tracking setup',
        'CRM integration'
      ],
      benefits: ['40% higher conversion rates', 'Professional design', 'Mobile optimized'],
      setupTime: '3-5 days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'AI-Driven Outreach',
      description: 'Automated outreach campaigns via email, WhatsApp, and Telegram with AI-powered personalization.',
      features: [
        'AI-powered email sequences',
        'WhatsApp automation',
        'Telegram outreach campaigns',
        'Personalized messaging',
        'Follow-up automation',
        'Response tracking and analytics'
      ],
      benefits: ['3x higher response rates', 'Automated follow-ups', 'Multi-channel reach'],
      setupTime: '2-4 days',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Sales Pipeline Setup',
      description: 'Automated sales pipelines with CRM dashboards and funnel tracking for maximum conversion.',
      features: [
        'Custom sales pipeline design',
        'CRM dashboard setup',
        'Funnel tracking and analytics',
        'Lead scoring automation',
        'Deal progression tracking',
        'Performance reporting'
      ],
      benefits: ['50% faster deal closure', 'Clear visibility', 'Automated workflows'],
      setupTime: '4-6 days',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'ROI-Focused Campaigns',
      description: 'Results-driven marketing campaigns designed for businesses that want qualified traffic and high ROI.',
      features: [
        'ROI-focused strategy development',
        'Multi-channel campaign management',
        'Conversion optimization',
        'Performance tracking and reporting',
        'Budget optimization',
        'Continuous improvement'
      ],
      benefits: ['300% average ROI', 'Qualified traffic', 'Measurable results'],
      setupTime: '5-7 days',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Database,
      title: 'CRM & Analytics Setup',
      description: 'Complete CRM setup with advanced analytics, reporting, and automation for lead management.',
      features: [
        'CRM system configuration',
        'Advanced analytics setup',
        'Custom reporting dashboards',
        'Lead management automation',
        'Integration with marketing tools',
        'Performance monitoring'
      ],
      benefits: ['Complete visibility', 'Automated processes', 'Data-driven decisions'],
      setupTime: '3-5 days',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const campaignTypes = [
    {
      type: 'B2B Lead Generation',
      icon: '🏢',
      description: 'Target decision-makers and businesses',
      features: ['LinkedIn outreach', 'Email campaigns', 'Cold calling support', 'Account-based marketing']
    },
    {
      type: 'B2C Customer Acquisition',
      icon: '👥',
      description: 'Reach individual consumers effectively',
      features: ['Social media ads', 'Email marketing', 'SMS campaigns', 'Influencer partnerships']
    },
    {
      type: 'E-commerce Growth',
      icon: '🛒',
      description: 'Drive sales and customer retention',
      features: ['Product promotion', 'Cart abandonment', 'Upselling campaigns', 'Customer reviews']
    },
    {
      type: 'Service-Based Business',
      icon: '⚙️',
      description: 'Generate qualified service inquiries',
      features: ['Consultation booking', 'Service promotion', 'Client testimonials', 'Referral programs']
    }
  ];

  const results = [
    { metric: '300%', label: 'Average ROI Increase', icon: TrendingUp },
    { metric: '95%', label: 'Lead Accuracy Rate', icon: Target },
    { metric: '40%', label: 'Higher Conversion', icon: Funnel },
    { metric: '3x', label: 'Response Rate Boost', icon: MessageCircle }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Strategy Development',
      description: 'Analyze your business and create a custom lead generation strategy',
      icon: Search
    },
    {
      step: '2',
      title: 'Campaign Setup',
      description: 'Build lead magnets, landing pages, and outreach campaigns',
      icon: Settings
    },
    {
      step: '3',
      title: 'Launch & Optimize',
      description: 'Deploy campaigns and continuously optimize for better results',
      icon: Zap
    },
    {
      step: '4',
      title: 'Track & Scale',
      description: 'Monitor performance and scale successful campaigns',
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>Lead Generation & Sales Growth</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Drive <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Qualified Traffic</span> & High ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Results-focused lead generation and sales growth systems with clean, validated leads, AI-driven outreach, and automated sales pipelines for maximum ROI.
          </p>
        </div>

        {/* Lead Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leadServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
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

                {/* Benefits */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results for Our Clients
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our lead generation and sales growth systems deliver measurable results that drive business growth and ROI.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6 mb-4">
                    <IconComponent className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{result.metric}</div>
                    <div className="text-sm text-gray-600">{result.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Campaign Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {campaignTypes.map((campaign, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{campaign.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-2">{campaign.type}</h4>
              <p className="text-sm text-gray-600 mb-4">{campaign.description}</p>
              <ul className="space-y-1">
                {campaign.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs text-gray-500">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to lead generation and sales growth that delivers consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl p-6 mb-4 shadow-md">
                    <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <IconComponent className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Generate More Qualified Leads?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Get clean, validated leads and automated sales systems that drive real business growth. Setup typically takes 3-7 days depending on complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2348121096818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>WhatsApp +234 812 109 6818</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 text-green-100 text-sm">
              smartbesttechnology.com | info@smartbesttechnology.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;
