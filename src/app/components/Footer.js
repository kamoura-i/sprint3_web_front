import Image from "next/image";

export default function Footer() {
  return <footer className="footer"><div className="container footer-content">
    <div className="footer-brand"><Image src="/jovi-logo.webp" className="brand-icon" alt="Logo da Jovi" width={100} height={100} /><div><strong>JOVI</strong><p>Modo Estudante com IA</p></div></div>
    <p>Challenge 2026 · 1ESPZ · Sprint 4 · FIAP</p>
  </div></footer>;
}
