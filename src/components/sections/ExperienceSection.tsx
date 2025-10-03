import SectionContainer from "@/components/containers/SectionContainer";
import { Icon } from "@iconify/react/dist/iconify.js";
import ResumeButton from "../ui/ResumeButton";

export default function ExperienceSection() {
  return (
    <SectionContainer id="experience" number="02">
      <div className="flex flex-col gap-10">
        <Experience
          title="Faculty, BSIT"
          company="CTU – Danao Campus"
          period="2019 – Present"
          responsibilities={[
            "Teach core and elective courses in Information Technology",
            "Guide students in capstone and research projects",
            "Mentor students in programming, database management, and web development",
            "Foster critical thinking, creativity, and problem-solving skills",
          ]}
        />

        <Experience
          title="System Developer & Builder"
          company="Independent"
          period="2019 – Present"
          responsibilities={[
            "Designed and developed academic and health-related systems using software, hardware, and human-centered design principles",
            "Created RemindCare, a smart medication reminder and health monitoring system for school clinics",
            "Built applications that streamline processes and improve efficiency in academic environments",
            "Applied design thinking to develop user-friendly, practical solutions",
            "Conducted end-to-end development, from requirements gathering to deployment",
          ]}
        />

        <ResumeButton />
      </div>
    </SectionContainer>
  );
}

const Experience = ({
  title,
  company,
  period,
  responsibilities,
}: {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-white text-base md:text-lg leading-relaxed ">
          {title} <span className="text-primary">@ {company}</span>
        </h2>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">
          {period}
        </p>
      </div>

      <ul className="text-white/70 flex list-none flex-col gap-3 pl-5 text-sm leading-relaxed md:text-base relative border-l border-primary/10">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex gap-4 relative z-10">
            <Icon icon="material-symbols:play-arrow-rounded" className="mt-1 size-4 text-primary flex-shrink-0" />
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};
