import { useEffect, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { NotFound } from "./pages/NotFound";

/** Rotas com transição animada a cada troca de página. */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <main key={location.pathname} className="animate-page-in">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-night">
        <Header />
        <AnimatedRoutes />
        <Footer />

        {/* Voltar ao topo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className={`fixed right-4 bottom-20 z-40 grid h-11 w-11 place-items-center rounded-lg border border-line bg-panel text-cream transition-all duration-300 hover:border-neon hover:text-neon sm:right-6 lg:right-8 lg:bottom-8 ${
            showTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </HashRouter>
  );
}
