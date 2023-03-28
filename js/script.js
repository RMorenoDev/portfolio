// Envio de formulario mediante EmailJS
const btn = document.getElementById("button");
const response = document.getElementById("response");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "default_service";
  const templateID = "template_9mfk20h";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      response.innerText = "Enviado con exito!";
    },
    (err) => {
      response.innerText = "Error al enviar!";
      console.log(JSON.stringify(err));
    }
  );
});

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

// // Añadir desplazamiento adicional al ancla
// const enlaces = document.querySelectorAll(".navbar a");
// enlaces.forEach((enlace) => {
//   enlace.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevenir comportamiento por defecto del enlace
//     const destino = document.querySelector(enlace.getAttribute("href"));
//     const posicion = destino.offsetTop;
//     window.scrollTo({
//       top: posicion,
//     });
//   });
// });
