"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";

import { useSectionInView } from "../nav-context/Hooks";



const Skills = () => {

    const {ref} = useSectionInView("Skills", 1)

    const fadeInAnimationVariants = {
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.05 * index,
          },
        }),
    };

    const skillContent = [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind",
        "C#",
        "Unity",
        "UTF",
        "Java",
        "Android Studio",
        "JUnit",
        "Python",
        "REST APIs",
        "SQL",
        "Git",
        "Azure",
        "CI/CD",
        "Automated Testing",
        "Playwright",
    ]

    return (
        <section
        ref={ref}
        id="skills"
        className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
        >
        <Heading>Skills</Heading>
        <ul className="flex flex-wrap justify-center gap-3 px-2">
            {skillContent.map((content, index) => (
                <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true,
                }}
                custom={index}
                >
                    <div className="font-medium rounded-full p-3 bg-slate-300">
                        {content}
                    </div>
                </motion.li>
            ))}
        </ul>
        </section>
    );
}

export default Skills;
