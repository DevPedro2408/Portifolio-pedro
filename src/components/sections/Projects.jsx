import { projects } from '../../data/projects.js';
import Section from '../ui/Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

export default function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="04 · Projetos"
      title="O que já construí."
      intro="Projetos reais, de sites responsivos a um sistema pensado para o dia a dia de um mercado."
    >
      <ul className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={(index % 2) * 0.1} />
        ))}
      </ul>
    </Section>
  );
}
