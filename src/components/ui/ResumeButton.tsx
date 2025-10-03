import { Icon } from "@iconify/react/dist/iconify.js";

export default function ResumeButton() {
  return (
    <a href="" className="flex items-center gap-2 text-white/70 hover:text-primary duration-300">
        View Resume <Icon icon="charm:arrow-right" className="size-5 -rotate-[40deg]" />
    </a>
  );
}