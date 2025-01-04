import React from 'react';
import { motion } from 'framer-motion'; // Импортируем framer-motion
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
import Analytics from '../images/AnalyticsPromt.jpg';

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
            <motion.h1
              className="text-5xl font-bold text-almost-white"
              initial="hidden"
              whileInView="visible"
              variants={slideInRight}
              transition={{ delay: 0.1 }}
            >
              Our expert <span className="text-sky-500">Prompt Engineers</span> are here for your creative needs
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="mt-6 text-xl font-fira text-gray-300"
            >
              Images, Business Plans, Content, Essays, Studying and other
            </motion.p>
            <motion.div className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8">
              <Link to="/order" className="w-full sm:w-auto">
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ delay: 0.5 }}>
                  <Button hasWhiteStyle={true}>Order</Button>
                </motion.div>
              </Link>
              <motion.div
                className="flex items-center gap-2 w-full sm:w-auto"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.7 }}
              >
                <Button hasWhiteStyle={true} onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}>
                  <i className="ri-whatsapp-line text-green-500 font-thin"></i>
                  Chat with us on WhatsApp
                </Button>
              </motion.div>
              <motion.div
                className="flex items-center justify-center gap-2 w-full sm:w-auto"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.9 }}
              >
                <Button hasWhiteStyle={true} onClick={(e) => { e.preventDefault(); handleTelegram(); }}>
                  <i className="ri-telegram-line text-sky-500 font-thin"></i>
                  Chat with us on Telegram
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full h-px bg-gray-200 my-12 opacity-25"></div>
          <div className="w-full md:flex md:items-center justify-between mt-12">
            <motion.p 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 10 }}
              className="text-almost-white font-bold text-center md:text-left text-xl mt-7 mb-4 md:mb-0"
            >
              Our expertise extends across diverse platforms:
            </motion.p>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start items-center mt-5 md:mt-0">
              <motion.img
                className="w-12 h-12 md:w-16 md:h-16"
                src={ChatGPT}
                alt="ChatGPT"
                loading="lazy"
                initial="hidden"
                whileInView="visible"
                variants={slideInRight}
                transition={{ delay: 1 }}
              />
              <motion.img
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 via-blue-400 to-pink-400"
                src={Canva}
                alt="Canva"
                loading="lazy"
                initial="hidden"
                whileInView="visible"
                variants={slideInRight}
                transition={{ delay: 1.2 }}
              />
              <motion.img
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-800 via-purple-600 to-cyan-500"
                src={MidJourney}
                alt="MidJourney"
                loading="lazy"
                initial="hidden"
                whileInView="visible"
                variants={slideInRight}
                transition={{ delay: 1.4 }}
              />
              <motion.img
                className="w-12 h-12 md:w-16 md:h-16"
                src={Gemini}
                alt="Gemini"
                loading="lazy"
                initial="hidden"
                whileInView="visible"
                variants={slideInRight}
                transition={{ delay: 1.6 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Следующий секции с анимацией */}
      <section>
        <div className='bg-gray-900 p-5 text-center relative'>
          <motion.h1
            className='m-5 text-almost-white text-6xl font-extrabold'
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
            transition={{ delay: 0.8 }}
          >
            Ready to generate top-notch content?
          </motion.h1>
          <motion.p
            className='m-5 text-gray-100 text-2xl'
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
            transition={{ delay: 1 }}
          >
            Start your project from just <span className='text-sky-500 text-3xl font-semibold'>£10!</span>
          </motion.p>
        </div>
      </section>

      <Wrapper>
        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-300'>
            <motion.div
              className='flex flex-col items-center'
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 1.2 }}
            >
              <img className="w-1/2 h-auto m-10" src={PromptEngineeringIcon} alt="Prompt Engineering Icon" loading="lazy" />
              <h1 className='font-bold text-lg text-almost-white '>What is Prompt Engineering?</h1>
              <p className='m-5 text-gray-300'>
                Prompt engineering is the art of crafting effective inputs for AI models to generate desired outputs. Our engineers specialize in fine-tuning prompts to produce high-quality images, business plans, and content tailored to your needs.
              </p>
            </motion.div>
            <motion.div
              className='flex flex-col items-center'
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 1.4 }}
            >
              <img className="w-1/2 h-auto m-10" src={WhyChooseUsIcon} alt="Business Plans Icon" loading="lazy" />
              <h1 className='font-bold text-lg text-almost-white '>Why Choose Us for Prompt Engineering?</h1>
              <p className='m-5 text-gray-300'>
                We bring a blend of technical expertise and creative vision to ensure your prompts are optimized to produce exceptional results. Whether you're looking to enhance productivity or generate creative content, our experts are here to assist.
              </p>
            </motion.div>
          </div>
        </section>
      </Wrapper>

      <Wrapper>
        <div id='targetSection' className="bg-gray-900 rounded-lg shadow-md py-20 px-4 md:px-8 mt-14">
          <div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6 ">
            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 1.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
                Looking for Creative Content?
              </h3>
              <p className="text-lg text-gray-300">
                Need custom content to engage your audience? Our prompt engineers will develop captivating content to suit your unique style and goals.
              </p>
            </motion.div>
            <motion.div
              className="block md:w-1/2"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 1.8 }}
            >
              <img
                src={CreativeContent}
                className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                alt="Creative Content Showcase"
              />
            </motion.div>
          </div>

          <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

          <div className="mt-12 flex flex-col md:flex-row items-center md:text-right sm:text-center gap-6 ">
            <motion.div
              className="block md:w-1/2"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 2 }}
            >
              <img
                src={ImageGeneration}
                className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                alt="Image Generation Showcase"
              />
            </motion.div>

            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 2.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
                Need Stunning AI-Generated Images?
              </h3>
              <p className="text-lg text-gray-300">
                Our AI specialists can create unique visuals for any purpose, helping you stand out with custom image content.
              </p>
            </motion.div>
          </div>
        </div>

        <section>
          <div className='bg-gray-900 p-5 my-5 rounded-lg text-center relative'>
            <motion.h1
              className='m-5 text-almost-white text-4xl md:text-6xl font-extrabold'
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 2.4 }}
            >
              Get a free consultation
            </motion.h1>
            <motion.p
              className='m-5 text-gray-100 text-xl md:text-2xl'
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 2.6 }}
            >
              Contact us now to discuss your next project and explore AI-powered solutions.
            </motion.p>
            <motion.div
              className='mt-7'
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ delay: 2.8 }}
            >
              <Button hasWhiteStyle={true} onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}>
                <i className="ri-whatsapp-line text-green-500 font-thin"></i>
                Chat with us on WhatsApp
              </Button>
            </motion.div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default AiContentCreation;
