import React from 'react';
import Slider from 'react-slick';
import { FaGoogle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Smith',
    date: '2 January 2025',
    review: "Amazing service! They helped me set up my new website, and it looks incredible. I had no idea how to even start with this stuff, but they made it all so easy. Highly recommend if you want a website but don’t know where to start!",
  },
  {
    name: 'Emily Chen KK',
    date: '3 January 2025',
    review: "I got my PC upgraded by them, and honestly, I can see the difference right away. My computer was running slow, and now it's super fast. Best money I've spent on tech stuff in ages. Definitely worth it!",
  },
  {
    name: 'Michael Rodriguez',
    date: '5 January 2025',
    review: "Super happy with the TikTok growth service they provided! I went from barely any views to getting thousands on my videos within just a couple weeks. They really know what they're doing, and they’re really friendly too. 😊",
  },
  {
    name: 'Sofia Becker',
    date: '7 January 2025',
    review: "The team helped me build an e-commerce website, and wow, it turned out better than I imagined. They were patient with all my questions and really made the site look professional. I already started getting sales on it, thanks to them!",
  },
  {
    name: 'Alexander Krasavin',
    date: '9 January 2025',
    review: "Ребята помогли мне с созданием сайта, и я остался в восторге. Всё сделали очень качественно, быстро, и объяснили все детали. Я теперь могу управлять сайтом сам. Очень рекомендую, спасибо!",
  },
  {
    name: 'Laura Williams',
    date: '11 January 2025',
    review: "Good",
  },
  {
    name: 'Davidd',
    date: '13 January 2025',
    review: "Hello Manchester! Just got my pc cleaned by them and it feels like new! It was overheating all the time before, now it runs smooth and quiet. Not sure what they did exactly, but it worked! Good job, man.",
  },
  {
    name: 'Hannah Thompson',
    date: '15 January 2025',
    review: "The website redesign service was incredible. My old site looked outdated, and now it’s so sleek and modern. They understood exactly what I wanted, and the process was so smooth. Definitely recommend if you want a professional-looking site.",
  },
];


const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" text-white py-10 rounded-lg">
      <Slider {...settings} className="px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl font-bold">★★★★★</span>
                  <FaGoogle className="ml-2 text-gray-400 text-xl" />
                </div>
              </div>
              <p className="text-gray-400 mb-4">{testimonial.review}</p>
              <div className="flex items-center mt-6">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg font-semibold text-almost-white">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;

