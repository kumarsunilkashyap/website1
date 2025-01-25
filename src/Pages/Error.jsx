import React from "react";

import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl m-0">404</h1>
      <p className="text-xl my-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <NavLink to="/" className="text-lg text-blue-500 no-underline">
        Go back to Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
