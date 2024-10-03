import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { Profile } from "./Profile";

export function FloatingDockDemo() {
  const links = [
    ...navlinks,
    ...socials
  ];

  return (
    <div className="mx-auto md:hidden h-24">

<div className="fixed bottom-0 left-0 right-0 w-full">
  <FloatingDock
    className="x-auto max-w-md"
    items={links.map(link => ({
      title: link.label,
      icon: React.createElement(link.icon, { className: "h-4 w-4" }),
      href: link.href
    }))}
  />
</div>
</div>
  );
}
