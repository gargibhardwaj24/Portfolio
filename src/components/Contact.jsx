import React from "react";
import { useEffect, useRef, useState } from "react";
import hamburger from "../assets/hamburger 1.png";
import star from "../assets/star.png";
import graphic from "../assets/graphic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github 1.png";
import x from "../assets/x.png";

export default function Contact() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        transition: "background-color 5s ease"
      }}>
      {/* <div style={{ fontFamily: 'Poppins', fontWeight: 'lighter' }} className="nav flex justify-around items-center mt-20 m-auto mb-8">
        <img className="w-1/24 h-fit" src={hamburger} alt="" />
        <p className="text-white text-2xl">Full Stack Developer</p>
        <p className="text-white text-2xl">Gargi Bhardwaj</p>
      </div> */}
      <div className="main mt-54 m-auto flex justify-center items-center gap-20">

        {/* Left Image */}
        <img src={star} className="w-fit h-fit relative top-16" alt="" />

        {/* Heading Group */}
        <div className="heading relative text-white flex items-center">

          {/* Back text */}
          <h3
            style={{ fontFamily: "Tangerine" }}
            className="text-[150px] tracking-wider text-pink-300 relative z-10"
          >
            let's Work
          </h3>

          {/* Front text */}
          <h2
            style={{ fontFamily: "Alumni Sans" }}
            className="absolute top-16 left- text-[200px] font-bold z-20 pointer-events-none select-none"
          >
            TOGETHER
          </h2>
        </div>

        {/* Right Image */}
        <img src={graphic} className="w-fit h-fit relative left-26 top-16" alt="" />

      </div>
      <div className="links flex justify-around content-center gap-16 mt-65">
        <div className="socials flex gap-16">
          <div className="linkedin border border-gray-500 rounded-full p-4 hover:bg-gray-800/50 transition duration-300 ease-in-out flex items-center gap-4">
            <img src={linkedin} className="w-fit h-fit" alt="" />
          </div>
          <div className="linkedin border border-gray-500 rounded-full p-4 hover:bg-gray-800/50 transition duration-300 ease-in-out flex items-center gap-4">
            <img src={x} className="w-fit h-fit" alt="" />
          </div>
          <div className="linkedin border border-gray-500 rounded-full p-4 hover:bg-gray-800/50 transition duration-300 ease-in-out flex items-center gap-4">
            <img src={github} className="w-fit h-fit" alt="" />
          </div>
        </div>
        <div className="mail border border-gray-500 rounded-full p-4 hover:bg-gray-800/50 transition duration-300 ease-in-out flex items-center gap-4">
          <p style={{ fontFamily: 'Poppins' }} className="text-white text-2xl">
            gargibhardwaj4230@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
