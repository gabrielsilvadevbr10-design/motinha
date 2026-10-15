import { useLocation, useNavigate } from "react-router-dom";

/**
 * Leva o usuário ao catálogo: se estiver em outra página,
 * navega para a Home e depois rola suavemente até a seção.
 */
export function useGoToCatalog() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return () => {
    const scroll = () =>
      document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });

    if (pathname !== "/") {
      navigate("/");
      window.setTimeout(scroll, 140);
    } else {
      scroll();
    }
  };
}
