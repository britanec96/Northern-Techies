import React from 'react';
import { Link } from 'react-router-dom'; 

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-almost-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
        <Link to="/" className='antialiased cursor-pointer tracking-widest'>
        <h1 className="text-almost-white text-xl font-fira font-extrabold">{"<Northern>"}</h1>
        <h1 className="text-sky-500 text-xl -mt-2 font-fira font-extrabold">{"</Techies>"}</h1>
        </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are a IT services provider offering a wide range of digital solutions 
              to help businesses grow and succeed in the online space and other.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="hover:text-sky-500">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-sky-500">Portfolio</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/web-development" className="hover:text-sky-500">Web Development</Link>
              </li>
              <li>
                <Link to="/graphic-design" className="hover:text-sky-500">Graphic Design</Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="hover:text-sky-500">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/consultationservices" className="hover:text-sky-500">Consulting Services</Link>
              </li>
              <li>
                <Link to="/ai-content-creation" className="hover:text-sky-500">Content Creation</Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">
              Have any questions? Reach out to us and we'll be happy to assist you.
            </p>
            <ul className="space-y-2">
              <li className="hover:text-sky-500">Email: floxstreet@gmail.com</li>
              <li className="hover:text-sky-500">Address:  Manchester, UK</li>
            </ul>
          </div>
        </div>


        <div className="text-center mt-10 text-gray-500">
          <p>&copy; 2024 Northern Techies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
