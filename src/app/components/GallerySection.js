import Image from "next/image";

export default function GallerySection() {
  return <section className="section gallery-section" id="galeria">
    <div className="container">
      <div className="section-header"><span className="section-label">GALERIA</span><h2>Veja a solução <span>em ação.</span></h2><p>Representações da experiência do Modo Estudante.</p></div>
      <div className="gallery-grid">
        <figure className="gallery-card gallery-main"><Image src="/modo-estudante.png" alt="Smartphone utilizando o Modo Estudante" width={941} height={1672} sizes="(max-width: 600px) 92vw, (max-width: 850px) 80vw, 700px" /></figure>
        <figure className="gallery-card"><Image src="/escanear.jpg" alt="Imagem ilustrando escaneamento" width={912} height={912} sizes="(max-width: 600px) 92vw, 370px" /><figcaption>Escaneia o conteúdo.</figcaption></figure>
        <figure className="gallery-card"><Image src="/processo.jpg" alt="Imagem ilustrando o processo do modo estudante" width={1024} height={1536} sizes="(max-width: 600px) 92vw, 370px" /><figcaption>Processo definido.</figcaption></figure>
      </div>
    </div>
  </section>;
}
