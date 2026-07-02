/* SVG placeholders — striped blueprint style with mono labels */

export function stripedPlaceholder(label, opts = {}) {
  const {
    bg = "#d3c6b7",
    stripe = "#bfb19f",
    ink = "#353f51",
    rot = -22,
    sub = "",
  } = opts;
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
  <defs>
    <pattern id="p-${label.replace(/\W+/g,'')}" patternUnits="userSpaceOnUse" width="22" height="22" patternTransform="rotate(${rot})">
      <rect width="22" height="22" fill="${bg}"/>
      <line x1="0" y1="0" x2="0" y2="22" stroke="${stripe}" stroke-width="6"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#p-${label.replace(/\W+/g,'')})"/>
  <g font-family="JetBrains Mono, monospace" fill="${ink}" text-anchor="middle">
    <rect x="280" y="260" width="240" height="80" fill="${bg}" stroke="${ink}" stroke-width="1"/>
    <text x="400" y="295" font-size="14" letter-spacing="2">${label}</text>
    <text x="400" y="320" font-size="10" letter-spacing="1.5" opacity="0.55">${sub || 'PLACEHOLDER'}</text>
  </g>
</svg>`;
}

export function teamPlaceholder(initials, idx) {
  const tints = [
    { bg: "#d3c6b7", st: "#bfb19f" },
    { bg: "#c8bfb1", st: "#b3a896" },
    { bg: "#353f51", st: "#2b3445" },
    { bg: "#4a576e", st: "#3d4858" },
  ];
  const t = tints[idx % tints.length];
  const inkColor = idx >= 2 ? "#ede6dc" : "#353f51";
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
  <defs>
    <pattern id="tp-${idx}" patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(-22)">
      <rect width="14" height="14" fill="${t.bg}"/>
      <line x1="0" y1="0" x2="0" y2="14" stroke="${t.st}" stroke-width="4"/>
    </pattern>
  </defs>
  <rect width="400" height="500" fill="url(#tp-${idx})"/>
  <g font-family="JetBrains Mono, monospace" fill="${inkColor}" text-anchor="middle">
    <circle cx="200" cy="200" r="68" fill="${t.bg}" stroke="${inkColor}" stroke-width="1.5"/>
    <text x="200" y="210" font-size="36" letter-spacing="2" font-weight="500">${initials}</text>
    <text x="200" y="310" font-size="10" letter-spacing="2" opacity="0.65">PORTRAIT — PLACEHOLDER</text>
  </g>
</svg>`;
}

export function heroVideoPlaceholder() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3a4458"/>
      <stop offset="1" stop-color="#1a2030"/>
    </linearGradient>
    <pattern id="hp" patternUnits="userSpaceOnUse" width="60" height="60">
      <rect width="60" height="60" fill="url(#hg)"/>
      <path d="M0 0 L60 60 M-15 45 L15 75 M45 -15 L75 15" stroke="#4a576e" stroke-width="0.5" opacity="0.4"/>
    </pattern>
  </defs>
  <rect width="1920" height="1080" fill="url(#hp)"/>
  <!-- Architectural silhouette of steel framework -->
  <g stroke="#5a6a85" stroke-width="1.5" fill="none" opacity="0.55">
    <!-- Vertical columns -->
    <line x1="120" y1="1080" x2="120" y2="160"/>
    <line x1="360" y1="1080" x2="360" y2="120"/>
    <line x1="640" y1="1080" x2="640" y2="80"/>
    <line x1="920" y1="1080" x2="920" y2="60"/>
    <line x1="1200" y1="1080" x2="1200" y2="100"/>
    <line x1="1480" y1="1080" x2="1480" y2="140"/>
    <line x1="1760" y1="1080" x2="1760" y2="180"/>
    <!-- Horizontal beams -->
    <line x1="0" y1="200" x2="1920" y2="180"/>
    <line x1="0" y1="380" x2="1920" y2="360"/>
    <line x1="0" y1="560" x2="1920" y2="540"/>
    <line x1="0" y1="740" x2="1920" y2="720"/>
    <line x1="0" y1="920" x2="1920" y2="900"/>
    <!-- Diagonal bracing -->
    <line x1="120" y1="380" x2="360" y2="200"/>
    <line x1="360" y1="560" x2="640" y2="380"/>
    <line x1="640" y1="380" x2="920" y2="200"/>
    <line x1="920" y1="560" x2="1200" y2="380"/>
    <line x1="1200" y1="380" x2="1480" y2="200"/>
    <line x1="1480" y1="560" x2="1760" y2="380"/>
  </g>
  <!-- Crane silhouette -->
  <g stroke="#7a8aa5" stroke-width="2" fill="none" opacity="0.7">
    <line x1="1500" y1="1080" x2="1500" y2="40"/>
    <line x1="1500" y1="40" x2="1700" y2="40"/>
    <line x1="1500" y1="40" x2="1000" y2="120"/>
    <line x1="1500" y1="80" x2="1000" y2="120"/>
    <line x1="1500" y1="40" x2="1000" y2="80"/>
    <line x1="1100" y1="120" x2="1100" y2="180"/>
    <rect x="1085" y="180" width="30" height="20" fill="#7a8aa5"/>
  </g>
  <!-- Ground fog -->
  <rect width="1920" height="200" y="880" fill="url(#fog)" opacity="0.4"/>
  <defs>
    <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="transparent"/>
      <stop offset="1" stop-color="#1a2030"/>
    </linearGradient>
  </defs>
  <!-- Subtle ticker label -->
  <g font-family="JetBrains Mono, monospace" fill="#9aa8c0" opacity="0.45">
    <text x="60" y="1040" font-size="11" letter-spacing="2">REC ● HERO VIDEO PLACEHOLDER · DROP MP4 HERE</text>
  </g>
</svg>`;
}

export function serviceBg(idx) {
  const palettes = [
    { a: "#2a3142", b: "#4a576e", line: "#6b7a95" }, // metal framing
    { a: "#1f2533", b: "#3a4458", line: "#5a6a85" }, // acoustic
    { a: "#3a3328", b: "#5c5040", line: "#7a6b58" }, // drywall (sand-hued)
    { a: "#252a38", b: "#3a4458", line: "#5a6a85" }, // custom
  ];
  const p = palettes[idx];
  const motifs = [
    // Metal framing - vertical studs
    `<g stroke="${p.line}" stroke-width="1.2" opacity="0.45" fill="none">
      ${Array.from({length: 12}).map((_, i) => `<line x1="${60 + i*70}" y1="0" x2="${60 + i*70}" y2="600"/>`).join('')}
      <line x1="0" y1="150" x2="800" y2="150"/>
      <line x1="0" y1="450" x2="800" y2="450"/>
      <g stroke-width="0.6">
        ${Array.from({length: 12}).map((_, i) => `<rect x="${55 + i*70}" y="145" width="10" height="10" fill="none"/>`).join('')}
      </g>
    </g>`,
    // Acoustic ceiling - dot grid
    `<g fill="${p.line}" opacity="0.5">
      ${Array.from({length: 14}).map((_, r) => Array.from({length: 18}).map((_, c) => `<circle cx="${30 + c*44}" cy="${30 + r*44}" r="1.8"/>`).join('')).join('')}
    </g>
    <g stroke="${p.line}" stroke-width="0.6" opacity="0.3">
      ${Array.from({length: 18}).map((_, c) => `<line x1="${30 + c*44}" y1="0" x2="${30 + c*44}" y2="600"/>`).join('')}
      ${Array.from({length: 14}).map((_, r) => `<line x1="0" y1="${30 + r*44}" x2="800" y2="${30 + r*44}"/>`).join('')}
    </g>`,
    // Drywall - finished planes
    `<g opacity="0.5">
      <rect x="80" y="80" width="280" height="440" fill="none" stroke="${p.line}" stroke-width="1"/>
      <rect x="380" y="80" width="340" height="200" fill="none" stroke="${p.line}" stroke-width="1"/>
      <rect x="380" y="300" width="340" height="220" fill="none" stroke="${p.line}" stroke-width="1"/>
      <g stroke="${p.line}" stroke-width="0.4" stroke-dasharray="3 4">
        <line x1="220" y1="80" x2="220" y2="520"/>
        <line x1="550" y1="80" x2="550" y2="280"/>
        <line x1="550" y1="300" x2="550" y2="520"/>
      </g>
    </g>`,
    // Custom ceiling - radial/curved
    `<g stroke="${p.line}" stroke-width="0.8" fill="none" opacity="0.45">
      ${Array.from({length: 10}).map((_, i) => `<path d="M 0 ${100 + i*50} Q 400 ${50 + i*50} 800 ${100 + i*50}"/>`).join('')}
      ${Array.from({length: 8}).map((_, i) => `<line x1="${100 + i*86}" y1="0" x2="${100 + i*86}" y2="600" stroke-dasharray="2 6"/>`).join('')}
    </g>`,
  ];
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sg${idx}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${p.a}"/>
      <stop offset="1" stop-color="${p.b}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#sg${idx})"/>
  ${motifs[idx]}
</svg>`;
}

export function projectImg(idx) {
  const accents = ["#353f51", "#7a6b58", "#4a576e", "#5c5040"];
  const labels = [
    ["METRO COURTHOUSE", "ATLANTA, GA"],
    ["ST. AGNES HOSPITAL", "RALEIGH, NC"],
    ["MIDLAND TERMINAL B", "DALLAS, TX"],
    ["NORTHFIELD UNIV. SCI. HALL", "COLUMBUS, OH"],
  ];
  const a = accents[idx];
  const [l, sub] = labels[idx];
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="pg${idx}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e7ddcf"/>
      <stop offset="1" stop-color="#c8bfb1"/>
    </linearGradient>
    <pattern id="pp${idx}" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(-22)">
      <rect width="20" height="20" fill="url(#pg${idx})"/>
      <line x1="0" y1="0" x2="0" y2="20" stroke="${a}" stroke-width="0.8" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="url(#pp${idx})"/>
  <g font-family="JetBrains Mono, monospace" fill="${a}">
    <text x="40" y="44" font-size="11" letter-spacing="2" opacity="0.6">PROJECT 0${idx+1} · PHOTO PLACEHOLDER</text>
    <text x="40" y="460" font-size="22" letter-spacing="1" font-weight="500">${l}</text>
    <text x="40" y="482" font-size="11" letter-spacing="2" opacity="0.6">${sub}</text>
  </g>
  <g stroke="${a}" stroke-width="0.8" opacity="0.35" fill="none">
    <line x1="40" y1="80" x2="200" y2="80"/>
    <rect x="40" y="80" width="160" height="280" stroke-dasharray="3 5"/>
  </g>
</svg>`;
}

export function projectGalleryImg(idx, gi) {
  const accents = ["#353f51", "#7a6b58", "#4a576e", "#5c5040"];
  const a = accents[idx];
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
  <defs>
    <pattern id="gp${idx}${gi}" patternUnits="userSpaceOnUse" width="${14 + gi*4}" height="${14 + gi*4}" patternTransform="rotate(${-22 + gi*15})">
      <rect width="${14 + gi*4}" height="${14 + gi*4}" fill="#e7ddcf"/>
      <line x1="0" y1="0" x2="0" y2="${14 + gi*4}" stroke="${a}" stroke-width="1" opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#gp${idx}${gi})"/>
  <g font-family="JetBrains Mono, monospace" fill="${a}" opacity="0.7">
    <text x="40" y="560" font-size="11" letter-spacing="2">IMG 0${gi+1} / 04 · PLACEHOLDER</text>
  </g>
</svg>`;
}

export function clientLogo(idx) {
  // 8 different fictional client logos as SVG marks + wordmarks
  const logos = [
    // 0. Triangular A-mark
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
      <g fill="#353f51">
        <path d="M14 46 L26 14 L38 46 L33 46 L30 38 L22 38 L19 46 Z M24 32 L28 32 L26 25 Z"/>
        <text x="50" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="600" letter-spacing="-0.5">ASTRA</text>
        <text x="124" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="300" letter-spacing="-0.5">CORP</text>
      </g>
    </svg>`,
    // 1. Hex
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
      <g fill="#353f51">
        <path d="M26 14 L40 22 L40 38 L26 46 L12 38 L12 22 Z" fill="none" stroke="#353f51" stroke-width="2.5"/>
        <text x="52" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="600" letter-spacing="0">HEXFIELD</text>
      </g>
    </svg>`,
    // 2. Bar mark
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
      <g fill="#353f51">
        <rect x="12" y="18" width="6" height="24"/>
        <rect x="22" y="14" width="6" height="32"/>
        <rect x="32" y="22" width="6" height="20"/>
        <text x="48" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="700" letter-spacing="-0.5">MERIDIAN</text>
      </g>
    </svg>`,
    // 3. Circle inside circle
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
      <g fill="none" stroke="#353f51" stroke-width="2.5">
        <circle cx="26" cy="30" r="14"/>
        <circle cx="26" cy="30" r="6" fill="#353f51"/>
      </g>
      <text x="50" y="38" fill="#353f51" font-family="Archivo, sans-serif" font-size="22" font-weight="500" letter-spacing="2">NUCLEO</text>
    </svg>`,
    // 4. Slash mark
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
      <g fill="#353f51">
        <path d="M14 46 L34 14 L40 14 L20 46 Z"/>
        <text x="50" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="600" letter-spacing="-0.3">FORWARD</text>
        <text x="143" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="300" letter-spacing="-0.3">/CO</text>
      </g>
    </svg>`,
    // 5. Pill
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
      <g fill="#353f51">
        <rect x="10" y="22" width="32" height="16" rx="8"/>
        <text x="52" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="500" letter-spacing="0">CIVITAS GROUP</text>
      </g>
    </svg>`,
    // 6. Square outline
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
      <g fill="none" stroke="#353f51" stroke-width="2.5">
        <rect x="14" y="18" width="24" height="24"/>
        <line x1="14" y1="30" x2="38" y2="30"/>
      </g>
      <text x="48" y="38" fill="#353f51" font-family="Archivo, sans-serif" font-size="22" font-weight="600" letter-spacing="-0.3">NORTHGATE</text>
    </svg>`,
    // 7. Cross
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
      <g fill="#353f51">
        <rect x="22" y="14" width="8" height="32"/>
        <rect x="14" y="22" width="24" height="8"/>
        <text x="48" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="700" letter-spacing="-0.3">REDPINE</text>
        <text x="124" y="38" font-family="Archivo, sans-serif" font-size="22" font-weight="300" letter-spacing="-0.3">BUILD</text>
      </g>
    </svg>`,
  ];
  return logos[idx % logos.length];
}
