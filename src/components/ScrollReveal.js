/**
 * Componente ScrollReveal — Animaciones de desvanecimiento y entrada al hacer scroll
 */

export function initReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Elementos individuales y grupos para revelar secuencialmente
  const singles = [
    '.section-head .meta', '.section-head > div:last-child',
    '.about__media', '.about__col',
    '.team-head', '.team-group',
    '.clients__top', '.clients__track-wrap',
    '.contact__map', '.contact__body',
  ];
  
  const groups = [
    ['#team-grid', '.team-card'],
    ['#services-grid', '.service'],
    ['#projects-grid', '.project'],
  ];

  const targets = [];
  
  // Agregar elementos únicos a la lista
  singles.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => targets.push(el));
  });
  
  // Agregar elementos de rejillas con un retraso escalonado (stagger)
  groups.forEach(([wrap, child]) => {
    const container = document.querySelector(wrap);
    if (!container) return;
    
    container.querySelectorAll(child).forEach((el, i) => {
      el.style.setProperty('--reveal-delay', (i % 4) * 70 + 'ms');
      targets.push(el);
    });
  });

  // Si se prefiere movimiento reducido o no existe IntersectionObserver
  if (prefersReduced || !('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('reveal', 'is-revealed'));
    return;
  }

  // Marcar los elementos listos para revelar
  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target); // Dejar de observar una vez revelado
      }
    });
  }, { 
    threshold: 0.12, 
    rootMargin: '0px 0px -8% 0px' 
  });

  targets.forEach(el => io.observe(el));
}
