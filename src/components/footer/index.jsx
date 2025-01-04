import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Footer = () => {
  // Настроим хук useInView для отслеживания видимости каждого блока
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <footer className="bg-gray-900 text-almost-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <Link to="/" className='antialiased cursor-pointer tracking-widest'>
            <h1 className="text-almost-white text-xl font-fira font-extrabold">{"<Northern>"}</h1>
            <h1 className="text-sky-500 text-xl -mt-2 font-fira font-extrabold">{"</Techies>"}</h1>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            ref={aboutRef}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}  // Начальное состояние (не видно и немного ниже)
            animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}  // Анимация появления
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are a IT services provider offering a wide range of digital solutions 
              to help businesses grow and succeed in the online space and other.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="hover:text-sky-500">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-sky-500">Portfolio</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            ref={servicesRef}
            className="text-center"
            initial={{ opacity: 0, x: -50 }}  // Начальное состояние (не видно и немного слева)
            animate={{ opacity: servicesInView ? 1 : 0, x: servicesInView ? 0 : -50 }}  // Анимация появления
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/web-development" className="hover:text-sky-500">Web Development</Link>
              </li>
              <li>
                <Link to="/graphic-design" className="hover:text-sky-500">Graphic Design</Link>
              </li>
              <li>
                <Link to="/consultationservices" className="hover:text-sky-500">Consulting Services</Link>
              </li>
              <li>
                <Link to="/ai-content-creation" className="hover:text-sky-500">Content Creation</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            ref={contactRef}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}  // Начальное состояние (не видно и немного ниже)
            animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 50 }}  // Анимация появления
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">
              Have any questions? Reach out to us and we'll be happy to assist you.
            </p>
            <ul className="space-y-2">
              <li className="hover:text-sky-500">Email: support@northerntechies.com</li>
              <li className="hover:text-sky-500">Address:  Manchester, UK</li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center mt-10 text-gray-500">
          <p>&copy; 2025 Northern Techies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

