import React from 'react';
import {
  Brain,
  Smartphone,
  Send,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Target,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceHighlights = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI Business Automation',
      description: 'Complete AI solutions that handle customer support, sales, and operations 24/7.',
      keyFeatures: ['AI Chat Agents', 'Voice AI Assistants', 'CRM Automation', 'Smart Scheduling'],
      setupTime: '3-5 days',
      benefit: 'More clients, less stress',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Web Apps',
      description: 'Custom applications built with modern technologies and scalable architecture.',
      keyFeatures: ['iOS & Android Apps', 'React Native & Flutter', 'Web Applications', 'API Integration'],
      setupTime: '2-8 weeks',
      benefit: 'Professional digital presence',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Send,
      title: 'Telegram Bots & Shops',
      description: 'Advanced Telegram solutions for customer service, sales, and digital products.',
      keyFeatures: ['Custom Telegram Bots', 'Shop Setup', 'AI Integration', 'Payment Systems'],
      setupTime: '2-6 days',
      benefit: 'Automated sales & support',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation & Sales',
      description: 'Results-driven campaigns with clean leads and automated sales pipelines.',
      keyFeatures: ['B2B/B2C Leads', 'Lead Magnets', 'AI Outreach', 'Sales Pipelines'],
      setupTime: '3-7 days',
      benefit: 'Qualified traffic & high ROI',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  const quickStats = [
    { icon: Target, value: '95%', label: 'Lead Accuracy', color: 'text-blue-600' },
    { icon: Zap, value: '3-5', label: 'Days Setup', color: 'text-green-600' },
    { icon: TrendingUp, value: '300%', label: 'ROI Increase', color: 'text-purple-600' },
    { icon: MessageCircle, value: '24/7', label: 'AI Support', color: 'text-orange-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Solutions</span> for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive AI automation, custom development, and digital solutions that drive real business results.
          </p>
        </div>

        {/* Service Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className={`${highlight.bgColor} rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
              >
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.color}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {highlight.keyFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Setup Time and Benefit */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-700">Setup: {highlight.setupTime}</span>
                  </div>
                  <div className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    {highlight.benefit}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  <Link
                    to="/booking"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-sm"
                  >
                    <span>Book a Strategic Call</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/2348121096818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-sm"
                  >
                    <span>WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Why Choose Smartbest Technologies?
            </h3>
            <p className="text-gray-600">
              Proven results with fast setup times and comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 rounded-xl p-4 mb-3">
                    <IconComponent className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get more clients, automate operations, and reduce stress with our comprehensive technology solutions. Setup typically takes 3-5 days depending on your package.
            </p>
            <div className="flex justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
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

export default ServiceHighlights;
