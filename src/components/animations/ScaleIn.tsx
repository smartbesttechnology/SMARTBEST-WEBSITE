import React from 'react';
import { motion } from 'framer-motion';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
  once?: boolean;
}

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  scale = 0.8,
  className = '',
  once = true
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: scale
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: once,
        amount: 0.1
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
