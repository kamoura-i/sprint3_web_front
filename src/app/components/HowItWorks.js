const steps = [
  {
    title: "Detecta",
    description:
      "O sistema identifica automaticamente padrões de documentos ou textos.",
  },
  {
    title: "Melhora",
    description:
      "Foco, brilho, nitidez e perspectiva são ajustados automaticamente.",
  },
  {
    title: "Captura",
    description:
      "O sistema identifica o melhor momento para realizar a captura.",
  },
  {
    title: "Organiza",
    description:
      "O conteúdo é convertido em texto e transformado em material de estudo.",
  },
];

function StepCard({ number, title, description }) {
  return (
    <article className="step-card">
      <span className="step-number">{String(number).padStart(2, "0")}</span>
      <div className="step-icon" aria-hidden="true">
        ✦
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section className="section how-section" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <span className="section-label">COMO FUNCIONA</span>
          <h2>
            Do clique ao <span>aprendizado.</span>
          </h2>
          <p>
            Uma experiência simples que reduz o esforço do estudante e
            transforma uma captura em conteúdo útil.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <StepCard key={step.title} number={index + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
