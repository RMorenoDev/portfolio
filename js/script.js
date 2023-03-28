// Detectar cuando se hace scroll en la página

const firstSection = document.querySelector("section:first-of-type");
firstSection.style.opacity = 1;

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Determinar si la sección está visible en la ventana del navegador
    if (window.pageYOffset > sectionTop - sectionHeight / 1.5) {
      section.style.opacity = 1;
    }
  });
});
