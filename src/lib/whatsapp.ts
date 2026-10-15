/**
 * Monta o link dinâmico do WhatsApp e abre a conversa
 * com a mensagem pré-preenchida da moto escolhida.
 */
export const WHATSAPP_NUMBER = "5500000000000";

export function buildWhatsAppLink(nomeMoto: string, preco?: string): string {
  const mensagem = preco
    ? `Olá! Tenho interesse na motinha ${nomeMoto} que custa ${preco}.`
    : `Olá! Tenho interesse na motinha ${nomeMoto}.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

export function comprarNoWhatsApp(nomeMoto: string, preco?: string): void {
  window.open(buildWhatsAppLink(nomeMoto, preco), "_blank", "noopener,noreferrer");
}

/** Abre uma conversa genérica (header, footer, contato). */
export function falarNoWhatsApp(): void {
  const mensagem =
    "Olá! Quero saber mais sobre as motinhas elétricas da Faustino Motos Eletric.";
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`,
    "_blank",
    "noopener,noreferrer"
  );
}
