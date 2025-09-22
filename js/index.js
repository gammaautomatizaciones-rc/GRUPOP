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
