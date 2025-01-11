import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Images
import GraphicDesignIcon from "../images/GraphicDesignIcon.svg";
import WhyChooseUsIcon from "../images/WhyChooseUsIcon.svg";
import PhotoshopIcon from "../images/PhotoshopIcon.svg";
import IllustratorIcon from "../images/IllustratorIcon.svg";
import FigmaIcon from "../images/FigmaIcon.svg";
import BlenderIcon from "../images/BlenderIcon.svg";
import CanvaIcon from "../images/CanvaIcon.svg";

// Components
import { Button } from "../components/button";
import { Wrapper } from "../components/wrapper";
import CardListGraphicDesign from "../components/cards/CardsGraphDesign";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const AnimatedSection = ({ children, animation }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

function GraphicDesignPage() {
  const scrollToSection = () => {
    const targetSection = document.getElementById("targetSection");
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleWhatsApp = () => window.open("https://wa.me/+447378716579", "_blank");
  const handleTelegram = () => window.open("https://t.me/+447378716579", "_blank");

  return (
    <>
      <section className="relative bg-cover bg-center bg-almost-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={require("../videos/GraphicDesignPrezi.mp4")} type="video/mp4" />
          Your browser doesn't support videos
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <AnimatedSection animation={fadeInUp}>
          <div className="relative z-10 max-w-7xl mx-auto py-24 px-6">
            <div className="max-w-md mx-0 flex flex-col justify-start text-left">
              <h1 className="text-5xl font-bold text-almost-white">
                Our the best <span className="text-yellow-500">Graphic Designers</span> for any job
              </h1>
              <p className="mt-6 text-xl font-fira text-gray-300">
                (Adobe Photoshop, Adobe Illustrator, Figma or Adobe XD, Blender 3D, Canva)
              </p>
              <div className="flex sm:flex-wrap md:flex-nowrap gap-5 mt-8">
                <Link to="/order" className="w-full sm:w-auto">
                  <Button hasWhiteStyle={true}>Get Started</Button>
                </Link>
                <Button
                  className="flex items-center gap-2 w-auto"
                  hasWhiteStyle={true}
                  onClick={(e) => {
                    e.preventDefault();
                    handleWhatsApp();
                  }}
                >
                  <i className="ri-whatsapp-line text-green-500 font-thin"></i>
                  Chat with us on WhatsApp
                </Button>
                <Button
                  className="flex items-center justify-center gap-2 w-auto"
                  hasWhiteStyle={true}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTelegram();
                  }}
                >
                  <i className="ri-telegram-line text-sky-500 font-thin"></i>
                  Chat with us on Telegram
                </Button>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 my-12 opacity-20"></div>
            <AnimatedSection animation={slideInRight}>
              <div className="w-full md:flex md:items-center justify-between mt-12">
                <p className="text-almost-white font-bold text-center md:text-left text-xl mt-7 mb-4 md:mb-0">
                  The best programs for your design idea:
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start items-center mt-5 md:mt-0">
                  {[PhotoshopIcon, IllustratorIcon, FigmaIcon, BlenderIcon, CanvaIcon].map((icon, index) => (
                    <img
                      key={index}
                      className="w-12 h-12 md:w-16 md:h-16"
                      src={icon}
                      alt={icon.split("/").pop().split(".")[0]}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection animation={fadeInUp}>
        <section className="bg-gray-900 p-5 text-center">
          <h1 className="m-5 text-almost-white text-6xl font-extrabold">
            Ready to elevate your brand?
          </h1>
          <p className="m-5 text-gray-100 text-2xl">
            Get started with a custom graphic design package from just
            <span className="text-sky-500 text-3xl font-semibold"> £10!</span>
          </p>
          <Button onClick={scrollToSection} className="m-5" hasWhiteStyle={true}>
            Order Now
          </Button>
        </section>
      </AnimatedSection>

      <Wrapper>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center md:divide-x md:divide-gray-300">
            <AnimatedSection animation={fadeInUp}>
              <div className="flex flex-col items-center">
                <img
                  className="w-1/2 h-auto m-10"
                  src={GraphicDesignIcon}
                  alt="Graphic Design"
                  loading="lazy"
                />
                <h1 className="font-bold text-lg text-almost-white">What is Graphic Design?</h1>
                <p className="m-5 text-gray-300">
                  Graphic design is the art of visual communication that combines text and images to convey ideas and
                  messages effectively.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation={fadeInUp}>
              <div className="flex flex-col items-center">
                <img
                  className="w-1/2 h-auto m-10"
                  src={WhyChooseUsIcon}
                  alt="Why Choose Us"
                  loading="lazy"
                />
                <h1 className="font-bold text-lg text-almost-white">Why Choose Us for Graphic Design?</h1>
                <p className="m-5 text-gray-300">
                  At our agency, we offer flexible budget plans tailored for everyone—from startups to established
                  businesses.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <AnimatedSection animation={fadeInUp}>
          <section className="mt-20 mb-20 bg-gray-900 text-almost-white rounded-lg p-5 text-center md:text-left">
            <h1 className="text-center xl:text-5xl sm:text-3xl font-bold m-5">How Does Process Work With Us?</h1>
            <div className="grid xl:grid-cols-4 sm:grid-cols-1">
              {[
                { icon: "ri-creative-commons-by-line", title: "Consultation and 50% Prepayment", desc: "We discuss your project and collect a 50% prepayment to begin." },
                { icon: "ri-draft-line", title: "Concept Creation", desc: "Based on our initial discussions, our designers create several concepts and ideas." },
                { icon: "ri-test-tube-line", title: "Development and Refinement", desc: "Once the concept is approved, we work on the final design." },
                { icon: "ri-rocket-line", title: "Delivery of Final Materials", desc: "After the design is finalized, we provide you with all the necessary files." },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center sm:items-center xl:items-start"
                >
                  <i className={`${step.icon} text-6xl text-sky-500 m-5`}></i>
                  <h1 className="text-xl font-bold">{step.title}</h1>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </Wrapper>

     <AnimatedSection animation={slideInRight}>
      <div
        id="targetSection"
        className="bg-gray-900 p-10"
      >
        <h1 className="md:text-6xl text-4xl text-center text-almost-white font-black mb-4">
          Choose Your Graphic Design Solution:
        </h1>
        <CardListGraphicDesign />
      </div>
      </AnimatedSection>
    </>
  );
}

export default GraphicDesignPage;

