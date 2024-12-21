import React, { useState } from 'react';
// Изображения


// Компоненты
import { Button } from '../components/button';
import OrderFormModal from '../components/modal-order-form';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';


function ConsultationServices() {

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '50px', origin: 'left' } },
  ]);

  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");


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
            <div className="max-w-md mx-0 flex flex-col justify-start text-left">
              <h1 className="text-5xl font-bold text-white element-delay-200">
                Our expert <span className="text-green-500">Consultants</span> for your needs
              </h1>
              <p className="mt-6 text-xl font-fira text-gray-300 element-delay-400">
                Computers, Internet, Tech Support
              </p>
              <div className="flex xl:flex-row md:flex-row sm:flex-col gap-6 mt-8 element-delay-400">
                <Button
                  onClick={toggleModal}
                  hasWhiteStyle={true}
                  className=""
                >
                  Contact Form
                </Button>
                <Button
                  onClick={toggleModal}
                  hasWhiteStyle={true}
                  className=""
                >
                  Order Page
                </Button>
                <Button 
  className="flex items-center justify-center gap-2 text-md" 
  hasWhiteStyle={true} 
  onClick={(e) => {
    e.preventDefault();
    handleWhatsApp();
  }}
>
  <i className="ri-whatsapp-line text-green-500 text-base font-thin"></i>
  Chat Now
</Button>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 my-12 opacity-25"></div>
          </div>
          <div className="flex justify-between mt-12">
            <p className="text-almost-white font-bold text-xl mt-7 element-delay-400">
              We work with all of IT problems
            </p>
          </div>
        </div>
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
        <div className="bg-gray-900 p-5 mb-5 text-center relative">
          <h1 className="m-5 text-almost-white text-6xl font-extrabold element-delay-200">
            Struggling with Tech Issues?
          </h1>
          <div className="element-delay-200">
            <p className="m-5 text-gray-100 text-2xl">
              Get professional help right{' '}
              <span className="text-sky-500 text-3xl font-semibold">NOW!</span>
            </p>
            <div className="relative z-20 pointer-events-auto select-auto flex justify-center element-delay-800">
        <Button 
  className="flex items-center justify-center gap-2 text-sm font-bold" 
  hasWhiteStyle={true} 
  onClick={(e) => {
    e.preventDefault();
    handleWhatsApp();
  }}
>
  <i className="ri-whatsapp-line text-green-500 text-base font-thin"></i>
  CHAT NOW
</Button>
</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConsultationServices;
