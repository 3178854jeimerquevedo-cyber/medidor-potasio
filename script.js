function nuevaMedicion() {
    // Simulación provisional: no es una lectura real del sensor.
    const ph = Math.round(Math.random() * 140) / 10;

    const resultadoPh = document.getElementById("ph");
    const cuadroNivel = document.getElementById("nivel");

    if (!resultadoPh || !cuadroNivel) {
        alert("No se encontró el número de pH o el recuadro del nivel.");
        return;
    }

    // Actualizar el número de pH
    resultadoPh.textContent = ph.toFixed(1);

    let colorFondo;
    let colorTexto;
    let colorPagina;

    // Clasificar el pH y cambiar los colores
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

    // Cambiar el color del recuadro del nivel
    cuadroNivel.style.backgroundColor = colorFondo;
    cuadroNivel.style.color = colorTexto;

    // Cambiar el fondo de toda la página
    document.body.style.backgroundColor = colorPagina;
}
