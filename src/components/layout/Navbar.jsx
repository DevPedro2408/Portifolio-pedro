import { useEffect, useState } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy.js';
import Icon from '../ui/Icon.jsx';
import './Navbar.css';

// Links do menu. "id" precisa ser igual ao id da seção correspondente.
const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'formacao', label: 'Formação' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
];

// Todas as seções acompanhadas pelo "scroll spy" (inclui as que não estão no menu).
const trackedSectionIds = ['inicio', 'sobre', 'skills', 'formacao', 'projetos', 'objetivo', 'contato'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const activeId = useScrollSpy(trackedSectionIds);

  // Adiciona o fundo à navbar assim que a página começa a rolar.
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Com o menu aberto no celular: Esc fecha, a rolagem do fundo é travada
  // e o menu fecha sozinho se a tela virar "desktop" (ex.: girar o tablet).
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    const desktopQuery = window.matchMedia('(min-width: 960px)');
    const handleResize = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', handleResize);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleResize);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${hasScrolled || isMenuOpen ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" onClick={closeMenu} aria-label="Pedro Costa, ir para o início">
          <span className="header__logo-mark" aria-hidden="true">
            P
          </span>
          <span className="header__logo-text">Pedro Costa</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} size={24} />
        </button>

        <nav
          id="menu-principal"
          className={`header__menu ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`header__link ${link.id === 'contato' ? 'header__link--cta' : ''}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
