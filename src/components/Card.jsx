import React from "react";

const Card = () => {
  return (
    <div className="relative w-64 h-64">
      <img
        className="w-full h-full object-cover"
        src="https://via.placeholder.com/640x640"
        alt="placeholder"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="text-white font-bold text-lg">Some Text Overlay</p>
      </div>
    </div>
  );
};

export default Card;
