const CANAL_THINGSPEAK = "3548549";

const URL_THINGSPEAK =
  `https://api.thingspeak.com/channels/${CANAL_THINGSPEAK}/feeds/last.json`;

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
      throw new Error("Error al consultar ThingSpeak");
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
      throw new Error("Los valores RGB no son válidos");
    }

    rojoEl.textContent = rojo.toLocaleString("es-CO");
    verdeEl.textContent = verde.toLocaleString("es-CO");
    azulEl.textContent = azul.toLocaleString("es-CO");

    // No mostrar un pH inventado.
    // Primero necesitamos calibrar con referencias reales.
    phEl.textContent = "--";
    nivelEl.textContent = "pH todavía no disponible";
    tipoEl.textContent =
      "Sensor conectado; falta calibrar los colores con tiras de pH.";

    estadoEl.textContent = "Lecturas recibidas correctamente.";

  } catch (error) {
    estadoEl.textContent =
      "No se pudieron actualizar las lecturas.";
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
