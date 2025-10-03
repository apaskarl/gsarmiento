export default function NavLink({ 
    href, 
    label,
    isActive = false
}: { 
    href: string; 
    label: string;
    isActive?: boolean;
}) {
  return (
    <a href={href} className="group flex items-center gap-3 py-2.5">
        <div className={`h-[1px] w-8  group-hover:w-12 group-hover:bg-white duration-200 ${isActive ? 'w-12 bg-white' : 'bg-white/30'}`}></div>
        <div className={`tracking-widest font-medium uppercase group-hover:text-white text-xs duration-200 ${isActive ? 'text-white' : 'text-white/50'}`}>
            {label}
        </div>
    </a>
  );
}
