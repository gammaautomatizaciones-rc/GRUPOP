// Animación de aparición para la foto y los botones
document.addEventListener("DOMContentLoaded", () => {
  const foto = document.querySelector(".foto-banda img");
  const botones = document.querySelectorAll(".btn-red");

  function mostrarElementos() {
    const triggerBottom = window.innerHeight * 0.85;

    if (foto.getBoundingClientRect().top < triggerBottom) {
      foto.style.opacity = "1";
      foto.style.transform = "scale(1)";
    }

    botones.forEach((btn) => {
      const boxTop = btn.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        btn.style.opacity = "1";
        btn.style.transform = "scale(1)";
      }
    });
  }

  // Inicialización
  window.addEventListener("scroll", mostrarElementos);
  mostrarElementos();
});
