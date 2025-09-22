document.addEventListener("DOMContentLoaded", () => {
  // Animaciones de scroll
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.classList.add("hidden"));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  secciones.forEach(sec => observer.observe(sec));

  // Animación al cargar el hero
  const titulo = document.querySelector(".titulo-3d");
  if (titulo) {
    titulo.style.opacity = 0;
    titulo.style.transform = "scale(0.8)";
    setTimeout(() => {
      titulo.style.transition = "all 1s ease";
      titulo.style.opacity = 1;
      titulo.style.transform = "scale(1)";
    }, 500);
  }

  // Nuevo: resaltar sección actual en la barra lateral mientras haces scroll
  const navLinks = document.querySelectorAll(".navbar a");
  const targets = ["#inicio", "#quienes", "#eventos", "#seguirnos"];
  const sectionsForObserver = targets.map(t => document.querySelector(t));

  // Observamos cada seccion por su id
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
      }
    });
  }, { rootMargin: "-40% 0px -60% 0px", threshold: 0.01 });

  sectionsForObserver.forEach(sec => {
    if (sec) io.observe(sec);
  });

  // --- Nuevo: manejo del side-nav (animación de izquierda a derecha) ---
  const sideNav = document.getElementById('sideNav');
  const openBtn = document.getElementById('openSideNav');

  function toggleSideNav() {
    if (!sideNav) return;
    sideNav.classList.toggle('open');
  }

  if (openBtn) {
    openBtn.addEventListener('click', toggleSideNav);
  }

  // Cerrar al hacer click en un enlace del side-nav
  if (sideNav) {
    sideNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        sideNav.classList.remove('open');
      }
    });
  }
});
