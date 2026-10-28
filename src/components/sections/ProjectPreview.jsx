function BrowserFrame({ children }) {
  return (
    <svg viewBox="0 0 400 250" role="presentation" aria-hidden="true" focusable="false">
      <rect width="400" height="250" fill="var(--pv-bg)" />
      <rect width="400" height="26" fill="var(--pv-bar)" />
      <circle cx="14" cy="13" r="4" fill="var(--pv-accent)" />
      <circle cx="28" cy="13" r="4" fill="var(--pv-muted)" />
      <circle cx="42" cy="13" r="4" fill="var(--pv-muted)" />
      <rect x="90" y="7" width="220" height="12" rx="6" fill="var(--pv-muted)" opacity="0.35" />
      {children}
    </svg>
  );
}

// Sistema de mercado / PDV: tabela de produtos + painel de venda com código de barras.
function PdvPreview() {
  const rowWidths = [90, 120, 70, 104, 84];
  const barWidths = [3, 1, 2, 1, 3, 2, 1, 3, 1, 2, 2, 1, 3];
  let barX = 282;

  return (
    <BrowserFrame>
      <rect x="16" y="42" width="236" height="16" rx="4" fill="var(--pv-surface)" />
      {rowWidths.map((width, index) => (
        <g key={index}>
          <rect x="16" y={66 + index * 34} width="236" height="26" rx="5" fill="var(--pv-surface)" />
          <rect x="26" y={76 + index * 34} width={width} height="6" rx="3" fill="var(--pv-line)" />
          <rect x="206" y={76 + index * 34} width="34" height="6" rx="3" fill="var(--pv-accent)" opacity="0.85" />
        </g>
      ))}
      <rect x="268" y="42" width="116" height="192" rx="8" fill="var(--pv-surface)" />
      <rect x="280" y="56" width="50" height="6" rx="3" fill="var(--pv-line)" />
      <rect x="280" y="70" width="92" height="24" rx="5" fill="var(--pv-accent)" />
      {barWidths.map((width, index) => {
        const x = barX;
        barX += width + 3;
        return <rect key={index} x={x} y="108" width={width} height="48" fill="var(--pv-line)" />;
      })}
      <rect x="280" y="176" width="92" height="28" rx="14" fill="var(--pv-accent)" opacity="0.85" />
      <rect x="280" y="214" width="60" height="6" rx="3" fill="var(--pv-line)" />
    </BrowserFrame>
  );
}

// Hamburgueria: navegação com carrinho, destaque com hambúrguer e cards do cardápio.
function BurgerPreview() {
  return (
    <BrowserFrame>
      <rect x="16" y="38" width="44" height="10" rx="5" fill="var(--pv-accent)" />
      <rect x="230" y="40" width="30" height="6" rx="3" fill="var(--pv-line)" />
      <rect x="272" y="40" width="30" height="6" rx="3" fill="var(--pv-line)" />
      <circle cx="372" cy="43" r="9" fill="var(--pv-accent)" />
      <rect x="16" y="72" width="150" height="14" rx="7" fill="var(--pv-line)" />
      <rect x="16" y="94" width="108" height="14" rx="7" fill="var(--pv-line)" />
      <rect x="16" y="118" width="130" height="6" rx="3" fill="var(--pv-muted)" />
      <rect x="16" y="132" width="96" height="26" rx="13" fill="var(--pv-accent)" />
      <ellipse cx="298" cy="100" rx="62" ry="28" fill="var(--pv-accent)" />
      <rect x="238" y="122" width="120" height="14" rx="7" fill="var(--pv-line)" />
      <rect x="234" y="138" width="128" height="8" rx="4" fill="var(--pv-muted)" />
      <rect x="242" y="148" width="112" height="20" rx="10" fill="var(--pv-accent)" opacity="0.8" />
      {[16, 144, 272].map((x) => (
        <g key={x}>
          <rect x={x} y="184" width="112" height="52" rx="8" fill="var(--pv-surface)" />
          <circle cx={x + 26} cy="210" r="12" fill="var(--pv-accent)" opacity="0.8" />
          <rect x={x + 46} y="202" width="52" height="6" rx="3" fill="var(--pv-line)" />
          <rect x={x + 46} y="214" width="34" height="6" rx="3" fill="var(--pv-muted)" />
        </g>
      ))}
    </BrowserFrame>
  );
}

// Clínica: landing page com destaque, botão de contato e três serviços.
function ClinicPreview() {
  return (
    <BrowserFrame>
      <rect x="16" y="38" width="44" height="10" rx="5" fill="var(--pv-accent)" />
      <rect x="250" y="40" width="30" height="6" rx="3" fill="var(--pv-line)" />
      <rect x="292" y="40" width="30" height="6" rx="3" fill="var(--pv-line)" />
      <rect x="334" y="36" width="50" height="14" rx="7" fill="var(--pv-accent)" />
      <rect x="16" y="76" width="160" height="14" rx="7" fill="var(--pv-line)" />
      <rect x="16" y="98" width="120" height="14" rx="7" fill="var(--pv-line)" />
      <rect x="16" y="124" width="150" height="6" rx="3" fill="var(--pv-muted)" />
      <rect x="16" y="136" width="110" height="6" rx="3" fill="var(--pv-muted)" />
      <rect x="16" y="154" width="92" height="24" rx="12" fill="var(--pv-accent)" />
      <rect x="226" y="62" width="158" height="116" rx="14" fill="var(--pv-surface)" />
      <circle cx="305" cy="104" r="22" fill="var(--pv-accent)" opacity="0.85" />
      <rect x="268" y="136" width="74" height="28" rx="14" fill="var(--pv-line)" />
      {[16, 144, 272].map((x) => (
        <g key={x}>
          <rect x={x} y="192" width="112" height="44" rx="8" fill="var(--pv-surface)" />
          <circle cx={x + 22} cy="214" r="10" fill="var(--pv-accent)" opacity="0.8" />
          <rect x={x + 40} y="206" width="58" height="6" rx="3" fill="var(--pv-line)" />
          <rect x={x + 40} y="218" width="40" height="6" rx="3" fill="var(--pv-muted)" />
        </g>
      ))}
    </BrowserFrame>
  );
}

// Empório Pet: vitrine com quatro produtos e faixa promocional.
function PetPreview() {
  return (
    <BrowserFrame>
      <rect x="16" y="38" width="44" height="10" rx="5" fill="var(--pv-accent)" />
      <rect x="250" y="40" width="30" height="6" rx="3" fill="var(--pv-line)" />
      <rect x="292" y="40" width="30" height="6" rx="3" fill="var(--pv-line)" />
      <rect x="334" y="40" width="50" height="6" rx="3" fill="var(--pv-line)" />
      {[0, 1, 2, 3].map((index) => {
        const x = 16 + index * 94;
        return (
          <g key={index}>
            <rect x={x} y="64" width="86" height="114" rx="8" fill="var(--pv-surface)" />
            <rect x={x + 8} y="72" width="70" height="52" rx="6" fill="var(--pv-bar)" />
            <circle cx={x + 43} cy="98" r="14" fill="var(--pv-accent)" opacity={index % 2 ? 0.55 : 0.9} />
            <rect x={x + 10} y="134" width="58" height="6" rx="3" fill="var(--pv-line)" />
            <rect x={x + 10} y="146" width="38" height="6" rx="3" fill="var(--pv-muted)" />
            <rect x={x + 10} y="160" width="36" height="12" rx="6" fill="var(--pv-accent)" />
          </g>
        );
      })}
      <rect x="16" y="194" width="368" height="42" rx="8" fill="var(--pv-accent)" opacity="0.18" />
      <rect x="32" y="208" width="120" height="8" rx="4" fill="var(--pv-line)" />
      <rect x="32" y="222" width="80" height="6" rx="3" fill="var(--pv-muted)" />
      <rect x="300" y="206" width="68" height="18" rx="9" fill="var(--pv-accent)" />
    </BrowserFrame>
  );
}

const previews = {
  pdv: PdvPreview,
  burger: BurgerPreview,
  clinic: ClinicPreview,
  pet: PetPreview,
};

export default function ProjectPreview({ variant }) {
  const Preview = previews[variant] ?? PdvPreview;
  return <Preview />;
}
