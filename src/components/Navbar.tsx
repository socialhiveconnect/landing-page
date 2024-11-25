"use client"
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/../public/hivelogocolor.png";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo da empresa */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo da Empresa" className="h-14 w-auto" />
          <span className="ml-2 text-2xl">Hive.Connect</span>
        </div>

        {/* Botão de menu hamburguer para mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {/* Alterna entre o ícone de menu e o ícone de fechar */}
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Links de navegação - visíveis apenas no desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-lg hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text">
            Home
          </Link>
          <Link href="/quem-somos" className="text-lg hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text">
            Quem Somos
          </Link>
          <Link href="/contato" className="text-lg hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text">
            Contato
          </Link>
        </div>
      </div>

      {/* Links de navegação para mobile - visíveis apenas quando o menu hamburguer está ativado */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text block">
              Home
            </Link>
            <Link href="/quem-somos" className="hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text block">
              Quem Somos
            </Link>
            <Link href="/contato" className="hover:bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 hover:text-transparent hover:bg-clip-text block">
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}