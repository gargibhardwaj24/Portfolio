import { useEffect, useState } from "react";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const greyIntensity = Math.max(120 - scrollProgress * 120, 0);

  const backgroundStyle = {
    minHeight: "500vh",
    background: `linear-gradient(
      to bottom,
      rgb(${greyIntensity}, ${greyIntensity}, ${greyIntensity}),
      black
    )`,
    transition: "background 0.1s linear"
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ height: "100vh" }}>Section 1</div>
      <div style={{ height: "100vh" }}>Section 2</div>
    </div>
  );
}
