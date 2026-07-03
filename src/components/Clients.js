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
    <div class="client-logo" aria-label="${logo.name}" role="img">
      <img class="logo-default" src="./Clients/Logo ${logo.id} Sand.svg" alt="${logo.name}" />
      <img class="logo-hover" src="./Clients/Logo ${logo.id} Blue.svg" alt="${logo.name}" aria-hidden="true" />
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
