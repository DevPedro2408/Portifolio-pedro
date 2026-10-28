import Section from '../ui/Section.jsx';
import Reveal from '../ui/Reveal.jsx';
import './About.css';

// Resumo rápido ao lado do texto (só informações reais).
const quickFacts = [
  { label: 'Estudo', value: 'Análise e Desenvolvimento de Sistemas' },
  { label: 'Foco', value: 'Desenvolvimento Front-End' },
  { label: 'Em paralelo', value: 'Back-End no Programa Trilhas FAPEMA' },
  { label: 'Busco', value: 'Minha primeira oportunidade na área' },
];

export default function About() {
  return (
    <Section id="sobre" eyebrow="01 · Sobre mim" title="Transformando ideias em experiências digitais.">
      <div className="about">
        <Reveal className="about__text">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas e tenho como objetivo atuar como Desenvolvedor Front-End. Tenho conhecimentos em HTML, CSS, JavaScript, React, Vite, Git e GitHub, além de experiência prática desenvolvendo projetos web. Gosto de transformar ideias em interfaces funcionais, responsivas e bem estruturadas.
          </p>
          <p>
            Também participo do Programa Trilhas FAPEMA, atualmente em uma formação voltada para Back-End, ampliando meus conhecimentos sobre desenvolvimento de sistemas e o funcionamento das aplicações além da interface. Minha formação inclui o curso de Programador Web pelo IFRS, com conteúdos de HTML, CSS, lógica de programação, JavaScript, banco de dados e sistemas web.
          </p>
          <p>
            Além disso, possuo certificados da Alura em HTML e CSS: Ambientes de Desenvolvimento, Estrutura de Arquivos e Tags e Imersão Front-End 2ª Edição. Estou em busca da minha primeira oportunidade profissional na área de tecnologia, onde possa aplicar meus conhecimentos, aprender com novos desafios e continuar evoluindo como desenvolvedor.
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
