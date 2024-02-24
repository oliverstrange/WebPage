'use client';
import React from "react";

const Iconbutton = ({ imagePath, buttonText, redirectPath }) => {

  const handleClick = () => {
    window.open(redirectPath);
  };

  return (
    <div>
        <button onClick={handleClick}
        className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 bg-transparent shadow-sm w-56 h-52 text-gray-700 hover:bg-gray-50 hover:-translate-y-1 transition m-3">
            <img src={imagePath} alt="Icon" className="w-32 h-32 object-scale-down" />
            <span className="mt-2">{buttonText}</span>
        </button>
    </div>
  );
};

export default Iconbutton;