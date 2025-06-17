import React from "react";

export default function MenuItem({ href, children }) {
  return (
    <a
      href={href}
      className="
        flex items-center justify-center w-full h-[69px]
        bg-primary-dark
        border-menu-item border-main-text rounded-menu-item
        text-main-text font-montserrat font-bold text-nav-mobile
        transition-colors hover:bg-main-text/10
      "
    >
      {children}
    </a>
  );
}
