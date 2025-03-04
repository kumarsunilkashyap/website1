import React, { useEffect, useState } from "react";
import axios from "axios";

const StateList = () => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/usa/states")
      .then((response) => {
        setStates(response.data);
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
      <h1 className="text-4xl font-bold mb-4 text-center">State List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {states.map((state) => (
          <li
            key={state.id}
            className="p-4 border rounded shadow hover:bg-gray-100 transition"
          >
            <h2 className="font-bold">{state.name}</h2>
            <p>Abbreviation: {state.abbreviation}</p>
            <p>Capital: {state.capital}</p>
            <p>Population: {state.population.toLocaleString()}</p>
            <p>Area: {state.area.toLocaleString()} sq mi</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;
