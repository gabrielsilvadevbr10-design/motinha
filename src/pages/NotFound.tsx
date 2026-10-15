import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { MotoLogo } from "../components/MotoLogo";

export function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-5 pt-40 pb-16">
      <div className="text-center">
        <span className="inline-grid h-14 w-14 place-items-center rounded-lg border border-line bg-panel text-neon">
          <MotoLogo className="h-8 w-8" />
        </span>
        <p className="mt-8 font-mono text-sm font-bold tracking-[0.3em] text-neon uppercase">
          Erro 404
        </p>
        <h1 className="mt-4 font-display text-3xl font-black tracking-tight text-cream uppercase sm:text-4xl">
          Essa rua não existe no nosso mapa
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-fog">
          A página que você procurou descarregou no caminho. Volte para a loja e
          encontre sua próxima motinha elétrica.
        </p>
        <Link
          to="/"
          className="btn-acid mt-8 inline-flex h-12 items-center gap-2.5 rounded-lg px-8 font-display text-sm font-bold tracking-wide uppercase"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          Voltar para a loja
        </Link>
      </div>
    </div>
  );
}
