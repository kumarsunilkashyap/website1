import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-5 rounded-lg shadow-lg w-100 mt-10">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 text-right text-2xl border-b-2 border-gray-300 focus:outline-none"
          />
          <div className="text-right text-xl text-gray-500 mt-2">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {["7", "8", "9", "/"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              {value}
            </button>
          ))}
          {["4", "5", "6", "*"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              {value}
            </button>
          ))}
          {["1", "2", "3", "-"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              {value}
            </button>
          ))}
          {["0", ".", "=", "+"].map((value) => (
            <button
              key={value}
              onClick={() =>
                value === "=" ? handleCalculate() : handleClick(value)
              }
              className="bg-gray-200 p-4 rounded-lg text-xl hover:bg-gray-300"
            >
              {value}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-500 p-4 rounded-lg text-xl text-white hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
