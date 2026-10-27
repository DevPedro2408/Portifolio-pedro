import { isExternalLink, isMissingLink } from '../../utils/links.js';

// Link "inteligente" usado por botões, cards de contato e rodapé:
// - link ainda não configurado (placeholder "SEU_") -> vira um elemento desativado,
//   assim o visitante nunca cai em um link quebrado;
// - link externo -> abre em nova aba, com rel de segurança;
// - link interno (#secao) ou mailto: -> comportamento normal.
export default function SmartLink({ href, className = '', children, ...rest }) {
  if (isMissingLink(href)) {
    return (
      <span
        className={`${className} is-disabled`}
        aria-disabled="true"
        title="Link ainda não configurado"
        {...rest}
      >
        {children}
      </span>
    );
  }

  if (isExternalLink(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    );
  }

  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}
