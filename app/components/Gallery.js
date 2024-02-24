'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { GoDotFill } from "react-icons/go";

const Gallery = () => {

    const content = [
        {
            url: "/assets/ceoxImage.png",
            title: "Ceox Services - Technical Consultant",
            date: "",
            text: <ul className="list-disc">
                    <li>Developed full-stack web applications for public sector clients using MS Power Platform</li>
                    <li>Implemented automated testing scripts for clients' applications using Playwright with JavaScript</li>
                    <li>Wrote CD pipeline scripts to automate delpoyment using Azure DevOps</li>
                </ul>,
            used: ""
        },
        {
            url: "/assets/uonImage.jpg",
            title: "University of Nottingham - Git Master / Developer",
            date: "",
            text: <ul className="list-disc">
                    <li>Developed a children's computer game using C# and Unity</li>
                    <li>Managed the group's version control using Git</li>
                    <li>Implemented Unity Test Framework to follow test-driven development methodologies</li>
                </ul>,
            used: ""
        },
        {
            url: "/assets/amadeusImage.jpg",
            title: "Amadeus - Intern",
            date: "",
            text: <ul className="list-disc">
                    <li>Implemented a new customer check-in system, installing and testing hardware</li>
                    <li>Gained knowledge on managing project timelines and stakeholer engagement through shadowing product owners</li>
                </ul>,
            used: ""
        },
        {
            url: "/assets/uonImage.jpg",
            title: " University of Nottingham - Group Administrator / Developer",
            date: "",
            text: <ul className="list-disc">
                    <li>Developer of a game designed to be an AI learning tool in collaboration with one of the University's top researchers</li>
                    <li>Developed in Java, following Agile principles</li>
                    <li>Implemented JUnit testing to ensure software functionality</li>
                    <li>Developed a configurable MCTS algorithm to act as the game's opponent</li>
                </ul>,
            used: ""
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const forwardClick = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? content.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const backClick = () => {
        const isLastSlide = currentIndex === content.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="max-w-[1400px] w-full m-auto relative group">
                <div className="flex flex-row justify-evenly items-center w-full">
                    <div className="w-[600px] px-8">
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{content[currentIndex].title}</h1>
                        <div className="mt-2 text-gray-600 dark:text-gray-300 py-6">{content[currentIndex].text}</div>
                    </div>
                    <div 
                        style={{ backgroundImage: `url(${content[currentIndex].url})` }} 
                        className="rounded-2xl bg-center bg-cover h-[400px] w-[500px] duration-500">
                    </div>
                </div>
                <div className="hidden group-hover:block transition absolute top-1/2 right-0">
                        <BsChevronCompactRight onClick={backClick} className="group-hover:block size-14 text-gray-400 hover:text-blue-700 cursor-pointer"/>
                </div>
                <div className="hidden group-hover:block absolute top-1/2 left-0">
                        <BsChevronCompactLeft onClick={forwardClick} className="group-hover:block size-14 text-gray-400 hover:text-blue-700 cursor-pointer"/>
                </div>
            </div>
            <div className="flex flex-row items-center my-4">
                <GoDotFill className={currentIndex === 0 ? 'text-blue-700' : 'text-gray-400'}/>
                <GoDotFill className={currentIndex === 1 ? 'text-blue-700' : 'text-gray-400'}/>
                <GoDotFill className={currentIndex === 2 ? 'text-blue-700' : 'text-gray-400'}/>
                <GoDotFill className={currentIndex === 3 ? 'text-blue-700' : 'text-gray-400'}/>
            </div>
        </div>


    );
};

export default Gallery;