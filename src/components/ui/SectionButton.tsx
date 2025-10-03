"use client";

export default function SectionButton({
  section,
  isActive = false,
}: {
  section: string;
  isActive?: boolean;
}) {
  const handleSectionClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`${isActive ? "text-white" : "text-subtext hover:text-white"} group flex cursor-pointer items-center gap-x-4 py-2 text-xs font-extrabold tracking-wider uppercase duration-300`}
      onClick={() => handleSectionClick(section.toLowerCase())}
    >
      <div
        className={`${isActive ? "w-16 bg-white" : "bg-subtext w-8 group-hover:w-16 group-hover:bg-white"} h-[1px] duration-300`}
      />
      {section}
    </button>
  );
}
