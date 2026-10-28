import { profile } from '../../data/profile.js';
import Button from '../ui/Button.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            Aberto a novos projetos e oportunidades
          </p>

          <p className="hero__greeting">Olá, me chamo {profile.firstName}</p>

          <h1 id="hero-titulo" className="hero__title">
            Desenvolvedor <span className="hero__title-accent">Web</span> com foco em Front-End
          </h1>

          <p className="hero__lead">{profile.tagline}</p>

          <p className="hero__note">
            Estudante de Análise e Desenvolvimento de Sistemas, ampliando meus conhecimentos em
            Back-End através do Programa Trilhas FAPEMA.
          </p>

          <div className="hero__actions">
            <Button href="#projetos" icon="arrow">
              Ver projetos
            </Button>
            <Button href="#contato" variant="ghost">
              Entre em contato
            </Button>
            <Button href={profile.links.github.href} variant="ghost" icon="github">
              GitHub
            </Button>
          </div>
        </div>

        {/* Cartão decorativo: um objeto JavaScript descrevendo o perfil.
            Todas as informações aqui são reais; não há nada inventado. */}
        <figure className="codecard" aria-label="Resumo do perfil em formato de código">
          <figcaption className="codecard__bar">
            <span className="codecard__dot" aria-hidden="true" />
            <span className="codecard__dot" aria-hidden="true" />
            <span className="codecard__dot" aria-hidden="true" />
            <span className="codecard__file">perfil.js</span>
          </figcaption>
          <pre className="codecard__code">
            <code>
              <span className="tk-key">const</span> <span className="tk-var">pedro</span> = {'{'}
              {'\n'}
              {'  '}papel: <span className="tk-str">"Desenvolvedor Web"</span>,{'\n'}
              {'  '}estuda: [<span className="tk-str">"ADS"</span>, <span className="tk-str">"Back-End"</span>],{'\n'}
              {'  '}programa: <span className="tk-str">"Trilhas FAPEMA"</span>,{'\n'}
              {'  '}stack: [{'\n'}
              {'    '}
              <span className="tk-str">"HTML5"</span>, <span className="tk-str">"CSS3"</span>,{'\n'}
              {'    '}
              <span className="tk-str">"JavaScript"</span>, <span className="tk-str">"React"</span>,{'\n'}
              {'  '}],{'\n'}
              {'  '}busca: <span className="tk-str">"Novos projetos e oportunidades"</span>,{'\n'}
              {'}'};
            </code>
          </pre>
        </figure>
      </div>
    </section>
  );
}
