import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import ProjectPreview from './ProjectPreview.jsx';

// Card de um projeto. Todos os dados vêm de src/data/projects.js.
export default function ProjectCard({ project, delay = 0 }) {
  const { name, badge, description, highlights, technologies, demoUrl, repoUrl, image, previewVariant } = project;

  return (
    <Reveal as="li" className="project" delay={delay}>
      <article className="project__article" aria-labelledby={`projeto-${project.id}`}>
        <div className="project__media">
          {image ? (
            <img
              className="project__image"
              src={image}
              alt={`Captura de tela do projeto ${name}`}
              width="800"
              height="500"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <>
              <ProjectPreview variant={previewVariant} />
              <span className="project__preview-label">Preview ilustrativo</span>
            </>
          )}
        </div>

        <div className="project__body">
          {badge && <p className="project__badge">{badge}</p>}
          <h3 id={`projeto-${project.id}`} className="project__name">
            {name}
          </h3>
          <p className="project__description">{description}</p>

          <ul className="project__highlights">
            {highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="project__tech" aria-label="Tecnologias utilizadas">
            {technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="project__actions">
            <Button href={demoUrl} size="small" icon="external">
              Ver projeto
            </Button>
            <Button href={repoUrl} size="small" variant="ghost" icon="github">
              GitHub
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
