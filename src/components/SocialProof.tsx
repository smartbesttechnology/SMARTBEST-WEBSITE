import React from 'react';
import { 
  Star, 
  Quote,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO, Johnson Real Estate',
      company: 'Real Estate',
      content: 'Smartbest AI transformed our lead qualification process. We now capture and convert 3x more leads with their AI chatbot handling initial inquiries 24/7.',
      rating: 5,
      results: '300% increase in lead conversion',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      title: 'Operations Director',
      company: 'TechFlow Logistics',
      content: 'The voice AI system handles our customer calls perfectly. Our team can now focus on strategic work while AI manages routine inquiries and bookings.',
      rating: 5,
      results: '75% reduction in call handling time',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Founder',
      company: 'Bella Wellness Spa',
      content: 'Our appointment booking is now completely automated. Clients love the instant responses, and we\'ve eliminated double bookings entirely.',
      rating: 5,
      results: '90% reduction in booking errors',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Businesses Automated',
      description: 'Companies trust our AI solutions'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI Increase',
      description: 'Typical return on investment'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'AI Availability',
      description: 'Round-the-clock customer service'
    },
    {
      icon: CheckCircle,
      value: '95%',
      label: 'Customer Satisfaction',
      description: 'Client satisfaction rate'
    }
  ];

  const clientLogos = [
    {
      name: 'TechCorp',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iIzNCODJGNiIvPgo8dGV4dCB4PSI2MCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UZWNoQ29ycDwvdGV4dD4KPHN2Zz4K'
    },
    {
      name: 'InnovateLab',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iIzhCNUNGNiIvPgo8dGV4dCB4PSI2MCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Jbm5vdmF0ZUxhYjwvdGV4dD4KPHN2Zz4K'
    },
    {
      name: 'GrowthCo',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iIzEwQjk4MSIvPgo8dGV4dCB4PSI2MCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hcm93dGhDbzwvdGV4dD4KPHN2Zz4K'
    },
    {
      name: 'ScaleUp',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iI0Y1OUUwQiIvPgo8dGV4dCB4PSI2MCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TY2FsZVVwPC90ZXh0Pgo8c3ZnPgo='
    },
    {
      name: 'NextGen',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iI0VGNDQ0NCIvPgo8dGV4dCB4PSI2MCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5OZXh0R2VuPC90ZXh0Pgo8c3ZnPgo='
    },
    {
      name: 'FutureTech',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTIwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iIzYzNjZGMSIvPgo8dGV4dCB4PSI2MCIgeT0iMzUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GdXR1cmVUZWNoPC90ZXh0Pgo8c3ZnPgo='
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our AI Business Automation solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Results */}
              <div className="bg-green-50 rounded-lg p-3 mb-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-semibold text-sm">{testimonial.results}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-xs text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="group flex justify-center items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 hover:border-blue-200"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} - Trusted partner of SmartBest Technology`}
                  className="h-10 w-auto max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a simple text-based logo if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-logo')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-logo text-gray-600 font-semibold text-sm px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg';
                      fallback.textContent = client.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              See how our AI Business Automation solutions can transform your business operations and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Book a Strategic Call</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/12602340752"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>WhatsApp Us</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
