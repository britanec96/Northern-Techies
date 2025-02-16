import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { Button } from '../components/button';
import { Wrapper } from '../components/wrapper';

// Images
import PromptEngineeringIcon from '../images/PromptEngineeringIcon.svg';
import WhyChooseUsIcon from '../images/WhyChooseUsIcon.svg';
import ChatGPT from '../images/ChatGPT.svg';
import Canva from '../images/Canva.svg';
import MidJourney from '../images/MidJourney.svg';
import Gemini from '../images/Gemini.png';
import CreativeContent from '../images/CreativeContent.jpg';
import ImageGeneration from '../images/ImageGeneration.jpg';

// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
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

function AiContentCreation() {
  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");
  const handleTelegram = () => window.open("https://t.me/+447378716579", "_blank");

  return (
    <>
      <section className="relative bg-cover bg-center bg-almost-black">
        <div className="absolute inset-0 w-full h-full object-cover opacity-60">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
            <source src={require('../videos/Artifical Intellegent.mp4')} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-24 px-6">
          <div className="max-w-md mx-0 flex flex-col justify-start text-left">
            <AnimatedSection animation={slideInRight}>
              <motion.h1 className="text-5xl font-bold text-almost-white">
                Our expert <span className="text-sky-500">Prompt Engineers</span> are here for your creative needs
              </motion.h1>
            </AnimatedSection>
            <AnimatedSection animation={fadeInUp}>
              <motion.p className="mt-6 text-xl font-fira text-gray-400">
                Images, Business Plans, Content, Essays, Studying and other
              </motion.p>
            </AnimatedSection>
            <AnimatedSection animation={fadeInUp}>
              <div className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8">
                <Link to="/services/customize-your-order" className="w-full sm:w-auto">
                  <Button hasWhiteStyle={true}>Service Inquiry</Button>
                </Link>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button hasWhiteStyle={true} onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}>
                    <i className="ri-whatsapp-line text-green-500 font-thin"></i>
                    Chat with us on WhatsApp
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Button hasWhiteStyle={true} onClick={(e) => { e.preventDefault(); handleTelegram(); }}>
                    <i className="ri-telegram-line text-sky-500 font-thin"></i>
                    Chat with us on Telegram
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="w-full h-px bg-gray-400 my-12 opacity-25"></div>
          <div className="w-full md:flex md:items-center justify-between mt-12">
            <AnimatedSection animation={fadeInUp}>
              <motion.p className="text-almost-white font-bold text-center md:text-left text-xl mt-7 mb-4 md:mb-0">
                Our expertise extends across diverse platforms:
              </motion.p>
            </AnimatedSection>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start items-center mt-5 md:mt-0">
              <AnimatedSection animation={slideInRight}>
                <motion.img className="w-12 h-12 md:w-16 md:h-16" src={ChatGPT} alt="ChatGPT" loading="lazy" />
              </AnimatedSection>
              <AnimatedSection animation={slideInRight}>
                <motion.img className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 via-sky-500 to-pink-400" src={Canva} alt="Canva" loading="lazy" />
              </AnimatedSection>
              <AnimatedSection animation={slideInRight}>
                <motion.img className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-sky-700 via-purple-600 to-cyan-500" src={MidJourney} alt="MidJourney" loading="lazy" />
              </AnimatedSection>
              <AnimatedSection animation={slideInRight}>
                <motion.img className="w-12 h-12 md:w-16 md:h-16" src={Gemini} alt="Gemini" loading="lazy" />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className='bg-gray-900 p-5 text-center relative'>
          <AnimatedSection animation={slideInLeft}>
            <motion.h1 className='m-5 text-almost-white text-6xl font-extrabold'>
              Ready to generate top-notch content?
            </motion.h1>
          </AnimatedSection>
          <AnimatedSection animation={slideInLeft}>
            <motion.p className='m-5 text-almost-white text-2xl'>
              Start your project from just <span className='text-sky-500 text-3xl font-semibold'>£10!</span>
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      <Wrapper>
        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-400'>
            <AnimatedSection animation={fadeInUp}>
              <div className='flex flex-col items-center'>
                <img className="w-1/2 h-auto m-10" src={PromptEngineeringIcon} alt="Prompt Engineering Icon" loading="lazy" />
                <h1 className='font-bold text-lg text-almost-white '>What is Prompt Engineering?</h1>
                <p className='m-5 text-gray-400'>
                  Prompt engineering is the art of crafting effective inputs for AI models to generate desired outputs. Our engineers specialize in fine-tuning prompts to produce high-quality images, business plans, and content tailored to your needs.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation={fadeInUp}>
              <div className='flex flex-col items-center'>
                <img className="w-1/2 h-auto m-10" src={WhyChooseUsIcon} alt="Business Plans Icon" loading="lazy" />
                <h1 className='font-bold text-lg text-almost-white '>Why Choose Us for Prompt Engineering?</h1>
                <p className='m-5 text-gray-400'>
                  We bring a blend of technical expertise and creative vision to ensure your prompts are optimized to produce exceptional results. Whether you're looking to enhance productivity or generate creative content, our experts are here to assist.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Wrapper>

      <Wrapper>
      <div id='targetSection' className="bg-gray-900 rounded-lg shadow-md py-20 px-4 md:px-8 mt-14">
        <div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6 ">
          <AnimatedSection animation={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
              Looking for Creative Content?
            </h3>
            <p className="text-lg text-gray-400">
              Need custom content to engage your audience? Our prompt engineers will develop captivating content to suit your unique style and goals.
            </p>
          </AnimatedSection>
          <AnimatedSection animation={fadeInUp}>
            <img
              src={CreativeContent}
              className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Creative Content Showcase"
            />
          </AnimatedSection>
        </div>

        <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

        <div className="mt-12 flex flex-col md:flex-row items-center md:text-right sm:text-center gap-6 ">
          <AnimatedSection animation={fadeInUp}>
            <img
              src={ImageGeneration}
              className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Image Generation Showcase"
            />
          </AnimatedSection>

          <AnimatedSection animation={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
              Need Stunning AI-Generated Images?
            </h3>
            <p className="text-lg text-gray-400">
              Our AI specialists can create unique visuals for any purpose, helping you stand out with custom image content.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <section>
        <div className='bg-gray-900 p-5 my-5 rounded-lg text-center relative'>
          <AnimatedSection animation={fadeInUp}>
            <h1 className='m-5 text-almost-white text-4xl md:text-6xl font-extrabold'>
              Get a free consultation
            </h1>
          </AnimatedSection>
          <AnimatedSection animation={fadeInUp}>
            <p className='m-5 text-almost-white text-xl md:text-2xl'>
              Contact us now to discuss your next project and explore AI-powered solutions.
            </p>
          </AnimatedSection>
          <AnimatedSection animation={fadeInUp}>
            <Button hasWhiteStyle={true} onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}>
              <i className="ri-whatsapp-line text-green-500 font-thin"></i>
              Chat with us on WhatsApp
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Wrapper>
    </>
  );
}

export default AiContentCreation;
