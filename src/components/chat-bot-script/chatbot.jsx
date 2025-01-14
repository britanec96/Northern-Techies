import React, { useState, useEffect, useRef } from "react";

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false); // Добавляем состояние для показа кнопки
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const chatRef = useRef(null);

  const initialOptions = [
    "Tell me about your services",
    "How to place an order?",
    "What are the prices?",
    "Contact support",
  ];

  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: "Hello! How can I assist you today?", type: "bot" }]);
      setUserInput("");
      setOptions(initialOptions);
      setShowContactOptions(false);
    }
  }, [isOpen]);

  const createResponse = (keywords, response, action = null) => ({
    keywords,
    response,
    action,
  });

  const botResponses = [
    createResponse(
      ["services", "what do you offer", "help"],
      "We offer a wide range of IT services, including web development, graphic design, AI solutions, and more. Is there a specific service you're interested in?"
    ),
    createResponse(
      ["web development", "website"],
      "Our web development services include modern, responsive websites, e-commerce platforms, and custom solutions. What kind of website do you need?"
    ),
    createResponse(
      ["graphic design", "logo", "banner", "poster", "design"],
      "We specialize in graphic design, including logos, branding, and more. Do you have a specific project in mind?"
    ),
    createResponse(
      ["logo", "logotype"],
      "Our logo design service starts at £50. Do you have specific ideas or would you like us to create something unique?"
    ),
    createResponse(
      ["banner", "advertisement banner"],
      "We create banners for websites, social media, and advertisements. What size and style are you looking for?"
    ),
    createResponse(
      ["poster", "event poster"],
      "Our posters are perfect for events and promotions. What is the purpose of the poster, and do you have specific dimensions?"
    ),
    createResponse(
      ["order", "place an order", "buy", "purchase"],
      "To place an order, please let us know the service you're interested in and any specific requirements or ideas you have in mind."
    ),
    createResponse(
      ["support", "help", "technical support"],
      "For support, please describe the issue you're facing, and we'll assist you as quickly as possible."
    ),
    createResponse(
      ["contact", "get in touch", "contact us"],
      "You can contact us via email at contact@example.com or through our social media channels. Would you like more details?"
    ),
    createResponse(
      ["telegram", "telegram support", "telegram contact"],
      "You can reach us on Telegram here: [Insert Telegram Link]. Feel free to message us anytime!"
    ),
    createResponse(
      ["whatsapp", "whatsapp support", "whatsapp contact"],
      "You can reach us on WhatsApp here: [Insert WhatsApp Link]. We'll be happy to assist you.",
      "whatsappLink"
    ),
    createResponse(
      ["instagram", "instagram contact", "instagram support"],
      "Follow us on Instagram: [Insert Instagram Link]. Direct message us for inquiries or assistance."
    ),
    createResponse(
      ["facebook", "facebook contact", "facebook support"],
      "You can also reach us on Facebook: [Insert Facebook Link]. Feel free to send us a message."
    ),
    createResponse(
      ["pricing", "how much does it cost", "prices", "pricing information"],
      "Our pricing varies depending on the service and project complexity. Please let us know what you're interested in, and we can provide an estimate."
    ),
    createResponse(
      ["portfolio", "our work", "examples", "projects"],
      "You can check out our portfolio here: [Insert Portfolio Link]. It showcases our previous work and projects."
    ),
    createResponse(
      ["about", "about us", "who are you", "company info"],
      "We are a team of passionate IT professionals providing high-quality digital services. Would you like to know more about our mission or team?"
    ),
    createResponse(
      ["FAQ", "frequently asked questions", "helpful questions", "common questions"],
      "You can find our frequently asked questions here: [Insert FAQ Link]. It answers most of the common inquiries we receive."
    ),
    createResponse(
      ["terms", "terms and conditions", "terms of service"],
      "You can read our terms and conditions here: [Insert Terms Link]. Let us know if you have any questions about them."
    ),
    createResponse(
      ["privacy", "privacy policy", "data protection", "privacy statement"],
      "You can find our privacy policy here: [Insert Privacy Policy Link]. Your data protection is important to us."
    ),
    createResponse(
      ["thank you", "thanks", "appreciate it"],
      "You're welcome! Feel free to reach out anytime. How else can I assist you today?"
    ),
    createResponse(
      ["goodbye", "bye", "exit", "quit"],
      "Goodbye! Have a great day, and don't hesitate to contact us if you need anything else."
    ),
  ];

  const handleUserMessage = (input) => {
    const normalizedInput = input.trim().toLowerCase();
    setIsTyping(true);

    // Процесс генерации ответа
    let response = generateBotResponse(normalizedInput);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: input, type: "user" },
        { text: response, type: "bot" },
      ]);
      setIsTyping(false);
      setUserInput("");
      scrollToBottom();
    }, Math.random() * 1000 + 1000); 
  };

  const generateBotResponse = (input) => {
    for (const key in botResponses) {
      const category = botResponses[key];
  
      // Проверка ключевых слов
      if (category.keywords.some((keyword) => input.match(new RegExp(`\\b${keyword}\\b`, "i")))) {
        if (category.subcategories) {
          for (const subKey in category.subcategories) {
            const subcategory = category.subcategories[subKey];
  
            if (subcategory.keywords.some((subKeyword) => input.match(new RegExp(`\\b${subKeyword}\\b`, "i")))) {
              subcategory.action?.(); 
              return subcategory.response;
            }
          }
        }
  
        
        if (category.keywords.some((keyword) => keyword.match(/contact|telegram|whatsapp|facebook|instagram|support/i))) {
          setShowContactOptions(true);
        }
  
        return category.response;
      }
    }
  
    return "I'm sorry, I didn't understand your response. Could you rephrase?";
  };

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    handleUserMessage(userInput.trim());
  };

  const handleOptionClick = (option) => {
    if (isButtonDisabled) return;
    setIsButtonDisabled(true);

    // Обрабатываем выбор пользователя
    handleUserMessage(option);

    setTimeout(() => setIsButtonDisabled(false), 3000);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/+447378716579", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/+447378716579", "_blank");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isOpen) return null;


  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-900 shadow-2xl border border-gray-900 rounded-3xl w-[90%] sm:w-80 md:w-96 max-h-[80vh] flex flex-col text-white transition-transform  duration-300">
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-gradient-to-br from-gray-900 to-gray-900 shadow-2xl border border-gray-900 rounded-3xl w-[90%] sm:w-80 lg:w-96 max-h-[80vh] flex flex-col z-50 text-white">
      <div className="bg-sky-500 rounded-t-3xl p-4 flex justify-between items-center shadow-md">
        <h3 className="text-lg font-bold">Chat Assistant</h3>
        <button
          onClick={onClose}
          className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-900 transition duration-300"
        >
          ✕
        </button>
      </div>

      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-900"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.type === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`p-3 rounded-2xl text-sm max-w-[80%] lg:max-w-[70%] ${
                msg.type === "bot"
                  ? "bg-gray-900 text-gray-400 animate-slideInLeft"
                  : "bg-sky-500 text-white animate-slideInRight"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="p-3 rounded-2xl text-sm max-w-[80%] lg:max-w-[70%] bg-gray-900 text-gray-400">
              Typing...
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-900 p-4 space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={isButtonDisabled}
            className={`w-full text-left bg-gray-900 text-gray-400 hover:bg-gray-900 hover:text-white transition-all duration-200 py-2 px-4 rounded-lg text-sm shadow-md ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {option}
          </button>
        ))}
        {showContactOptions && (
          <div className="mt-4 space-y-2">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded-lg shadow-md transition-all duration-300"
            >
              WhatsApp
            </button>
            <button
              onClick={handleTelegram}
              className="w-full bg-blue-500 text-white hover:bg-sky-500 py-2 px-4 rounded-lg shadow-md transition-all duration-300"
            >
              Telegram
            </button>
          </div>
        )}
      </div>

      <div className="bg-gray-900 p-4 rounded-b-3xl space-y-2">
        <div className="flex">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-gray-900 text-white p-2 rounded-l-lg outline-none border-none"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-sky-500 text-white px-4 rounded-r-lg hover:bg-sky-500 transition-all duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChatBot;


