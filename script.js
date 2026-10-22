function nuevaMedicion() {
    // Simulación provisional; todavía no lee el sensor real.
    const ph = Math.round(Math.random() * 140) / 10;

    const resultadoPh = document.getElementById("ph");
    const cuadroNivel = document.getElementById("nivel");

    if (!resultadoPh || !cuadroNivel) {
        alert("No se encontró el número de pH o el recuadro del nivel.");
        return;
    }

    // Actualizar el número
    resultadoPh.textContent = ph.toFixed(1);

    // Clasificar el resultado y aplicar su color
    if (ph < 5.5) {
        cuadroNivel.textContent = "NIVEL: ÁCIDO";
        cuadroNivel.style.backgroundColor = "#f8d7da";
        cuadroNivel.style.color = "#842029";

    } else if (ph < 6.5) {
        cuadroNivel.textContent = "NIVEL: LIGERAMENTE ÁCIDO";
        cuadroNivel.style.backgroundColor = "#fff3cd";
        cuadroNivel.style.color = "#664d03";

    } else if (ph <= 7.5) {
        cuadroNivel.textContent = "NIVEL: CERCANO A NEUTRO";
        cuadroNivel.style.backgroundColor = "#d1e7dd";
        cuadroNivel.style.color = "#0f5132";

    } else {
        cuadroNivel.textContent = "NIVEL: ALCALINO";
        cuadroNivel.style.backgroundColor = "#cfe2ff";
        cuadroNivel.style.color = "#084298";
    }

    // Mantener el fondo general azul claro
    document.body.style.backgroundColor = "#DBEAFE";
}
