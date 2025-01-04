import React from "react";
import { Button } from "../button";
import { motion } from "framer-motion"; // Импортируем framer-motion
import { useInView } from "react-intersection-observer"; // Импортируем хук для отслеживания видимости

const FeatureCard = ({ title, description, icon, button, onButtonClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Чтобы анимация срабатывала при каждом попадании в область видимости
    threshold: 0.2, // Элемент должен быть видим хотя бы на 20%
  });

  // Уникальные анимации для каждого элемента
  const animationVariants = {
    hidden: { opacity: 0, y: 50 }, // Начальное состояние
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Конечное состояние
    hover: { scale: 1.05, transition: { duration: 0.3 } } // Анимация при наведении
  };

  return (
    <motion.div
      className="bg-gradient-to-t from-gray-700 via-gray-800 to-gray-900 p-6 md:my-10 sm:my-3 first:mt-10 rounded-lg shadow-lg text-center text-almost-white transition-all duration-300 ease-in-out transform hover:scale-105 grid grid-rows-[auto,1fr,auto]"
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Анимация срабатывает в зависимости от видимости
      whileHover="hover" // Анимация при наведении
      ref={ref}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <Button
        hasWhiteStyle={true}
        className="mt-3"
        onClick={onButtonClick}
      >
        {button}
      </Button>
    </motion.div>
  );
};

export default FeatureCard;

