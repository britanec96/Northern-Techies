import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  // Состояние для управления видимостью кнопки
  const [isVisible, setIsVisible] = useState(false);

  // Хук для отслеживания прокрутки
  useEffect(() => {
    const handleScroll = () => {
      // Если прокрутка страницы больше 300px, показываем кнопку
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Добавляем обработчик события прокрутки
    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Функция для прокрутки страницы наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // плавная прокрутка
    });
  };

  return (
<button
  onClick={scrollToTop}
  className={`fixed bottom-10 left-10 p-4 bg-sky-500 text-white rounded-full shadow-lg transition-opacity duration-500 ease-out ${
    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
  } hover:bg-sky-600`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7-7-7 7M12 4v12"
    />
  </svg>
</button>

  
  );
};

export default ScrollToTopButton;

