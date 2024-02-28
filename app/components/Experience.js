"use client";

import React from "react";
import Heading from "./Heading";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";

import { useSectionInView } from "../nav-context/Hooks";

const Experience = () => {

  const {ref} = useSectionInView("Experience", 0.5)

  const experienceContent = [
    {
      title: "Software Developer",
      company: "Ceox Services",
      desc: "Developed applications for public sector clients primarily using JavaScript. Implemented automated testing using Playwright. Gained experinece in Azure and CI/CD.",
      date: "09/2023",
      icon: <MdOutlineWorkOutline/>
    },
    {
      title: "C# Developer / Git Master",
      company: "University of Nottingham",
      desc: "Led Git version control of a game development project. Developed using C# and Unity. Followed automated testing methodologies using UTF.",
      date: "09/2022",
      icon: <MdOutlineSchool/>
    },
    {
      title: "Internship",
      company: "Amadeus",
      desc: "Gained insight into business by learning from product owners and project managers. Installed and tested hardware and software as part of the implementation of a new check-in system at Heathrow airport.",
      date: "07/2022",
      icon: <FaRegBuilding/>
    },
    {
      title: "Java Developer",
      company: "University of Nottingham",
      desc: "Java developer in a team of 4 working with a University researcher. Developed a board game in Java with a configurable AI opponent using the MCTS algorithm. Implemented unit testing with JUnit.",
      date: "09/2021",
      icon: <MdOutlineSchool/>
    }
  ]

  return (
    <section 
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <Heading>Experience</Heading>
      <VerticalTimeline lineColor="#f3f4f6" layout="2-columns">
      {experienceContent.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:"#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:"0.4rem solid #9ca3af",
              }}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              date={item.date}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.company}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.desc}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;