/**
 * Componente Services — Disciplinas de construcción y renderizado
 */

import { serviceBg } from '../placeholders/placeholders.js';

const SERVICE_ICONS = {
  framing: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
    <line x1="5" y1="3" x2="5" y2="25"/>
    <line x1="11" y1="3" x2="11" y2="25"/>
    <line x1="17" y1="3" x2="17" y2="25"/>
    <line x1="23" y1="3" x2="23" y2="25"/>
    <line x1="3" y1="10" x2="25" y2="10"/>
    <line x1="3" y1="18" x2="25" y2="18"/>
  </svg>`,
  acoustic: `<svg viewBox="0 0 28 28" fill="currentColor">
    <circle cx="6" cy="6" r="1.5"/><circle cx="14" cy="6" r="1.5"/><circle cx="22" cy="6" r="1.5"/>
    <circle cx="6" cy="14" r="1.5"/><circle cx="14" cy="14" r="1.5"/><circle cx="22" cy="14" r="1.5"/>
    <circle cx="6" cy="22" r="1.5"/><circle cx="14" cy="22" r="1.5"/><circle cx="22" cy="22" r="1.5"/>
  </svg>`,
  drywall: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
    <rect x="3.5" y="3.5" width="21" height="21"/>
    <line x1="3.5" y1="14" x2="24.5" y2="14"/>
    <line x1="14" y1="3.5" x2="14" y2="24.5"/>
    <line x1="3.5" y1="3.5" x2="14" y2="14"/>
  </svg>`,
  custom: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M3 8 Q 14 3, 25 8"/>
    <path d="M3 14 Q 14 9, 25 14"/>
    <path d="M3 20 Q 14 15, 25 20"/>
  </svg>`,
};

const SERVICES = [
  {
    icon: "framing",
    title: "Metal Framing",
    desc: "Light-gauge and structural cold-formed steel framing — load-bearing walls, soffits, shaft walls, and curtain-wall back-up engineered to spec.",
    tag: "Structural",
  },
  {
    icon: "acoustic",
    title: "Acoustic Ceilings",
    desc: "Suspended grid systems with mineral fiber, fiberglass, and tegular tile assemblies — calibrated for NRC, CAC and STC performance in institutional spaces.",
    tag: "Acoustic",
  },
  {
    icon: "drywall",
    title: "Drywall Finish",
    desc: "Tape, float, and Level 3–5 finish across high-volume institutional surfaces — including impact-resistant, abuse-resistant and fire-rated assemblies.",
    tag: "Finish",
  },
  {
    icon: "custom",
    title: "Custom Ceiling Systems",
    desc: "Engineered torsion-spring, curved baffle, and linear wood-look ceilings — custom-fabricated for healthcare, transit, and judicial environments.",
    tag: "Specialty",
  },
];

export function initServices() {
  const servicesGrid = document.querySelector("#services-grid");
  if (!servicesGrid) return;

  servicesGrid.innerHTML = SERVICES.map((s, i) => `
    <article class="service" data-idx="${i}">
      <div class="bg">${serviceBg(i)}</div>
      <div class="top">
        <span class="service__icon" aria-hidden="true">${SERVICE_ICONS[s.icon]}</span>
        <span class="service__tag">${s.tag}</span>
      </div>
      <div>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    </article>
  `).join('');
}
