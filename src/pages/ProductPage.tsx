import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BatteryCharging,
  ChevronRight,
  Gauge,
  Headset,
  Route,
  ShieldCheck,
  Star,
  Timer,
  Truck,
} from "lucide-react";
import { products } from "../lib/products";
import { formatBRL } from "../lib/format";
import { comprarNoWhatsApp } from "../lib/whatsapp";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { ProductCard } from "../components/ProductCard";
import { Reveal } from "../components/Reveal";
import { NotFound } from "./NotFound";

/** A mesma foto 3x, com enquadramentos diferentes para simular ângulos. */
const VIEWS = [
  { label: "Lateral", scale: "scale-100", position: "center center" },
  { label: "Roda traseira", scale: "scale-[1.45]", position: "20% 65%" },
  { label: "Cockpit", scale: "scale-[1.45]", position: "80% 28%" },
];

export function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [active, setActive] = useState(0);

  useEffect(() => setActive(0), [id]);

  if (!product) return <NotFound />;

  const price = formatBRL(product.price);
  const pixPrice = formatBRL(product.price * 0.95);
  const installment = formatBRL(product.price / 12);
  const isHot = product.tagTone === "neon";

  const specRows = [
    { label: "Bateria", value: product.battery },
    { label: "Velocidade máxima", value: `${product.speed} km/h` },
    { label: "Autonomia", value: `${product.range} km` },
    { label: "Tempo de carga", value: product.charge },
    ...product.extraSpecs,
  ];

  const highlights = [
    { icon: BatteryCharging, label: "Bateria", value: product.battery.split(" ")[0] },
    { icon: Gauge, label: "Vel. máx", value: `${product.speed} km/h` },
    { icon: Route, label: "Autonomia", value: `${product.range} km` },
    { icon: Timer, label: "Recarga", value: product.charge },
  ];

  const related = [
    ...products.filter((p) => p.id !== id && p.category === product.category),
    ...products.filter((p) => p.id !== id && p.category !== product.category),
  ].slice(0, 3);

  return (
    <div className="pt-40 pb-28 sm:pt-44 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb */}
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] tracking-wider text-fog uppercase"
          >
            <Link to="/" className="transition-colors hover:text-neon">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/" className="transition-colors hover:text-neon">
              Catálogo
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-cream">{product.name}</span>
          </nav>
        </Reveal>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Galeria */}
          <Reveal>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-[#f0f1ec]">
                <img
                  key={active}
                  src={product.image}
                  alt={`${product.name} — vista ${VIEWS[active].label}`}
                  className={`h-full w-full object-contain animate-fade-in transition-transform duration-500 ${VIEWS[active].scale}`}
                  style={{ objectPosition: VIEWS[active].position }}
                />
                <span
                  className={`absolute top-4 left-4 rounded-md px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.16em] uppercase ${
                    isHot
                      ? "bg-neon text-night"
                      : "border border-line bg-night/80 text-cream"
                  }`}
                >
                  {product.tag}
                </span>
                <span className="absolute right-4 bottom-4 rounded-md bg-night/85 px-3 py-1.5 font-mono text-[10px] font-medium tracking-[0.2em] text-cream uppercase">
                  {String(active + 1).padStart(2, "0")} / 03 — {VIEWS[active].label}
                </span>
              </div>

              {/* Miniaturas */}
              <div className="mt-3 flex gap-3">
                {VIEWS.map((view, i) => (
                  <button
                    key={view.label}
                    onClick={() => setActive(i)}
                    aria-label={`Ver ${view.label}`}
                    className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-lg border transition-all duration-200 sm:w-28 ${
                      active === i
                        ? "border-neon"
                        : "border-line opacity-50 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt=""
                      aria-hidden
                      className={`h-full w-full bg-[#f0f1ec] object-contain ${view.scale}`}
                      style={{ objectPosition: view.position }}
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-night/80 py-0.5 text-center font-mono text-[8px] font-medium tracking-[0.14em] text-fog uppercase">
                      {view.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Informações */}
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-fog uppercase">
                  {product.category}
                </span>
                <span className="rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-neon uppercase">
                  Pronta entrega
                </span>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-cream uppercase sm:text-5xl">
                {product.name}
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-3.5 flex items-center gap-3">
                <span className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className="font-mono text-[11px] text-fog">
                  4.9 — avaliação dos clientes
                </span>
              </div>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-5 text-sm leading-relaxed text-fog sm:text-base">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-lg border border-line bg-panel p-3.5 text-center transition-colors duration-200 hover:border-fog"
                  >
                    <h.icon className="mx-auto h-4.5 w-4.5 text-neon" />
                    <p className="mt-2 font-display text-sm font-bold text-cream">
                      {h.value}
                    </p>
                    <p className="mt-1 font-mono text-[9px] tracking-[0.16em] text-fog uppercase">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-6 rounded-xl border border-line bg-panel p-6">
                <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
                  <div>
                    <p className="font-mono text-[10px] font-medium tracking-[0.2em] text-fog uppercase">
                      Preço à vista
                    </p>
                    <p className="mt-1 font-display text-4xl font-black tracking-tight text-cream sm:text-5xl">
                      {price}
                    </p>
                    <p className="mt-1.5 font-mono text-xs font-semibold text-neon">
                      {pixPrice} no Pix (5% off)
                    </p>
                  </div>
                  <p className="pb-1 font-mono text-xs leading-relaxed text-fog">
                    ou 12x de
                    <br />
                    <span className="text-sm font-semibold text-cream">{installment}</span>
                  </p>
                </div>

                <button
                  onClick={() => comprarNoWhatsApp(product.name, price)}
                  className="btn-wa mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-lg font-display text-base font-bold tracking-wide uppercase"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Comprar no WhatsApp
                </button>

                <div className="mt-5 grid grid-cols-1 gap-2.5 border-t border-line pt-5 font-mono text-[11px] text-fog sm:grid-cols-3">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-neon" />
                    Garantia 12 meses
                  </span>
                  <span className="flex items-center gap-2">
                    <Truck className="h-4 w-4 shrink-0 text-neon" />
                    Frete p/ todo Brasil
                  </span>
                  <span className="flex items-center gap-2">
                    <Headset className="h-4 w-4 shrink-0 text-neon" />
                    Suporte especializado
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <Link
                to="/"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider text-fog uppercase transition-colors hover:text-neon"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Voltar ao catálogo
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Descrição + Especificações */}
        <div className="mt-16 grid items-start gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="h-full rounded-xl border border-line bg-panel p-8 sm:p-10">
              <h2 className="flex items-center gap-3 font-display text-xl font-extrabold tracking-tight text-cream uppercase">
                <span className="h-5 w-1 bg-neon" />
                Sobre esta máquina
              </h2>
              <div className="mt-6 space-y-4">
                {product.longDescription.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-fog sm:text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-xl border border-line bg-panel">
              <div className="border-b border-line px-7 py-5">
                <h2 className="font-display text-base font-extrabold tracking-tight text-cream uppercase">
                  Especificações <span className="text-neon">técnicas</span>
                </h2>
              </div>
              <table className="w-full">
                <tbody>
                  {specRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-line transition-colors last:border-0 hover:bg-white/[0.03] ${
                        i % 2 === 0 ? "bg-white/[0.015]" : ""
                      }`}
                    >
                      <td className="px-7 py-4 font-mono text-[10.5px] font-medium tracking-[0.14em] text-fog uppercase">
                        {row.label}
                      </td>
                      <td className="px-7 py-4 text-right text-sm font-semibold text-cream">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        {/* Relacionados */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-cream uppercase">
                Você também pode <span className="text-neon">gostar</span>
              </h2>
              <Link
                to="/"
                className="group hidden items-center gap-2 font-mono text-xs font-medium tracking-wider text-fog uppercase transition-colors hover:text-neon sm:inline-flex"
              >
                Ver todos
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Barra de compra fixa (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-night/95 py-3 pr-18 pl-4 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-mono text-[9.5px] font-medium tracking-[0.14em] text-fog uppercase">
              {product.name}
            </p>
            <p className="font-display text-lg leading-tight font-extrabold text-cream">
              {price}
            </p>
          </div>
          <button
            onClick={() => comprarNoWhatsApp(product.name, price)}
            className="btn-wa flex h-11 shrink-0 items-center gap-2 rounded-lg px-5 font-display text-sm font-bold tracking-wide uppercase"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
