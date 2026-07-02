/**
 * Archivo Madre (Main Controller) — Punto de entrada del proyecto
 * Orquesta la carga de estilos CSS y la inicialización de módulos.
 */

// 1. Importación de Estilos de Diseño y Estructura
import './core/colors_and_type.css';
import './core/styles.css';

// 2. Importación de Componentes de Interacción
import { initNav } from './components/Nav.js';
import { initHero } from './components/Hero.js';
import { initAbout } from './components/About.js';
import { initServices } from './components/Services.js';
import { initProjects } from './components/Projects.js';
import { initClients } from './components/Clients.js';
import { initTweaks } from './components/TweaksPanel.js';
import { initReveal } from './components/ScrollReveal.js';

// 3. Inicialización controlada de la Aplicación
function initializeApp() {
  initHero();
  initAbout();
  initServices();
  initProjects();
  initClients();
  initTweaks();
  initNav();
  
  // Registrar las animaciones de scroll reveal al final para evitar saltos visuales
  initReveal();
}

// Buenas prácticas: Manejar si el script carga asíncronamente o después de DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
