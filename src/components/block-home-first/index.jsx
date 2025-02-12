import React, { useState, useEffect } from 'react';
import { Wrapper } from '../wrapper';
import OrderFormModal from '../modal-order-form';
import { Button } from "../button";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export const BlockHomeFirst = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(prev => !prev);

  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const isMobile = window.matchMedia("(max-width: 768px)").matches; 
      const threshold = isMobile ? 270 : 100; 

      let newOpacity = 1;

      if (scrollPosition > threshold) {
        newOpacity = Math.max(1 - (scrollPosition - threshold) / 500, 0);
      }

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section 
      style={{ opacity }} 
      initial={{ opacity: 1 }}
      animate={{ opacity }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-h-full"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover mask-video opacity-50"
        autoPlay
        loop
        muted
        playsInline
        onContextMenu={(e) => e.preventDefault()}
        draggable="false"
      >
        <source src={require('../../videos/CoddingFootage.mp4')} type="video/mp4" />
      </video>

      <div className="relative z-10 pointer-events-none select-none">
        <Wrapper>
          <motion.div
            className="flex flex-col max-h-full overflow-hidden sm:text-center md:text-left md:justify-start sm:justify-center md:items-start sm:items-center"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-black text-almost-white text-4xl md:text-6xl my-14 xl:mt-56 md:mt-28 sm:mt-52 whitespace-pre-line">
              Budget <TypeAnimation
                sequence={["IT", 2000, "TECH", 2000]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                className="text-sky-500"
              />services starting from £10
              <span className="block my-7 p-2 px-3 rounded-md bg-gray-900 bg-opacity-40 text-sky-500 font-thin text-base md:text-xl">
                At Northern Techies, our mission is to make IT and technology accessible to everyone.
              </span>
            </h1>

            <motion.div className="w-full text-2xl text-almost-white" variants={textVariant}>
              <div className="flex gap-2 mb-8 items-center justify-center md:justify-start sm:text-center md:text-left">
                <span className="text-sky-500">—</span>
                <p>Professional experts in web development, design, and tech assistance</p>
              </div>
              <div className="flex gap-2 mb-8 items-center justify-center md:justify-start sm:text-center md:text-left">
                <span className="text-sky-500">—</span>
                <p>Unbeatable prices starting from just £10</p>
              </div>
              <div className="flex gap-2 items-center justify-center md:justify-start sm:text-center md:text-left">
                <span className="text-sky-500">—</span>
                <p>Fast, reliable, and creative problem-solving for all your digital needs</p>
              </div>
            </motion.div>
          </motion.div>
        </Wrapper>

        {isModalOpen && <OrderFormModal toggleModal={toggleModal} />}
      </div>

      <Wrapper>
      <motion.div
  className="pointer-events-auto select-auto flex gap-5 mt-16 pb-20 sm:justify-center md:justify-start"
  variants={buttonVariant}
  initial="hidden"
  animate="visible"
>
  <Button 
    hasWhiteStyle={true} 
    onClick={(e) => {
      e.preventDefault();
      handleWhatsApp();
    }}
  >
    💬 CHAT NOW
  </Button>

  <Button
    hasWhiteStyle={true}
    onClick={() => {
      const email = 'support@northerntechies.com';
      const subject = encodeURIComponent('Service Request');
      const body = encodeURIComponent('Hello, I would like to request your services.');
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }}
  >
    📧 EMAIL NOW
  </Button>

  <Link to="/services/customize-your-order" className="antialiased cursor-pointer tracking-widest">
    <Button hasWhiteStyle={true}>
      🚀 GET STARTED
    </Button>
  </Link>
</motion.div>
      </Wrapper>
    </motion.section>
  );
};

export default BlockHomeFirst;
