import React from 'react';
import Slider from 'react-slick';
import { FaGoogle } from 'react-icons/fa';


const testimonials = [
  {
    name: 'Guest',
    date: '2 January 2025',
    review: "Honestly, I wasn't expecting much, but you guys really surprised me. The website looks amazing, and the whole process was super smooth. Thanks a lot!",
    avatar: '/images/avatars/customer1.jpg',
  },
  {
    name: 'Emily Chen',
    date: '3 January 2025',
    review: "Upgraded my PC with their help, and it feels like a completely new machine. No more lag, everything runs so much smoother now. Definitely worth it!",
    avatar: '/images/avatars/customer2.jpg'
  },
  {
    name: 'Guest',
    date: '5 January 2025',
    review: "Appreciate the help! My content started getting way more views after the tweaks they suggested. Didn't expect results so fast.",
  },
  {
    name: 'Sofia Becker',
    date: '7 January 2025',
    review: "Everything went great! Quick and professional. Really appreciate the support.",
    avatar: '/images/avatars/customer3.jpg'
  },
  {
    name: 'Alexander Krasavin',
    date: '9 January 2025',
    review: "Ребята сделали сайт оперативно и качественно. Теперь сам могу редактировать, что мне нужно, без проблем. Очень доволен!",
  },
  {
    name: 'Laura Williams',
    date: '11 January 2025',
    review: "They installed and set up the software I needed and even took the time to explain how to use it properly. Super helpful, saved me so much time!",
  },
  {
    name: 'David',
    date: '13 January 2025',
    review: "My PC was running so slow, I was about to give up on it. They optimized everything, and now it runs like it's brand new again. Great job!",
    avatar: '/images/avatars/customer4.jpg'
  },
  {
    name: 'Guest',
    date: '15 January 2025',
    review: "Finally got rid of my outdated website. Now it looks modern and professional—exactly what I wanted. Thanks for the great work!",
  },
  {
    name: 'James O’Connor',
    date: '18 January 2025',
    review: "I run a small business and needed a website that actually represents what I do. These guys nailed it! Great communication and support throughout.",
    avatar: '/images/avatars/customer5.jpg'
  },
  {
    name: 'Emma Patel',
    date: '20 January 2025',
    review: "My laptop was giving me constant trouble, and they sorted everything out in no time. No stress, just solutions. Appreciate it!",
  },
  {
    name: 'Oliver Green',
    date: '22 January 2025',
    review: "I needed a website for my café, and I’m honestly so happy with how it turned out. Clean, functional, and easy to update. Highly recommend!",
    avatar: '/images/avatars/customer6.jpg'
  },
  {
    name: 'Sophia Lee',
    date: '25 January 2025',
    review: "Setting up WordPress always felt overwhelming, but they made it super easy. My blog looks amazing now. Thank you so much!",
  },
  {
    name: 'Liam Brown',
    date: '28 January 2025',
    review: "My old website was slow and outdated. They revamped everything, and now it's clean, professional, and super fast. Very happy with the results!",
    avatar: '/images/avatars/customer7.jpg'
  },
  {
    name: 'Ava Wilson',
    date: '30 January 2025',
    review: "I was struggling with setting up my online store, but they made the process so much easier. Everything works perfectly now!",
  },
  {
    name: 'Noah Taylor',
    date: '1 February 2025',
    review: "Needed help with business software, and they set everything up flawlessly. Even gave me tips to make my workflow smoother. Appreciate it!",
  },
  {
    name: 'Isabella Clark',
    date: '3 February 2025',
    review: "I needed a website for my freelance work, and they delivered exactly what I was looking for. Simple, modern, and easy to manage!",
  },
];


const TestimonialCarousel = () => {
  const settings = {
      accessibility: false, // Отключает управление клавиатурой
      focusOnSelect: false, // Не позволяет фокусироваться на скрытых слайдах
    dots: true, // Enable navigation dots
    infinite: true, // Loop through slides indefinitely
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of testimonials visible at once
    slidesToScroll: 1, // Number of testimonials to scroll per action
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Time before automatically switching slides
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for medium-sized screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640, // Adjust settings for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-white py-10 rounded-lg">
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
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover pointer-events-none"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg font-semibold text-almost-white">
                    {testimonial.name[0]}
                  </div>
                )}
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
