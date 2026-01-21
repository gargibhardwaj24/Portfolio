import React from "react";
import { useEffect, useRef, useState } from "react";
import hamburger from "../assets/hamburger 1.png";
import personality from "../assets/personality.png";
import hero2Img from "../assets/hero2.png";

export default function About() {
    return (
        <div className="about p-18 m-3">
            {/* <div style={{ fontFamily: 'Poppins', fontWeight: 'lighter' }} className="nav flex justify-around items-center m-auto mb-8">
                <img className="w-1/24 h-fit" src={hamburger} alt="" />
                <p className="text-white text-2xl">Full Stack Developer</p>
                <p className="text-white text-2xl">Gargi Bhardwaj</p>
            </div> */}
            <div className="main flex justify-between w-full ml-20 gap-20">
                <div className="heading w-1/2">
                    <h1 style={{ fontFamily: 'Alumni Sans', fontSize: '12rem' }} className="  text-[8rem] sm:text-[8rem] 
        font-extrabold text-pink-300 ">STRENGHTS</h1>
                    <div className="me w-100 m-auto"><img src={personality} alt="" /></div>
                </div>

                <div style={{ fontFamily: 'Poppins', fontWeight: 'regular' }} className="text-white w-1/2 mt-25 mr-10 tracking-wider text-2xl">
                    <div className="mb-8">
                        <h2 className="text-3xl mb-1 font-semibold">Confident:</h2>
                        <p style={{ fontFamily: 'Alumni Sans' }} className="text-3xl font-extralight"> Being confident is one of the greatest strengths i carry with myself everyday, which helps me in conquering every difficulty i face.</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-3xl mb-1 font-semibold">Creative: </h2>
                        <p style={{ fontFamily: 'Alumni Sans' }} className="text-3xl font-extralight"> I’m creative in how I design solutions. I focus on building products that solve real problems while also feeling intuitive and visually polished.</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-3xl mb-1 font-semibold">Adaptable: </h2>
                        <p style={{ fontFamily: 'Alumni Sans' }} className="text-3xl font-extralight">I adapt quickly to changing requirements and improve my approach based on feedback and constraints.</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-3xl mb-1 font-semibold">Detail Oriented: </h2>
                        <p style={{ fontFamily: 'Alumni Sans' }} className="text-3xl font-extralight"> I focus on small details that significantly improve the overall quality of a product.</p>
                    </div>

                </div>
            </div>
            <div className="section w-full h-0.5 bg-gray-900/50 rounded-xl"></div>
        </div>
    );
}