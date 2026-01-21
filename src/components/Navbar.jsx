import { useEffect, useState } from "react";
import hamburger from "../assets/hamburger 1.png";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const introSection = document.querySelector(".intro-slide");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show only when intro is COMPLETELY above viewport
        if (!entry.isIntersecting && entry.boundingClientRect.bottom <= 0) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    if (introSection) observer.observe(introSection);

    return () => observer.disconnect();
  }, []);

  if (!showNav) return null;

  return (
    <div
      style={{ fontFamily: "Poppins", fontWeight: "lighter" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-around items-center py-4  backdrop-blur-md"
    >
      <p className="text-white text-2xl"><img src={hamburger} className="w-6 h-fit" alt="" /></p>
      <p className="text-white text-2xl">Full Stack Developer</p>
      <p className="text-white text-2xl">Gargi Bhardwaj</p>
    </div>
  );
}
