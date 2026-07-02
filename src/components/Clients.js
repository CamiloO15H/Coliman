/**
 * Componente Clients — Carrusel infinito de logotipos de clientes
 */

import { clientLogo } from '../placeholders/placeholders.js';

export function initClients() {
  const track = document.querySelector("#clients-track");
  if (!track) return;

  // Duplicar los logotipos para hacer el loop infinito sin saltos
  const logosCount = 8;
  const logos = Array.from({ length: logosCount }, (_, i) => i);
  const duplicatedLogos = [...logos, ...logos];

  track.innerHTML = duplicatedLogos.map(i => `
    <div class="client-logo" aria-label="Client logo">${clientLogo(i)}</div>
  `).join('');
}
