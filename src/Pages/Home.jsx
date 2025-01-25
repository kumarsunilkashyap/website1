import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="text-4xl font-bold text-gray-800 my-8">
                Welcome to My Website
            </header>
            <main className="text-center">
                <p className="text-lg text-gray-600 mb-4">
                    This is the home page of my awesome website built with React and Tailwind CSS.
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Get Started
                </button>
            </main>
        </div>
    );
};

export default Home;