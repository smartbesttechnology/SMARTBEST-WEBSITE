import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Zap,
  MessageCircle,
  Github,
  Twitter,
  Instagram
} from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from './animations';
import { useGeolocation } from '../hooks/useGeolocation';

const Contact = () => {
  const { contactInfo, isLoading, country } = useGeolocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const services = [
    'AI Chatbots',
    'Voice AI',
    'CRM Integration',
    'AI Assistants',
    'Multi-Platform Integration',
    'Lead Nurturing',
    'Custom AI Solutions',
    'Other'
  ];

  if (isLoading) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading contact information...</p>
          </div>
        </div>
      </section>
    );
  }

  const contactInfoItems = [
    {
      icon: Mail,
      title: 'Email Us',
      details: contactInfo.email,
      subDetails: 'We reply within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: contactInfo.phone,
      subDetails: contactInfo.businessHours
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: contactInfo.address,
      subDetails: contactInfo.city
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: contactInfo.businessHours,
      subDetails: contactInfo.timezone
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let AI work while you sleep. <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Book a free consultation today.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to automate and scale your business with AI? Let's discuss how our AI Business Automation solutions can transform your operations and drive growth.
            </p>
          {country && (
            <div className="mt-4 inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="h-4 w-4 mr-2" />
              Showing contact details for {country}
            </div>
          )}
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <FadeInUp delay={0.3}>
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfoItems.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-blue-100">{info.details}</p>
                        <p className="text-blue-200 text-sm">{info.subDetails}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-4 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/smartbesttechnology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-200 transform hover:scale-110"
                    aria-label="Follow us on GitHub"
                    title="Follow us on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/smartbesttech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-200 transform hover:scale-110"
                    aria-label="Follow us on X (Twitter)"
                    title="Follow us on X (Twitter)"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/smartbesttech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-200 transform hover:scale-110"
                    aria-label="Follow us on Instagram"
                    title="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-4">Why Choose Smartbest AI?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-blue-100 text-sm">Free AI consultation & ROI calculation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-blue-100 text-sm">24/7 AI support & monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-blue-100 text-sm">Fully-managed setup & training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-blue-100 text-sm">Human-like AI interactions</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.5}>
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Quick Contact Options */}
        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          <StaggerItem className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow border border-gray-100 dark:border-gray-600">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-flex mb-4">
              <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Demo</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">See our AI solutions in action</p>
            <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              Request Demo
            </button>
          </StaggerItem>

          <StaggerItem className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow border border-gray-100 dark:border-gray-600">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full inline-flex mb-4">
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Consultation</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Book a free AI strategy session</p>
            <button className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
              Book Now
            </button>
          </StaggerItem>

          <StaggerItem className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow border border-gray-100 dark:border-gray-600">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full inline-flex mb-4">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">ROI Calculator</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Calculate your AI automation ROI</p>
            <button className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors">
              Calculate ROI
            </button>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Contact;