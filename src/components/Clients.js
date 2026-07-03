/**
 * Componente Clients — Carrusel infinito de logotipos de clientes con hover interactivo
 */

export function initClients() {
  const track = document.querySelector("#clients-track");
  if (!track) return;

  // Los 4 logotipos oficiales de clientes provistos por el usuario
  const CLIENT_LOGOS = [
    { id: 1, name: "Kenpat" },
    { id: 2, name: "Acousti" },
    { id: 3, name: "Uniclad" },
    { id: 4, name: "SJS Drywall" }
  ];

  // Repetir los logos 4 veces para tener 16 elementos y lograr un scroll infinito continuo y fluido
  const list = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  track.innerHTML = list.map(logo => `
    <div class="client-logo" aria-label="${logo.name}">
      <img class="logo-default" src="./Clients/Logo ${logo.id} Sand.svg" alt="${logo.name}" />
      <img class="logo-hover" src="./Clients/Logo ${logo.id} Blue.svg" alt="${logo.name} Hover" />
    </div>
  `).join('');
}
