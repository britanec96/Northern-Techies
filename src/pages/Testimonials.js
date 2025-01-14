import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/button";
import ReviewsIcon from "../images/ReviewsIcon.svg";
import StarRating from "../images/starfill.svg";
import TestimonialCarousel from "../components/carousel";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ReviewsSection = () => {
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

      <motion.div
        className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Левая часть: текст и кнопки */}
        <motion.div className="w-full xl:w-1/2 text-center p-5" variants={slideInLeft}>
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <motion.img
                key={index}
                className="w-10 sm:w-8"
                style={{ animationDelay: `${index * 0.1}s` }}
                src={StarRating}
                alt={`Star Rating ${index + 1}`}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              />
            ))}
          </div>
          <motion.h1
            className="text-4xl sm:text-3xl xl:text-5xl font-bold text-sky-500"
            variants={fadeInUp}
          >
            Reviews
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white"
            variants={fadeInUp}
          >
            What Are Our Customers Saying?
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Button onClick={() => window.open(reviewLink, "_blank")} hasWhiteStyle={true}>
              Leave a Review
            </Button>
          </motion.div>
        </motion.div>

        {/* Правая часть: изображение */}
        <motion.div className="w-1/2" variants={slideInRight}>
          <img
            className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={ReviewsIcon}
            alt="Happy Customer"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center items-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="w-60 h-px bg-gray-900 opacity-50"></div>
      </motion.div>

      {/* Карусель отзывов */}
      <motion.div
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <TestimonialCarousel />
      </motion.div>
    </div>
  );
};

export default ReviewsSection;

