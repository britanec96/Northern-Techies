import React from 'react';
// Изображения
import GraphicDesignIcon from '../images/GraphicDesignIcon.svg';
import WhyChooseUsIcon from '../images/WhyChooseUsIcon.svg';
import PhotoshopIcon from '../images/PhotoshopIcon.svg';
import IllustratorIcon from '../images/IllustratorIcon.svg';
import FigmaIcon from '../images/FigmaIcon.svg';
import BlenderIcon from '../images/BlenderIcon.svg';
import CanvaIcon from '../images/CanvaIcon.svg';

// Компоненты
import { Button } from '../components/button';
import { Wrapper } from '../components/wrapper';
import CardListGraphicDesign from '../components/cards/CardsGraphDesign';
import { Link } from 'react-router-dom';


function GraphicDesignPage() {


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
    <source src={require('../videos/GraphicDesignPrezi.mp4')} type="video/mp4" />
   Your browser doesn't support videos
  </video>
  <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6">
          <div className="max-w-md mx-0 flex flex-col justify-start text-left"> 
            <h1 className="text-5xl font-bold text-almost-white ">
              Our the best <span className="text-yellow-500">Graphic Designers</span> for any job
            </h1>
            <p className="mt-6 text-xl font-fira text-gray-300 ">
            (Adobe Photoshop,Adobe Illustrator, Figma or Adobe XD, Blender 3D, Canva)
            </p>
            <div className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8 ">
  <Link to="/order" className="w-full sm:w-auto">
    <Button hasWhiteStyle={true}>Order</Button>
  </Link>
  <Button
    className="flex items-center gap-2 w-auto"
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
    className="flex items-center justify-center gap-2 w-auto"
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
<div className="w-full h-px bg-gray-200 my-12 opacity-20"></div>
<div className="w-full md:flex md:items-center justify-between mt-12">
<p className="text-almost-white font-bold text-center md:text-left text-xl mt-7 mb-4 md:mb-0">
    The best programs for your design idea:
  </p>
  <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start items-center mt-5 md:mt-0">
    <img
      className="w-12 h-12 md:w-16 md:h-16 "
      src={PhotoshopIcon}
      alt="Photoshop"
      loading="lazy"
    />
    <img
      className="w-12 h-12 md:w-16 md:h-16 "
      src={IllustratorIcon}
      alt="Illustrator"
      loading="lazy"
    />
    <img
      className="w-12 h-12 md:w-16 md:h-16 "
      src={FigmaIcon}
      alt="Figma"
      loading="lazy"
    />
    <img
      className="w-12 h-12 md:w-16 md:h-16 "
      src={BlenderIcon}
      alt="Blender"
      loading="lazy"
    />
    <img
      className="w-12 h-12 md:w-16 md:h-16 "
      src={CanvaIcon}
      alt="Canva"
      loading="lazy"
    />
  </div>
</div>

      </div>
    </section>






    <section>
        <div className='bg-gray-900 p-5 text-center relative'>
         <h1 className='m-5 text-almost-white text-6xl font-extrabold '>Ready to elevate your brand?</h1>
         <div className=''>
         <p className='m-5 text-gray-100 text-2xl '>Get started with a custom graphic design package from just<span className='text-sky-500 text-3xl font-semibold'> £10!</span></p>
         <Button
         onClick={scrollToSection}
         className='m-5 '
         hasWhiteStyle={true}>
          Order Now
         </Button>
         </div>
        </div>
    </section>





    <Wrapper>
    <section>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-300'>
    <div className='flex flex-col items-center '>
    <img className="w-1/2 h-auto m-10 " src={GraphicDesignIcon} alt="Graphic Design" loading="lazy" />
          <h1 className='font-bold text-lg text-almost-white '>What is Graphic Design?</h1>
          <p className='m-5 text-gray-300 '>Graphic design is the art of visual communication that combines text and images to convey ideas and messages effectively. It plays a crucial role in branding, advertising, and user experience. Through the use of color, typography, and composition, graphic design helps businesses create a strong identity and engage their audience.</p>
        </div>
        <div className='flex flex-col items-center'>
        <img className="w-1/2 h-auto m-10 " src={WhyChooseUsIcon} alt="Web Icon" loading="lazy" />
        <h1 className='font-bold text-lg text-almost-white '>Why Choose Us for Graphic Design?</h1>
          <p className='m-5 text-gray-300 '>At our agency, we understand that every project is unique, and so are your budgetary needs. That’s why we offer flexible budget plans tailored for everyone—from startups to established businesses. Our commitment to providing high-quality graphic design services ensures you receive exceptional value without compromising on creativity or effectiveness.</p>
        </div>
      </div>
      </section>
      <section>
        <div className='mt-20 mb-20 bg-gray-900 text-almost-white rounded-lg p-5 text-center md:text-left '>
          <h1 className='text-center xl:text-5xl sm:text-3xl font-bold m-5'>How Does Process Work With Us?</h1>
        <div className='grid xl:grid-cols-4 sm:grid-cols-1'>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-creative-commons-by-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold font'>Consultation and 50% Prepayment</h1>
            <p>We discuss your project and collect a 50% prepayment to begin.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-draft-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Concept Creation</h1>
            <p>Based on our initial discussions, our designers create several concepts and ideas.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-test-tube-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Development and Refinement</h1>
            <p>Once the concept is approved, we work on the final design.</p>
          </div>
          <div className='flex flex-col justify-center sm:items-center xl:items-start'>
          <i className="ri-rocket-line text-6xl text-sky-500 m-5 "></i>
            <h1 className='text-xl font-bold'>Delivery of Final Materials</h1>
            <p>After the design is finalized, we provide you with all the necessary files in high quality, ready for use.</p>
          </div>
        </div>
        </div>
      </section>
      </Wrapper>



          <div id="targetSection" className='bg-gray-900 p-10 '>
          <h1 className='md:text-6xl text-4xl text-center text-almost-white font-black mb-4 '>Choose Your Graphic Design Solution:</h1>
        <CardListGraphicDesign/>
        </div>
        
    </>
  );
}

export default GraphicDesignPage;


