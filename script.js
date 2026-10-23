const CANAL_THINGSPEAK = "3548549";

const URL_THINGSPEAK =
    `https://api.thingspeak.com/channels/${CANAL_THINGSPEAK}/feeds/last.json`;

async function nuevaMedicion() {
    const elementoRojo = document.getElementById("rojo");
    const elementoVerde = document.getElementById("verde");
    const elementoAzul = document.getElementById("azul");
    const estado = document.getElementById("estado");

    if (!elementoRojo || !elementoVerde ||
        !elementoAzul || !estado) {
        console.error("No se encontraron los elementos de color.");
        return;
    }

    estado.textContent = "Consultando ThingSpeak...";

    try {
        const respuesta = await fetch(URL_THINGSPEAK, {
            cache: "no-store"
        });

        if (!respuesta.ok) {
            throw new Error("No se pudieron consultar los datos.");
        }

        const datos = await respuesta.json();

        if (datos.field1 == null ||
            datos.field2 == null ||
            datos.field3 == null) {
            throw new Error("Faltan datos de color en ThingSpeak.");
        }

        const rojo = Number(datos.field1);
        const verde = Number(datos.field2);
        const azul = Number(datos.field3);

        if (![rojo, verde, azul].every(Number.isFinite)) {
            throw new Error("Los datos recibidos no son válidos.");
        }

        elementoRojo.textContent = rojo.toLocaleString("es-CO");
        elementoVerde.textContent = verde.toLocaleString("es-CO");
        elementoAzul.textContent = azul.toLocaleString("es-CO");

        estado.textContent = "Lecturas actualizadas correctamente.";
    } catch (error) {
        estado.textContent = "No se pudieron actualizar las lecturas.";
        console.error("Error al consultar ThingSpeak:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    nuevaMedicion();
    setInterval(nuevaMedicion, 15000);
});
