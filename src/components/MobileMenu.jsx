import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import IconClose from "./IconClose";

const IconHamburger = () => (
  <div className="w-[29px] h-[20px] flex flex-col justify-between">
    <span className="block w-full border-t-2 border-white"></span>
    <span className="block w-full border-t-2 border-white"></span>
    <span className="block w-full border-t-2 border-white"></span>
  </div>
);

export default function MobileMenu({ links, buttons }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} aria-label="Abrir menu">
        <IconHamburger />
      </button>

      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-md z-40
          bg-primary-dark
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-8 h-full flex flex-col">
          <header className="flex items-center justify-between mb-16">
            <h2 className="font-display font-bold text-display text-accent-cyan">
              Menu
            </h2>
            <button onClick={toggleMenu} aria-label="Fechar menu">
              <IconClose />
            </button>
          </header>

          <nav className="flex flex-col gap-y-5 overflow-y-auto">
            {links.map((link) => (
              <MenuItem key={link.href} href={link.href}>
                {link.text}
              </MenuItem>
            ))}
            {buttons.map((button) => (
              <MenuItem key={button.href} href={button.href}>
                {button.text}
              </MenuItem>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
