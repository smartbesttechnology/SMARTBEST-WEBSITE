import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Pioneering the future with </span>
              <span className="text-blue-600">Smart Technology</span>
              <span className="text-gray-900"> in our </span>
              <span className="text-teal-500">Digital Edge</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
              Get high quality Fintech, IT-solutions to help your business grow using technology as a driving force.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up delay-400">
              <a
                href="#contact"
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span>Get a free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative animate-fade-in-up delay-200">
            {/* Online Status Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Online</span>
            </div>

            {/* Years Experience Badge */}
            <div className="absolute bottom-4 right-4 z-20 bg-blue-600 text-white rounded-lg px-6 py-4 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">22+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.postimg.cc/0QLzJyH9/840018042.png"
                alt="Smart Best Technology Team"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Team Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Expert Team</div>
                  <div className="text-xs text-gray-600">Ready to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-50 to-purple-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">22+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-blue-600 transition-colors cursor-pointer">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;