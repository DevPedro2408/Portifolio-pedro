import Section from '../ui/Section.jsx';
import Reveal from '../ui/Reveal.jsx';
import './About.css';

// Resumo rápido ao lado do texto (só informações reais).
const quickFacts = [
  { label: 'Estudo', value: 'Análise e Desenvolvimento de Sistemas' },
  { label: 'Foco', value: 'Desenvolvimento Front-End' },
  { label: 'Em paralelo', value: 'Back-End no Programa Trilhas FAPEMA' },
  { label: 'Busco', value: 'Aberto a novos projetos e oportunidades' },
];

export default function About() {
  return (
    <Section id="sobre" eyebrow="01 · Sobre mim" title="Construindo meu caminho na tecnologia.">
      <div className="about">
        <Reveal className="about__text">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em Front-End. Tenho conhecimentos em HTML, CSS, JavaScript, React, Vite, Git e GitHub, além de experiência prática com projetos web.
          </p>
          <p>
            Também participo do Programa Trilhas FAPEMA, em formação voltada para Back-End, e possuo certificação de Programador Web pelo IFRS, além de cursos da Alura em HTML, CSS e Front-End.
          </p>
          <p>
            Estou aberto a novos projetos e oportunidades na área de tecnologia, buscando aplicar meus conhecimentos, desenvolver soluções e continuar evoluindo como desenvolvedor.
          </p>
        </Reveal>

        <Reveal as="dl" className="about__facts" delay={0.1}>
          {quickFacts.map((fact) => (
            <div key={fact.label} className="about__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
