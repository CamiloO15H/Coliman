/**
 * Componente Clients — Carrusel infinito de logotipos de clientes con hover interactivo
 */

export function initClients() {
  const track = document.querySelector("#clients-track");
  if (!track) return;

  // Los logotipos oficiales de clientes
  const CLIENT_LOGOS = [
    { id: 1, name: "Kenpat", sand: "./Clients/Logo 1 Sand.svg", blue: "./Clients/Logo 1 Blue.svg" },
    { id: 2, name: "Acousti", sand: "./Clients/Logo 2 Sand.svg", blue: "./Clients/Logo 2 Blue.svg" },
    { id: 3, name: "LA Construction USA", sand: "./Clients/Logo 3 LA Construction Sand.svg", blue: "./Clients/Logo 3 LA Construction Blue.svg" },
    { id: 4, name: "SJS Drywall", sand: "./Clients/Logo 4 Sand.svg", blue: "./Clients/Logo 4 Blue.svg" }
  ];

  // Repetir los logos 3 veces por grupo (12 logos por grupo, 24 en total) para garantizar cobertura fluida en pantallas anchas
  const groupLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  const renderGroup = () => `
    <div class="clients__group" role="group">
      ${groupLogos.map(logo => `
        <div class="client-logo" aria-label="${logo.name}" role="img">
          <img class="logo-default" src="${logo.sand}" alt="${logo.name}" />
          <img class="logo-hover" src="${logo.blue}" alt="${logo.name}" aria-hidden="true" />
        </div>
      `).join('')}
    </div>
  `;

  // Renderizar 2 grupos idénticos para animación 0% a -50% perfecta en WebKit / Safari
  track.innerHTML = renderGroup() + renderGroup();

  // Touch/click toggle: activa la versión Blue en toque
  track.addEventListener('click', (e) => {
    const logo = e.target.closest('.client-logo');
    if (!logo) return;
    track.querySelectorAll('.client-logo').forEach(l => {
      if (l !== logo) l.classList.remove('is-active');
    });
    logo.classList.toggle('is-active');
  });
}

