import { isExternalLink, isMissingLink } from '../../utils/links.js';

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
