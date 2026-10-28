import SmartLink from './SmartLink.jsx';
import Icon from './Icon.jsx';

export default function Button({ href, variant = 'primary', size = 'medium', icon, children }) {
  return (
    <SmartLink href={href} className={`btn btn--${variant} btn--${size}`}>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </SmartLink>
  );
}
