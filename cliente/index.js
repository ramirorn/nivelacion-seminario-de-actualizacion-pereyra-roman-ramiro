const cajaTexto = document.getElementById("cajaTexto");
const btnColores = document.getElementById("cambiarColores");
const cuerpo = document.body;
const displayResultado = document.getElementById("resultado");
let estadoColor = 0;

cajaTexto.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const mensaje = cajaTexto.value;
    if (mensaje.trim() !== "") {
      alert("Texto ingresado: " + mensaje);
      displayResultado.innerText = `Texto: ${mensaje}`;
    } else {
      alert("Por favor, escribe algo antes de presionar Enter.");
    }
  }
});

btnColores.addEventListener("click", () => {
  estadoColor = (estadoColor + 1) % 3;

  switch (estadoColor) {
    case 0:
      cuerpo.style.backgroundColor = "#ffffff";
      cuerpo.style.color = "#000000";
      displayResultado.style.borderColor = "#000";
      break;
    case 1:
      cuerpo.style.backgroundColor = "#000000";
      cuerpo.style.color = "#ffffff";
      displayResultado.style.borderColor = "#fff";
      break;
    case 2:
      cuerpo.style.backgroundColor = "#87CEEB";
      cuerpo.style.color = "#FF0000";
      displayResultado.style.borderColor = "#FF0000";
      break;
  }
});
