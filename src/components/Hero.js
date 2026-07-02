/**
 * Componente Hero — Animación de estadísticas y renderizado del background
 */

import { heroVideoPlaceholder } from '../placeholders/placeholders.js';

export function initHero() {
  const heroMedia = document.querySelector("#hero-media");
  if (heroMedia) {
    heroMedia.innerHTML = heroVideoPlaceholder();
  }

  // Ejecutar animación de contador de estadísticas
  setTimeout(initStatCount, 500);
}

function initStatCount() {
  const els = document.querySelectorAll('.hero__stats .n-val[data-count]');
  if (!els.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // Si prefiere movimiento reducido, mostrar valores finales de inmediato sin animación
    els.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      if (!isNaN(target)) {
        el.textContent = target.toLocaleString('en-US');
      }
    });
    return;
  }

  els.forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;

    const duration = 900;
    const start = performance.now();
    
    // Ecuación de suavizado easeOutCubic
    const ease = t => 1 - Math.pow(1 - t, 3);
    el.textContent = '0';

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(ease(p) * target).toLocaleString('en-US');
      
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString('en-US');
      }
    }
    requestAnimationFrame(tick);
  });
}
