import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const DiscountModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState(""); // Статус отправки

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_lxxmm8s",
        "template_il5cfqr",
        formData,
        "Df4zcv3Cqe2LtutdW"
      );
      setStatus("Success! Your discount request has been sent.");
      setFormData({ name: "", email: "" }); // Очистка формы
      setTimeout(() => {
        setIsOpen(false); // Закрытие модального окна через 3 секунды
        setStatus(""); // Очистка статуса
      }, 3000);
    } catch (error) {
      console.error("Error sending email: ", error);
      setStatus("Error! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-11/12 max-w-md">
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-4">
              Get 30% Off on Our Services!
            </h2>
            <p className="text-center text-gray-300 mb-6">
              Exclusive offer for first-time visitors. Enter your details below
              to claim your discount.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition-colors"
              >
                Claim Offer
              </button>
            </form>
            {status && (
              <p
                className={`text-center mt-4 ${
                  status.startsWith("Success")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DiscountModal;
