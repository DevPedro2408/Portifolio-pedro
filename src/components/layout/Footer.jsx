import { profile } from '../../data/profile.js';
import SmartLink from '../ui/SmartLink.jsx';
import Icon from '../ui/Icon.jsx';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role">{profile.role}</p>
        </div>

        <ul className="footer__social" aria-label="Redes e contato">
          <li>
            <SmartLink href={profile.links.github.href} className="footer__icon-link" aria-label="GitHub">
              <Icon name="github" size={20} />
            </SmartLink>
          </li>
          <li>
            <SmartLink href={profile.links.linkedin.href} className="footer__icon-link" aria-label="LinkedIn">
              <Icon name="linkedin" size={20} />
            </SmartLink>
          </li>
          <li>
            <SmartLink href={profile.links.whatsapp.href} className="footer__icon-link" aria-label="WhatsApp">
              <Icon name="whatsapp" size={20} />
            </SmartLink>
          </li>
          <li>
            <SmartLink href={profile.links.email.href} className="footer__icon-link" aria-label="E-mail">
              <Icon name="mail" size={20} />
            </SmartLink>
          </li>
        </ul>

        <div className="footer__bottom">
          <p>
            © {currentYear} {profile.firstName}. Feito com React e Vite.
          </p>
          <a href="#inicio" className="footer__top">
            Voltar ao topo
            <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
