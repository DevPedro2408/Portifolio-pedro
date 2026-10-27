import useReveal from '../../hooks/useReveal.js';

// Envolve qualquer conteúdo para ele surgir suavemente ao entrar na tela.
//  as:    tag HTML a usar (padrão: div)
//  delay: atraso em segundos, útil para escalonar vários cards
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
