import React from 'react';
import { Button } from '../components/button';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';
import { Link } from 'react-router-dom';
import 'animate.css';


import Three from '../images/Three.jpg';
import Wifi from '../images/wifitroubles.jpg';
import Tech from '../images/tech.jpg';
import Files from '../images/files.jpg';
import Cybersecurity from '../images/cybersecurity.jpg';
import Software from '../images/software.jpg';


function ConsultationServices() {
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
          <source src={require('../videos/ConsultingServices.mp4')} type="video/mp4" />
          Your browser doesn't support videos
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="max-w-md mx-0 flex flex-col justify-start text-left">
              <h1 className="text-5xl font-extrabold text-white element-delay-200">
                Our expert <span className="text-sky-500">Consultants</span> for your tech needs
              </h1>
              <p className="mt-6 text-xl font-fira text-gray-300 element-delay-400">
                From Computer Repairs to Internet Setup & Full Tech Support — We are here for you.
              </p>
              <div className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8 element-delay-400">
  <Link to="/order" className="w-full sm:w-auto">
    <Button hasWhiteStyle={true}>Order page</Button>
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
            <p className="text-almost-white font-bold text-xl mt-7 element-delay-400">
              We solve any IT / TECH problem, big or small.
            </p>
          </div>
        </div>
      </section>

      <section className="p-12 bg-gray-900">
  <div className="max-w-7xl mx-auto text-center">
  <h2 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6">
  <span className="text-sky-400">Common</span> Consultation Topics
</h2>
<p className="text-lg md:text-xl text-gray-300 mb-10 opacity-80">
  Reach out to us for professional guidance on the following topics and more:
</p>


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out relative overflow-hidden group">
        <img
          src={Three} 
          alt="Computer Setup"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300"
        />
        <h3 className="text-2xl font-bold text-white mb-3 z-10 relative">
          Computer Setup & Optimization
        </h3>
        <p className="text-gray-300 z-10 relative">
          Need help setting up your computer, optimizing its performance, or fixing issues? We’ve got you covered.
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out relative overflow-hidden group">
        <img
          src={Wifi} 
          alt="Wi-Fi Troubleshooting"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300"
        />
        <h3 className="text-2xl font-bold text-white mb-3 z-10 relative">
          Internet & Wi-Fi Troubleshooting
        </h3>
        <p className="text-gray-300 z-10 relative">
          Struggling with slow internet or Wi-Fi connectivity? We’ll get you back online in no time.
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out relative overflow-hidden group">
        <img
          src={Tech}  
          alt="Tech Support"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300"
        />
        <h3 className="text-2xl font-bold text-white mb-3 z-10 relative">
          Tech Support & Repairs
        </h3>
        <p className="text-gray-300 z-10 relative">
          Having hardware or software problems? Our team provides quick and reliable repairs.
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out relative overflow-hidden group">
        <img
          src={Files} 
          alt="Data Recovery"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300"
        />
        <h3 className="text-2xl font-bold text-white mb-3 z-10 relative">
          Data Recovery & Backup
        </h3>
        <p className="text-gray-300 z-10 relative">
          Lost important files? Let us recover your data and set up secure backups to protect it.
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out relative overflow-hidden group">
  <img
    src={Cybersecurity}  
    alt="Consultation"
    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300"
  />
  <h3 className="text-2xl font-bold text-white mb-3 z-10 relative">
    Standard Consultation
  </h3>
  <p className="text-gray-300 z-10 relative">
    Reach out for expert guidance on a variety of tech-related topics and solutions.
  </p>
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
</div>


      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out relative overflow-hidden group">
        <img
          src={Software}  
          alt="Software Installation"
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-300"
        />
        <h3 className="text-2xl font-bold text-white mb-3 z-10 relative">
          Software Installation & Updates
        </h3>
        <p className="text-gray-300 z-10 relative">
          Need software installation or updates? Let our experts handle it efficiently.
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition duration-300"></div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-gray-900 p-5 my-5 text-center relative">
      <h1 className="m-5 text-almost-white text-3xl md:text-5xl font-extrabold element-delay-200">
  Get Expert Help Right Now
</h1>
<div className="element-delay-200">
  <p className="m-5 text-gray-100 text-xl md:text-2xl">
    Get a free consultation and chat with our specialist 24/7{' '}
    <span className="text-sky-500 text-2xl md:text-3xl font-semibold">RIGHT NOW!</span>
  </p>
          <div className="relative z-20 pointer-events-auto select-auto flex justify-center element-delay-800">
            <Button className="flex items-center justify-center gap-2 text-sm font-bold" hasWhiteStyle={true} onClick={(e) => {
              e.preventDefault();
              handleWhatsApp();
            }}>
              <i className="ri-whatsapp-line text-green-500 text-base font-thin"></i>
              Chat with us on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConsultationServices;


