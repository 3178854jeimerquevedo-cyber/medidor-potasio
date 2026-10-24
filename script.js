const CANAL_THINGSPEAK = "3548549";

const URL_THINGSPEAK =
  `https://api.thingspeak.com/channels/${CANAL_THINGSPEAK}/feeds/last.json`;

const escalaPH = [
  { ph: 1, color: "#8B0000", nombre: "Rojo oscuro" },
  { ph: 2, color: "#DC143C", nombre: "Rojo" },
  { ph: 3, color: "#FF4500", nombre: "Rojo anaranjado" },
  { ph: 4, color: "#FF8C00", nombre: "Naranja" },
  { ph: 5, color: "#FFBE00", nombre: "Amarillo anaranjado" },
  { ph: 6, color: "#FFE600", nombre: "Amarillo" },
  { ph: 7, color: "#00B400", nombre: "Verde" },
  { ph: 8, color: "#00A064", nombre: "Verde azulado" },
  { ph: 9, color: "#0096B4", nombre: "Azul verdoso" },
  { ph: 10, color: "#0064DC", nombre: "Azul" },
  { ph: 11, color: "#0000B4", nombre: "Azul oscuro" },
  { ph: 12, color: "#6400B4", nombre: "Violeta" },
  { ph: 13, color: "#5A0078", nombre: "Morado oscuro" },
  { ph: 14, color: "#46005A", nombre: "Púrpura oscuro" }
];

async function nuevaMedicion() {
  const rojoEl = document.getElementById("rojo");
  const verdeEl = document.getElementById("verde");
  const azulEl = document.getElementById("azul");
  const estadoEl = document.getElementById("estado");
  const phEl = document.getElementById("ph");
  const nivelEl = document.getElementById("nivel");
  const tipoEl = document.getElementById("tipo-ph");

  try {
    estadoEl.textContent = "Consultando ThingSpeak...";

    const respuesta = await fetch(URL_THINGSPEAK, {
      cache: "no-store"
    });

    if (!respuesta.ok) {
      throw new Error("No se pudo consultar ThingSpeak");
    }

    const datos = await respuesta.json();

    const rojo = Number(datos.field1);
    const verde = Number(datos.field2);
    const azul = Number(datos.field3);

    if (
      datos.field1 == null ||
      datos.field2 == null ||
      datos.field3 == null ||
      ![rojo, verde, azul].every(Number.isFinite)
    ) {
      throw new Error("Lecturas de color no válidas");
    }

    rojoEl.textContent = rojo.toLocaleString("es-CO");
    verdeEl.textContent = verde.toLocaleString("es-CO");
    azulEl.textContent = azul.toLocaleString("es-CO");

    // DEMOSTRACIÓN: elegir un pH de ejemplo.
    // Esto NO calcula el pH real a partir del sensor.
    const indice = Math.abs(Math.round(rojo + verde + azul)) %
      escalaPH.length;
    const referencia = escalaPH[indice];

    phEl.textContent = referencia.ph;
    nivelEl.textContent = referencia.nombre;
    nivelEl.style.color = referencia.color;
    nivelEl.style.fontWeight = "bold";

    tipoEl.textContent =
      "PH de demostración; falta calibrar el sensor.";

    phEl.style.color = referencia.color;
    estadoEl.textContent = "Lecturas recibidas correctamente.";

  } catch (error) {
    estadoEl.textContent = "No se pudieron actualizar las lecturas.";
    phEl.textContent = "--";
    nivelEl.textContent = "Sin resultado";
    tipoEl.textContent = "Comprueba la conexión con ThingSpeak.";
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  nuevaMedicion();
  setInterval(nuevaMedicion, 15000);
});
