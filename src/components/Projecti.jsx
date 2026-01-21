import React from "react";
import { useEffect, useRef, useState } from "react";
import hamburger from "../assets/hamburger 1.png";
import react from "../assets/react.png";
import vite from "../assets/vite.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import vercel from "../assets/vercel.png";
import github from "../assets/github 1.png";
import whiteArrow from "../assets/arrow right.png";
import blackArrow from "../assets/arrow black.png";
import live from "../assets/live.png";
import procrastinator from "../assets/procrastinator.png";

export default function Projecti() {
    return (
        <div className="project1 p-18 m-3">
            {/* <div style={{ fontFamily: 'Poppins', fontWeight: 'lighter' }} className="nav flex justify-around items-center m-auto mb-8">
                <img className="w-1/24 h-fit" src={hamburger} alt="" />
                <p className="text-white text-2xl">Full Stack Developer</p>
                <p className="text-white text-2xl">Gargi Bhardwaj</p>
            </div> */}
            <div className="main w-full ml-20">
                <div className="heading w-1/2 relative ">
                    <h3
                        style={{ fontFamily: 'Fasthand' }}
                        className="text-white text-8xl relative z-10 top-44 left-40 tracking-wider"
                    >
                        Procrastinator
                    </h3>

                    <h1 style={{ fontFamily: 'Alumni Sans', fontSize: '12rem' }} className="absolute top-0 left-0 text-[8rem] sm:text-[8rem] 
                    font-extrabold text-pink-300 z-20 pointer-events-none select-none"> PROJECTS
                    </h1>
                </div>
                <div className="content flex">
                    <div className="left w-[50rem] text-white text-2xl mt-55 font-normal mr-10 tracking-wider">
                        <p>Procrastinator is a productivity web application designed to help users manage tasks and stay motivated with a clean, minimalist aesthetic. Its primary goal is to serve as a "saviour" against procrastination by offering a simple, distraction-free environment for organizing daily life.</p>
                        <div className="techStack">
                            <h3 className="mt-8 text-3xl mb-2 font-extrabold underline tracking-wider">Tech Stack:</h3>
                            <div className="icons flex gap-12">
                                <img className="w-18 h-18 mr-4 mt-4" src={react} alt="React" />
                                <img className="w-18 h-18 mr-4 mt-4" src={vite} alt="Vite" />
                                <img className="w-18 h-18 mr-4 mt-4" src={tailwind} alt="Tailwind CSS" />
                                <img className="w-18 h-18 mr-4 mt-4" src={js} alt="JavaScript" />
                                <img className="w-18 h-18 mr-4 mt-4" src={html} alt="HTML" />
                                <img className="w-18 h-18 mr-4 mt-4" src={vercel} alt="Vercel" />
                            </div>
                        </div>
                        <div className="links flex gap-12 mt-24">
                            <div className="github w-fit flex gap-2 text-3xl">
                                <img className="w-fit h-fit" src={github} alt="GitHub" />
                                <a className="text-3xl underline" href="https://github.com/gargibhardwaj24/Procrastinator" target="_blank" rel="noopener noreferrer"> Github</a>
                                <img src={whiteArrow} className=" h-3" alt="GitHub" />
                            </div>
                            <button className="bg-white rounded-xl flex items-center text-black px-2 py-2 font-bold  ">
                                <img className="w-fit h-fit p-1" src={live} alt="" />
                                <a className="text-3xl px-2" href="https://procrastinator-zeta.vercel.app/" target="_blank" rel="noopener noreferrer"> LIVE</a>
                                <img src={blackArrow} className=" h-3 -mt-7" alt="GitHub" />
                            </button>
                        </div>
                    </div>
                    <div className="right">
                        <img className="w-fit h-fit mt-20" src={procrastinator} alt="Project Screenshot" />
                    </div>
                </div>
            </div>
            <div className="section w-full h-0.5 bg-gray-900/50 rounded-xl"></div>
        </div>
    );
}