// Animación de aparición del video al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".evento video");

  function mostrarVideos() {
    const triggerBottom = window.innerHeight * 0.85;
    videos.forEach((video) => {
      const boxTop = video.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        video.style.opacity = "1";
        video.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", mostrarVideos);
  mostrarVideos(); // ejecutar en carga
});
