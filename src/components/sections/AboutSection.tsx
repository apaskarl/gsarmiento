import SectionContainer from "@/components/containers/SectionContainer";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="flex flex-col gap-8">
        <p className="text-white/70 leading-relaxed">
          I specialize in the field of <Highlight text="Information Technology" />. My academic and professional interests lie in the integration of software, hardware, and human-centered design, with a focus on developing <Highlight text="innovative systems" /> that address practical challenges.
          <br /><br />
          I am dedicated to <Highlight text="fostering student learning" /> by combining theoretical foundations with hands-on applications, guiding them in projects that cultivate critical thinking, creativity, and problem-solving skills.
          <br /><br />
          At the same time, I remain committed to advancing my own expertise through <Highlight text="continuous learning and research" />, ensuring that my teaching and professional practice are informed by <Highlight text="emerging technologies" /> and contemporary trends in the discipline.
          <br /><br />
          Here are a few technologies I've been working with recently:
        </p>

        <ul className="list-none grid grid-cols-2 gap-4 w-full md:max-w-1/2">
          <ListItem text="HTML" />
          <ListItem text="CSS" />
          <ListItem text="JavaScript" />
          <ListItem text="PHP" />
          <ListItem text="MySQL" />
          <ListItem text="IoT" />
          <ListItem text="Research" />
        </ul>
      </div>
    </SectionContainer>
  );
}

const Highlight = ({ text }: { text: string }) => {
  return <span className="text-white font-medium">{text}</span>;
};

const ListItem = ({ text }: { text: string }) => {
  return <li className="flex items-center gap-2 text-xs">
    <Icon icon="material-symbols:play-arrow-rounded" className="size-4 text-primary flex-shrink-0" />
    {text}
  </li>;
};