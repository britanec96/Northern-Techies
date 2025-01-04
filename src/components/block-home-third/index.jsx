import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Импортируем useInView
import One from '../../images/One.jpg';
import Three from '../../images/Three.jpg';
import Six from '../../images/Six.jpg';

const BlockHomeThird = () => {

  const handleWhatsApp = () => {
    window.open("https://wa.me/+447378716579", "_blank");
  };

  // useInView для каждого элемента
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.1 });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.1 });
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.1 });
  const { ref: ref7, inView: inView7 } = useInView({ threshold: 0.1 });

  return (
    <>
      <motion.div 
        className="bg-gray-900 rounded-lg shadow-md py-20 px-4 md:px-8 mt-20 mb-5"
        ref={ref1}  // Добавляем ref для отслеживания
        initial={{ opacity: 0 }}
        animate={{ opacity: inView1 ? 1 : 0 }}  // Анимация срабатывает, когда блок в зоне видимости
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12 ">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-almost-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: inView1 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            Any Your Idea With
          </motion.h2>
          <motion.h1 
            className="text-4xl mt-2 md:text-7xl font-bold text-sky-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: inView1 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            Northern Techies
          </motion.h1>
        </div>

        {/* Добавляем useInView для анимации с задержкой */}
        <motion.div 
          className="text-center text-lg md:text-xl text-gray-400 mb-12 font-fira"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView2 ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          ref={ref2} 
        >
          <p>You don't have to know computers or software — we handle it all for you.</p>
        </motion.div>
        <motion.div
          className="flex items-center justify-center text-gray-400 "
          initial={{ opacity: 0 }}
          animate={{ opacity: inView3 ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          ref={ref3}
        >
          <i className="ri-money-pound-circle-line mr-1"></i> <h1 className='mr-5'>Low-Budget</h1>
          <i className="ri-speed-line mr-1"></i> <h1 className='mr-5'>Fast</h1>
          <i className="ri-star-line mr-1"></i> <h1>Qualitatively</h1>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView4 ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          ref={ref4}
        >
          <motion.div className="block md:w-1/2">
            <motion.img
              src={One}
              className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Online Store Showcase"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: inView4 ? 1 : 0.8, opacity: inView4 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          <motion.div className="flex-1">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-almost-white mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: inView4 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              Thinking of Starting an Online Store?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: inView4 ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your dream of running an online shop is within reach! We’ve helped countless entrepreneurs bring their store ideas to life, from custom designs to seamless integrations. Join our happy clients, and get a quick overview of the steps and what you can expect by working with us.
            </motion.p>
            <div className="mt-6">
              <Link to="/web-development">
                <Button hasWhiteStyle={true}>Let's Start</Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

        {/* Повторяем для других элементов */}
        <motion.div 
          className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView5 ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          ref={ref5}
        >
          <motion.div className="flex-1">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-almost-white mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: inView5 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              Computer issues?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: inView5 ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Won’t start? Running slow? Need a Windows reinstall? We’ve got you covered! Our specialists are experienced in handling all kinds of issues and can quickly get your computer back to optimal performance. Contact us to learn how we can help restore your device to peak condition.
            </motion.p>
            <div className="mt-6">
              <Link to="/consultationservices">
                <Button hasWhiteStyle={true}>Get Help</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div className="block md:w-1/2">
            <motion.img
              src={Three}
              className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Online Store Showcase"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: inView5 ? 1 : 0.8, opacity: inView5 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>

        <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

        <motion.div 
          className="mt-12 flex flex-col md:flex-row items-center md:text-right sm:text-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView6 ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          ref={ref6}
        >
          <motion.div className="block md:w-1/2">
            <motion.img
              src={Six}
              className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Online Store Showcase"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: inView6 ? 1 : 0.8, opacity: inView6 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          <motion.div className="flex-1">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-almost-white mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: inView6 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              Want to Refresh Your Existing Design or Your Business’s Image?
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: inView6 ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From simple business cards to social media designs, we create stylish, memorable solutions. Our designers help you stand out, whether it’s for personal branding or small business needs. Check out our portfolio and see how easy it is to update your look!
            </motion.p>
            <div className="mt-6">
              <Link to="/portfolio">
                <Button hasWhiteStyle={true}>Portfolio</Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <section>
        <motion.div
          className="bg-gray-900 p-5 mb-5 text-center relative rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView7 ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          ref={ref7}
        >
          <h1 className="m-5 text-almost-white md:text-5xl sm:text-3xl font-extrabold ">
            Get a free consultation
          </h1>
          <div className="">
            <p className="m-5 text-gray-100 md:text-2xl sm:text-xl">Get professional help right{' '}
              <span className="text-sky-500 text-3xl font-semibold">NOW!</span>
            </p>
            <motion.div
      className="m-5"
      animate={{
        scale: [1, 1.1, 1], 
      }}
      transition={{
        duration: 1.5, // Длительность анимации
        repeat: Infinity, // Зацикливаем анимацию
        repeatType: "loop", // Повторяем анимацию бесконечно
        ease: "easeInOut", // Плавное изменение
      }}
    >
      <Button
        onClick={(event) => {
          event.preventDefault();
          handleWhatsApp();
        }}
        className="text-white py-3 px-6 rounded-lg shadow-lg"
        hasWhiteStyle={true}
      >
        Contact Us
      </Button>
    </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default BlockHomeThird;


