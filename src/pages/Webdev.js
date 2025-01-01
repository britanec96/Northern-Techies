import React, { useState, useEffect, useRef } from 'react';
// Изображения
import WebDevIcon from '../images/WebDevIcon.svg';
import WhyChooseUsIcon from '../images/WhyChooseUsIcon.svg';
import ReactIcon from '../images/reactjs-fill.svg';
import Node from '../images/nodejs-fill.svg';
import JavaScript from '../images/javascript-fill.svg';
import Tailwind from '../images/tailwind-css-fill.svg';
import Html from '../images/html5-fill.svg';

// Компоненты
import { Button } from '../components/button';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';
import { Wrapper } from '../components/wrapper';
import CardList from '../components/cards/CardsWebDev';
import { Link } from 'react-router-dom';


function WebDev() {


    useScrollReveal([
      { selector: '.element-delay-200', delay: 200, options: { distance: '50px', origin: 'top' } },
      { selector: '.element-delay-400', delay: 400, options: { distance: '50px', origin: 'left' } },
    ]);
  

  const scrollToSection = () => {
    const targetSection = document.getElementById('targetSection');
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  
  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");
  const handleTelegram = () => window.open("https://t.me/+447378716579", "_blank");
  
  return (
    <>




    <section 
      className="relative bg-cover bg-center bg-almost-black"
    >
        <video 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  >
    <source src={require('../videos/WebSitePrezi.mp4')} type="video/mp4" />
   Your browser doesn't support videos
  </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md mx-0 flex flex-col justify-start text-left"> {/* Flexbox для вертикального выравнивания */}
            <h1 className="text-5xl font-bold text-white element-delay-200">
              Our expert <span className="text-sky-500">Web Developers</span> for any job
            </h1>
            <p className="mt-6 text-xl font-fira text-gray-300 element-delay-400">
              MERN Stack (MongoDB, Express.js, React, Node.js, Tailwind ,Other Libraries and API)
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
        </div>
        <div className="flex justify-between mt-12">
          <p className="text-almost-white font-bold text-xl mt-7 element-delay-400">The best technologies for your website</p>
          <div className="flex flex-col md:flex-row xl:flex-row md:space-x-8 space-y-3">
          <img className='mt-3 element-delay-400' src={ReactIcon} alt="ReactIcon" loading="lazy" />
          <img className='element-delay-400' src={Node} alt="Node" loading="lazy"/>
          <img className='element-delay-400' src={JavaScript} alt="JavaScript" loading="lazy" />
          <img className='element-delay-400' src={Tailwind} alt="Tailwind" loading="lazy" />
          <img className='element-delay-400' src={Html} alt="Html" loading="lazy" />
          </div>
        </div>
      </div>
    </section>






    <section>
        <div className='bg-gray-900 p-5 text-center relative'>
         <h1 className='m-5 text-almost-white text-6xl font-extrabold element-delay-400'>Ready to grow?</h1>
         <div className='element-delay-400'>
         <p className='m-5 text-gray-100 text-2xl'>Start your website with us from just <span className='text-sky-500 text-3xl font-semibold'>£140!</span></p>
         <Button
         onClick={scrollToSection}
         className='m-5'
         hasWhiteStyle={true}>
          Order Now
         </Button>
         </div>
        </div>
    </section>





    <Wrapper>
    <section>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-300'>
    <div className='flex flex-col items-center'>
    <img className="w-1/2 h-auto m-10 element-delay-200" src={WebDevIcon} alt="Web Icon" loading="lazy" />
          <h1 className='font-bold text-lg text-almost-white element-delay-200'>What is Web Development?</h1>
          <p className='m-5 text-gray-300 element-delay-200'>Web development is the process of designing 
            and building websites. Web developers use programming languages,
             software, and tools to create everything you see on a website,
              from text and images to videos, apps and games. You may need to
               hire a web developer if you want to build a site of your own or
                add features to an existing site.</p>
        </div>
        <div className='flex flex-col items-center'>
        <img className="w-1/2 h-auto m-10 element-delay-200" src={WhyChooseUsIcon} alt="Web Icon" loading="lazy" />
        <h1 className='font-bold text-lg text-almost-white element-delay-200'>Why Choose Us for Your Website Development?</h1>
          <p className='m-5 text-gray-300 element-delay-200'>We bring a blend of creativity, technical expertise, and personalized solutions to build websites that not only look great but also perform exceptionally. Our team is committed to delivering user-friendly, responsive, and SEO-optimized websites that are tailored to your business needs. We ensure a seamless development process, from concept to launch, with a focus on your goals and audience.</p>
        </div>
      </div>
      </section>
      <section>
        <div className='mt-20 mb-20 bg-gray-900 text-almost-white rounded-lg p-5 text-center md:text-left element-delay-200'>
          <h1 className='text-center xl:text-5xl sm:text-3xl font-bold m-5'>How Does Development Process Work?</h1>
        <div className='grid xl:grid-cols-4 sm:grid-cols-1 gap-5'>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-creative-commons-by-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold font'>Consultation and 50% Prepayment</h1>
            <p>We discuss your project and collect a 50% prepayment to begin.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-code-box-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Development and Design</h1>
            <p>We create the website, reviewing key stages with you for feedback.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-test-tube-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Testing and Final Revisions</h1>
            <p>After development is complete, we thoroughly test the website across various devices and browsers.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-rocket-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Launch and Final Payment</h1>
            <p>After testing and approval, we launch the site, with the remaining 50% due at completion.</p>
          </div>
        </div>
        </div>
      </section>
      </Wrapper>



          <div id="targetSection" className='bg-gray-900 p-10 '>
            <h1 className='text-6xl text-center font-fira text-almost-white font-black mb-4 element-delay-200'>Built for You: Choose the Ideal Web Solution</h1>
        <CardList/>
        </div>
        
    </>
  );
}

export default WebDev;


