import express from 'express';

const app = express();
const PORT = 3000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            margin: 0;
            transition: all 0.3s ease;
        }
        .container{
            text-align: center;
            padding: 150px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            background-color: rgba(255, 255, 255, 0.1);
        }
        input {
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ccc;
            width: 250px;
        }
        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            border: none;
            background-color: #007bff;
            color: white;
            transition: background 0.2s;
        }
        button:hover {
            background-color: #0056b3;
        }
        #resultado {
            margin-top: 20px;
            padding: 15px;
            min-height: 20px;
            border-radius: 8px;
            font-weight: bold;
            word-wrap: break-word;
            border: 1px dashed #ccc;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Caja de texto</h1>
        <input type="text" id="cajaTexto">
        <br>
        <div id="resultado">Esperando mensaje</div>
        <button id="cambiarColores">Cambiar colores</button>
    </div>
    <script>
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
      displayResultado.innerText = "Texto: " + mensaje;
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

    </script>
</body>
</html>`;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
