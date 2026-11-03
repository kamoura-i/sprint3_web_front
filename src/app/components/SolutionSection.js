const problemas = [
  "Baixa qualidade e imagens tremidas",
  "Dificuldade de leitura do texto",
  "Perspectiva inadequada do quadro",
  "Iluminação irregular e reflexos",
  "Informações desorganizadas na galeria",
  "Uso de várias ferramentas diferentes",
];

const tecnologias = [
  "Processamento de imagens",
  "Inteligência Artificial",
  "Detecção de objetos e documentos",
  "Reconhecimento de texto (OCR)",
  "Geração de resumos",
  "Organização de conteúdos",
];

const recursos = [
  {
    icon: "🎯",
    title: "Detecção Inteligente",
    description:
      "Identifica automaticamente conteúdos acadêmicos, como documentos, textos e quadros.",
  },
  {
    icon: "📷",
    title: "Captura Aprimorada",
    description:
      "Ajuda a melhorar a visualização do conteúdo capturado, corrigindo perspectiva e iluminação.",
  },
  {
    icon: "📄",
    title: "Leitura de Conteúdo",
    description:
      "Permite identificar e organizar informações presentes em imagens e documentos.",
  },
  {
    icon: "✨",
    title: "Resumos com IA",
    description:
      "Utiliza Inteligência Artificial para auxiliar na criação de resumos do conteúdo.",
  },
  {
    icon: "🗂️",
    title: "Organização",
    description:
      "Ajuda o estudante a reunir e organizar os materiais capturados por disciplina.",
  },
  {
    icon: "↓",
    title: "Geração de PDF",
    description:
      "Possibilita transformar conteúdos organizados em materiais prontos para estudo.",
  },
];

function ResourceCard({ icon, title, description }) {
  return (
    <article className="resource-card">
      <div className="resource-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function SolutionSection() {
  return (
    <section className="section solution-section" id="solucao">
      <div className="container">
        <div className="section-header">
          <span className="section-label">A SOLUÇÃO</span>
          <h2>
            Do problema em sala de aula ao{" "}
            <span>conteúdo pronto para estudar</span>
          </h2>
        </div>
        <div className="solution-introduction">
          <article className="solution-column problem-column">
            <div className="column-icon" aria-hidden="true">
              ✕
            </div>
            <h3>O problema</h3>
            <p>
              Estudantes frequentemente precisam fotografar quadros, lousas,
              slides, documentos e anotações. Na prática, essas capturas acabam
              gerando material difícil de usar.
            </p>
            <ul className="check-list problem-list">
              {problemas.map((problema) => (
                <li key={problema}>
                  <span aria-hidden="true">✕</span>
                  {problema}
                </li>
              ))}
            </ul>
          </article>
          <article className="solution-column mode-column">
            <div className="column-icon blue-icon" aria-hidden="true">
              ✦
            </div>
            <h3>O Modo Estudante</h3>
            <p>
              Uma camada inteligente dentro da câmera do smartphone: o sistema
              entende o que está sendo fotografado, melhora a imagem, extrai o
              conteúdo e ajuda a organizá-lo para o estudo.
            </p>
            <p>Para isso, a solução combina tecnologias como:</p>
            <ul className="check-list solution-list">
              {tecnologias.map((tecnologia) => (
                <li key={tecnologia}>
                  <span aria-hidden="true">✓</span>
                  {tecnologia}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="resources-header">
          <span className="section-label">PRINCIPAIS RECURSOS</span>
        </div>
        <div className="resources-grid">
          {recursos.map((recurso) => (
            <ResourceCard key={recurso.title} {...recurso} />
          ))}
        </div>
      </div>
    </section>
  );
}
