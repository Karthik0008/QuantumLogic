import React from 'react';
import { Link } from 'react-router-dom';

const valuePoints = [
 
  {
    title: 'Security',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    img: 'https://t4.ftcdn.net/jpg/08/36/03/63/360_F_836036395_lSwPfSw0aVg2UViaG8j7OISOBOpRzSJY.jpg',
  },
  {
    title: 'Certificate',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    img: 'https://static.vecteezy.com/system/resources/previews/007/820/606/original/certificate-icon-logo-design-template-vector.jpg',
  },
  {
    title: 'Expertise',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    img: 'https://image.shutterstock.com/image-vector/limited-cloud-expertise-abstract-monogram-260nw-1886871658.jpg',
  },
  {
    title: 'Support',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    img: 'https://c8.alamy.com/comp/2NCT8DB/tech-support-icon-monochrome-simple-sign-from-engineering-collection-tech-support-icon-for-logo-templates-web-design-and-infographics-2NCT8DB.jpg',
  },
];

const About = () => (
  <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row gap-8">
      {/* About Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-blue-600">Quantum Logic</span>! We are passionate about helping businesses and individuals manage appointments, build their online presence, and grow with digital solutions.
        </p>
        <p className="text-gray-600 mb-4">
          Our team brings years of experience in HR consulting, digital marketing, web and mobile app development, and custom software solutions. We believe in making technology simple, accessible, and powerful for everyone.
        </p>
        <p className="text-gray-600">
          Whether you need a robust booking platform, a stunning website, or a custom app, we’re here to help you succeed. Thank you for choosing BookingHub as your digital partner!
        </p>
        <Link to="/contact">
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Contact Us
          </button>
       
        </Link>
      </div>
      {/* Network Section */}
      <div className="md:w-1/2 bg-white rounded-lg shadow p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">About the Network</h3>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-blue-600">The Company</span>
          <br />
          For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {valuePoints.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-full mb-2 shadow"
              />
              <h4 className="text-base font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-600 text-xs">{item.description}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  </div>
);

export default About;
