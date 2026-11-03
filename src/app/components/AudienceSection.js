import Image from "next/image";

const necessidades = [
  "Registrar conteúdos rapidamente durante a aula",
  "Melhorar a leitura de materiais capturados",
  "Organizar informações em um só lugar",
  "Economizar tempo na hora de revisar",
  "Facilitar revisões com resumos automáticos",
  "Usar o smartphone como ferramenta de estudo",
];

function BenefitCard({ text }) {
  return <article className="need-card"><span aria-hidden="true">✦</span><p>{text}</p></article>;
}

export default function AudienceSection() {
  return <section className="section audience-section" id="publico">
    <div className="container">
      <div className="audience-header"><span className="section-label">PÚBLICO-ALVO</span><h2>Feito para quem estuda com o <span>smartphone na mão</span></h2><p>O principal público são estudantes, especialmente jovens universitários que já utilizam o celular diariamente para registrar conteúdos durante as aulas. A solução é relevante justamente porque o smartphone já faz parte da rotina acadêmica.</p></div>
      <div className="audience-grid">
        <article className="profile-card">
          <div className="profile-image"><Image src="/publico-alvo.png" alt="Estudante utilizando o smartphone para fotografar conteúdo" width={1122} height={820} sizes="(max-width: 850px) 92vw, 440px" /></div>
          <div className="profile-content"><h3>Perfil do usuário</h3><p>Estudante de 17 a 30 anos, com rotina intensa de aulas, que fotografa slides e lousas todos os dias e depois perde tempo procurando o material na galeria.</p></div>
        </article>
        <div className="needs-content"><h3 className="needs-title">Principais necessidades e benefícios</h3><div className="needs-grid">{necessidades.map((text) => <BenefitCard key={text} text={text} />)}</div></div>
      </div>
    </div>
  </section>;
}
