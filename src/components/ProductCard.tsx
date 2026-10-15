import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Route } from "lucide-react";
import type { Product } from "../lib/products";
import { formatBRL } from "../lib/format";
import { comprarNoWhatsApp } from "../lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

type Props = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: Props) {
  const price = formatBRL(product.price);
  const pixPrice = formatBRL(product.price * 0.95);
  const installment = formatBRL(product.price / 12);
  const isHot = product.tagTone === "neon";

  return (
    <Reveal delay={(index % 4) * 70} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-neon/60">
        {/* Foto */}
        <Link
          to={`/produto/${product.id}`}
          className="relative block h-52 shrink-0 overflow-hidden"
          aria-label={`Ver detalhes da ${product.name}`}
        >
          <img
            src={product.image}
            alt={`Motinha elétrica ${product.name}`}
            loading="lazy"
            className="h-full w-full object-contain bg-[#f0f1ec] p-2 transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-panel/90 via-transparent to-transparent" />
          <span
            className={`absolute top-3.5 left-3.5 rounded-md px-2.5 py-1 font-mono text-[9.5px] font-bold tracking-[0.16em] uppercase ${
              isHot
                ? "bg-neon text-night"
                : "border border-line bg-night/80 text-cream"
            }`}
          >
            {product.tag}
          </span>
          <span className="absolute top-3.5 right-3.5 rounded-md border border-line bg-night/80 px-2.5 py-1 font-mono text-[9.5px] font-medium tracking-[0.16em] text-fog uppercase">
            {product.category}
          </span>
        </Link>

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col p-5">
          <Link to={`/produto/${product.id}`}>
            <h3 className="font-display text-lg leading-snug font-extrabold tracking-tight text-cream transition-colors duration-200 group-hover:text-neon">
              {product.name}
            </h3>
          </Link>

          <div className="mt-2.5 flex items-center gap-4 font-mono text-[11px] text-fog">
            <span className="inline-flex items-center gap-1.5">
              <Gauge className="h-3.5 w-3.5" />
              {product.speed} km/h
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Route className="h-3.5 w-3.5" />
              {product.range} km
            </span>
          </div>

          <div className="mt-4 flex items-end justify-between gap-3 border-t border-line pt-4">
            <div>
              <p className="font-display text-2xl font-extrabold tracking-tight text-cream">
                {price}
              </p>
              <p className="mt-1 font-mono text-[10.5px] font-medium text-neon">
                {pixPrice} no Pix
              </p>
            </div>
            <p className="pb-0.5 text-right font-mono text-[10.5px] leading-relaxed text-fog">
              12x de
              <br />
              {installment}
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <Link
              to={`/produto/${product.id}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.04] py-3 font-display text-[13px] font-bold tracking-wide text-cream uppercase transition-all duration-200 hover:border-neon hover:bg-neon hover:text-night"
            >
              Ver moto
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <button
              onClick={() => comprarNoWhatsApp(product.name, price)}
              aria-label={`Comprar ${product.name} no WhatsApp`}
              title="Comprar no WhatsApp"
              className="grid w-12 shrink-0 place-items-center rounded-lg border border-line text-wa transition-all duration-200 hover:border-wa hover:bg-wa hover:text-night"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
