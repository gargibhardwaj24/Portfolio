import { useEffect, useState } from "react";

export default function Background({ hide }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (docHeight > 0) {
        setProgress(scrollTop / docHeight);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hide) return null; // 🔥 stops gradient rendering

  const eased = Math.pow(progress, 0.09);
  const greyEnd = 70 * (1 - eased);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: `linear-gradient(
          to bottom,
          #666 0%,
          #444 ${greyEnd}%,
          black 100%
        )`
      }}
    />
  );
}
