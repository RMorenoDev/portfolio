const form = document.getElementById("contact-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "ERROR! el envio del formulario aun no ha sido activado"
        );
      }
      alert("El mensaje ha sido enviado con éxito.");
      form.reset();
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Detectar cuando se hace scroll en la página
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const firstSection = document.querySelector("section:first-of-type");
  firstSection.classList.add("content");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Determinar si la sección está visible en la ventana del navegador
    if (window.pageYOffset > sectionTop - sectionHeight / 1.5) {
      section.classList.add("content");
    } else {
      if (section != firstSection) {
        section.classList.remove("content");
      }
    }
  });
});

// Añadir desplazamiento adicional al ancla
const enlaces = document.querySelectorAll(".navbar a");
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir comportamiento por defecto del enlace
    const destino = document.querySelector(enlace.getAttribute("href"));
    const posicion = destino.offsetTop;
    window.scrollTo({
      top: posicion,
    });
  });
});
