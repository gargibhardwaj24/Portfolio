import React from "react";
import { useEffect, useRef, useState } from "react";
import dark from "../assets/darkmode 1.png";
import heroImg from "../assets/hero-image.png";


export default function Intro() {
  return (
    <div className="intro pt-8 text-white">
      <div className="top nav flex flex-row justify-around items-center">
        <div className="theme"> <img src={dark} alt="" /></div>
        <ul className="nav-links flex justify-around items-center gap-8 text-xl font-poppins font-stretch-extra-condensed">
          <li className="font-light" >Work</li>
          <li className="font-light">Skills</li>
          <li className="">Resume <div className="w-12 ml-3 h-1 bg-gray-900/50 rounded-xl font-medium"></div></li>
        </ul>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full">
        <div style={{ fontFamily: 'explora', fontSize: '250px' }} className="name text-center">Gargi</div>
        <h1 style={{ fontFamily: 'Alumni Sans', fontSize: '18rem' }} className="  text-[9rem] sm:text-[12rem] 
        font-extrabold text-pink-300 z-20 pointer-events-none select-none -mt-52 sm:-mt-52 text-center">
          BHARDWAJ
        </h1>
        <img
            src={heroImg}
            alt="Gargi"
            className="w-120 sm:w-150 md:w-140 object-contain -mt-95 z-50 mr-62"
          />
          <div style={{fontFamily: 'Poppins', fontSize: '25px', fontWeight: 'lighter'}} className="sidename text-white flex gap-8 text-lg absolute top-140 sm:top-160 md:top-175 right-23 sm:right-23 md:right-23">
            <p>Developer</p>
            <p>•</p>
            <p>Designer</p>
            <p>•</p>
            <p>Diva</p>
          </div>
      </div>
      <div className="section w-full h-0.5 bg-gray-900/50 rounded-xl">
      </div>
    </div>
    
  );
}
// absolute -translate-y-1/2
// top-[23rem]