import SmartLink from './SmartLink.jsx';
import Icon from './Icon.jsx';

// Botão reutilizável. Na prática é um link com aparência de botão.
//  variant: 'primary' (preenchido) | 'ghost' (contorno)
//  icon:    nome de um ícone de Icon.jsx (opcional)
export default function Button({ href, variant = 'primary', size = 'medium', icon, children }) {
  return (
    <SmartLink href={href} className={`btn btn--${variant} btn--${size}`}>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </SmartLink>
  );
}
