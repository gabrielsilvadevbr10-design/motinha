import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { MotoLogo } from "./MotoLogo";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { falarNoWhatsApp } from "../lib/whatsapp";
import { useGoToCatalog } from "../lib/use-go-to-catalog";
import { products } from "../lib/products";

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const goToCatalog = useGoToCatalog();

  return (
    <footer className="border-t border-line bg-coal">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
          {/* Marca */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-neon text-night">
                <MotoLogo className="h-6.5 w-6.5" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-extrabold tracking-tight text-cream">
                  FAUSTINO
                </span>
                <span className="mt-1 block font-mono text-[8.5px] font-medium tracking-[0.34em] text-neon uppercase">
                  Motos Eletric
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">
              A loja de motinhas elétricas para quem quer atravessar a cidade
              com potência, estilo e zero emissões.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line text-fog transition-all duration-200 hover:border-neon hover:text-neon"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold tracking-[0.28em] text-cream uppercase">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="group flex items-center gap-2 text-sm text-fog transition-colors duration-200 hover:text-neon"
                >
                  <span className="h-px w-3 bg-line transition-all duration-200 group-hover:w-5 group-hover:bg-neon" />
                  Início
                </Link>
              </li>
              <li>
                <button
                  onClick={goToCatalog}
                  className="group flex items-center gap-2 text-sm text-fog transition-colors duration-200 hover:text-neon"
                >
                  <span className="h-px w-3 bg-line transition-all duration-200 group-hover:w-5 group-hover:bg-neon" />
                  Catálogo completo
                </button>
              </li>
              <li>
                <button
                  onClick={falarNoWhatsApp}
                  className="group flex items-center gap-2 text-sm text-fog transition-colors duration-200 hover:text-neon"
                >
                  <span className="h-px w-3 bg-line transition-all duration-200 group-hover:w-5 group-hover:bg-neon" />
                  Fale com a gente
                </button>
              </li>
            </ul>
          </div>

          {/* Modelos */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold tracking-[0.28em] text-cream uppercase">
              Modelos em alta
            </h4>
            <ul className="mt-5 space-y-3">
              {products.slice(0, 4).map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/produto/${p.id}`}
                    className="group flex items-center gap-2 text-sm text-fog transition-colors duration-200 hover:text-neon"
                  >
                    <span className="h-px w-3 bg-line transition-all duration-200 group-hover:w-5 group-hover:bg-neon" />
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={goToCatalog}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-neon/90 transition-colors hover:text-neon"
                >
                  Ver todos os 10 modelos
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold tracking-[0.28em] text-cream uppercase">
              Contato
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-fog">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                <span>
                  Av. das Nações, 1250 — Bela Vista,
                  <br />
                  São Paulo/SP — CEP 01310-000
                </span>
              </li>
              <li>
                <button
                  onClick={falarNoWhatsApp}
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-neon"
                >
                  <Phone className="h-4 w-4 shrink-0 text-neon" />
                  (11) 4002-8922
                </button>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-neon" />
                contato@faustino.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 sm:flex-row">
          <p className="font-mono text-[11px] text-fog/70">
            © {year} Faustino Motos Eletric — Todos os direitos reservados
          </p>
          <p className="flex items-center gap-2 font-mono text-[11px] text-fog/70">
            FEITO COM ENERGIA <span className="font-semibold text-neon">100% LIMPA</span>
            <MotoLogo className="h-4 w-4 text-neon" />
          </p>
        </div>
      </div>
    </footer>
  );
}
