import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PhoneFill from "../images/phone-fill.svg";
import { Wrapper } from '../components/wrapper';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', comments: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isCaptchaValid) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please, provide the correct email address.");
      return;
    }

    try {
      const response = await fetch('https://server-northern-techies-production.up.railway.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: captchaToken })
      });
  
      const captchaData = await response.json();
      if (!captchaData.success) {
        alert('Too many requests from this IP, please try again later.');
        return;
      }
    } catch (error) {
      console.error('Error validating CAPTCHA:', error);
      alert('Error validating CAPTCHA');
      return;
    }
    
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

  // Custom motion variants for the animation styles
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

   const [captchaToken, setCaptchaToken] = useState(null);
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  
    const handleCaptchaChange = (token) => {
      setCaptchaToken(token);
      setIsCaptchaValid(!!token); // Проверяем, получен ли токен
    };
  

  return (
    <div className="mb-10">
      <div className="relative w-full mb-10 bg-gray-900 overflow-hidden pt-14">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10">
          {/* Левая часть: текст и кнопки */}
          <div className="w-full xl:w-1/2 text-center p-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: false }}
              className="flex justify-center items-center"
            >
              <div className="relative">
                <img
                  src={PhoneFill}
                  alt="Contact Us Icon"
                  className="w-32 h-32 transition-transform duration-500 ease-in-out animate-shakeRotate hover:scale-110 hover:rotate-12 hover:animate-none"
                />
              </div>
            </motion.div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-3xl xl:text-5xl font-bold text-sky-500"
            >
              Contact Us
            </motion.h1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white"
            >
              Reach out if you're interested in partnering or joining our team
            </motion.h2>
            <motion.div 
             initial="hidden"
             whileInView="visible"
             variants={fadeInUp}
            className="">
              <Link to="/about">
                <Button hasWhiteStyle={true}>About Us</Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-10 ">
          <div className="w-60 h-px bg-gray-600 opacity-50"></div>
        </div>
      </div>

      <Wrapper>
        <div className="grid gap-8 xl:grid-cols-2 sm:grid-cols-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
            className="bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl text-almost-white font-semibold mb-4">Cooperation</h2>
            <p className="text-gray-300 mb-4">
              If you want to work with us, we look forward to your message.
            </p>
            <h3 className="text-3xl text-almost-white font-semibold mb-2">Contact Information</h3>
            <ul className="text-gray-300 mb-4">
              <li>Email: support@northerntechies.com</li>
              <li>Address: Greater Manchester, UK</li>
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



                   {/* reCAPTCHA */}
   <div className="my-4">
              <ReCAPTCHA
                sitekey="6Ldl_K8qAAAAANAIIS5ZrbcDVCTDA-zizOWgH-Fc"
                onChange={handleCaptchaChange}
              />
            </div>



                <Button hasWhiteStyle={true} type="submit">Send Message</Button>
              </form>
            ) : (
              <p className="text-green-500">Your message has been sent! We will contact you soon.</p>
            )}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInRight}
            className="bg-gray-900 p-8 rounded-lg shadow-lg"
          >
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
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;






