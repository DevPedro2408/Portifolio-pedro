import { skillGroups } from '../../data/skills.js';
import Section from '../ui/Section.jsx';
import Reveal from '../ui/Reveal.jsx';
import './Skills.css';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="Tecnologias que uso no dia a dia."
      intro="As ferramentas e os conceitos que já usei nos meus projetos, e o que estou aprendendo agora."
    >
      <ul className="skills">
        {skillGroups.map((group, index) => (
          <Reveal as="li" key={group.title} className="skills__group" delay={index * 0.08}>
            <h3 className="skills__title">{group.title}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
