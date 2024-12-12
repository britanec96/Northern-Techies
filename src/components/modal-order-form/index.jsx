import React, { useState, useEffect } from "react";
import { Button } from "../button";
import PhoneNumberInput from "../phone-number-input";
import emailjs from "@emailjs/browser";

function ContactFormModal({ toggleModal }) {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber); // Обновляем состояние номера
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
    <div className="fixed inset-0 flex z-50 overflow-y-hidden h-screen">
      {/* Фон модального окна */}
      <div
        className="absolute inset-0 bg-gray-800 opacity-60 z-40"
        onClick={() => {
          console.log("Closing modal via background click");
          toggleModal();
        }}
      ></div>

      {/* Контент модального окна */}
      <div className="relative bg-almost-black w-full md:w-2/3 max-h-full p-6 md:p-20 shadow-lg z-50 flex flex-col justify-center items-center md:items-start md:text-left text-center">
        <h1 className="text-almost-white text-xl font-fira font-extrabold">{"<Northern>"}</h1>
        <h1 className="text-sky-500 text-xl -mt-2 my-6 font-fira font-extrabold">{"</Techies>"}</h1>

        <h2 className="sm:text-3xl md:text-6xl font-bold text-sky-500 mb-4">
          Tell us what you <span className="text-almost-white">need</span> done.
        </h2>

        <p className="m-5 sm:text-md md:text-xl text-almost-white font-fira">
          Fill out the form below to tell us about your problem or request, and let us find the best solution for you—at free consultation.
        </p>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          <div className="m-4">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-40 px-4 py-2 border-2 border-sky-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              placeholder="What issue are you facing with your computer, or which digital service do you need assistance with? The more details, the better we can serve you!"
            ></textarea>
          </div>

          <div className="m-4">
            <PhoneNumberInput
              value={phoneNumber}
              onChange={handlePhoneChange} // Передаем handlePhoneChange
            />
          </div>

          <div className="flex justify-between gap-10 my-10 mx-4">
            <Button
              hasRedStyle={true}
              type="button"
              onClick={() => {
                console.log("Closing modal via button");
                toggleModal();
              }}
            >
              Close
            </Button>

            <Button
              hasWhiteStyle={true}
              type="submit"
              className={`${isSubmitting ? "opacity-50" : "flex-grow"}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>

        {/* Ссылки на соцсети */}
        <div className="flex flex-col items-center w-full">
          <h1 className="text-xl text-almost-white text-center mb-4 mt-4">
            Contact Us Via:
          </h1>
          <div className="flex justify-center items-center space-x-6 mb-6 text-sky-500 text-3xl">
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






