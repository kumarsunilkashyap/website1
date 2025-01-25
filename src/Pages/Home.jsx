import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="bg-gray-100 p-8 min-h-screen flex items-center"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 animate__animated animate__fadeInDown">
              Welcome to My Portfolio Page
            </h1>
            <p className="text-gray-600 mt-4 p-5 md:p-0 animate__animated animate__fadeInLeft">
              Hello I am Sunil Kumar Kashyap, Full Stack Web Developer. I create
              responsive websites and dashboards using Power BI and Microsoft
              Advanced Excel.
            </p>
            <p className="text-gray-600 mt-4 animate__animated animate__fadeInRight">
              Showcasing my projects and skills
            </p>
            <NavLink
              to="project"
              className="mt-8 inline-block bg-gray-800 text-white py-2 px-4 rounded transition ease-in hover:bg-indigo-800 duration-300 animate__animated animate__fadeInUp"
            >
              View Projects
            </NavLink>
          </div>
          <div class="md:w-1/2 w-full mx-auto mt-8 md:mt-0 relative group">
            <img
              src="data:image/jpeg;base64,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 "
              alt="Hero Image"
              class="w-1/2 md:w-1/2 mx-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105  group-hover:scale-105 animate__animated animate__zoomIn "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
