"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-light" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg"
                alt="Smart Best Technology Team"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold">6+</p>
              <p className="text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We have over 6 years of experience in the Tech Industry
            </h2>
            <p className="text-gray-700 mb-6">
              Smart Best Technology stands at the forefront of the technology revolution, dedicated to transforming the way we live, work, and interact with the world. As a leading smart technology company, we are committed to pushing the boundaries of innovation and creating intelligent solutions that enhance efficiency, convenience, and connectivity for individuals and businesses alike.
            </p>
            <p className="text-gray-700 mb-8">
              With experienced teams and an agile framework, we prioritize the commercial goals of our clients to deliver the highest business value. Our expertise spans across various domains including fintech, healthcare, transportation, and industrial automation.
            </p>
            <Link 
              href="/why-us"
              className="btn btn-primary inline-flex items-center"
            >
              Know More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
