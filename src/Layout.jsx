import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [darkness, setDarkness] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setDarkness(scrollTop / docHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgStyle = {
    background: `linear-gradient(to bottom, rgb(${140 - darkness*100}, ${140 - darkness*100}, ${140 - darkness*100}), black)`,
    minHeight: "100vh",
  };

  return <div style={bgStyle}>{children}</div>;
}
