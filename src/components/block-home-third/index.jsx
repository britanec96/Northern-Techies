import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import One from "../../images/One.jpg";
import Three from "../../images/Three.jpg";
import { Wrapper } from "../wrapper";

const BlockHomeThird = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+447378716579", "_blank");
  };

  // Анимации
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // useInView для каждого элемента
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.1 });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.1 });

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">


      {/* Why Choose Us Section */}
      <motion.div
        className="py-20 px-4 bg-gray-900/50 backdrop-blur-lg"
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeInUp}
      >
          <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-l from-sky-500 to-purple-400 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                description: "We deliver results quickly without compromising on quality. Our team works efficiently to meet your deadlines.",
              },
              {
                icon: "💸",
                title: "Affordable Prices",
                description: "As a new startup, we offer competitive prices to help you save money while getting top-notch services.",
              },
              {
                icon: "🌟",
                title: "High Quality",
                description: "We pride ourselves on delivering high-quality solutions that exceed your expectations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg shadow-lg text-center"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="sm:text-xl md:text-2xl py-1 font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-purple-400 text-gray-900 mb-4">{item.title}</h3>
                <p className="text-almost-white">{item.description}</p>
              </motion.div>
            ))}
          </div>

      </motion.div>

      {/* Success Stories Section */}
      <motion.div
        className="py-20 px-4"
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={fadeInUp}
      >
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-400 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Revamped Online Store",
                description: "We helped a local business increase their online sales by 200% with a new website design and SEO optimization.",
                image: One,
              },
              {
                title: "Custom PC Build",
                description: "A gaming enthusiast got their dream PC built by us, tailored to their exact specifications and budget.",
                image: Three,
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-sky-500 mb-4">{story.title}</h2>
                  <p className="text-almost-white mb-6">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
      </motion.div>

      {/* How We Work Section */}
      <motion.div
        className="py-20 px-4 bg-gray-900/50 backdrop-blur-lg"
        ref={ref4}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={fadeInUp}
      >
          <h2 className="text-4xl pb-5 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-400 mb-12">
            Work Processing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {[
              {
                icon: "📞",
                title: "Consultation",
                description: "We discuss your needs and goals to understand your project.",
              },
              {
                icon: "💡",
                title: "Planning",
                description: "We create a detailed plan tailored to your requirements.",
              },
              {
                icon: "🛠️",
                title: "Execution",
                description: "Our team works efficiently to deliver high-quality results.",
              },
              {
                icon: "✅",
                title: "Delivery",
                description: "We deliver the final product and provide ongoing support.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg shadow-lg text-center"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="sm:text-xl md:text-2xl py-1 font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-purple-400 text-gray-900 mb-4">{step.title}</h3>
                <p className="text-almost-white sm:text-sm md:text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="py-20 px-5"
        ref={ref5}
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        variants={fadeInUp}
      >
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-400 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does it take to complete a project?",
                answer: "The timeline depends on the complexity of the project, but we always strive to deliver as quickly as possible without compromising quality.",
              },
              {
                question: "Why are your prices so affordable?",
                answer: "As a new startup, we aim to provide high-quality services at competitive prices to build our reputation and client base.",
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, we provide ongoing support to ensure your project continues to perform well.",
              },
              {
                question: "Can I request custom features?",
                answer: "Absolutely! We tailor our services to meet your specific needs and requirements.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg shadow-lg"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <h3 className="text-xl font-semibold text-sky-500 mb-4">{faq.question}</h3>
                <p className="text-almost-white">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
      </motion.div>

      <div className="border-t border-gray-700 my-4 mb-14"></div>


      {/* Call-to-Action Section */}
      <Wrapper>
        <motion.div
          className="text-center pb-14"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-400 mb-6">
            Ready to Get Started?
          </h2>
          <p className="sm:text-sm md:text-xl text-almost-white mb-8">
            Contact us today to discuss your problem and get a free consultation.
          </p>
            <Button
              hasWhiteStyle={true} 
              onClick={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
            >
              CHAT NOW
            </Button>
        </motion.div>
      </Wrapper>
    </div>
    
  );
};

export default BlockHomeThird;


