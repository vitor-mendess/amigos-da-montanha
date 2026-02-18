import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoWhite from "../assets/logo-branca.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3F4226] shadow-xl py-4"
          : "bg-[#1C1C1C]/50 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
        {/* LOGO */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={logoWhite}
            alt="Amigos da Montanha"
            className="h-14 md:h-16 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/sobre"
            className="text-[#E8D6B3] font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
          >
            Sobre
          </Link>

          <Link
            to="/experiencia"
            className="text-[#E8D6B3] font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
          >
            Experiências
          </Link>

          {/* AGENDA – LINK EXTERNO */}
          <a
            href="https://agenda-am.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8D6B3] font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
          >
            Agenda
          </a>

          <Link
            to="/depoimentos"
            className="text-[#E8D6B3] font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
          >
            Depoimentos
          </Link>

          <a
            href="#blog"
            className="text-[#E8D6B3] font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
          >
            Blog
          </a>
        </nav>

        {/* BOTÃO HAMBÚRGUER (MOBILE) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-[#E8D6B3] text-2xl"
          aria-label="Abrir menu"
        >
          <FaBars />
        </button>
      </div>

      {/* MENU MOBILE OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-4/5 bg-[#3F4226] p-8 flex flex-col">
            {/* FECHAR */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-[#E8D6B3] text-2xl mb-10"
              aria-label="Fechar menu"
            >
              <FaTimes />
            </button>

            {/* LINKS MOBILE */}
            <nav className="flex flex-col gap-8">
              <Link
                to="/sobre"
                onClick={() => setMenuOpen(false)}
                className="text-[#E8D6B3] text-xl font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
              >
                Sobre
              </Link>

              <Link
                to="/experiencia"
                onClick={() => setMenuOpen(false)}
                className="text-[#E8D6B3] text-xl font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
              >
                Experiências
              </Link>

              {/* AGENDA – LINK EXTERNO MOBILE */}
              <a
                href="https://agenda-am.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="text-[#E8D6B3] text-xl font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
              >
                Agenda
              </a>

              <Link
                to="/depoimentos"
                onClick={() => setMenuOpen(false)}
                className="text-[#E8D6B3] text-xl font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
              >
                Depoimentos
              </Link>

              <a
                href="#blog"
                onClick={() => setMenuOpen(false)}
                className="text-[#E8D6B3] text-xl font-semibold uppercase tracking-wide hover:text-[#C98A3A] transition"
              >
                Blog
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

