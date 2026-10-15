import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Bike, Search, X } from "lucide-react";
import { MotoLogo } from "./MotoLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { falarNoWhatsApp } from "../lib/whatsapp";
import { useGoToCatalog } from "../lib/use-go-to-catalog";

function scrollToCatalog() {
  document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
}

function SearchBar({ className = "" }: { className?: string }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const q = searchParams.get("q") ?? "";

  const handleChange = (value: string) => {
    navigate(
      { pathname: "/", search: value ? `?q=${encodeURIComponent(value)}` : "" },
      { replace: true }
    );
    if (value.length === 1) scrollToCatalog();
  };

  return (
    <form
      className={`group relative ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        scrollToCatalog();
      }}
    >
      <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-fog transition-colors group-focus-within:text-neon" />
      <input
        type="text"
        value={q}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Buscar motinha… ex: Shock, Cargo, Sport"
        aria-label="Buscar motinha"
        className="glass h-11 w-full rounded-lg pr-11 pl-11 text-sm text-cream placeholder-fog transition-all duration-200 outline-none focus:border-neon/60"
      />
      {q && (
        <button
          type="button"
          onClick={() => handleChange("")}
          aria-label="Limpar busca"
          className="absolute top-1/2 right-3 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-md bg-white/8 text-fog transition-colors hover:bg-white/15 hover:text-cream"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </form>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const goToCatalog = useGoToCatalog();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra de anúncio */}
      <div className="bg-neon text-night">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-3 px-5 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase sm:px-8">
          <span className="hidden md:inline">Test ride gratuito em São Paulo</span>
          <span className="hidden md:inline opacity-50">/</span>
          <span>Parcele em até 12x</span>
          <span className="opacity-50">/</span>
          <span>Entrega para todo o Brasil</span>
        </div>
      </div>

      {/* Barra principal */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-night/95 backdrop-blur-md"
            : "border-b border-transparent bg-night"
        }`}
      >
        {/* progresso de scroll */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-neon"
          style={{ transform: `scaleX(${progress})` }}
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Linha 1 */}
          <div className="flex h-[68px] items-center gap-4">
            <Link
              to="/"
              className="group flex shrink-0 items-center gap-3"
              aria-label="Faustino Motos Eletric — Início"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-neon text-night transition-transform duration-300 group-hover:rotate-[-6deg]">
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

            <SearchBar className="mx-auto hidden w-full max-w-xl md:block" />

            <div className="ml-auto flex shrink-0 items-center gap-2.5 md:ml-0">
              <button
                onClick={goToCatalog}
                className="hidden h-11 items-center gap-2 rounded-lg border border-line px-5 font-display text-sm font-bold tracking-wide text-cream uppercase transition-all duration-200 hover:border-neon hover:text-neon lg:inline-flex"
              >
                <Bike className="h-4 w-4" />
                Catálogo
              </button>
              <button
                onClick={falarNoWhatsApp}
                className="btn-wa inline-flex h-11 items-center gap-2 rounded-lg px-5 font-display text-sm font-bold tracking-wide uppercase"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Busca mobile */}
          <div className="pb-3 md:hidden">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
