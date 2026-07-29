/**
 * Componente Clients — Carrusel infinito de logotipos de clientes con hover interactivo
 */

export function initClients() {
  const track = document.querySelector("#clients-track");
  if (!track) return;

  // Los logotipos oficiales de clientes — actualizado con rutas directas sin caché
  const CLIENT_LOGOS = [
    { id: 1, name: "Kenpat", sand: "./Clients/Logo 1 Sand.svg", blue: "./Clients/Logo 1 Blue.svg" },
    { id: 2, name: "Acousti", sand: "./Clients/Logo 2 Sand.svg", blue: "./Clients/Logo 2 Blue.svg" },
    { id: 3, name: "LA Construction USA", sand: "./Clients/Logo 3 LA Construction Sand.svg", blue: "./Clients/Logo 3 LA Construction Blue.svg" },
    { id: 4, name: "SJS Drywall", sand: "./Clients/Logo 4 Sand.svg", blue: "./Clients/Logo 4 Blue.svg" }
  ];

  // Repetir los logos 4 veces para tener 16 elementos y lograr un scroll infinito continuo y fluido
  const list = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  track.innerHTML = list.map(logo => `
    <div class="client-logo" aria-label="${logo.name}" role="img">
      <img class="logo-default" src="${logo.sand}" alt="${logo.name}" />
      <img class="logo-hover" src="${logo.blue}" alt="${logo.name}" aria-hidden="true" />
    </div>
  `).join('');

  // Touch/click toggle: activates the Blue version on tap (since :hover doesn't work on touch)
  track.addEventListener('click', (e) => {
    const logo = e.target.closest('.client-logo');
    if (!logo) return;
    // Deactivate all others, toggle the clicked one
    track.querySelectorAll('.client-logo').forEach(l => {
      if (l !== logo) l.classList.remove('is-active');
    });
    logo.classList.toggle('is-active');
  });
}
