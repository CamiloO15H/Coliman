/**
 * Componente About & Team — Renderiza el equipo de trabajo y marcadores visuales
 */

import { stripedPlaceholder, teamPlaceholder } from '../placeholders/placeholders.js';

const TEAM = [
  { name: "Eduardo Gudino", role: "Founder & Principal", num: "01", initials: "EG" },
  { name: "Lucy Gutierrez", role: "CEO", num: "02", initials: "LG" },
  { name: "Andrea Betancourt", role: "Office Manager", num: "03", initials: "AB" },
  { name: "John Doe", role: "Field Superintendent", num: "04", initials: "JD" },
];

export function initAbout() {
  // 1. Render de imagen de historia principal
  const aboutMedia = document.querySelector("#about-media");
  if (aboutMedia) {
    aboutMedia.innerHTML = stripedPlaceholder("OUR STORY", { sub: "TEAM / SITE PHOTO" });
  }

  // 2. Render de imagen del equipo completo
  const teamGroupMedia = document.querySelector("#team-group-media");
  if (teamGroupMedia) {
    teamGroupMedia.innerHTML = stripedPlaceholder("GROUP PHOTO", { sub: "FULL TEAM — PANORAMIC" });
  }

  // 3. Render dinámico de tarjetas del equipo
  const teamGrid = document.querySelector("#team-grid");
  if (teamGrid) {
    teamGrid.innerHTML = TEAM.map((m, i) => `
      <article class="team-card">
        <div class="ph">${teamPlaceholder(m.initials, i)}</div>
        <div class="info">
          <span class="num">${m.num} / ${String(TEAM.length).padStart(2, '0')}</span>
          <span class="name">${m.name}</span>
          <span class="role">${m.role}</span>
        </div>
      </article>
    `).join('');
  }
}
