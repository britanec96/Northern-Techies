import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const DiscountModal = () => {
  // Состояния для управления модальным окном и формой
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    promocode: "LUCKY2025", // Промокод по умолчанию
    agreeToTerms: false, // Согласие на обработку данных
  });
  const [status, setStatus] = useState("");

  // При первом посещении показываем модальное окно
  useEffect(() => {
    if (!localStorage.getItem("hasVisited")) {
      setTimeout(() => setIsOpen(true), 500); // Задержка для плавного появления
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  // Закрытие модального окна
  const closeModal = () => {
    setIsOpen(false);
  };

  // Обработка изменений в форме
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка согласия на обработку данных
    if (!formData.agreeToTerms) {
      setStatus("You must agree to the terms to proceed.");
      return;
    }

    try {
      await emailjs.send(
        "service_lxxmm8s",
        "template_il5cfqr",
        formData,
        "Df4zcv3Cqe2LtutdW"
      );

      // Успешная отправка
      setStatus("Success! Your request has been sent.");
      setFormData({ name: "", email: "", promocode: "", agreeToTerms: false });

      // Закрытие модального окна через 2 секунды
      setTimeout(() => {
        setIsOpen(false);
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error("Error sending email: ", error);
      setStatus("Error! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Затемнение фона */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Модальное окно */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 mx-auto w-full md:w-1/2 lg:w-1/2 xl:w-1/2 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-8 shadow-2xl border border-gray-700/50">
          {/* Заголовок */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 mb-4">
            Get Free Advice and a Discount
          </h2>
          <p className="text-center text-gray-300 mb-6 text-lg">
            Enter your details below and get free advice for your tech problem and
            special offers. Only one-time offer for new users!
          </p>

          {/* Форма */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3.5 bg-gray-700/50 border border-gray-600/30 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3.5 bg-gray-700/50 border border-gray-600/30 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              required
            />
            <input
              type="text"
              name="promocode"
              value={formData.promocode}
              onChange={handleChange}
              placeholder="Promocode"
              className="w-full p-3.5 bg-gray-700/50 border border-gray-600/30 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              required
            />

{/* Согласие на обработку данных */}
<div className="flex items-center">
  <label className="relative flex items-center cursor-pointer">
    {/* Скрытый стандартный чекбокс */}
    <input
      type="checkbox"
      name="agreeToTerms"
      checked={formData.agreeToTerms}
      onChange={handleChange}
      className="absolute opacity-0 w-0 h-0"
      required
    />
    {/* Кастомный чекбокс */}
    <div className="relative w-6 h-6 flex items-center justify-center rounded-lg border-2 border-gray-400 transition-all duration-300 hover:border-sky-400">
      {/* Анимация галочки */}
      <motion.div
        className="w-4 h-4 bg-gradient-to-r from-sky-400 to-purple-400 rounded-md"
        initial={{ scale: 0 }}
        animate={{ scale: formData.agreeToTerms ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
    {/* Текст */}
    <span className="ml-3 text-gray-300 text-sm">
      I agree to the{" "}
      <a
        href="/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-400 hover:text-sky-300 transition-colors"
      >
        Privacy Policy
      </a>{" "}
      and allow the processing of my personal data.
    </span>
  </label>
</div>

            {/* Уведомление о защите данных */}
            <p className="text-center text-gray-400 text-sm">
              Your data is protected and will not be shared with third parties.
            </p>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white py-3.5 rounded-xl font-semibold hover:from-sky-600 hover:to-purple-600 transition-all transform hover:scale-105 active:scale-95"
            >
              Get Now
            </button>
          </form>

          {/* Кнопка закрытия */}
          <button
            onClick={closeModal}
            className="mt-5 w-full bg-gray-700/50 text-gray-300 py-3.5 rounded-xl font-semibold hover:bg-gray-600/50 transition-all transform hover:scale-105 active:scale-95"
          >
            Close
          </button>

          {/* Статус отправки */}
          {status && (
            <p
              className={`text-center mt-5 text-lg ${
                status.includes("Success")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscountModal;