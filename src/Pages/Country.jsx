import React from 'react';

const Country = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4">Country Name</h1>
                <p className="text-gray-700 mb-4">Capital: Capital City</p>
                <p className="text-gray-700 mb-4">Population: 10,000,000</p>
                <p className="text-gray-700 mb-4">Region: Region Name</p>
                <p className="text-gray-700 mb-4">Subregion: Subregion Name</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Country;