/**
 * Componente Projects — Grid de proyectos y modal interactivo de detalles
 */

import { projectImg, projectGalleryImg } from '../placeholders/placeholders.js';

const PROJECTS = [
  {
    title: "Tampa International Airport",
    type: "Aviation · 380,000 SF",
    loc: "TAMPA, FL",
    where: "TAMPA, FL · 20XX",
    summary: "Concourse-wide custom linear metal ceiling system, acoustic baffles, and heavy-gauge structural steel framing for the new airport terminal expansion.",
    scope: [
      "12,400 LF of custom linear ceiling framing",
      "Drywall installations for 64 boarding gates",
      "BIM coordination with HVAC and baggage systems",
      "Phased terminal turnover under live flight operations",
    ],
    client: "Tampa Airport Authority / Turner GC",
    duration: "18 months",
  },
  {
    title: "Saint Petersburg Courthouse",
    type: "Judicial · 145,000 SF",
    loc: "ST. PETERSBURG, FL",
    where: "ST. PETERSBURG, FL · 20XX",
    summary: "Complete load-bearing metal framing and high-performance acoustic ceiling systems for courtrooms, secure detention corridors, and judicial chambers.",
    scope: [
      "26,000 LF of 18ga structural steel studs",
      "Level 5 high-end drywall finish across 92,000 SF",
      "Acoustic-rated courtroom chamber assemblies",
      "Coordinated with city safety and blast-resistant specs",
    ],
    client: "City of St. Petersburg / Skanska",
    duration: "14 months",
  },
  {
    title: "Pasco County High School",
    type: "Educational · 210,000 SF",
    loc: "DADE CITY, FL",
    where: "DADE CITY, FL · 20XX",
    summary: "Metal framing, sound isolation, and high-impact drywall finishes across classrooms, common areas, auditorium, and athletic facilities.",
    scope: [
      "Heavy-duty classroom demising walls",
      "Acoustic ceilings and wall panels for school auditorium",
      "High-impact drywall boards in corridors and gymnasiums",
      "Fast-track summer delivery ahead of the school year",
    ],
    client: "Pasco County School Board",
    duration: "12 months",
  },
  {
    title: "Women’s Center",
    type: "Healthcare · 75,000 SF",
    loc: "APOPKA, FL",
    where: "APOPKA, FL · 20XX",
    summary: "Clean-room drywall partitioning, specialty infection-control ceilings, and lead-shielded imaging suite framing for new maternity and diagnostic wings.",
    scope: [
      "Specialty clean-room ceilings and partition systems",
      "Lead-lined drywall framing for mammography suites",
      "Sound transmission class (STC) 55 exam room walls",
      "Night-shift construction sequence inside active campus",
    ],
    client: "Apopka Medical Partners / Gilbane",
    duration: "10 months",
  },
];

export function initProjects() {
  const projectsGrid = document.querySelector("#projects-grid");
  if (!projectsGrid) return;

  // 1. Renderizar tarjetas de proyectos
  projectsGrid.innerHTML = PROJECTS.map((p, i) => `
    <button class="project" data-idx="${i}" aria-label="View ${p.title}">
      <div class="img">
        <img src="./Images/Project ${i + 1}.webp" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy" decoding="async" />
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
  heroContainer.innerHTML = `<img src="./Images/Project ${idx + 1}.webp" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`;

  const thumbs = modal.querySelector("#mp-thumbs");
  if (thumbs) {
    thumbs.style.display = ''; // Restore thumbnails visibility
    thumbs.innerHTML = Array.from({ length: 4 }, (_, gi) => `
      <button data-gi="${gi}" class="${gi === 0 ? 'active' : ''}">
        ${gi === 0
          ? `<img src="./Images/Project ${idx + 1}.webp" alt="${p.title} thumbnail" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`
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
          ? `<img src="./Images/Project ${idx + 1}.webp" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`
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
