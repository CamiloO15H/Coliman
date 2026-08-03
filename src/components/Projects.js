/**
 * Componente Projects — Grid de proyectos y modal interactivo de detalles
 */

import { projectImg, projectGalleryImg } from '../placeholders/placeholders.js';

const PROJECTS = [
  {
    title: "Pasco County Jail Project",
    type: "Correctional · Institutional",
    loc: "PASCO COUNTY, FL",
    where: "PASCO COUNTY, FL",
    summary: "Metal framing, drywall installation and finish, and high-performance acoustic ceiling systems. Completed Phase 1, with Phase 2 currently ongoing.",
    scope: [
      "Metal stud framing",
      "Drywall installation and finish",
      "Acoustic ceiling assemblies",
      "Completed Phase 1; Phase 2 currently ongoing",
    ],
    client: "Kenpat",
    duration: "Phase 1 Completed / Phase 2 Ongoing",
  },
  {
    title: "Brandon Hotel",
    type: "Hospitality · Commercial",
    loc: "BRANDON, FL",
    where: "BRANDON, FL",
    summary: "Complete metal framing, drywall installation, high-durability drywall finish, and acoustic ceilings delivered in 8 months.",
    scope: [
      "Metal framing",
      "Drywall installation",
      "Drywall finish",
      "Acoustic ceilings",
    ],
    client: "Kenpat",
    duration: "8 Months",
  },
  {
    title: "Tampa Airport",
    type: "Aviation · Terminal Expansion",
    loc: "TAMPA, FL",
    where: "TAMPA, FL",
    summary: "Comprehensive scope including metal framing, drywall, drywall finish, acoustic ceilings, and specialized ceiling systems across terminals and office facilities.",
    scope: [
      "Metal framing, drywall & drywall finish",
      "Acoustic ceilings & special ceilings",
      "Completed Terminal A&E in one year",
      "Completed A&E Terminal Offices",
      "Currently adding new Airside D Terminal",
    ],
    client: "Kenpat",
    duration: "Ongoing (Airside D expansion)",
  },
  {
    title: "Court House",
    type: "Judicial · Institutional",
    loc: "ST. PETERSBURG, FL",
    where: "ST. PETERSBURG, FL",
    summary: "Precision metal framing, high-end drywall hanging and finish, and acoustic ceiling assemblies for judicial courtrooms and facility spaces.",
    scope: [
      "Metal framing",
      "Drywall installation",
      "Drywall finish",
      "Acoustic ceilings",
    ],
    client: "Kenpat",
    duration: "Completed",
  },
  {
    title: "Bayside Sarasota",
    type: "Residential · Multi-Family",
    loc: "SARASOTA, FL",
    where: "SARASOTA, FL",
    summary: "Ongoing multi-family residential development featuring structural metal framing, drywall installation, drywall finish, and acoustic ceilings.",
    scope: [
      "Metal framing",
      "Drywall installation",
      "Drywall finish",
      "Acoustic ceilings",
      "Currently ongoing apartment building construction",
    ],
    client: "SJS Drywall & Texture",
    duration: "Ongoing",
  },
];

export function initProjects() {
  const projectsGrid = document.querySelector("#projects-grid");
  if (!projectsGrid) return;

  // 1. Renderizar tarjetas de proyectos
  projectsGrid.innerHTML = PROJECTS.map((p, i) => `
    <button class="project" data-idx="${i}" aria-label="View ${p.title}">
      <div class="img">
        <img src="./Images/Project ${i + 1}.webp" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='data:image/svg+xml;charset=utf-8,${encodeURIComponent(projectImg(i))}';" />
      </div>
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
  heroContainer.innerHTML = `<img src="./Images/Project ${idx + 1}.webp" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.onerror=null; this.src='data:image/svg+xml;charset=utf-8,${encodeURIComponent(projectImg(idx))}';" />`;

  const thumbs = modal.querySelector("#mp-thumbs");
  if (thumbs) {
    thumbs.style.display = ''; // Restore thumbnails visibility
    thumbs.innerHTML = Array.from({ length: 4 }, (_, gi) => `
      <button data-gi="${gi}" class="${gi === 0 ? 'active' : ''}">
        ${gi === 0
          ? `<img src="./Images/Project ${idx + 1}.webp" alt="${p.title} thumbnail" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.onerror=null; this.src='data:image/svg+xml;charset=utf-8,${encodeURIComponent(projectImg(idx))}';" />`
          : projectGalleryImg(idx, gi)
        }
      </button>
    `).join('');

    thumbs.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        const gi = parseInt(b.dataset.gi, 10);
        thumbs.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        heroContainer.innerHTML = gi === 0
          ? `<img src="./Images/Project ${idx + 1}.webp" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.onerror=null; this.src='data:image/svg+xml;charset=utf-8,${encodeURIComponent(projectImg(idx))}';" />`
          : projectGalleryImg(idx, gi);
      });
    });
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus trap: keep Tab/Shift+Tab inside the modal for accessibility
  const focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  // Set initial focus on the close button
  if (first) first.focus();

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }
  modal._trapFocus = trapFocus;
  modal.addEventListener('keydown', trapFocus);
}

function closeModal() {
  const modal = document.querySelector("#project-modal");
  if (!modal) return;
  // Remove focus trap listener before closing
  if (modal._trapFocus) {
    modal.removeEventListener('keydown', modal._trapFocus);
    modal._trapFocus = null;
  }
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
