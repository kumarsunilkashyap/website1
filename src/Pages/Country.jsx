import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/usa")
      .then((response) => {
        setCountry(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">{country.name.common}</h1>
        <p className="text-gray-700 mb-4">Capital: {country.capital[0]}</p>
        <p className="text-gray-700 mb-4">
          Population: {country.population.toLocaleString()}
        </p>
        <p className="text-gray-700 mb-4">Region: {country.region}</p>
        <p className="text-gray-700 mb-4">Subregion: {country.subregion}</p>
        <p className="text-gray-700 mb-4">
          Currency: {Object.values(country.currencies)[0].name}
        </p>
        <p className="text-gray-700 mb-4">
          Language: {Object.values(country.languages).join(", ")}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Country;
