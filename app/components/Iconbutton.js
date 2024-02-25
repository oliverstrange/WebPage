'use client';
import React from "react";
import Image from 'next/image'

const Iconbutton = ({ imagePath, buttonText, redirectPath }) => {

  const handleClick = () => {
    window.open(redirectPath);
  };

  return (
    <div>
        <button onClick={handleClick}
        className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 bg-transparent shadow-sm w-56 h-52 text-gray-700 hover:bg-gray-50 hover:-translate-y-1 transition m-3">
            <Image src={imagePath} width={128} height={128} alt="Icon" className="object-scale-down" />
            <span className="mt-2">{buttonText}</span>
        </button>
    </div>
  );
};

export default Iconbutton;