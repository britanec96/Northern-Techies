import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactUsIcon from "../images/ContactUsIcon.svg";
import PhoneFill from "../images/phone-fill.svg";
import { Wrapper } from '../components/wrapper'; 
import { Button } from '../components/button';
import useScrollReveal from '../components/SCROLL-REVEAL/ScrollReveal';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', comments: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '50px', origin: 'left' } },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send(
      'service_lxxmm8s', 
      'template_il5cfqr', 
      formData,
      'Df4zcv3Cqe2LtutdW' 
    )
    .then(
      (response) => {
        console.log('Message sent successfully:', response.status, response.text);
        setIsSubmitted(true);
        setTimeout(() => window.location.reload(), 3000); 
      },
      (error) => {
        console.error('Error sending message:', error.text);
      }
    );
};

  return (
    <div className="my-10">
      <div className="relative w-full mb-10 bg-gray-900 overflow-hidden">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10">
          {/* Левая часть: текст и кнопки */}
          <div className="w-full xl:w-1/2 text-center p-5">
            <div className="flex justify-center items-center element-delay-200">
              <div className="relative">
                <img
                  src={PhoneFill}
                  alt="Contact Us Icon"
                  className="w-32 h-32 transition-transform duration-500 ease-in-out animate-shakeRotate hover:scale-110 hover:rotate-12 hover:animate-none"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-3xl xl:text-5xl font-bold text-sky-500 element-delay-200">
              Contact Us
            </h1>
            <h2 className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white element-delay-400">
              Reach out if you're interested in partnering or joining our team
            </h2>
            <div className="element-delay-400">
              <Link to="/about">
                <Button hasWhiteStyle={true}>About Us</Button>
              </Link>
            </div>
          </div>

          {/* Правая часть: изображение */}
          <div className="w-1/2 element-delay-400">
            <img
              className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={ContactUsIcon}
              alt="Happy Customer"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mb-10 element-delay-400">
          <div className="w-60 h-px bg-gray-600 opacity-50"></div>
        </div>
      </div>

      <Wrapper>
        <div className="grid gap-8 xl:grid-cols-2 sm:grid-cols-1">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg element-delay-400">
            <h2 className="text-3xl text-almost-white font-semibold mb-4">Cooperation</h2>
            <p className="text-gray-300 mb-4">
              If you want to work with us, we look forward to your message.
            </p>
            <h3 className="text-3xl text-almost-white font-semibold mb-2">Contact Information</h3>
            <ul className="text-gray-300 mb-4">
              <li>Email: floxstreet@gmail.com</li>
              <li>Phone: +44 737 87 16 579</li>
              <li>Address: Salford, Greater Manchester, UK</li>
            </ul>

            <h3 className="text-2xl text-almost-white font-semibold mb-2">Write to Us</h3>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <textarea
                rows="4"
                name="comments" // Изменено здесь
                placeholder="Your Message"
                value={formData.comments} // Изменено здесь
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
              <Button hasWhiteStyle={true} type="submit">Send Message</Button>
            </form>
            
            ) : (
              <p className="text-green-500">Your message has been sent! We will contact you soon.</p>
            )}
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-lg element-delay-400">
            <h2 className="text-2xl text-almost-white font-semibold mb-4">Our Location</h2>
            <div
              style={{
                height: '400px',
                width: '100%',
                backgroundImage: 'url("https://i.pinimg.com/originals/c1/60/ea/c160ea798d52b5791e1f5f80bbb6f6e4.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
              }}
              className="relative"
            >
              <p className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-75 text-sm text-almost-white px-2 py-1 rounded">
                We Are Based in Manchester
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;





