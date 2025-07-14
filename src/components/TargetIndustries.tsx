import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  Truck,
  GraduationCap,
  Sparkles,
  Mic,
  Briefcase,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const TargetIndustries = () => {
  const industries = [
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Automate lead qualification, property inquiries, and appointment scheduling for real estate professionals.',
      useCases: ['Lead qualification', 'Property inquiries', 'Appointment booking', 'Follow-up automation'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce',
      description: 'Enhance customer support, order tracking, and product recommendations with intelligent AI assistants.',
      useCases: ['Customer support', 'Order tracking', 'Product recommendations', 'Cart abandonment recovery'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description: 'Streamline booking, tracking, and customer communications for logistics and transportation companies.',
      useCases: ['Booking automation', 'Shipment tracking', 'Delivery updates', 'Customer notifications'],
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: GraduationCap,
      title: 'Education & EdTech',
      description: 'Support student inquiries, course enrollment, and administrative tasks with AI-powered assistance.',
      useCases: ['Student inquiries', 'Course enrollment', 'Assignment reminders', 'Administrative support'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Sparkles,
      title: 'Beauty & Wellness',
      description: 'Manage appointments, service inquiries, and customer care for beauty and wellness businesses.',
      useCases: ['Appointment booking', 'Service inquiries', 'Treatment reminders', 'Customer care'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Mic,
      title: 'Recording Studios & Media',
      description: 'Handle booking inquiries, session scheduling, and client communications for creative professionals.',
      useCases: ['Studio booking', 'Session scheduling', 'Equipment inquiries', 'Client management'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Automate client intake, consultation scheduling, and follow-ups for law firms, consultants, and agencies.',
      useCases: ['Client intake', 'Consultation booking', 'Document requests', 'Follow-up automation'],
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI Business Automation solutions are tailored to meet the unique needs of various industries, 
            helping businesses across sectors scale efficiently and improve customer satisfaction.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className={`group ${industry.bgColor} dark:bg-gray-700 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${industry.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Use Cases */}
                <ul className="space-y-2 mb-6">
                  {industry.useCases.map((useCase, useCaseIndex) => (
                    <li key={useCaseIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{useCase}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/booking"
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default TargetIndustries;
