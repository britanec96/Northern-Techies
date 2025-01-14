import React, { useState } from "react";
import { Wrapper } from "../components/wrapper/index";
import emailjs from "emailjs-com";
import { Button } from "../components/button";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Order = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [subOptions, setSubOptions] = useState([]);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [nextSubOptions, setNextSubOptions] = useState([]);
  const [selectedNextSubOption, setSelectedNextSubOption] = useState(null);
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [preferredMessenger, setPreferredMessenger] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setIsCaptchaValid(!!token); // Проверяем, получен ли токен
  };

  // Анимация

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


  const services = [
    {
      title: "Website Development",
      icon: "ri-code-s-slash-line",
      description: "Create stunning, responsive websites tailored to your goals.",
      subOptions: [
        {
          name: "Landing Page",
          subicon: "ri-window-line",
          shortDescription: "Simple, single-page online presence.",
          price: "From 140£",
          nextSubOptions: [
            { name: "One-page website",description:"Simple, single-page sites designed to focus on one product, service, or goal.", price: "140£" },
            { name: "Event Pages",description:"Landing pages for promoting events, registrations, or announcements.", price: "180£" },
            { name: "Campaign-specific Pages",description:"Created for marketing campaigns to capture leads or drive conversions.", price: "Negotiable" }
          ]
        },
        {
          name: "Multi-page Websites",
          subicon: "ri-pages-line",
          shortDescription: "Sell products with ease online.",
          price: "From 1800£",
          nextSubOptions: [
            { name: "Business Website",description:"Multi-page site showcasing company information, products, or services.", price: "From 800£" },
            { name: "Small Online Store",description:"For limited product ranges.", price: "From 1200£" },
            { name: "Large Online Stores",description:"Full-featured stores with filters, categories, and user accounts.", price: "From 3150£" },
            { name: "Custom",description:"Customize your website.", price: "Negotiable" }
          ]
        },
        {
          name: "Portfolio Website",
          subicon: "ri-passport-line",
          shortDescription: "Showcase your work beautifully.",
          price: "From 170£",
          nextSubOptions: [
            { name: "Photography",description:"", price: "From 170£" },
            { name: "Artworks",description:"", price: "From 200£" },
            { name: "Other",description:"", price: "Negotiable" }
          ]
        },
      ]
    },
    {
      title: "Graphic Design",
      icon: "ri-brush-line",
      description: "Professional designs for logos, banners, and social media content.",
      subOptions: [
        {
          name: "Logo Design",
          subicon: "ri-leaf-line",
          shortDescription: "Creating unique and memorable logos to represent a brand.",
          price: "From 30£",
          nextSubOptions: [
            { name: "Simple", description: "Basic logo design with 1-2 revisions.", price: "From 40£" },
            { name: "Medium", description: "More detailed logo design with 2-3 revisions and source files.", price: "From 90£" },
            { name: "Strong", description: "Premium logo design with 3+ revisions, source files, and brand guidelines.", price: "From 150£" },
            { name: "AI Created Logo", description: "Quick and affordable AI-generated logo concepts.", price: "30£" }
          ]
        },
        {
          name: "Banners",
          subicon: "ri-flag-2-line",
          shortDescription: "Professional banner designs for online advertising and print materials.",
          price: "From 30£",
          nextSubOptions: [
            { name: "Web Ads", description: "Banners for online platforms like Google Ads and social media.", price: "From 30£" },
            { name: "Print Materials", description: "Banners for billboards, flyers, and other print media.", price: "From 50£" },
            { name: "Other", description: "Custom banner designs for specific needs (e.g., trade shows, events).", price: "Negotiable" }
          ]
        },
        {
          name: "Social Media Content",
          subicon: "ri-instagram-line",
          shortDescription: "Engaging visuals for social media platforms (Instagram, Facebook, etc.).",
          price: "From 20£",
          nextSubOptions: [
            { name: "Posts", description: "High-quality images for social media posts.", price: "From 20£" },
            { name: "Stories", description: "Creative visuals and short videos for Instagram/Facebook Stories.", price: "From 40£" },
            { name: "Reels", description: "Dynamic and engaging short-form videos for Instagram Reels.", price: "From 40£" },
            { name: "Other", description: "Custom social media content (e.g., carousel posts, live stream graphics).", price: "Negotiable" }
          ]
        },
        {
          name: "Illustrations",
          subicon: "ri-paint-line",
          shortDescription: "Professional digital and vector illustrations for various purposes.",
          price: "From 60£",
          nextSubOptions: [
            { name: "Digital Art", description: "High-resolution digital illustrations in various styles (e.g., photorealistic, abstract, cartoon).", price: "From 60£" },
            { name: "Vector Art", description: "Scalable vector illustrations suitable for logos, branding, and print materials.", price: "From 150£" }
          ]
        },
        {
          name: "Other",
          subicon: "ri-service-line",
          shortDescription: "Custom graphic design services not listed above.",
          price: "Negotiable",
          nextSubOptions: [
            { name: "Custom Projects", description: "Discuss your specific needs and receive a personalized quote.", price: "Negotiable" }
          ]
        }
      ]
    },
    {
      title: "Software Assistance",
      icon: "ri-tools-line",
      description: "Resolve software issues and optimize your PC for peak performance.",
      subOptions: [
        {
          name: "PC Optimization",
          subicon: "ri-speed-line",
          shortDescription: "Enhance your PC’s performance with speed and cleaning optimizations.",
          price: "From 30£",
          nextSubOptions: [
            { name: "Speed Boost", description: "Optimize system settings and remove unnecessary files to improve startup times and overall responsiveness.", price: "30£" },
            { name: "Cleaning", description: "Remove junk files, malware, and other unwanted software to free up disk space and improve performance.", price: "30£" }
          ]
        },
        {
          name: "Software Installation",
          subicon: "ri-install-line",
          shortDescription: "Professional installation and setup of essential software for your PC.", 
          price: "From 30£",
          nextSubOptions: [
            { name: "Office Suite", description: "Installation and setup of Microsoft Office Suite (Word, Excel, PowerPoint) or equivalent.", price: "30£" },
            { name: "Editing Software", description: "Installation and setup of professional editing software (e.g., Adobe Photoshop, Premiere Pro, etc.).", price: "From 40£" }
          ]
        },
        {
          name: "Troubleshooting",
          subicon: "ri-error-warning-line",
          shortDescription: "Diagnose and resolve software and hardware issues on your computer.",
          price: "Negotiable",
          nextSubOptions: [
            { name: "Error Fixing", description: "Diagnose and resolve common software errors, including blue screen errors, application crashes, and startup issues.", price: "Negotiable" },
            { name: "Crash Analysis", description: "In-depth analysis of system crashes to identify and resolve underlying causes.", price: "Negotiable" }
          ]
        },
        {
          name: "Consultation",
          subicon: "ri-service-line",
          shortDescription: "Get expert advice on software and hardware issues.",
          price: "Free",
          nextSubOptions: [
            { name: "Free Consultation", description: "Discuss your specific needs and receive personalized recommendations.", price: "Free" }
          ]
        }
      ]
    },
      {
        title: "Custom PC Builds",
        icon: "ri-computer-line",
        description: "Get a PC built for your specific gaming, work, or streaming needs.",
        subOptions: [
          {
            name: "Gaming PC",
            subicon: "ri-gamepad-line",
            shortDescription: "Build a powerful gaming PC for the best performance in high FPS and stunning visuals.",
            price: "From 500£",
            nextSubOptions: [
              {
                name: "Budget Gaming PC",
                description: "A cost-effective build for casual gaming and esports titles. Ideal for those on a tight budget.",
                price: "From £500"
              },
              {
                name: "Mid-Range Gaming PC",
                description: "Balanced performance for a variety of games at high settings. Suitable for most modern titles.",
                price: "From £800"
              },
              {
                name: "High-End Gaming PC",
                description: "Uncompromising performance for the most demanding games and creators. Features top-of-the-line components.",
                price: "From £1500"
              },
              {
                name: "Extreme Gaming PC",
                description: "Over-the-top performance for enthusiasts and competitive gamers. Customized with the latest hardware and overclocking.",
                price: "Custom Quote"
              },
            ],
          },
          {
            name: "Workstation",
            subicon: "ri-macbook-line",
            shortDescription: "High-performance PCs designed for demanding tasks like video editing, programming, and content creation.",
            price: "Custom Quote",
            nextSubOptions: [
              { 
                name: "Video Editing Workstation", 
                description: "Powerful systems with high-end GPUs and fast storage for smooth video editing and rendering.", 
                price: "Custom Quote" 
              },
              { 
                name: "Programming Workstation", 
                description: "Optimized for software development with powerful processors and ample RAM for smooth multitasking.", 
                price: "Custom Quote" 
              },
              { 
                name: "Creative Workstation", 
                description: "Versatile systems for graphic design, 3D modeling, and other creative tasks.", 
                price: "Custom Quote" 
              }
            ]
          }
        ],
      },
      {
        title: "Motion Design",
        icon: "ri-movie-line",
        description: "Engaging animations for logos, explainer videos, and intros.",
        subOptions: [
          {
            name: "Animated Logo",
            subicon: "ri-image-line",
            shortDescription: "Bring your brand to life with a captivating animated logo.",
            price: "From 120£",
            nextSubOptions: [
              { name: "Looping Animation", description: "A smooth, seamlessly looping animation for use on websites and social media.", price: "From 120£" },
              { name: "Dynamic Animation", description: "A more complex animation with subtle motion and visual effects.", price: "From 150£" }
            ]
          },
          {
            name: "Explainer Video",
            subicon: "ri-video-line",
            shortDescription: "Create compelling explainer videos that clearly communicate your message and engage your audience.",
            price: "From 500£",
            nextSubOptions: [
              { 
                name: "Whiteboard Animation", 
                description: "Classic and engaging whiteboard animation style, ideal for explaining complex concepts in a simple and memorable way.", 
                price: "From 450£" 
              },
              { 
                name: "2D Animation", 
                description: "High-quality 2D animation with dynamic characters and vibrant visuals for a more visually engaging experience.", 
                price: "From 700£" 
              }
            ]
          },
          {
            name: "Intro Animation",
            subicon: "ri-play-circle-line",
            shortDescription: "Create impactful intro animations for YouTube channels, corporate presentations, and more.",
            price: "From 200£",
            nextSubOptions: [
              { 
                name: "YouTube Intro", 
                description: "Dynamic and engaging intros for your YouTube channel, including channel logos and branding elements.", 
                price: "From 200£" 
              },
              { 
                name: "Corporate Intro", 
                description: "Professional and sophisticated intros for corporate presentations and events, reflecting your brand identity.", 
                price: "From 300£" 
              }
            ]
          },
          {
            name: "Other Animation",
            subicon: "ri-play-circle-line",
            shortDescription: "Custom animation services tailored to your specific needs.",
            price: "Negotiable",
            nextSubOptions: [
              { 
                name: "Custom Animation", 
                description: "Discuss your project requirements and receive a personalized quote. We can create a wide range of animations, including motion graphics, 3D animations, and more.", 
                price: "Negotiable" 
              }
            ]
          },
        ],
      },
      {
        title: "AI Solutions",
        icon: "ri-robot-line",
        description: "Innovative AI solutions to streamline your business and unlock new opportunities.",
        subOptions: [
          {
            name: "AI Integration",
            subicon: "ri-plug-line",
            shortDescription: "Seamlessly integrate AI into your existing systems for enhanced automation and efficiency.",
            price: "From 1000£",
            nextSubOptions: [
              { 
                name: "Website AI Integration", 
                description: "Integrate AI features like chatbots, personalized recommendations, and predictive analytics into your website.", 
                price: "From 1000£" 
              },
              { 
                name: "CRM AI Integration", 
                description: "Leverage AI to improve customer relationship management with features like lead scoring, predictive customer churn, and personalized marketing.", 
                price: "From 1500£" 
              }
            ]
          },
          {
            name: "Chatbot Development",
            subicon: "ri-chat-3-line",
            shortDescription: "Develop intelligent chatbots to automate customer interactions and improve efficiency.",
            price: "From 700£",
            nextSubOptions: [
              { 
                name: "E-commerce Chatbot", 
                description: "Develop a chatbot for your online store to assist customers with product recommendations, order tracking, and more.", 
                price: "From 700£" 
              },
              { 
                name: "Customer Support Chatbot", 
                description: "Create a chatbot to handle common customer inquiries, provide 24/7 support, and improve customer satisfaction.", 
                price: "From 850£" 
              }
            ]
          },
          {
            name: "Data Analysis",
            subicon: "ri-bar-chart-line",
            shortDescription: "Uncover valuable insights from your data using advanced AI and machine learning techniques.",
            price: "From 1500£",
            nextSubOptions: [
              { 
                name: "Big Data Analysis", 
                description: "Analyze large datasets to identify trends, patterns, and anomalies for informed decision-making.", 
                price: "From 1500£" 
              },
              { 
                name: "AI-Powered Insights", 
                description: "Leverage AI to generate actionable insights and predictions for business growth and optimization.", 
                price: "From 1700£" 
              }
            ]
          },
          {
            name: "AI-Powered Creative",
            subicon: "ri-image-line", 
            description: "Generate high-quality images, videos, and sounds using cutting-edge AI technologies.",
            price: "From 10£",
            nextSubOptions: [
              { 
                name: "AI Image Generation", 
                description: "Create unique and original images using AI tools like DALL-E 2 and Midjourney.", 
                price: "From 10£" 
              },
              { 
                name: "AI Video Generation", 
                description: "Generate engaging videos with AI-powered tools, including short-form videos and animations.", 
                price: "From 30£" 
              },
              { 
                name: "AI Sound Generation", 
                description: "Create unique sound effects, music, and voiceovers using AI-powered tools.", 
                price: "From 50£" 
              }
            ]
          }
        ],
      },
    ];    
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  };

  const getStartedButton = () => {
    setTimeout(() => {
      scrollToSection("targetElementFirst");
    }, 500);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service.title);
    setSubOptions(service.subOptions);
    setSelectedSubOption(null);
    setNextSubOptions([]);
    setSelectedNextSubOption(null);
    setTimeout(() => {
      scrollToSection("targetElement");
    }, 500);
  };

  const handleSubOptionClick = (subOption) => {
    setSelectedSubOption(subOption.name);
    setNextSubOptions(subOption.nextSubOptions || []);
    setSelectedNextSubOption(null);
    setTimeout(() => {
      scrollToSection("targetElementSecond");
    }, 500);
  };

  const handleNextSubOptionClick = (option) => {
    setSelectedNextSubOption(option);
    setTimeout(() => {
      scrollToSection("targetElementThird");
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isCaptchaValid) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }
  
    // Прочие проверки, например, на корректность email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please, provide the correct email address.");
      return;
    }
  
    setIsLoading(true);
  
    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      selectedService: selectedService.title,  // Access title from the selected service object
      selectedSubOption: selectedSubOption.name,  // Access name from the selected sub-option object
      ...(selectedNextSubOption && { selectedNextSubOption: selectedNextSubOption.name }),  // Include next sub-option if selected
      comments: formData.comments,
      preferredLanguage: preferredLanguage,
      preferredMessenger: preferredMessenger,
      captchaToken: captchaToken, // Assuming you have a captchaToken variable
    };
  
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
        alert('CAPTCHA validation failed');
        return;
      }
  
      // Отправка email
      await emailjs.send(
        'service_lxxmm8s', 
        'template_il5cfqr', 
        emailParams,
        'Df4zcv3Cqe2LtutdW'
      );
      
      setIsSubmitted(true);
      alert('Form successfully submitted!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        comments: '',
      });
      setPreferredLanguage('');
      setPreferredMessenger('');
    } catch (error) {
      console.error('Error sending form:', error);
      alert('There was an error sending the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div className="bg-gray-900 text-almost-white min-h-screen pt-20">
    <Wrapper>
    <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 xl:px-8">
  <div className="w-full h-full bg-gradient-to-b from-sky-500 via-sky-600 to-indigo-800"></div>



  {/* Контейнер с содержимым */}
  <AnimatedSection animation={fadeInUp}>
  <div className="bg-gradient-to-r from-sky-500 to-sky-500 p-12 rounded-3xl shadow-2xl mt-10 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500">
    {/* Заголовок */}
    <h1 className="sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
      Choose the Best <span className="text-sky-700">Solution</span>
    </h1>

    {/* Описание */}
    <p className="md:text-xl sm:text-sm text-gray-800 mb-8 leading-relaxed">
      Customize your order and let us bring your vision to life with stunning designs and innovative solutions tailored just for you!
    </p>

    {/* Кнопка действия */}
    <div className="flex justify-center">
      <button 
        onClick={() => {
          getStartedButton(null);
        }}
      className="w-64 h-14 text-lg bg-white font-extrabold text-sky-500 rounded-full hover:bg-blue-100 transition duration-300">
        Customize
      </button>
    </div>
  </div>
  </AnimatedSection>
</div>





<AnimatedSection animation={slideInRight}>
      <h1 id="targetElementFirst" className="text-sky-500 text-5xl font-extrabold text-center my-10 ">
        1. Choose Your Services
      </h1>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-10 xl:p-7 md:p-8 sm:p-10 cursor-pointer  ">
        {services.map((service) => (
          <div
  key={service.title}
  onClick={() => {
    handleServiceClick(service);
  }}
  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 ${
    selectedService === service.title ? "ring-4 ring-sky-500" : ""
  }`}
>
  <div className="absolute top-0 right-0 text-sky-500 opacity-20 text-9xl font-bold pointer-events-none transform -translate-y-12 translate-x-6">
    <i className={`${service.icon}`}></i>
  </div>
  <div className="relative z-10">
    <i className={`${service.icon} text-4xl text-sky-500 mb-4`}></i>
    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
    <p className="text-sm text-gray-400">{service.description}</p>
  </div>
</div>

        ))}
      </div>
      </AnimatedSection>

      {subOptions.length > 0 && (
        <div id="targetElement" className="mb-10 ">
  <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
    2. Select an Option
  </h2>
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:p-7 md:p-8 sm:p-10">
    {subOptions.map((option) => (
      <div
        key={option.name}
        onClick={() => handleSubOptionClick(option)}
        className={`bg-gradient-to-br from-gray-800 to-gray-900 p-4 mb-5 rounded-lg shadow-lg text-center cursor-pointer transition-transform transform hover:scale-105${
          selectedSubOption === option.name ? "bg-gradient-to-br from-sky-500 via-sky-500 to-sky-700" : ""
        }`}
      >
        <i
          className={`${option.subicon} text-2xl mb-2 block ${
            selectedSubOption === option.name ? "text-gray-600" : "text-sky-500"
          }`}
        ></i>
        <h3 className="font-bold text-lg mb-1">{option.name}</h3>
        <p
  className={`text-sm ${
    selectedSubOption === option.name ? "text-gray-200" : "text-sky-500"
  }`}
>
  {option.shortDescription}
  <span className="block text-yellow-500 text-xl font-thin mt-2">{option.price}</span>
</p>

      </div>
    ))}
  </div>
</div>


      )}

{nextSubOptions.length > 0 && (
  <div id="targetElementSecond" className="mb-14 xl:p-7 md:p-12 sm:p-14">
  <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
    3. Almost there
  </h2>
  <div className="grid gap-6 mb-24 md:grid-cols-2 xl:grid-cols-3">
    {nextSubOptions.map((option, index) => (
      <div
        key={option.name}
        onClick={() => handleNextSubOptionClick(option.name)}
        className={`relative group bg-gradient-to-br from-gray-800 to-gray-900 p-6 mb-7 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer ${
          selectedNextSubOption === option.name
            ? "bg-gradient-to-br from-sky-500 via-sky-500 to-sky-700 text-white"
            : ""
        }`}
      >
        <h3
          className={`text-xl font-medium ${
            selectedNextSubOption === option.name ? "text-white" : "text-white"
          }`}
        >
          {option.name}
        </h3>
        <p
          className={`text-sm mt-2 ${
            selectedNextSubOption === option.name ? "text-gray-400" : "text-sky-500"
          }`}
        >
          <span className="block text-gray-200 text-md font-light mt-2">{option.description}</span>
          <span className="block text-yellow-500 text-xl font-extralight mt-2">{option.price}</span>
        </p>
      </div>
    ))}
  </div>
</div>

)}

{selectedNextSubOption && (
  <form
    id="targetElementThird"
    onSubmit={handleSubmit}
    className="bg-gradient-to-b from-gray-800 to-gray-900 xl:p-7 md:p-6 sm:p-4 rounded-2xl shadow-2xl max-w-screen mx-auto"
  >
    <h2 className="text-sky-500 text-2xl md:text-4xl font-extrabold mb-6 text-center">
      Complete Your Order
    </h2>
    <div className="grid gap-6">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        className="w-full bg-gray-900 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your Email"
        className="w-full bg-gray-900 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
        required
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Your Phone"
        className="w-full bg-gray-900 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
        required
      />
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleInputChange}
        placeholder="Additional Comments"
        className="w-full bg-gray-900 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
        rows={4}
      ></textarea>

      <div>
        <h3 className="text-lg text-gray-400 font-semibold mb-2">
          Preferred Language:
        </h3>
        <select
          value={preferredLanguage}
          onChange={(e) => setPreferredLanguage(e.target.value)}
          className="w-full bg-gray-900 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
          required
        >
          <option value="" className="text-gray-400">
            Select Language
          </option>
          <option value="Russian">Russian</option>
          <option value="English">English</option>
        </select>
      </div>

      <div>
        <h3 className="text-lg text-gray-400 font-semibold mb-2">
          Preferred Messenger:
        </h3>
        <select
          value={preferredMessenger}
          onChange={(e) => setPreferredMessenger(e.target.value)}
          className="w-full bg-gray-900 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
          required
        >
          <option value="" className="text-gray-400">
            Select Messenger
          </option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Telegram">Telegram</option>
          <option value="Messenger">Messenger</option>
          <option value="Email">Email</option>
        </select>
      </div>
    </div>

    {/* reCAPTCHA */}
    <div className="my-6">
      <ReCAPTCHA
        sitekey="6Ldl_K8qAAAAANAIIS5ZrbcDVCTDA-zizOWgH-Fc"
        onChange={handleCaptchaChange}
      />
    </div>

    <Button
      hasWhiteStyle={true}
      type="submit"
      disabled={isLoading}
      className={`w-full mt-4 py-3 px-6 text-white ${
        isLoading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-sky-500 hover:bg-sky-700 border-none"
      }`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3.5-3.5L8 8V4a8 8 0 00-4 8h4z"
            ></path>
          </svg>
          <span className="ml-2">Sending...</span>
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  </form>

      )}

      {isSubmitted && (
        <div className="bg-green-500 text-white p-4 rounded-lg mt-6 text-center">
          Thank you! Your message has been sent. We will contact you shortly.
        </div>
      )}
    </Wrapper>
  </div>
);
};

export default Order;




