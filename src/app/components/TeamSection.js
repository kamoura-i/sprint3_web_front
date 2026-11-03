import Image from "next/image";

const integrantes = [
  { name: "Alexandre Jardim de Souza", rm: "573744", image: "alexandre-img.jpeg" },
  { name: "Fernando Eiji Tanaka", rm: "570871", image: "fernando-img.jpeg" },
  { name: "João Pedro Tavares Belon", rm: "571392", image: "joao-img.jpeg" },
  { name: "Kaique de Moura Ramos", rm: "572345", image: "kaique-img.jpeg" },
  { name: "Kauã Kanin Kagawa", rm: "571461", image: "kaua-img.jpeg" },
];

function TeamMemberCard({ name, rm, image }) {
  return <article className="team-card">
    <div className="team-avatar"><Image src={`/${image}`} alt={`Foto de ${name}`} width={100} height={100} sizes="65px" /></div>
    <h3>{name}</h3><span>RM {rm}</span><p>Desenvolvimento</p>
  </article>;
}

export default function TeamSection() {
  return <section className="section team-section" id="equipe"><div className="container">
    <div className="section-header"><span className="section-label">NOSSA EQUIPE</span><h2>Quem está por <span>trás da solução.</span></h2></div>
    <div className="team-grid">{integrantes.map((integrante) => <TeamMemberCard key={integrante.rm} {...integrante} />)}</div>
  </div></section>;
}
