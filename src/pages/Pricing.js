import React from 'react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';
import PricingIcon from "../images/PricingIcon.svg";

const Pricing = () => {


  const DownloadButton = () => {
    const fileUrl = "/download_files/Northern_Techies_Services_and_Pricing_Guide.pdf";

    return (
      <>
        <div className="relative w-full bg-gray-900 overflow-hidden pt-14">
          <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center relative z-10 p-6 xl:p-10">
            <div className="w-full xl:w-1/2 text-center p-5">
              <div className="flex justify-center items-center ">
                <div className="text-7xl font-bold text-yellow-500 animate-bounce">
                  £
                </div>
              </div>
              <h1 className="text-5xl font-bold text-sky-500 ">
                Price List
              </h1>
              <h2 className="text-xl sm:text-lg xl:text-3xl m-5 font-bold text-almost-white element-delay-800">
                Our price list provides transparent and competitive rates for all our services
              </h2>
              <div className="flex items-center justify-center gap-4 element-delay-1200">

                <Link to="/order">
                  <Button hasWhiteStyle={true}>Order Page</Button>
                </Link>

                <a href={fileUrl} download="Northern_Techies_Services_and_Pricing_Guide.pdf">
                <Button hasWhiteStyle={true}>Download Price List</Button>
                </a>

              </div>
            </div>

            <div className="w-1/2 element-delay-1400">
              <img
                className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
                src={PricingIcon}
                alt="Happy Customer"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return <DownloadButton />;
};

export default Pricing;
