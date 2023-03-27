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
