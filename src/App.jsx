import { useEffect, useRef, useState } from "react";
import Background from "./Background";
import "./index.css";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import About from "./components/About";
import Strengths from "./components/Strenghts";
import Projecti from "./components/Projecti";
import Projectii from "./components/Projectii";
import Navbar from "./components/Navbar";

export default function App() {
  const contactRef = useRef(null);
  const [hideBg, setHideBg] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBg(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Background hide={hideBg} />
      <Navbar />
      <div className="content">
        <div className="slide intro-slide">
          <Intro />
        </div>

        <div className="slide">
          <About />
        </div>
        <div className="slide">
          <Strengths />
        </div>
        <div className="slide">
          <Projecti />
        </div>
        <div className="slide">
          <Projectii />
        </div>

        {/* BLACK SECTION */}
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
}
