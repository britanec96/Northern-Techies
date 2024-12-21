import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import useScrollReveal from '../SCROLL-REVEAL/ScrollReveal';
import One from '../../images/One.png';
import Two from '../../images/two.png';
import Three from '../../images/three.png';
import Six from '../../images/Six.png';

const BlockHomeThird = () => {
  useScrollReveal([
    { selector: '.element-delay-200', delay: 200, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-300', delay: 300, options: { distance: '50px', origin: 'top' } },
    { selector: '.element-delay-400', delay: 400, options: { distance: '50px', origin: 'left' } },
    { selector: '.element-delay-500', delay: 500, options: { distance: '60px', origin: 'left' } },
    { selector: '.element-delay-800', delay: 800, options: { distance: '70px', origin: 'right' } },
  ]);

  const handleWhatsApp = () => {
    window.open("https://wa.me/+447378716579", "_blank");
  };

  return (
    <>
      <div className="bg-gray-900 rounded-lg shadow-md py-20 px-4 md:px-8 mt-20 mb-5">
        <div className="text-center mb-12 element-delay-200">
          <h2 className="text-4xl md:text-5xl font-bold text-almost-white">Any Your Idea With</h2>
          <h1 className="text-4xl mt-2 md:text-7xl font-bold text-sky-500">Northern Techies</h1>
        </div>
        <div className="text-center text-lg md:text-xl text-gray-400 mb-12 element-delay-200 font-fira">
          <p>You don't have to know computers or software — we handle it all for you.</p>
          <p>We're not going to teach you how to fish, we're selling you the{' '}
            <span className="text-almost-white font-bold underline decoration-sky-500 decoration-2">fish</span>.
          </p>
        </div>
        <div className='flex items-center justify-center text-gray-400 element-delay-200'>
          <i className="ri-money-pound-circle-line mr-1"></i> <h1 className='mr-5'>Low-Budget</h1>
          <i className="ri-speed-line mr-1"></i> <h1 className='mr-5'>Fast</h1>
          <i className="ri-star-line mr-1"></i> <h1>Qualitatively</h1>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6 element-delay-200">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">Thinking of Starting an Online Store?</h3>
            <p className="text-lg text-gray-300">Your dream of running an online shop is within reach! We’ve helped countless entrepreneurs bring their store ideas to life, from custom designs to seamless integrations. Join our happy clients, and get a quick overview of the steps and what you can expect by working with us.</p>
            <div className="mt-6">
              <Link to="/web-development">
                <Button hasWhiteStyle={true}>Let's Start</Button>
              </Link>
            </div>
          </div>
          <div className="block md:w-1/2">
            <img src={One} className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105" alt="Online Store Showcase" />
          </div>
        </div>

        <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

        <div className="mt-12 flex flex-col md:flex-row items-center md:text-right sm:text-center gap-6 element-delay-200">
          <div className="block md:w-1/2">
            <img src={Two} className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105" alt="Online Store Showcase" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">Not Sure How to Start Creating Content on Social Media?</h3>
            <p className="text-lg text-gray-300">Our social media experts are here to guide you every step of the way. From crafting your first content strategy to building engaging videos, we help aspiring creators and influencers kickstart their journey online and grow their audience. Discover success stories from our clients and see how we can support your goals!</p>
            <div className="mt-6">
              <Link to="/digital-marketing">
                <Button hasWhiteStyle={true}>Explore</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

        <div className="mt-12 flex flex-col md:flex-row items-center md:text-left sm:text-center gap-6 element-delay-200">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">Computer issues?</h3>
            <p className="text-lg text-gray-300">Won’t start? Running slow? Need a Windows reinstall? We’ve got you covered! Our specialists are experienced in handling all kinds of issues and can quickly get your computer back to optimal performance. Contact us to learn how we can help restore your device to peak condition.</p>
            <div className="mt-6">
              <Link to="/consultationservices">
                <Button hasWhiteStyle={true}>Get Help</Button>
              </Link>
            </div>
          </div>
          <div className="block md:w-1/2">
            <img src={Three} className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105" alt="Online Store Showcase" />
          </div>
        </div>

        <div className="border-t-2 border-gray-400 my-8 opacity-25 mt-20"></div>

        <div className="mt-12 flex flex-col md:flex-row items-center md:text-right sm:text-center gap-6 element-delay-200">
          <div className="block md:w-1/2">
            <img src={Six} className="w-full max-w-1/2 aspect-video object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105" alt="Online Store Showcase" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-almost-white mb-4">Want to Refresh Your Existing Design or Your Business’s Image?</h3>
            <p className="text-lg text-gray-300">From simple business cards to social media designs, we create stylish, memorable solutions. Our designers help you stand out, whether it’s for personal branding or small business needs. Check out our portfolio and see how easy it is to update your look!</p>
            <div className="mt-6">
              <Link to="/portfolio">
                <Button hasWhiteStyle={true}>Portfolio</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-gray-900 p-5 mb-5 text-center relative rounded-lg">
          <h1 className="m-5 text-almost-white md:text-5xl sm:text-3xl font-extrabold element-delay-200">Get a free consultation</h1>
          <div className="element-delay-400">
            <p className="m-5 text-gray-100 md:text-2xl sm:text-xl">Get professional help right{' '}
              <span className="text-sky-500 text-3xl font-semibold">NOW!</span>
            </p>
            <Button onClick={(event) => { event.preventDefault(); handleWhatsApp(); }} className="m-5" hasWhiteStyle={true}>
              Chat With Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlockHomeThird;

