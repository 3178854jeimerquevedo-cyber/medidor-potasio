const CANAL_THINGSPEAK = "3548549";
const URL_THINGSPEAK =
    `https://api.thingspeak.com/channels/${CANAL_THINGSPEAK}/feeds/last.json`;

async function nuevaMedicion() {
    const resultadoPh = document.getElementById("ph");
    const cuadroNivel = document.getElementById("nivel");

    if (!resultadoPh || !cuadroNivel) {
        alert("No se encontró el número de pH o el recuadro del nivel.");
        return;
    }

    cuadroNivel.textContent = "CONSULTANDO THINGSPEAK...";

    try {
        const respuesta = await fetch(URL_THINGSPEAK, {
            cache: "no-store"
        });

        if (!respuesta.ok) {
            throw new Error("No se pudieron consultar los datos.");
        }

        const datos = await respuesta.json();
        const ph = Number(datos.field1);

        if (datos.field1 === null || datos.field1 === undefined ||
            datos.field1 === "" || !Number.isFinite(ph) ||
            ph < 0 || ph > 14) {
            throw new Error("ThingSpeak no tiene una lectura de pH válida.");
        }

        resultadoPh.textContent = ph.toFixed(2);

        let colorFondo;
        let colorTexto;
        let colorPagina;

        if (ph < 5.5) {
            cuadroNivel.textContent = "NIVEL: ÁCIDO";
            colorFondo = "#f8d7da";
            colorTexto = "#842029";
            colorPagina = "#FDE8E8";
        } else if (ph < 6.5) {
            cuadroNivel.textContent = "NIVEL: LIGERAMENTE ÁCIDO";
            colorFondo = "#fff3cd";
            colorTexto = "#664d03";
            colorPagina = "#FFF8DC";
        } else if (ph <= 7.5) {
            cuadroNivel.textContent = "NIVEL: CERCANO A NEUTRO";
            colorFondo = "#d1e7dd";
            colorTexto = "#0f5132";
            colorPagina = "#E8F5E8";
        } else {
            cuadroNivel.textContent = "NIVEL: ALCALINO";
            colorFondo = "#cfe2ff";
            colorTexto = "#084298";
            colorPagina = "#E8F0FF";
        }

        cuadroNivel.style.backgroundColor = colorFondo;
        cuadroNivel.style.color = colorTexto;
        document.body.style.backgroundColor = colorPagina;

    } catch (error) {
        cuadroNivel.textContent = "NO SE PUDO ACTUALIZAR";
        console.error("Error al consultar ThingSpeak:", error);
    }
}

// Cargar la última lectura al abrir la página.
document.addEventListener("DOMContentLoaded", () => {
    nuevaMedicion();

    // Actualizar automáticamente cada 15 segundos.
    setInterval(nuevaMedicion, 15000);
});
