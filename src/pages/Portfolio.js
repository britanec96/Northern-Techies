import React, { useState } from "react";
import { Button } from "../components/button";
import PortfolioIcon from "../images/PortfolioIcon.svg";
import Paletteline from "../images/palette-line.svg";
import Slider from "react-slick";
import useScrollReveal from "../components/SCROLL-REVEAL/ScrollReveal";
import { Link } from 'react-router-dom';


// Изображения и видео для портфолио
import image1 from "../images/Portfolio/WebSite1.png";
import image2 from "../images/Portfolio/WebSite2.png";
import image3 from "../images/Portfolio/WebSite3.png";
import image4 from "../images/Portfolio/Logo1.png";
import image5 from "../images/Portfolio/Logo2.png";
import image6 from "../images/Portfolio/Logo3.png";
import image7 from "../images/Portfolio/Branding1.png";
import image8 from "../images/Portfolio/SocialMedia1.png";
import image9 from "../images/Portfolio/SocialMedia2.png";
import image10 from "../images/One.png";
import image11 from "../images/Blogger.png";
import image12 from "../images/CreativeContent.png";
import image13 from "../images/WebDev.svg";
import video1 from '../images/Portfolio/MotionDesign.mp4';


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

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '50px', origin: 'left' } },
  ]);

  const websites = [
    {
      image: image1,
      link: "#",
    },
    {
      image: image2,
      link: "#",
    },
    {
      image: image3,
      link: "#",
    },
  ];

  const graphicdesign = [
    {
      image: image4
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
    {
      image: image7
    },
    {
      image: image8,
    },
    {
      image: image9,
    },
  ];

  const motiondesign = [
    {
      video: video1,
    },
    {
      video: image5,
    },
  ];

  const aicontent = [
    {
      image: image10,
      link: "#",
    },
    {
      image: image11,
      link: "#",
    },
    {
      image: image12,
      link: "#",
    },
    {
      image: image13,
      link: "#",
    },
  ];


  const settings = {
    dots: true, // Показывать точки навигации
    infinite: true, // Зацикливать слайдер
    speed: 500, // Скорость анимации
    slidesToShow: 3, // Количество видимых слайдов на маленьких экранах
    slidesToScroll: 1, // Сколько слайдов прокручивать за раз
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Для экранов с шириной более 768px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Для экранов с шириной более 1024px
          slidesToScroll: 1,
        },
      },
      
    ],
    
  };

  

  return (
    <>
    <div className="relative w-full bg-gray-900 overflow-hidden">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10">
        {/* Левая часть: текст и кнопки */}
        <div className="w-full xl:w-1/2 text-center p-5">
        <div className="flex justify-center items-center element-delay-200">
      <div className="relative">
        <img
          src={Paletteline} // Замените на путь к своему значку
          alt="Portfolio Icon"
          className="w-32 h-32 transition-transform duration-500 ease-in-out animate-scaleRotate hover:scale-110 hover:rotate-12"
        />
      </div>
    </div>
          <h1 className="text-4xl sm:text-3xl xl:text-5xl font-bold text-sky-500 element-delay-400">
           Our Portfolio
          </h1>
          <h2 className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white element-delay-400">
          Explore our work showcasing creativity
          </h2>
          <div className="element-delay-400">
            <Link to="/order">
          <Button hasWhiteStyle={true}>Consultation</Button>
          </Link>
          </div>
        </div>

        {/* Правая часть: изображение */}
        <div className="w-1/2  element-delay-400">
          <img
            className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={PortfolioIcon}
            alt="Happy Customer"
          />
        </div>
      </div>
      
    <div className="flex justify-center items-center mb-10 element-delay-400">
  <div className="w-60 h-px bg-gray-600 opacity-50"></div>
</div>

    </div>


    <section className="bg-almost-black text-white mt-10">
    <div className="element-delay-200">
      <h1 className="text-sky-500 md:text-7xl sm:text-4xl  font-bold bg-gray-900 px-3 text-left ">
        WEB DEVELOPMENT
      </h1>
      {/* Слайдер */}
      <Slider {...settings}>
        {websites.map((project, index) => (
          <div key={index} className="bg-gray-800 shadow-lg overflow-hidden group">
            {/* Изображение */}
            <div className="overflow-hidden cursor-pointer opacity-50 hover:opacity-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(project.image)}
              />
            </div>
          </div>
        ))}
      </Slider>
      </div>




      <div className="my-12 element-delay-200">
      <h1 className="text-almost-white md:text-7xl sm:text-4xl font-bold bg-gray-900 px-3 text-right">
        GRAPHIC DESIGN
      </h1>
      {/* Слайдер */}
      <Slider {...settings}>
        {graphicdesign.map((project, index) => (
          <div key={index} className="bg-gray-800 shadow-lg overflow-hidden group">
            {/* Изображение */}
            <div className="overflow-hidden cursor-pointer opacity-50 hover:opacity-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(project.image)}
              />
            </div>
          </div>
        ))}
      </Slider>
      </div>




      <div className="my-12 element-delay-200">
        <h1 className="text-sky-500 md:text-7xl sm:text-4xl font-bold bg-gray-900 px-3">MOTION DESIGN</h1>
      {/* Слайдер */}
      <Slider {...settings}>
        {motiondesign.map((project, index) => (
          <div key={index} className="bg-gray-800 shadow-lg overflow-hidden group">
            {/* Изображение */}
            <div className="overflow-hidden cursor-pointer opacity-50 hover:opacity-100">
      <video
              src={project.video} // Укажите путь к видео
              className="w-full h-60 object-cover"
              loop
              autoPlay
              muted
            />
            </div>
          </div>
        ))}
      </Slider>
      </div>






      <div className="element-delay-200">
        <h1 className="text-almost-white md:text-7xl sm:text-4xl font-bold bg-gray-900 px-3 text-right"> AI CONTENT</h1>
       {/* Слайдер */}
       <Slider {...settings}>
        {aicontent.map((project, index) => (
          <div key={index} className="bg-gray-800 shadow-lg overflow-hidden group">
            {/* Изображение */}
            <div className="overflow-hidden cursor-pointer opacity-50 hover:opacity-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(project.image)}
              />
            </div>
          </div>
        ))}
      </Slider>
      </div>






      {/* Модальное окно */}
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
              className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
      </>
  );
};

export default Portfolio;
