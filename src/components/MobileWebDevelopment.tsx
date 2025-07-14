import React from 'react';
import { 
  Smartphone, 
  Code, 
  Globe, 
  Layers, 
  Database, 
  CreditCard,
  Settings,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Shield,
  Monitor,
  Tablet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileWebDevelopment = () => {
  const developmentServices = [
    {
      icon: Smartphone,
      title: 'Custom Mobile App Development',
      description: 'Native Android and iOS applications built with modern technologies and optimized performance.',
      features: [
        'Native Android development (Kotlin/Java)',
        'Native iOS development (Swift/Objective-C)',
        'App Store optimization and deployment',
        'Push notifications and real-time features',
        'Offline functionality and data sync',
        'Performance optimization and testing'
      ],
      technologies: ['Android Studio', 'Xcode', 'Kotlin', 'Swift', 'Firebase'],
      setupTime: '4-8 weeks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layers,
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with Flutter (Dart) and React Native for maximum efficiency.',
      features: [
        'Flutter development with Dart',
        'React Native with JavaScript/TypeScript',
        'Single codebase for multiple platforms',
        'Native performance and user experience',
        'Rapid development and deployment',
        'Cost-effective solution for startups'
      ],
      technologies: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'Expo'],
      setupTime: '3-6 weeks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Web App Development',
      description: 'Modern web applications using cutting-edge technologies and scalable architecture.',
      features: [
        'React.js and Next.js applications',
        'Node.js backend development',
        'Progressive Web Apps (PWA)',
        'Server-side rendering (SSR)',
        'Responsive design and mobile-first',
        'SEO optimization and performance'
      ],
      technologies: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      setupTime: '2-5 weeks',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Backend & Database Solutions',
      description: 'Robust backend systems with modern databases and cloud infrastructure.',
      features: [
        'Supabase and Firebase integration',
        'PostgreSQL and MongoDB databases',
        'RESTful and GraphQL APIs',
        'Real-time data synchronization',
        'Cloud storage and CDN setup',
        'Database optimization and scaling'
      ],
      technologies: ['Supabase', 'Firebase', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      setupTime: '1-3 weeks',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: CreditCard,
      title: 'API & Payment Integration',
      description: 'Seamless integration with third-party APIs, payment gateways, and external services.',
      features: [
        'Payment gateway integration (Stripe, PayPal)',
        'Social media API integration',
        'Google Maps and location services',
        'Email and SMS service integration',
        'Analytics and tracking setup',
        'Custom API development'
      ],
      technologies: ['Stripe', 'PayPal', 'Google APIs', 'Twilio', 'SendGrid'],
      setupTime: '1-2 weeks',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Settings,
      title: 'Admin Dashboards',
      description: 'Comprehensive admin panels and dashboards for content management and analytics.',
      features: [
        'User management and authentication',
        'Content management systems',
        'Analytics and reporting dashboards',
        'Role-based access control',
        'Data visualization and charts',
        'Real-time monitoring and alerts'
      ],
      technologies: ['React Admin', 'Chart.js', 'D3.js', 'Material-UI', 'Ant Design'],
      setupTime: '2-4 weeks',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const techStack = [
    { category: 'Frontend', technologies: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS'] },
    { category: 'Mobile', technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Expo'] },
    { category: 'Backend', technologies: ['Node.js', 'Express.js', 'Nest.js', 'Python', 'PHP'] },
    { category: 'Database', technologies: ['Supabase', 'Firebase', 'PostgreSQL', 'MongoDB', 'MySQL'] },
    { category: 'Cloud', technologies: ['AWS', 'Google Cloud', 'Vercel', 'Netlify', 'Heroku'] },
    { category: 'Tools', technologies: ['Git', 'Docker', 'CI/CD', 'Testing', 'Analytics'] }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Rapid prototyping and development with modern frameworks and tools.'
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Built with security best practices and scalable architecture.'
    },
    {
      icon: Monitor,
      title: 'Modern UI/UX',
      description: 'Clean, intuitive interfaces with excellent user experience.'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Well-documented, maintainable code following industry standards.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="h-4 w-4" />
            <span>Mobile & Web App Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Custom <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Apps & Websites</span> Built for Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feature-rich applications built with clean code, modern UI/UX, and scalable architecture using the latest technologies and best practices.
          </p>
        </div>

        {/* Development Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {developmentServices.map((service, index) => {
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
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Setup Time */}
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-700">Timeline: {service.setupTime}</span>
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

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/booking"
                  className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  <span>Book a Strategic Call</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Modern Technology Stack
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies and frameworks to build robust, scalable, and maintainable applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((stack, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">{stack.category}</h4>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-purple-50 hover:text-purple-700 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-4">
                  <IconComponent className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Your App?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Get a custom mobile or web application built with modern technologies. Setup typically takes 2-8 weeks depending on complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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
            <div className="mt-4 text-purple-100 text-sm">
              smartbesttechnology.com | info@smartbesttechnology.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileWebDevelopment;
