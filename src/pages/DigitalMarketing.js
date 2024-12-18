import React, { useState } from 'react';
// Изображения
import MarketingIcon from '../images/MarketingIcon.svg';
import WhyChooseUsIcon from '../images/WhyChooseUsIcon.svg';
import Tiktok from '../images/Tiktoklogo.svg';
import Instagram from '../images/Instagramlogo.svg';
import Facebook from '../images/Facebooklogo.svg';
import Blogger from '../images/Blogger.png';
import BrandRefresh from '../images/BrandRefresh.png';
import Analytics from '../images/Analytics.png';



// Компоненты
import { Button } from '../components/button';
import OrderFormModal from '../components/modal-order-form';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';
import { Wrapper } from '../components/wrapper';


function DigMarketing() {

    // Открытие/закрытие модального окна
  const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen((prev) => !prev);
    };


  // ScrollReveal эффект при загрузке
    useScrollReveal([
      { selector: '.element-delay-200', delay: 200, options: { distance: '70px' } },
      { selector: '.element-delay-400', delay: 400, options: { distance: '70px' } },
      { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
      { selector: '.element-delay-1200', delay: 1200, options: { distance: '70px' } },
      { selector: '.element-delay-1400', delay: 1400, options: { distance: '70px' } },
      { selector: '.element-delay-1600', delay: 1600, options: { distance: '70px' } },
      { selector: '.element-delay-1800', delay: 1800, options: { distance: '70px' } },
    ]);
  

  // Автоматический скролл
  const scrollToSection = () => {
    const targetSection = document.getElementById('targetSection');
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  
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
            <h1 className="text-5xl font-bold text-white element-delay-200">
              Our expert <span className="text-red-500">Marketers</span> for Boost your social media
            </h1>
            <p className="mt-6 text-xl font-fira text-gray-300 element-delay-400">
              TikTok, Instagram, Facebook
            </p>
            <div className="mt-8 element-delay-400">
              <Button
                onClick={toggleModal}
                hasWhiteStyle={true}
                className=""
              >
                Contact Us Today
              </Button>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 my-12 opacity-25"></div>
        </div>
        <div className="flex justify-between mt-12">
          <p className="text-almost-white font-bold text-xl mt-7 element-delay-800">We work with the most popular social media:</p>
          <div className="flex flex-col md:flex-row xl:flex-row md:space-x-8 space-y-3">
          <img className='mt-3 element-delay-800' src={Tiktok} alt="TiktokIcon" loading="lazy" />
          <img className='element-delay-1200' src={Instagram} alt="Instagram" loading="lazy"/>
          <img className='element-delay-1400' src={Facebook} alt="JavaScript" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
          <div
            id="modal-background"
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          >
            <OrderFormModal toggleModal={toggleModal} />
          </div>
        )}
    </section>






    <section>
        <div className='bg-gray-900 p-5 text-center relative'>
         <h1 className='m-5 text-almost-white text-6xl font-extrabold element-delay-1200'>Are you ready to go viral?</h1>
         <div className='element-delay-1400'>
         <p className='m-5 text-gray-100 text-2xl'>Start or improve your way to popularity from just<span className='text-sky-500 text-3xl font-semibold'> £20!</span></p>
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
    <img className="w-1/2 h-auto m-10 element-delay-1200" src={MarketingIcon} alt="Web Icon" loading="lazy" />
          <h1 className='font-bold text-lg text-almost-white element-delay-1400'>What is Digital Marketing?</h1>
          <p className='m-5 text-gray-300 element-delay-1600'>Digital marketing for social media involves creating and implementing strategies to promote brands, products, or services across social media platforms. Digital marketers use various tools, techniques, and content—such as posts, ads, videos, and stories—to engage target audiences, increase brand visibility, and drive user interaction.</p>
        </div>
        <div className='flex flex-col items-center'>
        <img className="w-1/2 h-auto m-10 element-delay-1200" src={WhyChooseUsIcon} alt="Web Icon" loading="lazy" />
        <h1 className='font-bold text-lg text-almost-white element-delay-1400'>Why Choose Us for Boost you Social?</h1>
          <p className='m-5 text-gray-300 element-delay-1600'>We bring a mix of creativity, strategic expertise, and personalized solutions to craft digital marketing campaigns that engage and convert. Our team specializes in building targeted, data-driven social media strategies and content that boost brand visibility, foster customer relationships, and drive measurable results. </p>
        </div>
      </div>
      </section>
      </Wrapper>




      <Wrapper>
      <div className="bg-gray-900 rounded-lg shadow-md py-20 px-4 md:px-8 my-20">

<div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6">
<div className="flex-1">
<h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">
Want to be a blogger?
</h3>
<p className="text-lg text-gray-300">
Want to be a blogger but not sure how to create engaging content or post effectively? We’ll develop a custom content strategy and guide you on how to create captivating posts for your audience.
</p>
<div className="mt-6">
<Button hasWhiteStyle={true}>
  Start
</Button>
</div>
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

<div className="mt-6">
<Button hasWhiteStyle={true}>
Start
</Button>
</div>
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
<div className="mt-6">
<Button hasWhiteStyle={true}>
Start
</Button>
</div>
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
</Wrapper>
    </>
  );
}

export default DigMarketing;