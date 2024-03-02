"use client";

import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";

import { useSectionInView } from "../nav-context/Hooks";

const About = () => {

  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] px-2 text-center leading-8 sm:mb-40  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About me</Heading>
      <p className="mb-3">
        Throughout school my favourite subject was{" "}
        <span className="font-medium">Computer Science.</span> I loved
        programming in my free time, even completing work experience at a{" "}
        <span className="font-medium">UX web design</span>{" "}
        company when I was 16. I continued this through university, taking a degree in it at the{" "}
        <span className="font-medium">University of Nottingham.</span>{" "}
        My time there gave me the opportinty to learn a variety of programming languages
        such as <span className="font-medium">Python, Java</span> and <span className="font-medium">C#,</span>{" "}
        and explore new fields like <span className="font-medium">AI</span> and{" "}
        <span className="font-medium">Android Development.</span>{" "}
        My <span className="italic">favourite</span> part of my studies there, however, was always participating in
        group projects. 
      </p>
      <p className="mb-3">
        Since university, I've been working as a <span className="font-medium">software developer</span>{" "}
        at Ceox Services, developing business applications for public sector clients. I mainly use{" "}
        <span className="font-medium">JavaScript,</span> but I've also had the chance to learn new tools
        like <span className="font-medium">Azure</span> and <span className="font-medium">NodeJS.</span>{" "}
      </p>
      <p>
        Outside of work, I enjoy playing the guitar. I also love working on side projects{" "}
        <span className="italic">(like this one)</span> to learn new languages and frameworks. Take a look
        at my <span className="font-medium">GitHub</span> to find them!
      </p>
    </motion.section>
  );
}

export default About;