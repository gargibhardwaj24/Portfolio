import React from "react";
import { useEffect, useRef, useState } from "react";
import hamburger from "../assets/hamburger 1.png";
import hero2Img from "../assets/hero2.png";

export default function About() {
    return (
        <div className="about p-18 m-4">
            <div style={{ fontFamily: 'Poppins', fontWeight: 'lighter' }} className="nav flex justify-around items-center m-auto mb-8">
                <img className="w-1/24 h-fit" src={hamburger} alt="" />
                <p className="text-white text-2xl">Full Stack Developer</p>
                <p className="text-white text-2xl">Gargi Bhardwaj</p>
            </div>
            <div className="main flex justify-between w-full ml-40 gap-8">
                <div className="heading w-1/2">
                    <h1 style={{ fontFamily: 'Alumni Sans', fontSize: '12rem' }} className="  text-[8rem] sm:text-[8rem] 
        font-extrabold text-pink-300 ">WHO AM I?</h1>
                    <p style={{ fontFamily: 'Poppins', fontWeight: 'regular' }} className="text-white tracking-wider text-3xl">As a dedicated full-stack web developer, my passion lies in moving beyond theoretical exercises to architect and deploy high -impact, real-world solutions. I am driven to create applications that solve genuine problems, foster positive change, and deliver tangible value to users and communities.</p>
                </div>
                <div className="me w-100 mr-0 "><img src={hero2Img} alt="" /></div></div>
                <div className="section w-full h-0.5 bg-gray-900/50 rounded-xl"></div>
        </div>
    );
}