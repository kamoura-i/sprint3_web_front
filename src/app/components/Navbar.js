"use client";

import Image from "next/image";
import Link from "next/link";
import { useMenu } from "../../hooks/useMenu";

const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "A Solução", href: "/#solucao" },
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Público-Alvo", href: "/#publico" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Nossa Equipe", href: "/#equipe" },
  { label: "Contato", href: "/#contato" },
];

export default function Navbar() {
  const { menu, alternarMenu, fecharMenu } = useMenu();

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/#inicio" className="brand" onClick={fecharMenu}>
          <Image src="/jovi-logo.webp" alt="Logo da Jovi" width={100} height={100} className="brand-icon" />
          <div className="brand-text">
            <strong>JOVI</strong>
            <span>Modo Estudante</span>
          </div>
        </Link>

        <button
          type="button"
          className="menu-button"
          id="menu-button"
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menu}
          aria-controls="nav"
          onClick={alternarMenu}
        >
          {menu ? "✕" : "☰"}
        </button>

        <nav id="nav" className={`nav${menu ? " active" : ""}`} aria-label="Navegação principal">
          {navigation.map(({ label, href }) => (
            <Link key={href} href={href} onClick={fecharMenu}>{label}</Link>
          ))}
          <Link href="/login" className="nav-area-link" onClick={fecharMenu}>Área da equipe</Link>
        </nav>
      </div>
    </header>
  );
}
