import React, { useState, useEffect } from "react";
import { Button } from "../button";
import PhoneNumberInput from "../phone-number-input";
import emailjs from "@emailjs/browser";

function ContactFormModal({ toggleModal }) {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  // Ваши EmailJS параметры
  const serviceId = "service_lxxmm8s";
  const templateId = "template_i7tfoxa";
  const publicKey = "Df4zcv3Cqe2LtutdW";

  // Закрытие модального окна при нажатии Escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        console.log("Closing modal via Escape key");
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [toggleModal]);

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка, чтобы оба поля были заполнены
    if (!message.trim() || !phoneNumber.trim()) {
      alert("Please fill in both the message and phone number fields.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      message,
      phoneNumber,
      name
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log("Message sent successfully");
      toggleModal(); // Закрытие модального окна после отправки
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/+447378716579", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/+447378716579", "_blank");
  };

  const handleFacebook = () => {
    window.open("https://facebook.com", "_blank");
  };

  return (
    <div className="fixed inset-0 flex z-50 w-full h-full">
    {/* Фон модального окна */}
    <div
      className="absolute inset-0 bg-gray-800 opacity-60 z-40"
      onClick={() => {
        console.log("Closing modal via background click");
        toggleModal();
      }}
    ></div>
  
    {/* Контент модального окна */}
    <div className="relative bg-almost-black md:w-2/3 xl:w-1/2 h-auto p-8 shadow-lg z-50 flex flex-col justify-center items-center md:items-start md:text-left text-center overflow-y-auto rounded-lg">
      <h1 className="text-almost-white text-lg md:text-xl font-fira font-extrabold mt-6">{"<Northern>"}</h1>
      <h1 className="text-sky-500 text-lg md:text-xl -mt-2 my-4 font-fira font-extrabold">{"</Techies>"}</h1>
  
      <h2 className="sm:text-5xl md:text-6xl font-bold text-sky-500 mb-2">
        Tell us what you <span className="text-almost-white">need</span> done.
      </h2>
  
      <p className="m-4 sm:text-lg md:text-xl text-almost-white font-fira">
        Fill out the form below to tell us about your problem or request.
      </p>
  
      {/* Форма */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 p-6 bg-gray-800 rounded-lg mx-auto">
  {/* Поле имени */}
  <div className="flex flex-col mb-4">
    <label htmlFor="name" className="text-sm text-almost-white mb-2">Name</label>
    <textarea
      id="name"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full h-14 px-6 py-3 border-2 border-transparent focus:border-sky-500 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 ease-in-out shadow-md resize-none"
      placeholder="Enter your name"
    ></textarea>
  </div>

  {/* Поле телефона */}
  <div className="flex flex-col mb-4">
    <label htmlFor="phone" className="text-sm text-almost-white mb-2">Phone Number</label>
    <PhoneNumberInput
      value={phoneNumber}
      onChange={handlePhoneChange}
      className="w-full px-6 py-3 border-2 border-transparent focus:border-sky-500 rounded-lg bg-gray-700  text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 ease-in-out"
    />
  </div>

  {/* Поле сообщения */}
  <div className="flex flex-col mb-6">
    <label htmlFor="message" className="text-sm text-almost-white mb-2">Message</label>
    <textarea
      id="message"
      name="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full h-32 px-6 py-3 border-2 border-transparent focus:border-sky-500 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 ease-in-out shadow-md resize-none"
      placeholder="The more details, the better we can serve you!"
    ></textarea>
  </div>

  {/* Кнопки отправки и закрытия */}
  <div className="flex justify-between ">
    <Button
      hasRedStyle={true}
      type="button"
      onClick={() => {
        console.log("Closing modal via button");
        toggleModal();
      }}
      className="w-full sm:w-auto"
    >
      Close
    </Button>

    <Button
      hasWhiteStyle={true}
      type="submit"
      className={`w-full sm:w-auto ${isSubmitting ? "opacity-50" : ""}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Sending..." : "Send"}
    </Button>
  </div>
</form>

  
      {/* Ссылки на соцсети */}
      <div className="flex flex-col items-center w-full">
        <h1 className="text-lg md:text-xl text-almost-white text-center mb-4 mt-4">
          Contact Us Via:
        </h1>
        <div className="flex justify-center items-center space-x-4 mb-10 text-sky-500 text-2xl">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              handleTelegram();
            }}
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <i className="ri-telegram-line"></i>
          </a>
  
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              handleWhatsApp();
            }}
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <i className="ri-whatsapp-line text-green-500"></i>
          </a>
  
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              handleFacebook();
            }}
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <i className="ri-messenger-line text-purple-500"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default ContactFormModal;










