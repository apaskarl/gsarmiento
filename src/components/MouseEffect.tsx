"use client";

import { useEffect, useState } from "react";

export default function MouseEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: `radial-gradient(
          1000px at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(27, 32, 48, 0.5),
          transparent 50%
        )`,
        transition: "background 0.05s ease",
      }}
    />
  );
}