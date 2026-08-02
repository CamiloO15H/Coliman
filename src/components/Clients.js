/**
 * Componente Clients — Carrusel infinito de logotipos de clientes
 * Usa requestAnimationFrame para evitar bugs de Safari con CSS animations + mask-image
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

  // Repetir logos suficientes veces para cubrir el ancho de pantalla + margen
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

  // Renderizar 2 grupos idénticos — cuando el primero se desplaza fuera, se recicla
  track.innerHTML = renderGroup() + renderGroup();

  // ── requestAnimationFrame marquee ──
  const speed = 0.6; // px por frame (~36px/seg a 60fps)
  let offset = 0;
  let paused = false;
  let rafId = null;

  function getGroupWidth() {
    const group = track.querySelector('.clients__group');
    return group ? group.offsetWidth : 0;
  }

  function tick() {
    if (!paused) {
      const groupW = getGroupWidth();
      if (groupW > 0) {
        offset += speed;
        if (offset >= groupW) {
          offset -= groupW;
        }
        track.style.transform = `translateX(${-offset}px)`;
      }
    }
    rafId = requestAnimationFrame(tick);
  }

  // Iniciar animación
  rafId = requestAnimationFrame(tick);

  // Pausar en hover (solo dispositivos con puntero fino)
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (hasFinePointer) {
    track.addEventListener('mouseenter', () => { paused = true; });
    track.addEventListener('mouseleave', () => { paused = false; });
  }

  // Touch/click toggle: activa la versión Blue en toque
  track.addEventListener('click', (e) => {
    const logo = e.target.closest('.client-logo');
    if (!logo) return;
    track.querySelectorAll('.client-logo').forEach(l => {
      if (l !== logo) l.classList.remove('is-active');
    });
    logo.classList.toggle('is-active');
  });

  // Pausar cuando la pestaña no es visible para ahorrar recursos
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      paused = true;
    } else {
      paused = false;
    }
  });
}
