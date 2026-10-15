import { ArrowDown } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { falarNoWhatsApp } from "../lib/whatsapp";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "100 km/h", label: "velocidade máx." },
  { value: "150 km", label: "autonomia máx." },
  { value: "R$ 0,10", label: "custo por km" },
];

export function Hero() {
  const scrollToCatalog = () =>
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden border-b border-line pt-44 pb-16 sm:pt-48 sm:pb-20">
      <span
        aria-hidden
        className="text-outline pointer-events-none absolute right-0 -bottom-8 hidden font-display text-[16vw] leading-none font-black uppercase select-none lg:block"
      >
        Elétrica
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] font-medium tracking-[0.3em] text-neon uppercase">
            {"// Faustino Motos Eletric — Linha 2026"}
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-6 max-w-4xl font-display text-[2.9rem] leading-[0.96] font-black tracking-tight text-cream uppercase sm:text-6xl xl:text-[5.4rem]">
            O futuro da mobilidade{" "}
            <span className="text-neon">urbana</span> é elétrico
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
            Potência, estilo e sustentabilidade. Escolha entre 10 motinhas
            elétricas e feche a compra direto no WhatsApp — sem carrinho, sem
            burocracia.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <button
              onClick={scrollToCatalog}
              className="btn-acid inline-flex h-12 items-center gap-2.5 rounded-lg px-7 font-display text-sm font-bold tracking-wide uppercase"
            >
              Ver catálogo
              <ArrowDown className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              onClick={falarNoWhatsApp}
              className="inline-flex h-12 items-center gap-2.5 rounded-lg border border-line bg-transparent px-7 font-display text-sm font-bold tracking-wide text-cream uppercase transition-all duration-200 hover:border-wa hover:text-wa"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </button>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-7">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-extrabold text-cream sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.18em] text-fog uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
