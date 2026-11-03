import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-background" />
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-tag">✦ Challenge JOVI · Modo Estudante</span>
          <h1>Transforme sua câmera em uma <span>ferramenta inteligente</span> para estudar.</h1>
          <p className="hero-description">O Modo Estudante utiliza Inteligência Artificial e recursos de processamento de imagem para ajudar estudantes a capturar, organizar e compreender conteúdos acadêmicos.</p>
          <div className="hero-buttons">
            <a href="#solucao" className="button button-primary">Conheça a Solução</a>
            <a href="#como-funciona" className="button button-outline">Veja Como Funciona</a>
          </div>
          <div className="hero-features">
            <div className="hero-feature"><span>⌾</span><div><small>Detecção</small><strong>Automática</strong></div></div>
            <div className="hero-feature"><span>✦</span><div><small>Resumos</small><strong>com IA</strong></div></div>
            <div className="hero-feature"><span>▣</span><div><small>Exportação</small><strong>em PDF</strong></div></div>
          </div>
        </div>
        <div className="hero-visual">
          <figure className="phone-image-wrapper">
            <Image src="/hero-phone.jpg" alt="Smartphone exibindo o Modo Estudante identificando conteúdo de um quadro em sala de aula" width={1024} height={1280} sizes="(max-width: 850px) 345px, 345px" className="hero-phone-image" priority />
            <figcaption>Representação do Modo Estudante em funcionamento na câmera do smartphone.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
