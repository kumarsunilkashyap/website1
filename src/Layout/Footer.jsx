import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0  w-full">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="mt-2">
          <NavLink to="policy" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </NavLink>
          <NavLink
            to="termofservice"
            className="text-gray-400 hover:text-white mx-2"
          >
            Terms of Service
          </NavLink>
          <NavLink to="contact" className="text-gray-400 hover:text-white mx-2">
            Contact Us
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
