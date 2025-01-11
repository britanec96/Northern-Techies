import React, { useState } from 'react';
// Изображения
import MarketingIcon from '../images/MarketingIcon.svg';
import WhyChooseUsIcon from '../images/WhyChooseUsIcon.svg';
import Tiktok from '../images/Tiktoklogo.svg';
import Instagram from '../images/Instagramlogo.svg';
import Facebook from '../images/Facebooklogo.svg';
import Blogger from '../images/Blogger.jpg';
import BrandRefresh from '../images/BrandRefresh.jpg';
import Analytics from '../images/Analytics.jpg';



// Компоненты
import { Button } from '../components/button';
import { Wrapper } from '../components/wrapper';
import { Link } from 'react-router-dom';


function DigMarketing() {



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
    <source src={require('../videos/Marketing.mp4')} type="video/mp4" />
   Your browser doesn't support videos
  </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md mx-0 flex flex-col justify-start text-left"> {/* Flexbox для вертикального выравнивания */}
            <h1 className="text-5xl font-bold text-white ">
              Our expert <span className="text-red-500">Marketers</span> for Boost your social media
            </h1>
            <p className="mt-6 text-xl font-fira text-gray-300 ">
              TikTok, Instagram, Facebook
            </p>
            <div className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8 ">
  <Link to="/order" className="w-full sm:w-auto">
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
</div>
          </div>
          <div className="w-full h-px bg-gray-200 my-12 opacity-25"></div>
        </div>
        <div className="flex justify-between mt-12">
          <p className="text-almost-white font-bold text-xl mt-7 ">We work with the most popular social media:</p>
          <div className="flex flex-col md:flex-row xl:flex-row md:space-x-8 space-y-3">
          <img className='mt-3 ' src={Tiktok} alt="TiktokIcon" loading="lazy" />
          <img className='' src={Instagram} alt="Instagram" loading="lazy"/>
          <img className='' src={Facebook} alt="JavaScript" loading="lazy" />
          </div>
        </div>
      </div>
    </section>






    <section>
        <div className='bg-gray-900 p-5 text-center relative'>
         <h1 className='m-5 text-almost-white text-6xl font-extrabold '>Are you ready to go viral?</h1>
         <div className=''>
         <p className='m-5 text-gray-100 text-2xl'>Start or improve your way to popularity from just<span className='text-sky-500 text-3xl font-semibold'> £20!</span></p>
         <Link to='/order'>
         <Button
                  hasWhiteStyle={true}
                  className=""
                >
                  Get Started
                </Button>
                </Link>
         </div>
        </div>
    </section>





    <Wrapper>
    <section>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-300'>
    <div className='flex flex-col items-center'>
    <img className="w-1/2 h-auto m-10 " src={MarketingIcon} alt="Web Icon" loading="lazy" />
          <h1 className='font-bold text-lg text-almost-white '>What is Digital Marketing?</h1>
          <p className='m-5 text-gray-300 '>Digital marketing for social media involves creating and implementing strategies to promote brands, products, or services across social media platforms. Digital marketers use various tools, techniques, and content—such as posts, ads, videos, and stories—to engage target audiences, increase brand visibility, and drive user interaction.</p>
        </div>
        <div className='flex flex-col items-center'>
        <img className="w-1/2 h-auto m-10 " src={WhyChooseUsIcon} alt="Web Icon" loading="lazy" />
        <h1 className='font-bold text-lg text-almost-white '>Why Choose Us for Boost you Social?</h1>
          <p className='m-5 text-gray-300 '>We bring a mix of creativity, strategic expertise, and personalized solutions to craft digital marketing campaigns that engage and convert. Our team specializes in building targeted, data-driven social media strategies and content that boost brand visibility, foster customer relationships, and drive measurable results. </p>
        </div>
      </div>
      </section>
      </Wrapper>




      <Wrapper>
      <div className="bg-gray-900 rounded-lg shadow-md py-20 px-4 md:px-8 mt-14">

<div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6">
<div className="flex-1">
<h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
Want to be a blogger?
</h3>
<p className="text-lg text-gray-300">
Want to be a blogger but not sure how to create engaging content or post effectively? We’ll develop a custom content strategy and guide you on how to create captivating posts for your audience.
</p>
</div>
<div className="block md:w-1/2">
<img
src={Blogger}
className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
alt="Online Store Showcase"
/>
</div>
</div>



<div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>




<div className="mt-12 flex flex-col md:flex-row items-center md:text-right sm:text-center gap-6">

<div className="block md:w-1/2">
<img
src={BrandRefresh}
className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
alt="Online Store Showcase"
/>
</div>

<div className="flex-1">
<h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
Need to refresh and revitalize your brand on social media?
</h3>
<p className="text-lg text-gray-300">
Our team will handle everything from posting schedules to engagement strategies, so your brand stays active and relevant.
</p>

</div>
</div>





<div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>





<div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6">
<div className="flex-1">
<h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
Analytics & Reporting
</h3>
<p className="text-lg text-gray-300">
Want to know what’s working and what’s not? We provide in-depth analytics and reports, helping you track your performance and adjust strategies for better results.
</p>
</div>
<div className="block md:w-1/2">
<img
src={Analytics}
className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
alt="Online Store Showcase"
/>
</div>
</div>

</div>
<section>
        <div className='bg-gray-900 p-5 my-5 rounded-lg text-center relative'>
         <h1 className='m-5 text-almost-white text-6xl font-extrabold '>Get a free consultation</h1>
         <div className=''>
         <p className='m-5 text-gray-100 text-2xl'>Get professional advice right NOW!<span className='text-sky-500 text-3xl font-semibold'> £20!</span></p>
         <Link to="/order">
         <Button
                  hasWhiteStyle={true}
                >
                  Get Started
                </Button>
                </Link>
         </div>
        </div>
    </section>
</Wrapper>
    </>
  );
}

export default DigMarketing;