type Props = {
  className?: string;
};

/** Logo da marca: motinha elétrica em line-art (com raio sutil no corpo). */
export function MotoLogo({ className = "h-6 w-6" }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* rodas */}
        <circle cx="12.5" cy="33.5" r="6.5" />
        <circle cx="35.5" cy="33.5" r="6.5" />
        {/* paralama traseiro */}
        <path d="M5.6 30.5C6.6 26.2 9.4 23.6 13 23.2" />
        {/* canote + banco */}
        <path d="M13.4 26.5l1.8-8.2c.2-1 1-1.6 2-1.6h4.4" />
        {/* coluna dianteira + guidão */}
        <path d="M29 29.5l4.4-15.7 5-1.4" />
        {/* plataforma */}
        <path d="M16.8 29.5h8.6" />
      </g>
      {/* raio de energia no corpo */}
      <path
        d="M23.6 20.2l-2.4 4.8h2.4l-1.9 4.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
