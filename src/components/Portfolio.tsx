import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from './animations';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Customer Service Bot',
      category: 'ai',
      description: 'Intelligent chatbot that handles 90% of customer inquiries with natural language processing and sentiment analysis.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['OpenAI GPT', 'Python', 'FastAPI', 'WebSocket'],
      liveUrl: '#',
      githubUrl: 'https://github.com/smartbesttechnology/Flowise',
      results: '90% query resolution, 60% cost reduction'
    },
    {
      id: 2,
      title: 'Telegram E-Commerce Bot',
      category: 'telegram',
      description: 'Complete shopping experience within Telegram with payment processing and order management.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Telegram Bot API', 'Node.js', 'Stripe', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/smartbesttechnology',
      results: '300% increase in mobile sales'
    },
    {
      id: 3,
      title: 'AI Lead Generation System',
      category: 'ai',
      description: 'Automated lead scoring and nurturing system using machine learning to identify high-value prospects.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'CRM API', 'Email Automation'],
      liveUrl: '#',
      githubUrl: 'https://github.com/smartbesttechnology/AI-Poster-Generator-Platform-8540',
      results: '250% increase in qualified leads'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure and intuitive mobile banking application with biometric authentication and AI fraud detection.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Biometrics', 'AI Security'],
      liveUrl: '#',
      githubUrl: 'https://github.com/smartbesttechnology',
      results: '99.9% uptime, 0% fraud incidents'
    },
    {
      id: 5,
      title: 'Voice AI Assistant',
      category: 'ai',
      description: 'Multi-language voice assistant for customer support with real-time translation and emotion detection.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Speech Recognition', 'NLP', 'Azure Cognitive', 'WebRTC'],
      liveUrl: '#',
      githubUrl: 'https://github.com/smartbesttechnology/Flowise',
      results: '85% customer satisfaction increase'
    },
    {
      id: 6,
      title: 'E-Commerce Web Platform',
      category: 'web',
      description: 'Full-stack e-commerce platform with AI-powered recommendations and automated inventory management.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'AI Recommendations', 'Stripe'],
      liveUrl: '#',
      githubUrl: 'https://github.com/smartbesttechnology/SMARTBEST-WEBSITE',
      results: '40% increase in average order value'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI Automation' },
    { id: 'telegram', label: 'Telegram Bots' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our AI automation projects, mobile apps, and client success stories that showcase real business transformation.
            </p>
          </div>
        </FadeInUp>

        {/* Filter Buttons */}
        <FadeInUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md border border-gray-200 dark:border-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {filteredProjects.map((project) => (
            <StaggerItem
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    title="View Live"
                  >
                    <ExternalLink className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    title="View Code"
                  >
                    <Github className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                {project.results && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4">
                    <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                      📈 Results: {project.results}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>


              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeInUp delay={0.4} className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your AI automation ideas and create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Portfolio;