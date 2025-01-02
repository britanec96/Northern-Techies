import React from 'react';
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


// Components
import { Button } from '../components/button';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';
import { Wrapper } from '../components/wrapper';
import { Link } from 'react-router-dom';

function AiContentCreation() {


  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '50px', origin: 'left' } },
  ]);


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
          <source src={require('../videos/Artifical Intellegent.mp4')} type="video/mp4" />
          Your browser doesn't support videos
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6">
          <div className="max-w-md mx-0 flex flex-col justify-start text-left"> 
            <h1 className="text-5xl font-bold text-almost-white element-delay-200">
                Our expert <span className="text-sky-500">Prompt Engineers</span> are here for your creative needs
              </h1>
              <p className="mt-6 text-xl font-fira text-gray-300 element-delay-400">
                Images, Business Plans, Content, Essey, Studying and other
              </p>
              <div className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8 element-delay-400">
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
            </div>
            <div className="w-full h-px bg-gray-200 my-12 opacity-25"></div>
<div className="w-full md:flex md:items-center justify-between mt-12">
<p className="text-almost-white font-bold text-center md:text-left text-xl mt-7 mb-4 md:mb-0">
    Our expertise extends across diverse platforms:
  </p>
  <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start items-center mt-5 md:mt-0">
    <img
      className="w-12 h-12 md:w-16 md:h-16 element-delay-400"
      src={ChatGPT}
      alt="ChatGPT"
      loading="lazy"
    />
<img
  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 via-blue-400 to-pink-400"
  src={Canva}
  alt="Canva"
  loading="lazy"
/>

<img
  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-800 via-purple-600 to-cyan-500 element-delay-400"
  src={MidJourney}
  alt="MidJourney"
  loading="lazy"
/>


    <img
      className="w-12 h-12 md:w-16 md:h-16 element-delay-400"
      src={Gemini}
      alt="Gemini"
      loading="lazy"
    />
  </div>
</div>

        </div>
      </section>

      <section>
        <div className='bg-gray-900 p-5 text-center relative'>
          <h1 className='m-5 text-almost-white text-6xl font-extrabold element-delay-400'>Ready to generate top-notch content?</h1>
          <div className='element-delay-400'>
            <p className='m-5 text-gray-100 text-2xl'>Start your project from just <span className='text-sky-500 text-3xl font-semibold'>£10!</span></p>
          </div>
        </div>
      </section>

      <Wrapper>
        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-300'>
            <div className='flex flex-col items-center'>
              <img className="w-1/2 h-auto m-10 element-delay-400" src={PromptEngineeringIcon} alt="Prompt Engineering Icon" loading="lazy" />
              <h1 className='font-bold text-lg text-almost-white element-delay-400'>What is Prompt Engineering?</h1>
              <p className='m-5 text-gray-300 element-delay-400'>Prompt engineering is the art of crafting effective inputs for AI models to generate desired outputs. Our engineers specialize in fine-tuning prompts to produce high-quality images, business plans, and content tailored to your needs.</p>
            </div>
            <div className='flex flex-col items-center'>
              <img className="w-1/2 h-auto m-10 element-delay-400" src={WhyChooseUsIcon} alt="Business Plans Icon" loading="lazy" />
              <h1 className='font-bold text-lg text-almost-white element-delay-400'>Why Choose Us for Prompt Engineering?</h1>
              <p className='m-5 text-gray-300 element-delay-400'>We bring a blend of technical skill and creativity to tailor AI-generated content that matches your brand’s vision. Our team excels in generating diverse and detailed outputs, from visual content to business plans and more.</p>
            </div>
          </div>
        </section>
      </Wrapper>

      <Wrapper>
        <div id='targetSection' className="bg-gray-900 rounded-lg shadow-md py-20 px-4 md:px-8 mt-14">
          <div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6 element-delay-200">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
                Looking for Creative Content?
              </h3>
              <p className="text-lg text-gray-300">
                Need custom content to engage your audience? Our prompt engineers will develop captivating content to suit your unique style and goals.
              </p>
            </div>
            <div className="block md:w-1/2">
              <img
                src={CreativeContent}
                className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                alt="Creative Content Showcase"
              />
            </div>
          </div>

          <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

          <div className="mt-12 flex flex-col md:flex-row items-center md:text-right sm:text-center gap-6 element-delay-200">
            <div className="block md:w-1/2">
              <img
                src={ImageGeneration}
                className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                alt="Image Generation Showcase"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
                Need Stunning AI-Generated Images?
              </h3>
              <p className="text-lg text-gray-300">
                Our AI specialists can create unique visuals for any purpose, helping you stand out with custom image content.
              </p>
            </div>
          </div>

          <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

          <div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6 element-delay-200">
          <div className="flex-1">
  <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
    Professional Essays and Help with Assignments
  </h3>
  <p className="text-lg text-gray-300">
    We offer high-quality essay writing and assignment assistance that is indistinguishable from human work. Our experts will help you achieve excellent academic results.
  </p>
</div>


            <div className="block md:w-1/2">
              <img
                src={Analytics}
                className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                alt="Analytics Showcase"
              />
            </div>
          </div>
        </div>
        <section>
        <div className='bg-gray-900 p-5 my-5 rounded-lg text-center relative'>
         <h1 className='m-5 text-almost-white text-4xl md:text-6xl font-extrabold element-delay-400'>Get a free consultation</h1>
         <div className='element-delay-400'>
         <p className='m-5 text-gray-100 text-xl md:text-2xl'>Get professional advice<span className='text-sky-500 text-2xl md:text-3xl font-semibold'> RIGHT NOW!</span></p>
<Link to="/order">
         <Button
                  hasWhiteStyle={true}
                >
                  Order Page
                </Button>
                </Link>
         </div>
        </div>
    </section>
      </Wrapper>
    </>
  );
}

export default AiContentCreation;
