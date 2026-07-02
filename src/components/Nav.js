/**
 * Componente Nav — Gestión de barra de navegación, menú móvil y scroll suave
 */

export function initNav() {
  const nav = document.querySelector("#nav");
  if (!nav) return;

  // 1. Efecto Scroll Fijo (Añadir clase cuando se desliza)
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Corrida inicial en caso de refrescar a mitad de página

  // 2. Comportamiento de Scroll Suave para Enlaces de Navegación (#seccion)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      
      const id = href.slice(1);
      const targetEl = document.getElementById(id);
      
      if (targetEl) {
        e.preventDefault();
        
        // Cerrar menú móvil si está abierto
        const navLinks = document.querySelector(".nav-links");
        if (navLinks && navLinks.classList.contains("is-open")) {
          navLinks.classList.remove("is-open");
        }
        
        window.scrollTo({
          top: targetEl.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Menú Móvil Hamburger (Mejora de accesibilidad y experiencia)
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      
      // Bloquear scroll del body si el menú está abierto en móvil
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }
}
