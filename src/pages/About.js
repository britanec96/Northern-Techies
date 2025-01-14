import React from 'react';
import { Button } from '../components/button';
import KristoferPicture from "../images/KristoferPicture.jpg";
import JanePicture from "../images/JanePicture.jpg";
import DanielPicture from "../images/DanielPicture.jpg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Контролируем видимость для анимаций
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: false });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: false });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: false });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: false });
  const { ref: achievementsRef, inView: achievementsInView } = useInView({ triggerOnce: false });

  // Визуальные эффекты для анимации
  const missionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const visionAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const valuesAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const teamAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const achievementsAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className=" text-almost-white pt-24">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-sky-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mt-4 text-gray-400 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Discover the story behind Northern Techies and why we are passionate about technology and innovation.
          </motion.p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="text-center md:text-left"
            variants={missionAnimation}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            ref={missionRef}
          >
            <h2 className="text-3xl font-semibold text-almost-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-400">
              At Northern Techies, we believe in bridging the gap between technology and people. Our mission is to make innovative IT services accessible to everyone, regardless of their technical knowledge. We provide high-quality, budget-friendly solutions that empower businesses and individuals to thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            variants={visionAnimation}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            ref={visionRef}
          >
            <h2 className="text-3xl font-semibold text-almost-white mb-4">Our Vision</h2>
            <p className="text-lg text-gray-400">
              We aim to create a world where technology is no longer intimidating or out of reach for anyone. Our vision is to help individuals and businesses unlock their full potential through seamless tech solutions, creative designs, and innovative digital services.
            </p>
          </motion.div>
        </div>

        {/* Updated Our Values Section */}  
<motion.div
  className="bg-gray-900 py-16 rounded-xl shadow-xl"
  variants={valuesAnimation}
  initial="hidden"
  animate={valuesInView ? "visible" : "hidden"}
  ref={valuesRef}
>
  <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-500 text-center mb-12">
    Our Core Values
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-6">
    {[
      { title: "Innovation", text: "We constantly push the boundaries of technology to offer creative solutions that meet the unique needs of our clients." },
      { title: "Integrity", text: "We are committed to transparency, honesty, and ethical practices in all our interactions." },
      { title: "Collaboration", text: "We believe in the power of teamwork, both within our company and with our clients, to deliver the best outcomes." },
    ].map((value, index) => (
      <div
        key={index}
        className="relative text-center border-2 border-sky-500 p-8 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-900 hover:border-none group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <h3 className="text-3xl font-semibold text-sky-500 mb-4 transition-transform group-hover:translate-y-[-5px]">
          {value.title}
        </h3>
        <p className="text-gray-400 group-hover:text-almost-white transition-colors">
          {value.text}
        </p>
      </div>
    ))}
  </div>
</motion.div>


{/* Our Team Section */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 my-16 px-6"
  variants={teamAnimation}
  initial="hidden"
  animate={teamInView ? "visible" : "hidden"}
  ref={teamRef}
>
  {[
    {
      name: "Christopher Ellis-Tatti",
      role: "Founder & CEO",
      description:
        "Kristofer is the driving force behind Northern Techies. With a passion for technology and innovation, he founded the company to make high-quality tech services accessible to all.",
      image: KristoferPicture,
    },
    {
      name: "Daniel Caras",
      role: "Lead Tech Specialist",
      description:
        "Daniel brings years of experience in deep understanding of the latest technologies. He is responsible for delivering top-notch digital solutions for clients.",
      image: DanielPicture,
    },
    {
      name: "Alexander Neitan",
      role: "Creative Director",
      description:
        "Alexander is a talented designer with an eye for detail. She leads our creative team, ensuring that every project meets the highest visual standards.",
      image: JanePicture,
    },
  ].map((member, index) => (
    <div
      key={index}
      className="relative text-center bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-30 transition-opacity"></div>
      <img
  src={member.image}
  alt={`Team Member ${index + 1}`}
  className="rounded-full object-cover w-32 h-32 mx-auto mb-4 border-4 border-gray-900 transition-transform group-hover:rotate-6"
  onContextMenu={(e) => e.preventDefault()} 
  draggable="false" 
/>

      <h3 className="text-2xl font-semibold text-sky-500 group-hover:text-sky-500 transition-colors">
        {member.name}
      </h3>
      <p className="text-gray-400 mb-2">{member.role}</p>
      <p className="text-gray-400 group-hover:text-gray-400 transition-colors">
        {member.description}
      </p>
      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="text-gray-400 hover:text-sky-500 transition-colors">
          <i className="fab fa-linkedin-in"></i>
        </button>
        <button className="text-gray-400 hover:text-sky-500 transition-colors">
          <i className="fab fa-twitter"></i>
        </button>
        <button className="text-gray-400 hover:text-sky-500 transition-colors">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </div>
  ))}
</motion.div>


       {/* Achievements Section */}
<motion.div
  className="bg-gray-900 py-16 rounded-xl shadow-xl"
  variants={achievementsAnimation}
  initial="hidden"
  animate={achievementsInView ? "visible" : "hidden"}
  ref={achievementsRef}
>
  <h2 className="md:text-5xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-500 text-center mb-12">
    Our Achievements
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-6">
    {[
      { title: "70+ Successful Projects", text: "We've completed over 70 projects, helping clients achieve their goals through cutting-edge technology." },
      { title: "Global Presence", text: "With clients across multiple continents, we have established a strong global presence in the tech industry." },
      { title: "5-Star Rating", text: "Our clients consistently rate us 5 stars for the quality of our work and our commitment to customer satisfaction." },
    ].map((achievement, index) => (
      <div
        key={index}
        className="relative text-center border-2 border-sky-500 hover:border-none  p-8 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-900 group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-sky-500 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <h3 className="text-2xl font-semibold text-sky-500 mb-4 transition-transform group-hover:translate-y-[-5px]">
          {achievement.title}
        </h3>
        <p className="text-gray-400 group-hover:text-almost-white transition-colors">
          {achievement.text}
        </p>
      </div>
    ))}
  </div>
</motion.div>


        {/* Call-to-Action Section */}
        <div className="text-center my-12 bg-gray-900 rounded-xl p-5">
  <p className="md:text-2xl sm:text-xl text-gray-400 mb-4">
    Ready to start your project with Northern Techies? Get in touch today to discuss your needs!
  </p>
  <a
    href="https://wa.me/447378716579" // Замените на ваш номер телефона
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button hasWhiteStyle={true}>Contact Us</Button>
  </a>
</div>

      </div>
    </div>
  );
};

export default About;
