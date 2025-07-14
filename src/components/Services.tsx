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
  Smartphone,
  Code,
  Send,
  TrendingUp,
  Globe,
  ShoppingCart,
  Settings,
  Clock
} from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Business Automation',
      description: 'Complete AI automation solutions that handle customer support, sales, and operations 24/7.',
      features: ['AI Chat Agents', 'Voice AI Assistants', 'CRM Automation', 'Smart Scheduling'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Web Apps',
      description: 'Custom mobile and web applications built with modern technologies and scalable architecture.',
      features: ['iOS & Android Apps', 'React Native & Flutter', 'Web Applications', 'API Integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Send,
      title: 'Telegram Bots & Shops',
      description: 'Advanced Telegram bots and shop setups for customer service, sales, and digital products.',
      features: ['Custom Telegram Bots', 'Telegram Shop Setup', 'AI Integration', 'Payment Systems'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation & Sales',
      description: 'Comprehensive lead generation and sales growth systems with AI-driven outreach.',
      features: ['B2B/B2C Leads', 'Lead Magnets', 'AI Outreach', 'Sales Pipelines'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Chat Agents',
      description: 'Intelligent chat agents providing 24/7 support on websites, WhatsApp, Telegram, and mobile apps.',
      features: ['24/7 Customer Support', 'Multi-Platform Support', 'Lead Qualification', 'Human-like Conversations'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Mic,
      title: 'Voice AI Assistants',
      description: 'Voice AI that answers calls, books appointments, and speaks naturally like a human agent.',
      features: ['Call Handling', 'Appointment Booking', 'Natural Speech', 'Voice Recognition'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Database,
      title: 'AI CRM Automation',
      description: 'Automated CRM systems that follow up on leads, close deals, and improve conversion rates.',
      features: ['Lead Follow-up', 'Deal Closure', 'Objection Handling', 'Conversion Optimization'],
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling AI',
      description: 'Intelligent scheduling system for auto-bookings, calendar sync, and payment reminders.',
      features: ['Auto-booking', 'Calendar Sync', 'Payment Reminders', 'Email Responses'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Sales Assistant AI',
      description: 'AI sales assistants that qualify leads, answer questions, and book meetings automatically.',
      features: ['Lead Qualification', 'Question Handling', 'Meeting Booking', 'Sales Support'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI Business Automation solutions designed to scale your operations, increase efficiency, and drive revenue growth.
            </p>
          </div>
        </FadeInUp>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/booking"
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  <span>Book a Strategic Call</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>


      </div>
    </section>
  );
};

export default Services;