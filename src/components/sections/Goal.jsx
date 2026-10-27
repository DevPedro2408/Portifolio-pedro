import Section from '../ui/Section.jsx';
import Reveal from '../ui/Reveal.jsx';
import './Goal.css';

const goals = [
  {
    title: 'Primeira oportunidade',
    text: 'Entrar no mercado como Desenvolvedor Front-End e começar a construir experiência profissional.',
  },
  {
    title: 'Aprender em equipe',
    text: 'Trabalhar com pessoas mais experientes, receber feedback e evoluir junto com o time.',
  },
  {
    title: 'Crescer como dev completo',
    text: 'Seguir fortalecendo o Front-End e aproveitar o que aprendo de Back-End para entender o produto de ponta a ponta.',
  },
];

export default function Goal() {
  return (
    <Section
      id="objetivo"
      eyebrow="05 · Objetivo"
      title="Onde quero chegar."
      intro="Quero começar minha carreira como Desenvolvedor Front-End, criando interfaces responsivas e bem cuidadas, e continuar evoluindo a cada projeto."
    >
      <ul className="goals">
        {goals.map((goal, index) => (
          <Reveal as="li" key={goal.title} className="goal" delay={index * 0.08}>
            <h3 className="goal__title">{goal.title}</h3>
            <p className="goal__text">{goal.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
