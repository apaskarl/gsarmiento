export default function SectionContainer({
  id,
  number,
  children,
}: {
  id: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-10 md:gap-12 scroll-mt-24">
      <div className="flex items-end gap-3">
        <span className="text-primary font-mono text-base md:text-lg leading-none font-semibold tracking-tight">{number}.</span>
        <div className="flex-1 flex items-center gap-6">
          <h2 className="text-white text-xl md:text-2xl leading-none font-semibold tracking-tight">
            {id === "about" ? "About Me" : id === "experience" ? "Where I've Worked" : id === "education" ? "Academic Background" : id === "projects" ? "Some Things I've Built" : id.charAt(0).toUpperCase() + id.slice(1)}
            </h2>
          <div className="h-[1px] w-full bg-primary/10 flex-1"></div>
        </div>
      </div>

      {children}
    </section>
  );
}
