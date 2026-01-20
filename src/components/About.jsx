import React from "react";
import { useEffect, useRef, useState } from "react";
import hamburger from "../assets/hamburger 1.png";

export default function About() {
    return (
        <div className="about p-18 m-4">
            <div className="nav">
                <img className="w-1/24" src={hamburger} alt="" />
            </div>
        </div>
    );
}