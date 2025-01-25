import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white  fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-xl font-bold">
          <NavLink to="/">Sunil Kumar</NavLink>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`lg:flex lg:items-center  absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-4">
            <li className="mt-3 lg:mt-0">
              <NavLink
                to="/"
                className="block px-3 py-2 rounded hover:bg-gray-700"
                activeClassName="bg-gray-700"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="mt-3 lg:mt-0">
              <NavLink
                to="/about"
                className="block px-3 py-2 rounded hover:bg-gray-700"
                activeClassName="bg-gray-700"
              >
                About
              </NavLink>
            </li>
            <li className="mt-3 lg:mt-0">
              <NavLink
                to="/services"
                className="block px-3 py-2 rounded hover:bg-gray-700"
                activeClassName="bg-gray-700"
              >
                Services
              </NavLink>
            </li>
            <li className="mt-3 lg:mt-0">
              <NavLink
                to="/contact"
                className="block px-3 py-2 rounded hover:bg-gray-700"
                activeClassName="bg-gray-700"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
