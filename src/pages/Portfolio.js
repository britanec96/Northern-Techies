import React, { useState } from "react";
import { Button } from "../components/button";
import Paletteline from "../images/palette-line.svg";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Изображения и видео для портфолио
import {
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9,
  video1
} from '../images/Portfolio/import';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const AnimatedSection = ({ children, animation }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsModalOpen(false);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const portfolioSections = [
    {
      title: "WEB DEVELOPMENT",
      content: [
        { image: image1, link: "#" },
        { image: image2, link: "#" },
        { image: image3, link: "#" }
      ]
    },
    {
      title: "GRAPHIC DESIGN",
      content: [
        { image: image4 },
        { image: image5 },
        { image: image6 },
        { image: image7 },
        { image: image8 },
        { image: image9 }
      ]
    },
    {
      title: "MOTION DESIGN",
      content: [
        { video: video1 },
        { video: image5 }
      ]
    },
    {
      title: "AI CONTENT",
      content: []
    }
  ];

  return (
    <div className="relative w-full bg-gray-900 overflow-hidden pt-14">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10">
        <div className="text-center p-5">
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                src={Paletteline}
                alt="Portfolio Icon"
                className="w-32 h-32 transition-transform duration-500 ease-in-out animate-scaleRotate hover:scale-110 hover:rotate-12"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-3xl xl:text-5xl font-bold text-sky-500">
            <AnimatedSection animation={fadeInUp}>Our Portfolio</AnimatedSection>
          </h1>
          <h2 className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white">
            <AnimatedSection animation={fadeInUp}>Explore our work showcasing creativity</AnimatedSection>
          </h2>
          <AnimatedSection animation={fadeInUp}>
          <Link to="/services/customize-your-order">
            <Button hasWhiteStyle={true}>Plan Your Project</Button>
          </Link>
          </AnimatedSection>
        </div>

      </div>
      <div className="flex justify-center items-center mb-10">
        <div className="w-60 h-px bg-gray-900 opacity-50"></div>
      </div>

      <section className="bg-almost-black text-white mt-10">
        {portfolioSections.map((section, index) => (
          <div key={index} className="my-12">
            <h1 className="text-sky-500 md:text-7xl sm:text-4xl font-bold bg-gray-900 px-3 text-left">
              <AnimatedSection animation={slideInRight}>{section.title}</AnimatedSection>
            </h1>
            <Slider {...sliderSettings}>
              {section.content.map((project, idx) => (
                <div key={idx} className="bg-gray-900 shadow-lg overflow-hidden group">
                  {project.image ? (
                    <div className="overflow-hidden cursor-pointer opacity-50 hover:opacity-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        onClick={() => openModal(project.image)}
                      />
                    </div>
                  ) : (
                    <div className="overflow-hidden cursor-pointer opacity-50 hover:opacity-100">
                      <video
                        src={project.video}
                        className="w-full h-60 object-cover"
                        loop
                        autoPlay
                        muted
                      />
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={currentImage}
              alt="Full size"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-gray-900 text-white p-2 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
