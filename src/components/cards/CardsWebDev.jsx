import React, { useState } from 'react';
import { Button } from '../button';
import { Wrapper } from '../wrapper';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DownloadButton = () => {
  const fileUrl = "/download_files/Northern_Techies_Services_and_Pricing_Guide.pdf";
  return (
    <a href={fileUrl} download="Northern_Techies_Services_and_Pricing_Guide.pdf">
      <Button hasWhiteStyle={true}>Price List</Button>
    </a>
  );
};

const Card = ({ title, price, description, developmentTime, technologies, image }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-800 text-almost-white rounded-lg p-6 mt-10 mb-10 transition-all duration-300">
      <div
        className="overflow-hidden relative w-full h-[300px]"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`mb-4 w-full h-full object-cover object-top cursor-pointer transition-transform duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}
          style={{ transformOrigin: `${position.x}% ${position.y}%` }}
          onClick={openModal}
        />
      </div>
      <h3 className="font-semibold text-2xl my-2">{title}</h3>
      <p>From <span className="text-md font-bold">{price}</span> in {developmentTime}.</p>
      <div className="text-md mt-5">
        <p><span className="text-sky-500">Description:</span> {description}</p>
        <p className="mt-5"><span className="text-sky-500">Development time:</span> {developmentTime}</p>
        <p className="mt-5"><span className="text-sky-500">Technologies:</span> {technologies}</p>
      </div>
  <Link to="/order">
    <Button hasWhiteStyle={true} className="mt-5">Request Details</Button>
  </Link>

  <div className="mt-5">
    <DownloadButton />
  </div>



      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-screen"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  developmentTime: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const CardList = () => {
  const cardsData = [
    {
      title: 'Landing Page',
      price: '140 GBP',
      developmentTime: '2-5 days',
      description: 'A single-page website for promoting a product.',
      technologies: 'HTML, CSS, JavaScript, CMS (e.g., WordPress), React, basic backend for form processing.',
      image: 'https://unbounce.com/photos/Calm-1.png',
    },
    {
      title: 'Business Website',
      price: '400 GBP',
      developmentTime: '1-3 weeks',
      description: 'A multi-page website for a company with information about products.',
      technologies: 'HTML, CSS, JavaScript, CMS (e.g., WordPress), React, basic backend for form processing.',
      image: 'https://cdn.dribbble.com/userupload/8301468/file/original-c32dd51b82709aff59cec5d4b62f3be2.jpg?resize=1200x900&vertical=center',
    },
    {
      title: 'E-commerce Website',
      price: '1800 GBP',
      developmentTime: '5-8 weeks',
      description: 'A website for online sales with a shopping cart, payment gateways, and product and user management.',
      technologies: 'HTML, CSS, JavaScript, CMS (Shopify), frameworks (React), backend (Node.js), payment gateway integration (PayPal, Stripe).',
      image: 'https://cdn.dribbble.com/userupload/5969124/file/original-5b5ab27e964531ebf6df77a092681ff4.png?resize=1200x900&vertical=center',
    },
  ];

  return (
    <Wrapper>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CardList;
