import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Code, TrendingUp, MessageCircle, Shield } from 'lucide-react';
import { FadeInUp, ScaleIn } from './animations';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('automate');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroTabs = [
    {
      id: 'automate',
      label: 'Automate',
      icon: Bot,
      title: 'Automate & Scale Your Business with AI',
      subtitle: 'Let automation handle your operations 24/7',
      description: 'We build AI systems that think, speak, and close deals like a real human.',
      background: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      gradient: 'from-blue-600/20 to-purple-600/20'
    },
    {
      id: 'build',
      label: 'Build',
      icon: Code,
      title: 'Build Intelligent Solutions',
      subtitle: 'From idea to full product — fast',
      description: 'Transform your vision into powerful AI-driven applications and systems.',
      background: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      gradient: 'from-green-600/20 to-blue-600/20'
    },
    {
      id: 'scale',
      label: 'Scale',
      icon: TrendingUp,
      title: 'Scale Operations with Precision',
      subtitle: 'Scale operations with precision and power',
      description: 'Grow your business exponentially with AI-powered automation and insights.',
      background: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      gradient: 'from-purple-600/20 to-pink-600/20'
    },
    {
      id: 'engage',
      label: 'Engage',
      icon: MessageCircle,
      title: 'Engage Customers Intelligently',
      subtitle: 'AI that speaks to your customers like you would',
      description: 'Create meaningful connections with AI-powered customer engagement.',
      background: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      gradient: 'from-orange-600/20 to-red-600/20'
    },
    {
      id: 'secure',
      label: 'Secure',
      icon: Shield,
      title: 'Secure Your Digital Future',
      subtitle: 'Your business, protected with intelligent security',
      description: 'Advanced AI security systems that protect and monitor your operations.',
      background: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      gradient: 'from-red-600/20 to-orange-600/20'
    }
  ];

  const currentTab = heroTabs.find(tab => tab.id === activeTab) || heroTabs[0];

  // Function to render title with gradient AI
  const renderTitleWithGradientAI = (title: string) => {
    const parts = title.split(' AI');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            AI
          </span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden transition-colors duration-300">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentTab.background})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${currentTab.gradient}`} />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <FadeInUp delay={0.2}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
                >
                  {renderTitleWithGradientAI(currentTab.title)}
                </motion.h1>
              </AnimatePresence>
            </FadeInUp>

            {/* Subheading */}
            <FadeInUp delay={0.4}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${activeTab}-subtitle`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-lg font-medium"
                >
                  {currentTab.subtitle}
                </motion.p>
              </AnimatePresence>
            </FadeInUp>

            {/* Description */}
            <FadeInUp delay={0.5}>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${activeTab}-description`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-gray-200 leading-relaxed max-w-lg"
                >
                  {currentTab.description}
                </motion.p>
              </AnimatePresence>
            </FadeInUp>

            {/* Tab Navigation */}
            <FadeInUp delay={0.6}>
              <div className="flex flex-wrap gap-3 mb-8">
                {heroTabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`hero-tab-button flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'active bg-white text-gray-900 shadow-lg scale-105'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </FadeInUp>

            {/* CTA Buttons */}
            <FadeInUp delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center space-x-3 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/2348121096818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span>WhatsApp Us Now</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </FadeInUp>
          </div>

          {/* Right Content - Original Team Image */}
          <FadeInUp delay={0.9}>
            <div className="relative">
              {/* Online Status Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Online</span>
              </div>

              {/* Trusted Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-blue-600 text-white rounded-lg px-6 py-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">Trusted by</div>
                  <div className="text-sm opacity-90">Businesses Worldwide</div>
                </div>
              </div>

              {/* Main Team Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.postimg.cc/0QLzJyH9/840018042.png"
                  alt="Smart Best Technology Team"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Animated Floating Team Card */}
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
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
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
          </FadeInUp>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">AI Systems Deployed</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80 text-sm">Conversion Rate Increase</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">AI Support Available</div>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="text-2xl font-bold text-white mb-2">Trusted by</div>
              <div className="text-white/80 text-sm">Businesses Worldwide</div>
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