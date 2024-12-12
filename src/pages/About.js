import React from 'react';
import { Button } from '../components/button';
import KristoferPicture from "../images/KristoferPicture.jpg";
import JanePicture from "../images/JanePicture.jpg";
import DanielPicture from "../images/DanielPicture.jpg";
const About = () => {
  return (
    <div className="bg-gray-900 text-almost-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-sky-500 transition-transform transform hover:scale-105 duration-300 ease-in-out pointer-none">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl mt-4 text-gray-300 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Discover the story behind Northern Techies and why we are passionate about technology and innovation.
          </p>
        </div>

        <div className="flex justify-center items-center mb-10 element-delay-1400">
          <div className="w-60 h-px bg-gray-600 opacity-50"></div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="text-center md:text-left hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-almost-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300">
              At Northern Techies, we believe in bridging the gap between technology and people. Our mission is to make innovative IT services accessible to everyone, regardless of their technical knowledge. We provide high-quality, budget-friendly solutions that empower businesses and individuals to thrive in the digital age.
            </p>
          </div>
          <div className="text-center md:text-left hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-almost-white mb-4">Our Vision</h2>
            <p className="text-lg text-gray-300">
              We aim to create a world where technology is no longer intimidating or out of reach for anyone. Our vision is to help individuals and businesses unlock their full potential through seamless tech solutions, creative designs, and innovative digital services.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-gray-800 py-12 rounded-lg">
          <h2 className="text-4xl font-bold text-almost-white text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
            <div className="text-center bg-gray-700 p-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600">
              <h3 className="text-2xl font-semibold text-sky-500 mb-4">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of technology to offer creative solutions that meet the unique needs of our clients.
              </p>
            </div>
            <div className="text-center bg-gray-700 p-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600">
              <h3 className="text-2xl font-semibold text-sky-500 mb-4">Integrity</h3>
              <p className="text-gray-300">
                We are committed to transparency, honesty, and ethical practices in all our interactions.
              </p>
            </div>
            <div className="text-center bg-gray-700 p-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600">
              <h3 className="text-2xl font-semibold text-sky-500 mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of teamwork, both within our company and with our clients, to deliver the best outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="flex justify-center items-center my-10 element-delay-1400">
          <div className="w-60 h-px bg-gray-600 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 my-16">
          <div className="text-center transform transition-all duration-300 ease-in-out hover:scale-105">
            <img src={KristoferPicture} alt="Team Member 1" className="rounded-full object-cover w-32 h-32 mx-auto mb-4 pointer-events-none select-none" />
            <h3 className="text-2xl font-semibold text-almost-white">Christopher Ellis-Tatti</h3>
            <p className="text-gray-300">Founder & CEO</p>
            <p className="text-gray-400 mt-2">
              Kristofer is the driving force behind Northern Techies. With a passion for technology and innovation, he founded the company to make high-quality tech services accessible to all.
            </p>
          </div>
          <div className="text-center transform transition-all duration-300 ease-in-out hover:scale-105">
            <img src={DanielPicture} alt="Team Member 2" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover pointer-events-none select-none" />
            <h3 className="text-2xl font-semibold text-almost-white">Daniel Caras</h3>
            <p className="text-gray-300">Lead Tech Specialist</p>
            <p className="text-gray-400 mt-2">
              Daniel brings years of experience in deep understanding of the latest technologies. He is responsible for delivering top-notch digital solutions for clients.
            </p>
          </div>
          <div className="text-center transform transition-all duration-300 ease-in-out hover:scale-105">
            <img src={JanePicture} alt="Team Member 3" className="rounded-full w-32 h-32 mx-auto mb-4 object-cover object-top pointer-events-none select-none" />
            <h3 className="text-2xl font-semibold text-almost-white">Alexander Neitan</h3>
            <p className="text-gray-300">Creative Director</p>
            <p className="text-gray-400 mt-2">
              Jane is a talented designer with an eye for detail. She leads our creative team, ensuring that every project meets the highest visual standards.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center my-10 element-delay-1400">
          <div className="w-60 h-px bg-gray-600 opacity-50"></div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-800 py-12 rounded-lg">
          <h2 className="text-3xl font-semibold text-almost-white text-center mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
            <div className="text-center bg-gray-700 p-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600">
              <h3 className="text-xl font-semibold text-sky-500 mb-4">100+ Successful Projects</h3>
              <p className="text-gray-300">
                We've completed over 100 projects, helping clients achieve their business goals through cutting-edge technology.
              </p>
            </div>
            <div className="text-center bg-gray-700 p-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600">
              <h3 className="text-xl font-semibold text-sky-500 mb-4">Global Presence</h3>
              <p className="text-gray-300">
                With clients across multiple continents, we have established a strong global presence in the tech industry.
              </p>
            </div>
            <div className="text-center bg-gray-700 p-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600">
              <h3 className="text-xl font-semibold text-sky-500 mb-4">5-Star Rating</h3>
              <p className="text-gray-300">
                Our clients consistently rate us 5 stars for the quality of our work and our commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-10 element-delay-1400">
          <div className="w-60 h-px bg-gray-600 opacity-50"></div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-12">
          <p className="md:text-2xl sm:text-xl text-gray-300 mb-4">
            Ready to start your project with Northern Techies? Get in touch today to discuss your needs!
          </p>
          <Button hasWhiteStyle={true} onClick={() => window.location.href = '/order'}>Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
