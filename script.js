function nuevaMedicion() {
    // Simulación provisional: no es una lectura real del sensor.
    const ph = Math.round(Math.random() * 140) / 10;

    let nivelTexto;
    let claseNivel;

    // Clasificación del pH
    if (ph < 5.5) {
        nivelTexto = "NIVEL: ÁCIDO";
        claseNivel = "bajo";
    } else if (ph < 6.5) {
        nivelTexto = "NIVEL: LIGERAMENTE ÁCIDO";
        claseNivel = "medio";
    } else if (ph <= 7.5) {
        nivelTexto = "NIVEL: CERCANO A NEUTRO";
        claseNivel = "adecuado";
    } else {
        nivelTexto = "NIVEL: ALCALINO";
        claseNivel = "alto";
    }

    // Actualizar el número de pH
    const resultadoPh = document.getElementById("ph");
    if (resultadoPh) {
        resultadoPh.textContent = ph.toFixed(1);
    }

    // Actualizar el recuadro del nivel
    const cuadroNivel = document.getElementById("nivel");

    if (cuadroNivel) {
        cuadroNivel.textContent = nivelTexto;
        cuadroNivel.className = "nivel " + claseNivel;

        // Colores del recuadro según el pH
        if (claseNivel === "bajo") {
            // Rojo claro: ácido
            cuadroNivel.style.backgroundColor = "#f8d7da";
            cuadroNivel.style.color = "#842029";

        } else if (claseNivel === "medio") {
            // Amarillo: ligeramente ácido
            cuadroNivel.style.backgroundColor = "#fff3cd";
            cuadroNivel.style.color = "#664d03";

        } else if (claseNivel === "adecuado") {
            // Verde: cercano a neutro
            cuadroNivel.style.backgroundColor = "#d1e7dd";
            cuadroNivel.style.color = "#0f5132";

        } else {
            // Azul claro: alcalino
            cuadroNivel.style.backgroundColor = "#cfe2ff";
            cuadroNivel.style.color = "#084298";
        }
    }

    // Mantener el fondo general de la página azul claro
    document.body.style.backgroundColor = "#DBEAFE";
    }
