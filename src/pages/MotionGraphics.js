import React from 'react'; 
// Изображения
import MotionDesignIcon from '../images/MotionDesignIcon.svg';
import WhyChooseUsIcon from '../images/WhyChooseUsIcon.svg';
import AfterEffects from '../images/aftereffects.svg';
import Cinema4d from '../images/cinema4d.svg';
import Blender from '../images/blender.svg';
import Adobephotoshop from '../images/adobephotoshop.svg';

// Компоненты
import { Button } from '../components/button';
import { Wrapper } from '../components/wrapper';
import { Link } from 'react-router-dom';

// Анимации
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

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

function MotionGraphics() {

  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");
  const handleTelegram = () => window.open("https://t.me/+447378716579", "_blank");

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
          <source src={require('../videos/MotionDesign.mp4')} type="video/mp4" />
          Your browser doesn't support videos
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-24 px-6">
          <div className="max-w-md mx-0 flex flex-col justify-start text-left"> 
            <AnimatedSection animation={fadeInUp}>
              <h1 className="text-5xl font-bold text-almost-white">
                Professional <span className="text-purple-500">Motion Designers</span> for All Your Needs
              </h1>
              <p className="mt-6 text-xl font-fira text-gray-300">
                Our team of skilled motion designers brings your ideas to life through stunning intros, animations, and engaging content.
              </p>
            </AnimatedSection>
            <AnimatedSection animation={slideInRight}>
            <div className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8">
              <Link to="/order" className="w-full sm:w-auto">
                <Button hasWhiteStyle={true}>Order</Button>
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
            </div>
            </AnimatedSection>
          </div>
          <div className="w-full h-px bg-gray-200 my-12 opacity-20"></div>
          <div className="w-full md:flex sm:block justify-between items-center">
            <AnimatedSection animation={fadeInUp}>
              <p className="text-almost-white font-bold text-center md:text-left text-xl mt-7 mb-4 md:mb-0">
                The best programs for your goals:
              </p>
            </AnimatedSection>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start items-center">
              <AnimatedSection animation={slideInRight}>
                <img
                  className="w-12 h-12 md:w-16 md:h-16"
                  src={AfterEffects}
                  alt="AfterEffects"
                  loading="lazy"
                />
              </AnimatedSection>
              <AnimatedSection animation={slideInRight}>
                <img
                  className="w-12 h-12 md:w-16 md:h-16"
                  src={Cinema4d}
                  alt="Cinema4d"
                  loading="lazy"
                />
              </AnimatedSection>
              <AnimatedSection animation={slideInRight}>
                <img
                  className="w-12 h-12 md:w-16 md:h-16"
                  src={Blender}
                  alt="Blender"
                  loading="lazy"
                />
              </AnimatedSection>
              <AnimatedSection animation={slideInRight}>
                <img
                  className="w-12 h-12 md:w-16 md:h-16"
                  src={Adobephotoshop}
                  alt="Adobephotoshop"
                  loading="lazy"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection animation={fadeInUp}>
        <section className='relative bg-gray-900 p-5 text-center'>
          <motion.h1 className='m-5 text-almost-white text-6xl font-extrabold'>
            Elevate Your Brand with Motion Design
          </motion.h1>
          <div>
            <motion.p className='m-5 text-gray-100 text-2xl'>
              From just <span className='text-sky-500 text-3xl font-semibold'>£20</span>, bring your brand to life with dynamic animations!
            </motion.p>
            <Link to='/order'>
              <Button hasWhiteStyle={true}>Order Page</Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <Wrapper>
        <AnimatedSection animation={slideInRight}>
          <section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-300'>
              <div className='flex flex-col items-center'>
                <motion.img
                  className="w-1/2 h-auto m-10"
                  src={MotionDesignIcon}
                  alt="Motion Design Icon"
                  loading="lazy"
                  variants={fadeInUp}
                />
                <motion.h1 className='font-bold text-lg text-almost-white'>
                  What is Motion Design?
                </motion.h1>
                <p className='m-5 text-gray-300'>
                  Motion design is a creative process that brings graphics to life using animation and visual effects. Our motion designers specialize in creating captivating intros, explainer videos, social media content, and much more.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <motion.img
                  className="w-1/2 h-auto m-10"
                  src={WhyChooseUsIcon}
                  alt="Our Team Icon"
                  loading="lazy"
                  variants={fadeInUp}
                />
                <motion.h1 className='font-bold text-lg text-almost-white'>
                  Why Choose Us for Motion Design?
                </motion.h1>
                <p className='m-5 text-gray-300'>
                  We combine technical expertise and artistic vision to create animations that engage and inspire. Our team is committed to delivering polished, impactful designs tailored to your audience and brand.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation={fadeInUp}>
          <section>
            <div className='mt-20 mb-20 bg-gray-900 text-almost-white rounded-lg p-5 text-center md:text-left'>
              <motion.h1 className='text-center xl:text-5xl sm:text-3xl font-bold m-5'>
                Motion Design Process
              </motion.h1>
              <div className='grid xl:grid-cols-4 sm:grid-cols-1 gap-5'>
                <div className='flex flex-col justify-center sm:items-center xl:items-start'>
                  <i className="ri-creative-commons-by-line text-6xl text-sky-500 m-5"></i>
                  <motion.h1 className='text-xl font-bold'>
                    Consultation and Initial Deposit
                  </motion.h1>
                  <p>We begin by understanding your vision and collecting a deposit to start.</p>
                </div>
                <div className='flex flex-col justify-center sm:items-center xl:items-start'>
                  <i className="ri-code-box-line text-6xl text-sky-500 m-5"></i>
                  <motion.h1 className='text-xl font-bold'>
                    Storyboard and Design
                  </motion.h1>
                  <p>We create a storyboard and design key scenes to ensure the concept aligns with your goals.</p>
                </div>
                <div className='flex flex-col justify-center sm:items-center xl:items-start'>
                  <i className="ri-test-tube-line text-6xl text-sky-500 m-5"></i>
                  <motion.h1 className='text-xl font-bold'>
                    Animation and Revisions
                  </motion.h1>
                  <p>Our designers bring graphics to life with animation, incorporating your feedback as we go.</p>
                </div>
                <div className='flex flex-col justify-center sm:items-center xl:items-start'>
                  <i className="ri-checkbox-circle-line text-6xl text-sky-500 m-5"></i>
                  <motion.h1 className='text-xl font-bold'>
                    Delivery and Final Payment
                  </motion.h1>
                  <p>Once you're satisfied, we finalize the project and deliver the files upon receiving the balance.</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </Wrapper>

      <AnimatedSection animation={fadeInUp}>
        <section>
          <div className="bg-gray-900 p-5 mb-5 text-center relative rounded-lg">
            <motion.h1 className='m-5 text-almost-white text-4xl md:text-6xl font-extrabold'>
              Get a free consultation
            </motion.h1>
            <div>
              <motion.p className='m-5 text-gray-100 text-xl md:text-2xl'>
                Get professional advice<span className='text-sky-500 text-2xl md:text-3xl font-semibold'> RIGHT NOW!</span>
              </motion.p>
              <Link to="/order">
                <Button hasWhiteStyle={true}>Order Page</Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
        
    </>
  );
}

export default MotionGraphics;