import React, { useEffect, useState } from "react";
import { Wrapper } from "../wrapper";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatBot from "../chat-bot-script/chatbot";
import TestimonialCarousel from "../carousel";

// Изображения для разделов
import WebDevImage from "../../images/website-development.png";
import PcHelpImage from "../../images/pc-assistants.png";
import GraphicDesignImage from "../../images/graphic-design.png";
import EssayWritingImage from "../../images/essey-writing.png";
import ConsultingImage from "../../images/consulting-services.png";
import { Button } from "../button";

const BlockHomeSecond = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  return (
    <motion.div
      className="w-full pt-14 pb-2 bg-gradient-to-br from-gray-900 to-gray-800"
      ref={ref}
      initial="hidden"
      animate={controls}
    >
      {/* Hero Section */}
      <Wrapper>
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-400 mb-6 px-6">
            Affordable & Fast Tech Solutions
          </h1>
          <p className="sm:text-sm md:text-xl px-6 text-almost-white">
            From web development to consulting any problem, we offer high-quality services at unbeatable prices.
          </p>
        </motion.div>
      </Wrapper>

      {/* Services Section */}
      <Wrapper>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={fadeInUp}
        >
          {[
            {
              title: "Web Development",
              online: "Remote",
              description: "We create stunning, responsive websites from scratch tailored to your needs.",
              image: WebDevImage,
              link: "/services/web-development",
            },
            {
              title: "PC Assistance",
              online: "Remote / On-site",
              description: "Get help with software, hardware, and custom PC builds.",
              image: PcHelpImage,
              link: "/services/consultation-services",
            },
            {
              title: "Graphic Design",
              online: "Remote",
              description: "Professional designs for logos, branding, and more.",
              image: GraphicDesignImage,
              link: "/services/graphic-design",
            },
            {
              title: "Essay Writing",
              online: "Remote",
              description: "High-quality essays and academic writing services for your studying. 100% guaranteed pass.",
              image: EssayWritingImage,
              link: "/services/consultation-services",
            },
            {
              title: "Consulting",
              online: "Remote / On-site",
              description: "Consulting on any topic, from promoting your business to setting up your computer. We know how computers and the internet work for you.",
              image: ConsultingImage,
              link: "/services/consultation-services",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative sm:mx-6 md:mx-0 rounded-3xl bg-gray-800/50 backdrop-blur-lg  overflow-hidden shadow-lg hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow"
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover"
              />
              <div className="p-6">
              <h2 className="text-3xl font-black text-almost-white mb-4">
  {service.title}
</h2>

                <h2 className="text-xl font-light text-indigo-400 mb-2">{service.online}</h2>
                <p className="text-gray-200 mb-6">{service.description}</p>
                <a href={service.link} className="bg-gradient-to-r from-sky-200 to-purple-100 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
  Details
</a>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>

      {/* Testimonials Section */}
      <Wrapper>
        <motion.div
          className="py-16 bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-2xl"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-400 mb-12">
            What Our Clients Say
          </h2>
          <TestimonialCarousel />
        </motion.div>
      </Wrapper>

      {/* Call-to-Action Section */}
      <Wrapper>
        <motion.div
          className="text-center my-20"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-400 mb-6">
            Ready to Get Started?
          </h2>
          <p className="sm:text-sm md:text-xl text-almost-white mb-8">
            Contact us today to discuss your problem and get a free consultation.
          </p>
            <Button
              hasWhiteStyle={true} 
              onClick={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
            >
              CHAT NOW
            </Button>
        </motion.div>
      </Wrapper>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </motion.div>
  );
};

export default BlockHomeSecond;