"use client";
import Image from 'next/image';
import Logo from "@/../public/hivelogocolor.png";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 overflow-hidden">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo da empresa */}
          <div className="flex items-center">
            <Image src={Logo} alt="Logo da Empresa" className="h-14 w-auto" />
            <a
              id="companyName"
              href="#"
              className="ml-2 text-2xl hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text"
            >
              Hive.Connect
            </a>
          </div>

          {/* Botão de menu hamburguer para mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {/* Alterna entre o ícone de menu e o ícone de fechar */}
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Links de navegação - visíveis apenas no desktop */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#quem-somos"
              className="text-lg hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text"
            >
              Quem Somos
            </a>
            <a
              href="#publico-alvo"
              className="text-lg hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text"
            >
              Público-Alvo
            </a>
            <a
              href="#contato"
              className="text-lg hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Links de navegação para mobile - visíveis apenas quando o menu hamburguer está ativado */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a
                href="#quem-somos"
                className="hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text block"
              >
                Quem Somos
              </a>
              <a
                href="#publico-alvo"
                className="hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text block"
              >
                Público-Alvo
              </a>
              <a
                href="#contato"
                className="hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text block"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}