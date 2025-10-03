"use client";

import { Icon } from "@iconify/react";
import SocialLink from "@/components/ui/SocialLink";
import AboutSection from "../components/sections/AboutSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import MouseEffect from "../components/MouseEffect";
import ResumeButton from "@/components/ui/ResumeButton";
import NavLink from "@/components/ui/NavLink";
import useActiveSection from "@/hooks/useActiveSection";
import Image from "next/image";

export default function Home() {
  const activeSection = useActiveSection();

  return (
    <div className="bg-dark">
      <div className="relative container mx-auto flex max-w-screen-xl flex-col px-4 text-white md:flex-row py-6 md:py-0 gap-16 md:gap-0">
        <MouseEffect />

        <aside className="z-10 w-full max-w-md flex flex-shrink-0 flex-col justify-between gap-8 md:gap-0 md:sticky md:top-0 md:max-h-screen md:py-24">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image src="/images/2x2.jpg" alt="Glenard Sarmiento" width={500} height={500} className="size-14 md:size-16 object-cover rounded-full" draggable={false} />
                <div className="flex flex-col gap-1">
                  <a href="/" className="text-2xl md:text-3xl font-bold tracking-tight">Glenard Sarmiento</a>
                  <div className="text-sm md:text-base font-medium text-white/70">Educator, Builder, and Learner</div>
                </div>
              </div>

              <div className="text-sm md:text-base text-white/50 flex items-center gap-2">
                <Icon icon="akar-icons:location" className="size-4" />
                Cebu, Philippines
              </div>
            </div>
            

            <nav className="hidden md:flex flex-col items-start">
              <NavLink href="#about" label="About" isActive={activeSection === 'about'} />
              <NavLink href="#experience" label="Experience" isActive={activeSection === 'experience'} />
              <NavLink href="#education" label="Education" isActive={activeSection === 'education'} />
              <NavLink href="#projects" label="Projects" isActive={activeSection === 'projects'} />
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <ResumeButton />
            <div className="flex items-center gap-3">
              <SocialLink route="mailto:" icon="mdi:gmail" label="Email" />
              <SocialLink route="https://www.facebook.com/glenardjay.sarmiento#" icon="ic:baseline-facebook" label="Facebook" />
              <SocialLink route="" icon="ri:github-fill" label="GitHub" />
            </div>
          </div>
        </aside>

        <main className="z-10 flex w-full flex-col gap-16 pb-6 md:gap-24 md:py-24">
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  );
}
