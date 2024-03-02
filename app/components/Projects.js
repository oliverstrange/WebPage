"use client";

import React from "react";
import { useState } from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useSectionInView } from "../nav-context/Hooks";

const Projects = () => {

    const content = [
        {
            title: "Android Running Tracker",
            tools: ["Java", "Room SQL", "MVVM", "Android"],
            desc: "A running tracker app built in android studio. Records the speeds, times, and routes of runs. Interacts with Google Maps API to visualise routes, and tracks location via a custom foreground service."
        },
        {
            title: "Python NLP Chatbot",
            tools: ["Python", "NLTK", "SKlearn", "NumPy"],
            desc: "A chatbot designed to automate the operation of a restaurant. The chatbot can take and record bookings, answer FAQs about the restaurant, and make small talk."
        },
        {
            title: "This Website",
            tools: ["Next.js", "React", "JavaScript", "Tailwind"],
            desc: "Built to visualise my skills and experience. I used this site as an opportinuty to develop my JavaScript skills, along with learning new frameworks and trying out new component libraries, such as framer motion animations. Uses both client and server side components to manage state and transitions."
        },
    ]
    const [ visibleSlide, setVisibleSlide ] = useState(0);

    const nextSlide = () => {
        setVisibleSlide(visibleSlide + 1);
    }

    const prevSlide = () => {
        setVisibleSlide(content.length - 1);
    }

    const { ref } = useSectionInView("Projects");



    return (
        <section
        ref={ref}
        id="projects"
        className="mb-28 max-w-[45rem] px-2 text-center leading-8 sm:mb-40 scroll-mt-28"
        >
        <Heading>Projects</Heading>

        <ul className="mt-16">
        {content.map((item, idx) => (
                <motion.li 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{
                    once: true,
                }}
                key={idx} className="pb-10 mb-8 border-b-2">
                    <h3 className="font-semibold capitalize mb-4">{item.title}</h3>
                    <p>{item.desc}</p>
                    <ul className="flex flex-row justify-center mt-4">
                    {item.tools.map((tool, n) => (
                        <li className="bg-slate-200 px-2 mx-1 py-1 rounded-full text-sm" key={n}>{tool}</li> 
                        ))}
                    </ul>
                </motion.li>
        ))}
        </ul>
        
        </section>
    );
}

export default Projects;