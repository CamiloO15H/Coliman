/**
 * Componente Projects — Grid de proyectos y modal interactivo de detalles
 */

import { projectImg, projectGalleryImg } from '../placeholders/placeholders.js';

const PROJECTS = [
  {
    title: "Metro Courthouse, Civic Phase II",
    type: "Judicial · 184,000 SF",
    loc: "ATLANTA, GA",
    where: "ATLANTA, GA · 2024",
    summary: "Cold-formed metal framing and Level-5 finish across courtrooms, secure corridors, and judicial chambers — integrated under blast and acoustic specifications.",
    scope: [
      "26,000 LF of 18ga structural studs",
      "Level 5 finish across 92,000 SF",
      "Acoustic-rated chamber assemblies",
      "Coordinated with 5 prime trades on a 14-month schedule",
    ],
    client: "Sutter & Park GC",
    duration: "14 months",
  },
  {
    title: "St. Agnes Regional Hospital",
    type: "Healthcare · 240,000 SF",
    loc: "RALEIGH, NC",
    where: "RALEIGH, NC · 2023",
    summary: "Phased ceiling and partition build-out across active patient wings — clean-room compliant assemblies and acoustically isolated imaging suites.",
    scope: [
      "Negative-pressure room assemblies",
      "Lead-lined imaging suite framing",
      "Acoustic tegular ceilings, 88,000 SF",
      "Night-shift sequencing in occupied wings",
    ],
    client: "Bauer Construction",
    duration: "22 months",
  },
  {
    title: "Midland Intl. Terminal B",
    type: "Aviation · 410,000 SF",
    loc: "DALLAS, TX",
    where: "DALLAS, TX · 2023",
    summary: "Concourse-wide custom linear wood-look ceiling system and steel framing for retail bays — fabricated and installed under live-airport conditions.",
    scope: [
      "12,400 LF custom linear ceiling",
      "Retail bay framing, 64 units",
      "BIM coordination with MEP/structural",
      "Phased turnover across 4 zones",
    ],
    client: "Crestline Aviation Builders",
    duration: "18 months",
  },
  {
    title: "Northfield University, Science Hall",
    type: "Higher Education · 96,000 SF",
    loc: "COLUMBUS, OH",
    where: "COLUMBUS, OH · 2022",
    summary: "Lab-rated assemblies and acoustic ceiling systems for teaching labs, lecture halls, and faculty office floors — coordinated with fume-hood and AV trades.",
    scope: [
      "Chemistry lab demising walls",
      "Lecture hall acoustic ceilings, NRC 0.85",
      "Faculty office finish package",
      "Punch & turnover under 6-week window",
    ],
    client: "Halcyon GC",
    duration: "11 months",
  },
];

export function initProjects() {
  const projectsGrid = document.querySelector("#projects-grid");
  if (!projectsGrid) return;

  // 1. Renderizar tarjetas de proyectos
  projectsGrid.innerHTML = PROJECTS.map((p, i) => `
    <button class="project" data-idx="${i}" aria-label="View ${p.title}">
      <div class="img">${projectImg(i)}</div>
      <div class="meta">
        <h4>${p.title}</h4>
        <span class="where">${p.where}</span>
      </div>
      <div class="desc">${p.summary}</div>
    </button>
  `).join('');

  // 2. Escuchar clicks para abrir el modal
  projectsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.project');
    if (btn) {
      openModal(parseInt(btn.dataset.idx, 10));
    }
  });

  // 3. Vincular eventos de cierre del modal
  const modal = document.querySelector("#project-modal");
  if (modal) {
    const closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'project-modal') {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }
}

function openModal(idx) {
  const p = PROJECTS[idx];
  const modal = document.querySelector("#project-modal");
  if (!modal) return;

  modal.querySelector("#mp-title").textContent = p.title;
  modal.querySelector("#mp-type").textContent = p.type;
  modal.querySelector("#mp-summary").textContent = p.summary;
  modal.querySelector("#mp-loc").textContent = p.loc;
  modal.querySelector("#mp-client").textContent = p.client;
  modal.querySelector("#mp-duration").textContent = p.duration;
  modal.querySelector("#mp-scope").innerHTML = p.scope.map(s => `<li>${s}</li>`).join('');

  const heroContainer = modal.querySelector("#mp-hero");
  heroContainer.innerHTML = projectImg(idx);

  const thumbs = modal.querySelector("#mp-thumbs");
  thumbs.innerHTML = Array.from({ length: 4 }, (_, gi) => `
    <button data-gi="${gi}" class="${gi === 0 ? 'active' : ''}">
      ${projectGalleryImg(idx, gi)}
    </button>
  `).join('');

  thumbs.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      const gi = parseInt(b.dataset.gi, 10);
      thumbs.querySelectorAll('button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      heroContainer.innerHTML = gi === 0
        ? projectImg(idx)
        : projectGalleryImg(idx, gi);
    });
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.querySelector("#project-modal");
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
