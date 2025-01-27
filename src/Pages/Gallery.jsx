import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos",
          {
            headers: {
              Authorization: `Client-ID YOUR_ACCESS_KEY`,
            },
          }
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="min-h-screen p-20 container mx-auto">
      <h1 className="text-3xl font-bold text-center p-10">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative">
            <img
              src={photo.title}
              alt={photo.alt_description}
              className="w-full h-auto rounded shadow-lg"
            />
            <div className="absolute bottom-0 left-0 bg-gray-500 bg-opacity-50 text-white p-2 rounded-b w-full text-center">
              {photo.url}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
