import React from "react";
import NavHeader from "./components/NavHeader";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
  return (

  <div className="min-h-screen flex flex-col items-center">

    <NavHeader/>
    <div className="h-28"></div>
    <Intro/>
    <div className="h-36"></div>
    <About/>
    <Skills/>
    <Experience/>

  </div>

  );
}
