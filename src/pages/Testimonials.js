import React from "react";
import { Button } from "../components/button";
import ReviewsIcon from "../images/ReviewsIcon.svg";
import StarRating from "../images/starfill.svg";
import TestimonialCarousel from "../components/carousel";
import useScrollReveal from "../components/SCROLL-REVEAL/ScrollReveal";

const ReviewsSection = () => {


  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '70px' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '70px' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px' } },
    { selector: '.element-delay-1200', delay: 1200, options: { distance: '70px' } },
    { selector: '.element-delay-1400', delay: 1400, options: { distance: '70px' } },
    { selector: '.element-delay-1600', delay: 1600, options: { distance: '70px' } },
    { selector: '.element-delay-1800', delay: 1800, options: { distance: '70px' } },
  ]);

  const reviewLink = "https://g.page/r/CRMVNulv0FGUEBM/review";

  return (
    <div className="relative w-full bg-gray-900 overflow-hidden mb-10 pt-14">
      {/* Звезды на фоне */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-75 animate-fall"
            style={{
              top: `${-Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10">
        {/* Левая часть: текст и кнопки */}
        <div className="w-full xl:w-1/2 text-center p-5">
        <div className="flex justify-center space-x-2 mb-4 element-delay-200">
  {[...Array(5)].map((_, index) => (
    <img
      key={index}
      className={`w-10 sm:w-8 transition-transform duration-300 ease-in-out transform animate-jump`}
      style={{ animationDelay: `${index * 0.1}s` }} // Задержка для каждой звезды
      src={StarRating}
      alt={`Star Rating ${index + 1}`}
    />
  ))}
</div>
          <h1 className="text-4xl sm:text-3xl xl:text-5xl font-bold text-sky-500 element-delay-400">
            Reviews
          </h1>
          <h2 className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white element-delay-800">
            What Are Our Customers Saying?
          </h2>
          <div className="element-delay-1200">
          <Button onClick={() => window.open(reviewLink, "_blank")} hasWhiteStyle={true}>Leave a Review</Button>
          </div>
        </div>

        {/* Правая часть: изображение */}
        <div className="w-1/2  element-delay-1400">
          <img
            className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={ReviewsIcon}
            alt="Happy Customer"
          />
        </div>
      </div>


      <div className="flex justify-center items-center element-delay-1400">
  <div className="w-60 h-px bg-gray-600 opacity-50"></div>
</div>



      {/* Карусель отзывов */}
      <div className=" element-delay-1600">
      <TestimonialCarousel />
      </div>
    </div>
  );
};

export default ReviewsSection;



