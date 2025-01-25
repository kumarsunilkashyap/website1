import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-blue-500 text-white p-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Website Title</h1>
                <button onClick={toggleMenu} className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-blue-500 md:bg-transparent`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
                        <li><NavLink to="/" className="hover:underline" activeClassName="font-bold">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:underline" activeClassName="font-bold">About</NavLink></li>
                        <li><NavLink to="/contact" className="hover:underline" activeClassName="font-bold">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
