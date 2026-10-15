import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowUpRight,
  Bike,
  CreditCard,
  Headset,
  SearchX,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
} from "lucide-react";
import { products } from "../lib/products";
import { ProductCard } from "../components/ProductCard";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Kicker } from "../components/Kicker";
import { Reveal } from "../components/Reveal";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { falarNoWhatsApp } from "../lib/whatsapp";
import imgHeroBanner from "../assets/images/hero-moto.jpg";

const CATEGORIES = ["Todos", "Cidade", "Sport", "Trabalho", "Aventura", "Premium"];

const SORTS = [
  { value: "relevancia", label: "Relevância" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
  { value: "maior-velocidade", label: "Maior velocidade" },
  { value: "maior-autonomia", label: "Maior autonomia" },
];

const BENEFITS = [
  { icon: Truck, title: "Entrega nacional", text: "Enviamos para todo o Brasil, com seguro total." },
  { icon: ShieldCheck, title: "Garantia 12 meses", text: "Bateria, motor e eletrônica cobertos." },
  { icon: Headset, title: "Suporte humano", text: "Atendimento de verdade, direto no WhatsApp." },
  { icon: CreditCard, title: "Pagamento facilitado", text: "Pix com 5% off, cartão em 12x ou financiamento." },
];

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  const [category, setCategory] = useState("Todos");
  const [sort, setSort] = useState("relevancia");

  const filtered = useMemo(() => {
    const list = products.filter((p) => {
      const matchCategory = category === "Todos" || p.category === category;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });

    switch (sort) {
      case "menor-preco":
        return [...list].sort((a, b) => a.price - b.price);
      case "maior-preco":
        return [...list].sort((a, b) => b.price - a.price);
      case "maior-velocidade":
        return [...list].sort((a, b) => b.speed - a.speed);
      case "maior-autonomia":
        return [...list].sort((a, b) => b.range - a.range);
      default:
        return list;
    }
  }, [q, category, sort]);

  const clearFilters = () => {
    setSearchParams({}, { replace: true });
    setCategory("Todos");
    setSort("relevancia");
  };

  return (
    <>
      <Hero />
      <Marquee />

      {/* Catálogo */}
      <section id="catalogo" className="scroll-mt-32 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Reveal>
                <Kicker icon={<Bike className="h-3.5 w-3.5" />}>Catálogo completo</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-cream uppercase sm:text-5xl">
                  Escolha a sua <span className="text-neon">máquina</span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="h-4 w-4 text-fog" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  aria-label="Ordenar produtos"
                  className="h-11 cursor-pointer rounded-lg border border-line bg-panel px-4 font-mono text-xs font-medium tracking-wider text-cream uppercase transition-colors outline-none hover:border-fog focus:border-neon [&>option]:bg-panel"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </Reveal>
          </div>

          {/* Filtros por categoria */}
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-lg px-4 py-2.5 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                    category === c
                      ? "bg-neon text-night"
                      : "border border-line bg-transparent text-fog hover:border-fog hover:text-cream"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-fog uppercase">
              {q ? (
                <>
                  Busca: <span className="text-neon">“{searchParams.get("q")}”</span>
                  {" — "}
                </>
              ) : null}
              {filtered.length}{" "}
              {filtered.length === 1 ? "modelo encontrado" : "modelos encontrados"}
            </p>
          </Reveal>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-8 flex flex-col items-center rounded-xl border border-dashed border-line bg-panel px-6 py-20 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-lg border border-line text-fog">
                  <SearchX className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-cream uppercase">
                  Nenhuma moto encontrada
                </h3>
                <p className="mt-2 max-w-sm text-sm text-fog">
                  Tente buscar por outro nome ou limpe os filtros para ver o
                  catálogo completo.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-acid mt-7 rounded-lg px-7 py-3 font-display text-sm font-bold tracking-wide uppercase"
                >
                  Limpar filtros
                </button>
              </div>
            </Reveal>
          )}

          {/* Benefícios */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 70} className="h-full">
                <div className="flex h-full items-start gap-4 bg-panel p-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line text-neon">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold tracking-wide text-cream uppercase">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-fog">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid overflow-hidden rounded-xl border border-line bg-panel md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 sm:p-14">
                <Kicker icon={<WhatsAppIcon className="h-3 w-3" />}>
                  Atendimento imediato
                </Kicker>
                <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-cream uppercase sm:text-4xl">
                  Em dúvida sobre qual escolher?{" "}
                  <span className="text-neon">Fala com a gente.</span>
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">
                  Nosso time responde em minutos, compara os modelos para o seu
                  uso e agenda um test ride gratuito na loja.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={falarNoWhatsApp}
                    className="btn-wa inline-flex h-12 items-center gap-3 rounded-lg px-8 font-display text-sm font-bold tracking-wide uppercase"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Chamar no WhatsApp
                  </button>
                  <span className="font-mono text-[11px] tracking-[0.14em] text-fog uppercase">
                    Seg–Sáb · 9h às 19h
                  </span>
                </div>
              </div>
              <div className="relative min-h-64 border-t border-line md:min-h-[380px] md:border-t-0 md:border-l">
                <img
                  src={imgHeroBanner}
                  alt="Motinha elétrica Faustino em estúdio com iluminação neon"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-md bg-night/85 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-neon uppercase">
                  Linha 2026 disponível
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Faixa final rápida */}
      <section className="border-t border-line bg-coal">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-12 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-neon uppercase">
              {"// Pronta entrega"}
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold tracking-tight text-cream uppercase">
              Sua motinha sai da loja em até 48h.
            </p>
          </div>
          <button
            onClick={falarNoWhatsApp}
            className="group inline-flex h-12 shrink-0 items-center gap-2.5 rounded-lg border border-line px-7 font-display text-sm font-bold tracking-wide text-cream uppercase transition-all duration-200 hover:border-neon hover:text-neon"
          >
            Falar com especialista
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>
    </>
  );
}
