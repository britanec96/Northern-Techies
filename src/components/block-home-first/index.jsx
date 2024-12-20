import React, { useState } from 'react';
import { Wrapper } from '../wrapper';
import OrderFormModal from '../modal-order-form';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';
import { Button } from "../button";
import { Link } from 'react-router-dom';

export const BlockHomeFirst = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '60px', origin: 'left' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px', origin: 'right' } },
    { selector: '.element-delay-1200', delay: 1200, options: { distance: '70px', origin: 'bottom' } },
    { selector: '.element-delay-1400', delay: 1400, options: { distance: '70px', origin: 'bottom' } },
    { selector: '.element-delay-1600', delay: 1600, options: { distance: '70px', origin: 'bottom' } },
    { selector: '.element-delay-1800', delay: 1800, options: { distance: '70px', origin: 'top' } },
  ]);

  const toggleModal = () => setModalOpen(prev => !prev);

  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");

  return (
    <section className="relative w-full h-[55rem] max-h-full">
      <video
        className="absolute inset-0 w-full h-full object-cover mask-video opacity-50 element-delay-200"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={require('../../videos/CoddingFootage.mp4')} type="video/mp4" />
      </video>

      <div className="relative z-10 pointer-events-none select-none">
        <Wrapper>
          <div className="flex flex-col max-h-full overflow-hidden sm:text-center md:text-left md:justify-start sm:justify-center md:items-start sm:items-center">
            <h1 className="font-extrabold text-almost-white text-4xl md:text-6xl my-14 xl:mt-56 md:mt-28 sm:mt-16 whitespace-pre-line element-delay-400">
              Budget IT services starting from £10
              <span className="inline-block my-7 p-2 px-3 rounded-md bg-gray-800 bg-opacity-40 text-sky-500 font-thin text-base md:text-xl element-delay-800">
                At Northern Techies, our mission is to make IT and technology accessible to everyone.
              </span>
            </h1>

            <div className="w-full text-2xl text-almost-white">
              <div className="flex gap-2 mb-8 items-center justify-center md:justify-start sm:text-center md:text-left element-delay-1200">
                <span className="text-sky-500">—</span>
                <p>Professional experts in web development, design, and tech assistance</p>
              </div>
              <div className="flex gap-2 mb-8 items-center justify-center md:justify-start sm:text-center md:text-left element-delay-1400">
                <span className="text-sky-500">—</span>
                <p>Unbeatable prices starting from just £10</p>
              </div>
              <div className="flex gap-2 items-center justify-center md:justify-start sm:text-center md:text-left element-delay-1600">
                <span className="text-sky-500">—</span>
                <p>Fast, reliable, and creative problem-solving for all your digital needs</p>
              </div>
            </div>
          </div>
        </Wrapper>

        {isModalOpen && <OrderFormModal toggleModal={toggleModal} />}
      </div>

      <Wrapper>
        <div className="relative z-20 pointer-events-auto select-auto flex gap-5 mt-16 sm:justify-center md:justify-start element-delay-1800">
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


          <Button
  className="text-sm font-bold"
  hasWhiteStyle={true}
  onClick={() => {
    const email = 'Floxstreet@gmail.com';
    const subject = encodeURIComponent('Service Request');
    const body = encodeURIComponent('Hello, I would like to request your services.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }}
>
  EMAIL NOW
</Button>


          <Link to="/order" className="antialiased cursor-pointer tracking-widest">
            <Button className="text-sm font-bold bg-almost-white text-black" hasWhiteStyle={true}>
              ORDER PAGE
            </Button>
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default BlockHomeFirst;

