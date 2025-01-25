import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one.",
    image:
      "https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two.",
    image:
      "https://images.pexels.com/photos/2342342/pexels-photo-2342342.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for project three.",
    image:
      "https://images.pexels.com/photos/3453453/pexels-photo-3453453.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },

  {
    id: 4,
    title: "Project Three",
    description: "Description for project three.",
    image:
      "https://images.pexels.com/photos/3453453/pexels-photo-3453453.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 5,
    title: "Project Three",
    description: "Description for project three.",
    image:
      "https://images.pexels.com/photos/3453453/pexels-photo-3453453.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Description for project six.",
    image:
      "https://images.pexels.com/photos/6786786/pexels-photo-6786786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Project = () => {
  return (
    <div id="project" className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
