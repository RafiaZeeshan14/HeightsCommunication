"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const about = document.getElementById("about");
    if (!about) return;

    const handleScroll = () => {
      const triggerPoint = about.offsetTop - window.innerHeight * 0.35;
      setVisible(window.scrollY >= triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "back-to-top-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
}
