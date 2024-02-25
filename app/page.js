import React from "react";
import Image from 'next/image'
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Iconbutton from "./components/Iconbutton";

export default function Home() {
  return (

  <div className="bg-slate-200 min-h-screen">

    <header>
      <React.Fragment>
        <Navbar/>
      </React.Fragment>  
    </header>

    <main className="pt-24">

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="flex items-center">
          <Image src={ "/assets/profilePic.png" } width={80} height={80} alt="Img" className="rounded-full mr-4" />
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Oliver Strange</h1>
            <p className="text-gray-600 dark:text-gray-300">Full-stack software engineer based in Woking</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">I'm a dynamic and versatile full-stack software developer, who enjoys working in collaborative professional environments. I bring proficiency in multiple programming languages including JavaScript, Java, and Python to the table. My experience spans across various sectors, from working with top-tier travel technology companies to developing critical applications for government departments.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-16 px-4">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">About This Project</h1>
        <div className="mt-2 text-gray-600 dark:text-gray-300 py-6">
          <p>
            I'm using this project as an opportinity to learn new frameworks and tools, whilst providing a platform for people to find out a bit more about myself. I'm constantly making changes and adding new features, so check back sometime!
            <br/>Some features I'm currently working on include mobile compatability, dark mode, and an area to try out some web apps I've made.
          </p>
          <p className="pt-6">This project was developed using:</p>
        </div>
      </div>
      <div className="mx-auto pb-16">
          <ul className="flex flex-row flex-wrap justify-center">
          <Iconbutton
            imagePath="/assets/nextjsLogo.png"
            buttonText="NextJS"
            redirectPath="https://nextjs.org/"
          />
          <Iconbutton
            imagePath="/assets/reactLogo.png"
            buttonText="React"
            redirectPath="https://react.dev/"
          />
          <Iconbutton
            imagePath="/assets/javascriptLogo.png"
            buttonText="JavaScript"
            redirectPath="https://www.javascript.com/"
          />
          <Iconbutton
            imagePath="/assets/tailwindLogo.png"
            buttonText="Tailwind"
            redirectPath="https://tailwindcss.com/"
          />
          </ul>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto pt-16">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">My Experience</h1>
        </div>
        <div className="mx-auto pt-16 pb-16">
          <Gallery />
        </div>
      </div>

      <div className="pb-[800px]"/>
    </main>

  </div>

  );
}
