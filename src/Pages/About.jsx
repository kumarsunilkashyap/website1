import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700 mb-4">
                    Welcome to our website! We are dedicated to providing the best service possible.
                </p>
                <p className="text-gray-700">
                    Our team is made up of experienced professionals who are passionate about what they do.
                </p>
            </div>
        </div>
    );
};

export default About;