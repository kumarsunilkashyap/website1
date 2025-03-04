import React, { useEffect, useState } from "react";
import axios from "axios";

const StateList = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    // Replace with your new API endpoint
    axios
      .get("https://api.newexample.com/states")
      .then((response) => {
        console.log(response.data);
        setStates(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the states!", error);
      });
  }, []);

  return (
    <div className="state-list">
      {states.map((state) => (
        <div key={state.id} className="state-card">
          <h2>{state.name}</h2>
          <p>
            <strong>Language:</strong> {state.language}
          </p>
          <p>
            <strong>Currency:</strong> {state.currency}
          </p>
          <p>
            <strong>Capital:</strong> {state.capital}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StateList;
