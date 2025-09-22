// ===== ANIMACIÓN DE INTEGRANTES AL SCROLLEAR =====
document.addEventListener("DOMContentLoaded", () => {
  const integrantes = document.querySelectorAll(".integrante");

  function mostrarIntegrantes() {
    const triggerBottom = window.innerHeight * 0.85;
    integrantes.forEach((integrante) => {
      const boxTop = integrante.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        integrante.style.opacity = "1";
        integrante.style.transform = "translateY(0)";
        integrante.style.transition = "all 0.8s ease-out";
      }
    });
  }

  window.addEventListener("scroll", mostrarIntegrantes);
  mostrarIntegrantes(); // ejecutar al cargar
});

// ===== ANIMACIÓN BOTÓN DE CONTACTO =====
document.addEventListener("DOMContentLoaded", () => {
  const contacto = document.querySelector(".contacto-flotante");
  if (contacto) {
    setInterval(() => {
      contacto.style.transform = "scale(1.1)";
      setTimeout(() => {
        contacto.style.transform = "scale(1)";
      }, 300);
    }, 5000);
  }
});
