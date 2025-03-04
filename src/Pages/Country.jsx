import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10">Error fetching data</div>;

  return (
    <div className="container mx-auto p-25">
      <h1 className="text-4xl font-bold mb-4 text-center">Country List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((country) => (
          <li
            key={country.cca3}
            className="p-4 border rounded shadow hover:bg-gray-100 transition"
          >
            <h2 className="font-bold">{country.name.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
