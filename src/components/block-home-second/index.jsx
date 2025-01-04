import React, { useEffect, useState } from "react";
import { Wrapper } from "../wrapper";
import Slider from "react-slick";
import FeatureCard from "../block-home-second/FeatureCard";
import TestimonialCarousel from "../carousel";
import ChatBot from "../chat-bot-script/chatbot";
import { motion } from "framer-motion"; // Импортируем motion из framer-motion
import { useInView } from "react-intersection-observer"; // Импортируем хук из react-intersection-observer
import "slick-carousel/slick/slick.css"; // Стили для слайдера
import "slick-carousel/slick/slick-theme.css"; // Стили для слайдера

const BlockHomeSecond = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleRedirect = (path) => {
    window.location.href = path;
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  // Функция для создания анимации для каждого элемента
  const getAnimation = (index) => {
    switch (index % 3) {
      case 0:
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: "easeOut" },
        };
      case 1:
        return {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1, ease: "easeOut" },
        };
      case 2:
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, ease: "easeOut" },
        };
      default:
        return {};
    }
  };

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });


  return (
    <motion.div
      className="w-6xl py-10 md:py-5 px-4 z-10"
      ref={ref1}  
      initial={{ opacity: 0 }}
      animate={{ opacity: inView1 ? 1 : 0 }} 
      transition={{ duration: 0.8 }}
    >
      <Wrapper>
        <Slider {...carouselSettings} className="feature-slider">
          {[
            { title: "Software & Computer Assistance", description: "Having trouble with your software or hardware? We troubleshoot, repair, and optimize all types of devices.", icon: "💻", button: "Chat", onButtonClick: () => setIsChatOpen(true) },
            { title: "Website Development", description: "We offer website design and development services that bring your vision online. Fully responsive, user-friendly, and optimized.", icon: "🚀", button: "Explore", onButtonClick: () => handleRedirect("/web-development") },
            { title: "Graphic Design", description: "We create visuals that make your business stand out, including logos, branding, and website graphics.", icon: "✏️", button: "Explore", onButtonClick: () => handleRedirect("/graphic-design") },
            { title: "Custom PC Builds", description: "We design and assemble custom PCs to meet your exact specifications, whether for gaming, work, or personal use.", icon: "⚙️", button: "Explore", onButtonClick: () => handleRedirect("/consultationservices") },
            { title: "AI Content Creation", description: "Effortlessly generate high-quality content using artificial intelligence for blogs, social media updates, and more.", icon: "🤖", button: "Explore", onButtonClick: () => handleRedirect("/ai-content-creation") },
          ].map((card, index) => {
            // Применяем уникальную анимацию к каждому элементу
            const animation = getAnimation(index);
            return (
              <motion.div
                key={index}
                className="p-4"
                initial={animation.initial}
                animate={animation.animate}
                transition={animation.transition}
              >
                <FeatureCard {...card} />
              </motion.div>
            );
          })}
        </Slider>
      </Wrapper>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <motion.div
        className="py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Wrapper>
          <div className="flex justify-center my-10">
            <div className="border-l-2 border-almost-white h-14" />
          </div>
          <h2 className="text-center text-almost-white text-3xl font-bold mb-10">OUR CLIENTS</h2>
          <TestimonialCarousel />
        </Wrapper>

        <div className="flex justify-center my-10">
          <div className="border-l-2 border-almost-white h-14" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlockHomeSecond;
