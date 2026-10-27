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
    <Section id="sobre" eyebrow="01 · Sobre mim" title="Aprendo construindo, um projeto de cada vez.">
      <div className="about">
        <Reveal className="about__text">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas e estou em busca da minha
            primeira oportunidade na área de tecnologia. O que mais me atrai é o Front-End: ver uma
            ideia virar uma tela que alguém consegue usar de verdade.
          </p>
          <p>
            Meus projetos, de sites para diferentes tipos de negócio a um sistema de mercado
            pensado para uso real, me ensinaram a cuidar de detalhes que só aparecem na prática,
            como responsividade, organização do código e clareza da interface.
          </p>
          <p>
            Além do Front-End, participo do Programa Trilhas FAPEMA, em uma formação voltada para
            Back-End. Entender como os dados e as regras funcionam do outro lado me ajuda a criar
            interfaces melhores e a conversar com quem trabalha na outra ponta.
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
