// src/components/Footer.tsx
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo ou Nome */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Hive Connect</h1>
          </div>

          {/* Ícones de Navegação */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/socialhiveconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient-hover-github" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5df0ff" />
                    <stop offset="50%" stopColor="#b766cf" />
                    <stop offset="100%" stopColor="#ff66c4" />
                  </linearGradient>
                </defs>
                <Github
                  className="group-hover:stroke-[url(#gradient-hover-github)] transition-all duration-300"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/hive-connect-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient-hover-linkedin" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5df0ff" />
                    <stop offset="50%" stopColor="#b766cf" />
                    <stop offset="100%" stopColor="#ff66c4" />
                  </linearGradient>
                </defs>
                <Linkedin
                  className="group-hover:stroke-[url(#gradient-hover-linkedin)] transition-all duration-300"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/hive.connect_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient-hover-instagram" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5df0ff" />
                    <stop offset="50%" stopColor="#b766cf" />
                    <stop offset="100%" stopColor="#ff66c4" />
                  </linearGradient>
                </defs>
                <Instagram
                  className="group-hover:stroke-[url(#gradient-hover-instagram)] transition-all duration-300"
                />
              </svg>
            </a>
          </div>

          {/* Direitos Autorais */}
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hive Connect. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}