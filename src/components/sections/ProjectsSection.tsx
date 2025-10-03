"use client";

import SectionContainer from "@/components/containers/SectionContainer";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "RemindCare – Smart Medication Reminder",
      description:
        "An innovative system designed for CTU–Danao Campus that provides smart medication reminders and real-time clinic monitoring.",
      image: "/images/projects/remindcare.JPG",
      tools: ["React", "Tailwind CSS", "Firebase", "Zustand"],
    },
    {
      title: "RoomIntel – Find & Keep Roommates",
      description:
        "A mobile app concept designed for millennials in Cebu City to easily find, connect, and manage roommates while renting.",
      image: "/images/projects/roomintel.avif",
      tools: ["Flutter", "Firebase"],
    },
    {
      title: "BSIT Program Assessment (IQ‑10)",
      description:
        "Evaluation matrix & plan for outcomes‑based education.",
      image: "/images/projects/bsit.avif",
      tools: ["OBE", "QA"],
    },
  ];

  return (
    <SectionContainer id="projects" number="04">
      <div className="flex flex-col gap-8 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    image: string;
    tools: string[];
  };
}) => (
  <div className="flex flex-col-reverse gap-5 md:flex-row">
    <Image
      src={project.image}
      alt={`${project.title} Thumbnail`}
      width={200}
      height={200}
      className="border-subtext h-20 w-36 md:h-20 md:w-32 rounded border object-cover shadow-lg flex-shrink-0"
      draggable={false}
    />

    <div>
      <h2 className="text-base md:text-lg mb-1 font-semibold">{project.title}</h2>
      <p className="text-white/70 mb-3 text-sm md:text-base leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool, i) => (
          <span key={i} className="text-primary bg-primary/10 inline-block rounded-full px-3 py-1 text-xs">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);