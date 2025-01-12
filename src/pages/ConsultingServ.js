import React from 'react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';
import 'animate.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Three from '../images/Three.jpg';
import Wifi from '../images/wifitroubles.jpg';
import Tech from '../images/tech.jpg';
import Files from '../images/files.jpg';
import Cybersecurity from '../images/cybersecurity.jpg';
import Software from '../images/software.jpg';

const AnimatedSection = ({ children, animation }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

function ConsultationServices() {
  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");
  const handleTelegram = () => window.open("https://t.me/+447378716579", "_blank");

  // Анимация для каждого элемента
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <>
      <section className="relative bg-cover bg-center bg-almost-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={require('../videos/ConsultingServices.mp4')} type="video/mp4" />
          Your browser doesn't support videos
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <AnimatedSection animation={animationVariants}>
              <div className="max-w-md mx-0 flex flex-col justify-start text-left">
                <h1 className="text-5xl font-extrabold text-white">
                  Our expert <span className="text-sky-500">Consultants</span> for your tech needs
                </h1>
                <p className="mt-6 text-xl font-fira text-gray-300">
                  From Computer Repairs to Internet Setup & Full Tech Support — We are here for you.
                </p>
                <motion.div
                  className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8"
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <Link to="/services/customize-your-order" className="w-full sm:w-auto">
                    <Button hasWhiteStyle={true}>Get Started</Button>
                  </Link>
                  <Button
                    className="flex items-center gap-2 w-full sm:w-auto"
                    hasWhiteStyle={true}
                    onClick={(e) => {
                      e.preventDefault();
                      handleWhatsApp();
                    }}
                  >
                    <i className="ri-whatsapp-line text-green-500 font-thin"></i>
                    Chat with us on WhatsApp
                  </Button>
                  <Button
                    className="flex items-center justify-center gap-2 w-full sm:w-auto"
                    hasWhiteStyle={true}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTelegram();
                    }}
                  >
                    <i className="ri-telegram-line text-sky-500 font-thin"></i>
                    Chat with us on Telegram
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
            <div className="w-full h-px bg-gray-200 my-12 opacity-25"></div>
          </div>
          <div className="flex justify-between mt-12">
            <AnimatedSection animation={animationVariants}>
              <motion.p className="text-almost-white font-bold text-xl mt-7">
                We solve any IT / TECH problem, big or small.
              </motion.p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation={animationVariants}>
            <motion.h2 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6">
              <span className="text-sky-400">Common</span> Consultation Topics
            </motion.h2>
          </AnimatedSection>
          <AnimatedSection animation={animationVariants}>
            <motion.p className="text-lg md:text-xl text-gray-300 mb-10 opacity-80">
              Reach out to us for professional guidance on the following topics and more:
            </motion.p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 text-left">
            {/* Пример элемента с анимацией */}
            {[ 
              { image: Three, title: 'Computer Setup & Optimization', description: 'Need help setting up your computer, optimizing its performance, or fixing issues? We’ve got you covered.' },
              { image: Wifi, title: 'Internet & Wi-Fi Troubleshooting', description: 'Struggling with slow internet or Wi-Fi connectivity? We’ll get you back online in no time.' },
              { image: Tech, title: 'Tech Support & Repairs', description: 'Having hardware or software problems? Our team provides quick and reliable repairs.' },
              { image: Files, title: 'Data Recovery & Backup', description: 'Lost important files? Let us recover your data and set up secure backups to protect it.' },
              { image: Cybersecurity, title: 'Standard Consultation', description: 'Reach out for expert guidance on a variety of tech-related topics and solutions.' },
              { image: Software, title: 'Software Installation & Updates', description: 'Need software installation or updates? Let our experts handle it efficiently.' },
            ].map((item, index) => (
              <AnimatedSection key={index} animation={animationVariants}>
                <motion.div
                  className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out relative overflow-hidden group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300"
                  />
                  <h3 className="text-2xl font-bold text-white mb-3 z-10 relative">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 z-10 relative">
                    {item.description}
                  </p>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 p-5 my-5 text-center relative">
        <AnimatedSection animation={animationVariants}>
          <motion.h1 className="m-5 text-almost-white text-3xl md:text-5xl font-extrabold">
            Get Expert Help Right Now
          </motion.h1>
        </AnimatedSection>
        <AnimatedSection animation={animationVariants}>
          <motion.p className="m-5 text-gray-100 text-xl md:text-2xl">
            Get a free consultation and chat with our specialist 24/7{' '}
            <span className="text-sky-500 text-2xl md:text-3xl font-semibold">RIGHT NOW!</span>
          </motion.p>
        </AnimatedSection>
        <div className="relative z-20 pointer-events-auto select-auto flex justify-center element-delay-800">
          <AnimatedSection animation={buttonVariants}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }}>
              <Button className="flex items-center justify-center gap-2 text-sm font-bold" hasWhiteStyle={true} onClick={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}>
                <i className="ri-whatsapp-line text-green-500 text-base font-thin"></i>
                Chat with us on WhatsApp
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default ConsultationServices;
