import React, { useState } from "react";
import { Wrapper } from "../wrapper";
import useScrollReveal from "../SCROLL-REVEAL/ScrollReveal";
import Slider from "react-slick";
import FeatureCard from "../block-home-second/FeatureCard";
import TestimonialCarousel from "../carousel";
import ChatBot from "../chat-bot-script/chatbot";

const BlockHomeSecond = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-300', delay: 300, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '50px', origin: 'left' } },
    { selector: '.element-delay-500', delay: 500, options: { distance: '60px', origin: 'left' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px', origin: 'right' } },
  ]);

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

  return (
    <div className="w-6xl px-4 z-10">
      <Wrapper>
        <Slider {...carouselSettings} className="feature-slider element-delay-200">
          {[
            { title: "Software & Computer Assistance", description: "Having trouble with your software or hardware? We troubleshoot, repair, and optimize all types of devices.", icon: "💻", button: "Chat", onButtonClick: () => setIsChatOpen(true) },
            { title: "Website Development", description: "We offer website design and development services that bring your vision online. Fully responsive, user-friendly, and optimized.", icon: "🚀", button: "Explore", onButtonClick: () => handleRedirect("/web-development") },
            { title: "Graphic Design", description: "We create visuals that make your business stand out, including logos, branding, and website graphics.", icon: "✏️", button: "Explore", onButtonClick: () => handleRedirect("/graphic-design") },
            { title: "Custom PC Builds", description: "We design and assemble custom PCs to meet your exact specifications, whether for gaming, work, or personal use.", icon: "⚙️", button: "Explore", onButtonClick: () => handleRedirect("/consultationservices") },
            { title: "Social Media Marketing", description: "Effective brand promotion through social networks with engaging content and targeted ads.", icon: "🎯", button: "Explore", onButtonClick: () => handleRedirect("/digital-marketing") },
            { title: "AI Content Creation", description: "Effortlessly generate high-quality content using artificial intelligence for blogs, social media updates, and more.", icon: "🤖", button: "Explore", onButtonClick: () => handleRedirect("/ai-content-creation") },
          ].map((card, index) => (
            <div key={index} className="p-4">
              <FeatureCard {...card} />
            </div>
          ))}
        </Slider>
      </Wrapper>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <div className="py-3 element-delay-200">
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
      </div>
    </div>
  );
};

export default BlockHomeSecond;
