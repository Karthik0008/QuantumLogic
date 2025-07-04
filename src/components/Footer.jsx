import React from 'react';

const Footer = () => (
  <footer className=" w-full z-40 bg-gray-900/95 backdrop-blur text-gray-200 py-4 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Branding */}
      <div className="mb-2 md:mb-0 flex items-center">
        <span className="font-bold text-xl text-blue-400">Quantum Logic</span>
        <span className="ml-2 text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
      {/* Footer Links */}
      <div className="flex space-x-6">
        <a
          href="/"
          className="hover:text-blue-400 hover:underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          Home
        </a>
        <a
          href="/features"
          className="hover:text-blue-400 hover:underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          Our Services
        </a>
        <a
          href="/about"
          className="hover:text-blue-400 hover:underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          About
        </a>
        <a
          href="/contact"
          className="hover:text-blue-400 hover:underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
