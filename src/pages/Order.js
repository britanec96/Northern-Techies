import React, { useState } from "react";
import { Wrapper } from "../components/wrapper";
import emailjs from "emailjs-com";
import useScrollReveal from "../components/SCROLL-REVEAL/ScrollReveal";
import { Button } from "../components/button";

const Order = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [subOptions, setSubOptions] = useState([]);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [nextSubOptions, setNextSubOptions] = useState([]);
  const [selectedNextSubOption, setSelectedNextSubOption] = useState(null);
  const [preferredLanguage, setPreferredLanguage] = useState(""); // Новый параметр
  const [preferredMessenger, setPreferredMessenger] = useState(""); // Новый параметр
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollReveal([
    { selector: ".element-delay-800", delay: 800, options: { distance: "70px", easing: "ease-in-out" } },
    { selector: ".element-delay-1200", delay: 1200, options: { distance: "70px", easing: "ease-in-out" } },
    { selector: ".element-delay-1600", delay: 1600, options: { distance: "70px", easing: "ease-in-out" } },
  ]);

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
          nextSubOptions: ["One-page website", "Multi-section website", "Other"] 
        },
        { 
          name: "E-commerce (Online Shop)", 
          subicon: "ri-pages-line", 
          shortDescription: "Sell products with ease online.", 
          nextSubOptions: ["Shopify", "Custom Platform", "Not sure"] 
        },
        { 
          name: "Portfolio Website", 
          subicon: "ri-passport-line", 
          shortDescription: "Showcase your work beautifully.", 
          nextSubOptions: ["Photography", "Artworks", "Other"] 
        },
        { 
          name: "Custom Website", 
          subicon: "ri-grid-line", 
          shortDescription: "Unique websites for specific needs.", 
          nextSubOptions: ["Blog", "Forum", "Other"] 
        },
      ],
    },    
    {
      title: "Graphic Design",
      icon: "ri-brush-line",
      description: "Professional designs for logos, banners, and social media content.",
      subOptions: [
        { 
          name: "Logotype",
          subicon: "ri-leaf-line", 
          shortDescription: "Custom logo designs for branding.",
          nextSubOptions: ["Minimalist", "3D", "Abstract", "I'm not sure"] 
        },
        { 
          name: "Banner",
          subicon: "ri-flag-2-line", 
          shortDescription: "Banners for online ads and print materials.",
          nextSubOptions: ["Web Ads", "Print Materials", "Other"] 
        },
        { 
          name: "Social Media Content",
          subicon: "ri-instagram-line", 
          shortDescription: "Engaging content for social media platforms.",
          nextSubOptions: ["Posts", "Stories", "Reels", "Other"] 
        },
        { 
          name: "Illustrations",
          subicon: "ri-paint-line", 
          shortDescription: "Digital and vector art illustrations.",
          nextSubOptions: ["Digital Art", "Vector Art"] 
        },
        { 
          name: "Other",
          subicon: "ri-service-line", 
          shortDescription: "Other graphic design services.",
          nextSubOptions: ["Other"] 
        },
      ],
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
          nextSubOptions: ["Speed Boost", "Cleaning"]
        },
        { 
          name: "Software Installation",
          subicon: "ri-install-line",
          shortDescription: "Install essential software for your PC, including office and editing tools.",
          nextSubOptions: ["Office Suite", "Editing Software"]
        },
        { 
          name: "Troubleshooting",
          subicon: "ri-error-warning-line",
          shortDescription: "Fix errors and analyze crashes to ensure your system runs smoothly.",
          nextSubOptions: ["Error Fixing", "Crash Analysis"]
        },
        { 
          name: "Other",
          subicon: "ri-service-line",
          shortDescription: "Other software-related assistance services.",
          nextSubOptions: ["Other"]
        },
      ],
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
          nextSubOptions: ["High FPS", "RGB Setup"]
        },
        { 
          name: "Workstation",
          subicon: "ri-macbook-line",
          shortDescription: "Custom PCs designed for intensive tasks like video editing, programming, or office work.",
          nextSubOptions: ["Video Editing", "Programming", "For Work"]
        },
        { 
          name: "Streaming Setup",
          subicon: "ri-mic-line",
          shortDescription: "Optimized setups for high-quality streaming, whether you’re using a single or dual PC setup.",
          nextSubOptions: ["Dual PC", "Budget Build"]
        },
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
          shortDescription: "Create a unique, animated logo to enhance brand identity.",
          nextSubOptions: ["Looping", "Dynamic"]
        },
        { 
          name: "Explainer Video",
          subicon: "ri-video-line",
          shortDescription: "Craft engaging explainer videos with clear messaging and dynamic visuals.",
          nextSubOptions: ["Whiteboard Animation", "2D Animation"]
        },
        { 
          name: "Intro Animation",
          subicon: "ri-play-circle-line",
          shortDescription: "Produce eye-catching intro animations for YouTube or corporate use.",
          nextSubOptions: ["YouTube Intro", "Corporate"]
        },
                { 
          name: "Other Animation",
          subicon: "ri-play-circle-line",
          shortDescription: "Other types of animations.",
          nextSubOptions: ["Other"]
        },
      ],
    },
    {
      title: "AI Solutions",
      icon: "ri-robot-line",
      description: "Innovative AI solutions for automation, chatbots, and data insights.",
      subOptions: [
        { 
          name: "AI Integration",
          subicon: "ri-plug-line",
          shortDescription: "Integrate AI into your website or CRM for smarter automation.",
          nextSubOptions: ["Website", "CRM"]
        },
        { 
          name: "Chatbot Development",
          subicon: "ri-chat-3-line",
          shortDescription: "Develop advanced chatbots for e-commerce or customer support.",
          nextSubOptions: ["E-commerce", "Customer Support"]
        },
        { 
          name: "Data Analysis",
          subicon: "ri-bar-chart-line",
          shortDescription: "Analyze big data and derive valuable insights for decision-making.",
          nextSubOptions: ["Big Data", "Insights"]
        },
        {
          name: "AI Images, Video, Sounds",
          subicon: "ri-image-line", 
          shortDescription: "Generate AI-powered images, videos, and sounds to bring your ideas to life.",
          nextSubOptions: ["Big Data", "Insights"]
        }
        
      ],
    }    
  ];


  const handleServiceClick = (service) => {
    setSelectedService(service.title);
    setSubOptions(service.subOptions);
    setSelectedSubOption(null);
    setNextSubOptions([]);
    setSelectedNextSubOption(null);
  };

  const handleSubOptionClick = (subOption) => {
    setSelectedSubOption(subOption.name);
    setNextSubOptions(subOption.nextSubOptions || []);
    setSelectedNextSubOption(null);
  };

  const handleNextSubOptionClick = (option) => {
    setSelectedNextSubOption(option);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      selectedService,
      selectedSubOption,
      selectedNextSubOption,
      preferredLanguage,
      preferredMessenger,
    };

    emailjs
      .send("service_lxxmm8s", "template_il5cfqr", dataToSend, "Df4zcv3Cqe2LtutdW")
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", comments: "" });
            setSelectedService(null);
            setSubOptions([]);
            setSelectedSubOption(null);
            setNextSubOptions([]);
            setSelectedNextSubOption(null);
            setPreferredLanguage("");
            setPreferredMessenger("");
          }, 3000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
    <Wrapper>
    <div className="flex flex-col items-center justify-center text-center element-delay-800">
  <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-12 rounded-3xl shadow-xl mt-10 max-w-3xl mx-auto">
    <h1 className="text-4xl xl:text-5xl font-extrabold text-white mb-4">
      Choose the Best Solution for Your Needs
    </h1>
    <p className="text-lg text-gray-200 mb-6">
      Select the services you need, customize your order, and submit the form to get started. We’ll take care of the rest!
    </p>
  </div>
</div>




      <h1 className="text-sky-500 text-5xl font-extrabold text-center my-10 element-delay-1200">
        1. Choose Your Services
      </h1>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-10 cursor-pointer element-delay-1600">
        {services.map((service) => (
          <div
  key={service.title}
  onClick={() => handleServiceClick(service)}
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

      {subOptions.length > 0 && (
        <div className="mb-10 element-delay-800">
  <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
    2. Select an Option
  </h2>
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {subOptions.map((option) => (
      <div
        key={option.name}
        onClick={() => handleSubOptionClick(option)}
        className={`bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors cursor-pointer ${
          selectedSubOption === option.name ? "bg-gradient-to-br from-sky-500 via-sky-800 to-sky-700" : ""
        }`}
      >
        <i
          className={`${option.subicon} text-2xl mb-2 block ${
            selectedSubOption === option.name ? "text-gray-300" : "text-sky-500"
          }`}
        ></i>
        <h3 className="font-bold text-lg mb-1">{option.name}</h3>
        <p
  className={`text-sm ${
    selectedSubOption === option.name ? "text-gray-400" : "text-sky-500"
  }`}
>
  {option.shortDescription}
</p>

      </div>
    ))}
  </div>
</div>


      )}

{nextSubOptions.length > 0 && (
  <div className="mb-10 element-delay-800">
  <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
    3. Select the Next Sub-Option
  </h2>
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {nextSubOptions.map((option, index) => (
      <div
        key={option}
        onClick={() => handleNextSubOptionClick(option)}
        className={`relative group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer ${
          selectedNextSubOption === option
            ? "bg-gradient-to-br from-sky-500 via-sky-800 to-sky-700 text-white"
            : ""
        }`}
      >
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-semibold group-hover:animate-spin">
          {index + 1}
        </div>
        <h3
          className={`text-xl font-medium ${
            selectedNextSubOption === option ? "text-white" : "text-gray-300"
          }`}
        >
          {option}
        </h3>
      </div>
    ))}
  </div>
</div>

)}

{selectedNextSubOption && (
  <form
  onSubmit={handleSubmit}
  className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl element-delay-800 transform transition-transform hover:scale-105"
>
  <h2 className="text-sky-500 text-4xl font-extrabold mb-8 text-center">
    Complete Your Order
  </h2>
  <div className="grid gap-6">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Your Name"
      className="bg-gray-700 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
      required
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="Your Email"
      className="bg-gray-700 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
      required
    />
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      placeholder="Your Phone"
      className="bg-gray-700 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
      required
    />
    <textarea
      name="comments"
      value={formData.comments}
      onChange={handleInputChange}
      placeholder="Additional Comments"
      className="bg-gray-700 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
      rows={4}
    ></textarea>

    <div className="mt-4">
      <h3 className="text-lg text-gray-300 font-semibold mb-2">
        Preferred Language:
      </h3>
      <select
        value={preferredLanguage}
        onChange={(e) => setPreferredLanguage(e.target.value)}
        className="w-full bg-gray-700 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
        required
      >
        <option value="" className="text-gray-400">
          Select Language
        </option>
        <option value="Russian">Russian</option>
        <option value="English">English</option>
      </select>
    </div>

    <div className="mt-4">
      <h3 className="text-lg text-gray-300 font-semibold mb-2">
        Preferred Messenger:
      </h3>
      <select
        value={preferredMessenger}
        onChange={(e) => setPreferredMessenger(e.target.value)}
        className="w-full bg-gray-700 text-white p-4 rounded-xl outline-none focus:ring-4 focus:ring-sky-500 transition-all"
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

  <button
    type="submit"
    className="mt-6 w-full bg-sky-500 text-white p-4 rounded-xl font-bold text-lg hover:bg-sky-600 transition-all"
  >
    SUBMIT
  </button>
</form>

      )}

      {isSubmitted && (
        <div className="bg-green-500 text-white p-4 rounded-lg mt-6 text-center">
          Thank you! Your order has been submitted.
        </div>
      )}
    </Wrapper>
  </div>
);
};

export default Order;




