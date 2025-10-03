import React from "react";
import { Icon } from "@iconify/react";

const SocialLink = ({ route, icon, label }) => {
  return (
    <a
      href={route}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="text-white/70 hover:text-primary duration-300"
    >
      <Icon icon={icon} className="size-6" aria-hidden="true" />
    </a>
  );
};

export default SocialLink;
