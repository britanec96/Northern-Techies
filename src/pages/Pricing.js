import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import PricingIcon from "../images/PricingIcon.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Pricing = () => {
  const fileUrl = "/download_files/Northern_Techies_Services_and_Pricing_Guide.pdf";

  const DownloadButton = () => {
    return (
      <div className="relative w-full bg-gray-900 overflow-hidden pt-14">
        <motion.div
          className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div className="w-full xl:w-1/2 text-center p-5" variants={slideInLeft}>
            <div className="flex justify-center items-center">
              <motion.div
                className="text-7xl font-bold text-yellow-500"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                £
              </motion.div>
            </div>
            <motion.h1 className="text-5xl font-bold text-sky-500" variants={fadeInUp}>
              Price List
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white"
              variants={fadeInUp}
            >
              Our price list provides transparent and competitive rates for all our services
            </motion.h2>
            <motion.div className="flex items-center justify-center gap-4" variants={fadeInUp}>
              <Link to="/services/customize-your-order">
                <Button hasWhiteStyle={true}>Choose Services</Button>
              </Link>

              <a href={fileUrl} download="Northern_Techies_Services_and_Pricing_Guide.pdf">
                <Button hasWhiteStyle={true}>Download Price List</Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="w-1/2" variants={slideInRight}>
            <img
              className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={PricingIcon}
              alt="Happy Customer"
            />
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return <DownloadButton />;
};

export default Pricing;
