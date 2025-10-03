export default function SectionContainer({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-8">
      {children}
    </section>
  );
}
