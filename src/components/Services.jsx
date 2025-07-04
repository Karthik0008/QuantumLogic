import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'HR Consulting',
    description: 'Book appointments in just a few clicks.',
    icon: '👥',
  },
  {
    title: 'Digital Marketing',
    description: 'We help you reach your target audience effectively.',
    icon: '📈',
  },
  {
    title: 'Website Development',
    description: 'We build websites for organizations, businesses, and institutions around the globe.',
    icon: '🌐',
  },
  {
    title: 'Systems Support & Hosting',
    description:
      'By embracing the DevOps model, we increase automation and drive more meaningful measurements, leading to constant sharing.',
    icon: '🔧',
  },
  {
    title: 'Responsive UI/UX & Mobile Apps',
    description:
      'Our team can create a responsive UI/UX for your web application and build fast, reliable, user-friendly mobile apps.',
    icon: '📱',
  },
  {
    title: 'Custom Apps',
    description:
      'No matter how big your vision is, our engineering team can evaluate and propose the right solution to bring your idea to life.',
    icon: '🛠️',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' },
};

const Features = () => (
  <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4">
        Our Features
      </h2>
      <p className="text-lg text-blue-900">
        Explore the wide range of solutions we offer to help your business grow and thrive.
      </p>
    </div>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col items-center text-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Features;
