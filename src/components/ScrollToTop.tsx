import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Volta ao topo sempre que a rota (pathname) muda. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
