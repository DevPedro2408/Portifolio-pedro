import Reveal from './Reveal.jsx';

// Estrutura padrão de uma seção: etiqueta, título (h2) e introdução opcional.
export default function Section({ id, eyebrow, title, intro, className = '', children }) {
  const headingId = `${id}-titulo`;

  return (
    <section id={id} className={`section ${className}`} aria-labelledby={headingId}>
      <div className="container">
        <Reveal className="section__head">
          <p className="section__eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {intro && <p className="section__intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
