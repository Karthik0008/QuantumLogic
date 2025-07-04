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
    description: 'We help you to reach your target audience effectively.',
    icon: '📈',
  },
  {
    title: 'Website Development',
    description: 'We build websites for organizations, businesses, and institutions around the globe.',
    icon: '🌐',
  },
  {
    title: 'Systems support & hosting',
    description:
      'By embracing the DevOps model, which fosters our culture, we increase automation and drive more meaningful measurements which leads to constant sharing.',
    icon: '🔧',
  },
  {
    title: 'Responsive UI/UX & Mobile Apps',
    description:
      'Our team of designers and developers can create a responsive UI/UX for your web application, ensuring it looks great on all devices. We also build mobile apps that are fast, reliable, and user-friendly.',
    icon: '📱',
  },
  {
    title: 'Custom Apps',
    description:
      'No matter how big your vision is, our forward-looking engineering team can evaluate and propose the right solution to bring your idea to life. We have built custom apps with the following languages, platforms and frameworks.',
    icon: '🛠️',
  },
];

const heroBackground =
  'https://static1.makeuseofimages.com/wp-content/uploads/2018/11/dark-wallpapers.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' },
  focus: { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' },
};

const blogPosts = [
  {
    
    image:
      'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
    link: '#',
  },
  {
   
    image:
      'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    link: '#',
  },
  {
    
    image:
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    link: '#',
  },
];

const Home = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12 bg-cover bg-center bg-no-repeat rounded-lg py-33 px-17"
        style={{ backgroundImage: `url(${heroBackground})` }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Elevate Your Web Presence With AI Magic
        </h1>
        <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
          Empower your business with our cutting-edge web solutions. From HR consulting to custom app development, we have the expertise to take your online presence to the next level.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => window.location.href = '/about'}
        >
          Learn More about Us
        </button>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow cursor-pointer outline-none"
            variants={cardVariants}
            whileHover="hover"
            whileFocus="focus"
            tabIndex={0}
            role="button"
            aria-label={`Learn more about ${feature.title}`}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Our Works</h2>
          <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {blogPosts.map(({ title, image, link }, idx) => (
              <article
                key={idx}
                className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 className="text-center">
                    <a
                      className="text-white text-2xl font-bold text-center relative z-10"
                      href={link}
                      tabIndex={0}
                    >
                      <span className="absolute inset-0"></span>
                      {title}
                    </a>
                  </h3>
                </div>
              </article>
            ))}
          </section>
        </article>
      </section>
    </div>
  );
};

export default Home;
