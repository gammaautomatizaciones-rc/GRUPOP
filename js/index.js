// ===== MENÚ HAMBURGUESA =====
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰";

  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  // Insertamos el botón en el navbar (sólo en mobile)
  navbar.insertBefore(menuToggle, navLinks);

  // Evento de toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
