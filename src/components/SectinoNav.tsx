"use client";

import { useEffect, useState } from "react";
import SectionButton from "./ui/SectionButton";

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const sections = ["about", "skills", "experience", "projects"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden flex-col items-start md:flex">
      <SectionButton section="About" isActive={activeSection === "About"} />
      <SectionButton section="Skills" isActive={activeSection === "Skills"} />
      <SectionButton
        section="Experience"
        isActive={activeSection === "Experience"}
      />
      <SectionButton
        section="Projects"
        isActive={activeSection === "Projects"}
      />
      {/* <SectionButton section="Contact" isActive={activeSection === "Contact"} /> */}
    </div>
  );
}
