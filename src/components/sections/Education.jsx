import { education } from '../../data/education.js';
import Section from '../ui/Section.jsx';
import Reveal from '../ui/Reveal.jsx';
import './Education.css';

export default function Education() {
  return (
    <Section
      id="formacao"
      eyebrow="03 · Formação"
      title="Construindo minha base em tecnologia."
      intro="Formação acadêmica e complementar em tecnologia."
    >
      <ol className="education">
        {education.map((item, index) => (
          <Reveal as="li" key={item.title} className="education__item" delay={index * 0.1}>
            <span className="education__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="education__meta">
              <p className="education__kind">{item.kind}</p>
              <p className="education__status">{item.status}</p>
            </div>
            <h3 className="education__title">{item.title}</h3>
            <p className="education__description">{item.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
