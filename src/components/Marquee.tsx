const ITEMS = [
  "Zero emissões",
  "100% elétrico",
  "Carrega em qualquer tomada",
  "Economia de até 90%",
  "Test ride gratuito",
  "Garantia de 12 meses",
  "Entrega nacional",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-b border-line bg-coal py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-coal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-coal to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-[11px] font-medium tracking-[0.28em] whitespace-nowrap text-fog uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-neon" />
          </span>
        ))}
      </div>
    </div>
  );
}
