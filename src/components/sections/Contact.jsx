import { profile } from '../../data/profile.js';
import Section from '../ui/Section.jsx';
import Reveal from '../ui/Reveal.jsx';
import SmartLink from '../ui/SmartLink.jsx';
import Icon from '../ui/Icon.jsx';
import './Contact.css';

// Os valores vêm de src/data/profile.js. Para trocar os contatos, edite lá.
const contactItems = [
  { id: 'email', label: 'E-mail', icon: 'mail', ...profile.links.email },
  { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', ...profile.links.linkedin },
  { id: 'github', label: 'GitHub', icon: 'github', ...profile.links.github },
  { id: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp', ...profile.links.whatsapp },
];

export default function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="06 · Contato"
      title="Vamos conversar?"
      intro="Estou em busca da minha primeira oportunidade como Desenvolvedor Front-End. Se meu trabalho chamou sua atenção, vou ficar feliz em conversar."
      className="contact"
    >
      <ul className="contact__grid">
        {contactItems.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 0.07} className="contact__cell">
            <SmartLink href={item.href} className="contact__card">
              <span className="contact__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <span className="contact__text">
                <span className="contact__label">{item.label}</span>
                <span className="contact__value">{item.display}</span>
              </span>
              <span className="contact__arrow">
                <Icon name="arrow" size={18} />
              </span>
            </SmartLink>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
