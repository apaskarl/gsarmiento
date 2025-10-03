import SectionContainer from "@/components/containers/SectionContainer";
import Image from "next/image";

export default function EducationSection() {
  return (
    <SectionContainer id="education">
      <div className="flex flex-col gap-8">
        <Education
          image="/images/logos/citu.png"
          year="2024 – Present"
          program="Master of Information Technology"
          school="Cebu Institute of Technology – University"
        />
        <Education
          image="/images/logos/ncc.jpg"
          year="2018-2019"
          program="Bachelor of Science in Information Technology"
          school="Northeastern Cebu Colleges"
        />
      </div>
    </SectionContainer>
  );
}

const Education = ({
  image,
  year,
  program,
  school,
}: {
  image: string;
  year: string;
  program: string;
  school: string;
}) => {
  return (
    <div className="flex gap-5">
      <Image src={image} alt={school} width={64} height={64} className="bg-white p-1 aspect-square size-12 rounded-full sm:size-14 md:size-16" />

      <div className="flex flex-col">
        <div className="leading-relaxed text-white font-semibold text-base md:text-lg">{program}</div>
        <div className="text-white/70 text-sm md:text-base leading-relaxed">{school}</div>
        <div className="text-white/50 text-sm md:text-base leading-relaxed">{year}</div>
      </div>
    </div>
  );
};
