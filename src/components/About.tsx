import React from 'react';
import {
  Users,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  Globe
} from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from './animations';

const About = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Expert Team Members' },
    { icon: Award, value: '500+', label: 'Successful Projects' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: TrendingUp, value: '98%', label: 'Client Retention Rate' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering innovative technology solutions that drive real business value and transformation.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology trends to provide cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to understand your needs and deliver tailored solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Smartbest Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are a leading AI automation company dedicated to helping businesses thrive through intelligent solutions and cutting-edge technology.
            </p>
          </div>
        </FadeInUp>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <FadeInUp delay={0.2}>
            <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Businesses Through AI Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded with a vision to revolutionize business operations through AI automation, Smartbest Technologies has been at the forefront of intelligent business solutions. We combine cutting-edge AI technology with strategic business insight to deliver automation systems that transform operations and drive unprecedented growth.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our team of AI specialists, automation engineers, and business strategists brings together expertise in machine learning, natural language processing, robotic process automation, and intelligent chatbots. We pride ourselves on creating AI solutions that think, learn, and adapt to your business needs.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">AI-Driven Strategy</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">We align AI automation solutions with your business objectives for maximum ROI.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Cutting-Edge AI</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">We leverage the latest AI technologies to automate and optimize your operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">AI Specialists</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Our certified AI engineers bring deep expertise in machine learning and automation.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Right Content - Image */}
        <FadeInUp delay={0.3}>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Years of AI Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>

        {/* Stats Section */}
        <FadeInUp delay={0.4}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-16 border border-blue-100 dark:border-blue-800/30">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <StaggerItem key={index} className="text-center">
                    <ScaleIn delay={index * 0.1}>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md inline-flex mb-4 border border-gray-100 dark:border-gray-700">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </ScaleIn>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeInUp>

        {/* Values Section */}
        <div>
          <FadeInUp delay={0.5}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Core Values</h3>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <StaggerItem key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300">
                  <ScaleIn delay={0.2}>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl inline-flex mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </ScaleIn>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;