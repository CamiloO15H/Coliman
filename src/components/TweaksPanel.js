/**
 * Componente TweaksPanel — Panel flotante de personalización visual en tiempo real
 */

const TWEAK_DEFAULTS = {
  palette: "navy",
  type: "archivo",
  accent: "blue-forward"
};

const PALETTES = {
  navy:    { sand: "#d3c6b7", blue: "#353f51", ink: "#212121", bg: "#f6f3ee", paper: "#fbf9f5", sand50: "#ede6dc", sand25: "#f6f1ea", blue80: "#4a576e", label: "Navy + Sand" },
  graphite:{ sand: "#cfc7bb", blue: "#2c2c2e", ink: "#1a1a1a", bg: "#f4f2ee", paper: "#fbf9f5", sand50: "#e8e1d5", sand25: "#f4efe7", blue80: "#454547", label: "Graphite" },
  steel:   { sand: "#c8c8c2", blue: "#2c3e50", ink: "#1c2530", bg: "#f1f2f0", paper: "#f9faf8", sand50: "#dfe0dc", sand25: "#ecede9", blue80: "#3b536b", label: "Steel" },
};

const TYPE_SETS = {
  archivo: { display: '"Archivo", "Helvetica Neue", Arial, sans-serif', body: '"Inter", "Helvetica Neue", Arial, sans-serif', label: "Archivo + Inter" },
  fraunces: { display: '"Fraunces", "Times New Roman", serif', body: '"Inter", "Helvetica Neue", Arial, sans-serif', label: "Fraunces + Inter" },
  neue: { display: '"Manrope", "Helvetica Neue", Arial, sans-serif', body: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif', label: "Manrope + Plex" },
};

const ACCENT_MODES = {
  "blue-forward": { label: "Blue forward" },
  "balanced":     { label: "Balanced" },
  "sand-led":     { label: "Sand led" },
};

let tweakState = { ...TWEAK_DEFAULTS };

export function initTweaks() {
  buildTweaks();
  applyAllTweaks();
  initTweaksProtocol();
}

function applyPalette(name) {
  const p = PALETTES[name];
  if (!p) return;
  const r = document.documentElement;
  r.style.setProperty('--c-sand', p.sand);
  r.style.setProperty('--c-blue', p.blue);
  r.style.setProperty('--c-ink', p.ink);
  r.style.setProperty('--c-bg', p.bg);
  r.style.setProperty('--c-paper', p.paper);
  r.style.setProperty('--c-sand-50', p.sand50);
  r.style.setProperty('--c-sand-25', p.sand25);
  r.style.setProperty('--c-blue-80', p.blue80);
}

function applyType(name) {
  const t = TYPE_SETS[name];
  if (!t) return;
  const r = document.documentElement;
  r.style.setProperty('--ff-display', t.display);
  r.style.setProperty('--ff-body', t.body);
}

function applyAccent(mode) {
  const body = document.body;
  body.classList.remove('accent-blue-forward', 'accent-balanced', 'accent-sand-led');
  body.classList.add('accent-' + mode);
}

function applyAllTweaks() {
  applyPalette(tweakState.palette);
  applyType(tweakState.type);
  applyAccent(tweakState.accent);
  syncTweakUI();
}

function syncTweakUI() {
  document.querySelectorAll('[data-tw-pal]').forEach(b => {
    b.classList.toggle('active', b.dataset.twPal === tweakState.palette);
  });
  document.querySelectorAll('[data-tw-type]').forEach(b => {
    b.classList.toggle('active', b.dataset.twType === tweakState.type);
  });
  document.querySelectorAll('[data-tw-accent]').forEach(b => {
    b.classList.toggle('active', b.dataset.twAccent === tweakState.accent);
  });
}

function setTweak(key, value) {
  tweakState = { ...tweakState, [key]: value };
  applyAllTweaks();
  try {
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*');
  } catch (_) {}
}

function buildTweaks() {
  const panel = document.querySelector("#tweaks");
  if (!panel) return;

  panel.innerHTML = `
    <div class="tw__head">
      <h4>Tweaks</h4>
      <button class="tw__close" aria-label="Close tweaks">✕</button>
    </div>
    <div class="tw__group">
      <span class="tw__label">Palette</span>
      <div class="tw__pals">
        ${Object.entries(PALETTES).map(([k, p]) => `
          <button class="tw__pal" data-tw-pal="${k}">
            <div class="swatches">
              <span class="sw" style="background:${p.blue}"></span>
              <span class="sw" style="background:${p.sand}"></span>
              <span class="sw" style="background:${p.ink}"></span>
            </div>
            <span class="pn">${p.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="tw__group">
      <span class="tw__label">Typography</span>
      <div class="tw__seg">
        ${Object.entries(TYPE_SETS).map(([k, t]) => `
          <button data-tw-type="${k}">${t.label.split(' + ')[0]}</button>
        `).join('')}
      </div>
    </div>
    <div class="tw__group">
      <span class="tw__label">Accent intensity</span>
      <div class="tw__seg">
        ${Object.entries(ACCENT_MODES).map(([k, a]) => `
          <button data-tw-accent="${k}">${a.label.split(' ')[0]}</button>
        `).join('')}
      </div>
    </div>
  `;

  panel.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.tw__close');
    if (closeBtn) {
      panel.classList.remove('is-open');
      try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (_) {}
      return;
    }
    const pal = e.target.closest('[data-tw-pal]');
    if (pal) return setTweak('palette', pal.dataset.twPal);
    const tp = e.target.closest('[data-tw-type]');
    if (tp) return setTweak('type', tp.dataset.twType);
    const ac = e.target.closest('[data-tw-accent]');
    if (ac) return setTweak('accent', ac.dataset.twAccent);
  });
}

function initTweaksProtocol() {
  window.addEventListener('message', (e) => {
    if (!e.data) return;
    if (e.data.type === '__activate_edit_mode') {
      const panel = document.querySelector("#tweaks");
      if (panel) panel.classList.add('is-open');
    } else if (e.data.type === '__deactivate_edit_mode') {
      const panel = document.querySelector("#tweaks");
      if (panel) panel.classList.remove('is-open');
    }
  });
  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (_) {}
}
