"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillButton from "./SkillButton";
import Heading from "./Heading";



const Skills = () => {

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
        "Tailwind",
        "C#",
        "Unity",
        "UTF",
        "Java",
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
        id="home"
        className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
        >
        <Heading>Skills</Heading>
        <ul className="flex flex-wrap justify-center gap-3">
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
                    <SkillButton>{content}</SkillButton>
                </motion.li>
            ))}
        </ul>
        </section>
    );
}

export default Skills;
