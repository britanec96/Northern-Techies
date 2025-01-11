import React, { useState } from 'react';
import { Button } from '../button';
import { Wrapper } from '../wrapper';
import { Link } from 'react-router-dom';

const Card = ({ id, title, price, description, developmentTime, technologies, image, siteExample }) => {
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
          className={`mb-4 w-full h-full object-cover transition-transform duration-300 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
          style={{
            transformOrigin: `${position.x}% ${position.y}%`,
          }}
          onClick={openModal} 
        />
      </div>
      <h3 className="font-semibold text-2xl my-2">{title}</h3>
      <p>
        From <span className="text-md font-bold">{price}</span> in {developmentTime}.
      </p>

      <div className="text-md mt-5">
        <div className="flex items-start gap-2">
          <p>
            <span className="text-sky-500">Description:</span> {description}
          </p>
        </div>
        <div className="flex items-start gap-2 mt-5">
          <p>
            <span className="text-sky-500">Development time:</span> {developmentTime}
          </p>
        </div>
        <div className="flex items-start gap-2 mt-5">
          <p>
            <span className="text-sky-500">Technologies:</span> {technologies}
          </p>
        </div>
      </div>

      <Link to="/order">
        <Button hasWhiteStyle={true} className="mt-5">
        Request Details
        </Button>
      </Link>

      {/* Модальное окно */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal} 
        >
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-screen sm:max-h-[80vh] sm:max-w-[80vw]"
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

const CardListGraphicDesign = () => {
  const cardsData = [
    {
      id: '1',
      title: 'Logo Design',
      price: '50 GBP',
      developmentTime: '2-5 days',
      description: 'Custom logo design that reflects your brand identity and values.',
      technologies: 'AI Tools, Adobe Illustrator, Adobe Photoshop, branding principles.',
      image: 'https://cdn.dribbble.com/userupload/12900500/file/original-37c69c0d10c4dbf06764d2b7bee16d8a.png?resize=1200x900&vertical=center',
    },
    {
      id: '2',
      title: 'Banner Design',
      price: '30 GBP',
      developmentTime: '1-3 days',
      description: 'Eye-catching banner designs for online marketing or social media.',
      technologies: 'AI Tools, Adobe Photoshop, Adobe Illustrator, web design principles.',
      image: 'https://cdn.dribbble.com/userupload/16057120/file/original-8444cb7ed6bfb8a2b206d113a9235c73.gif',
    },
    {
      id: '3',
      title: 'Social Media Graphics',
      price: '30 GBP',
      developmentTime: '1-7 days',
      description: 'Custom graphics for social media platforms, including posts and cover images.',
      technologies: 'Adobe Photoshop, Canva, AI Tools, branding strategies.',
      image: 'https://cdn.dribbble.com/userupload/7070078/file/original-c6b3861c0eef3e0008f7babdcb01b9ec.png?resize=1200x900&vertical=center',
    },
    {
      id: '4',
      title: 'Business Card Design',
      price: '80 GBP',
      developmentTime: '3-5 days',
      description: 'Designing professional business cards that leave a lasting impression.',
      technologies: 'Adobe Photoshop, printing specifications.',
      image: 'https://cdn.dribbble.com/userupload/15390531/file/original-bafe19530302f2d9b5cfd525259d2e6c.jpg?resize=1200x904&vertical=center',
    },
    {
      id: '5',
      title: 'Other',
      price: '10 GBP',
      developmentTime: '1-5 days',
      description: 'Any other graphic design solutions',
      technologies: 'Adobe Photoshop, printing specifications.',
      image: 'https://blog-frontend.envato.com/cdn-cgi/image/width=4800,quality=75,format=auto/uploads/sites/2/2022/05/graphic-design-tools.png',
    },
  ];

  return (
    <Wrapper>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 element-delay-800">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CardListGraphicDesign;
