function nuevaMedicion() {
    const ph = Math.round(Math.random() * 140) / 10;

    let nivelTexto;
    let claseNivel;

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

    const resultadoPh = document.getElementById("ph");
    const cuadroNivel = document.getElementById("nivel");

    if (resultadoPh) {
        resultadoPh.textContent = ph.toFixed(1);
    }

    if (cuadroNivel) {
    cuadroNivel.textContent = nivelTexto;
    cuadroNivel.className = "nivel " + claseNivel;

    if (claseNivel === "bajo") {
        cuadroNivel.style.backgroundColor = "#f8d7da";
        cuadroNivel.style.color = "#842029";
    } else if (claseNivel === "medio") {
        cuadroNivel.style.backgroundColor = "#fff3cd";
        cuadroNivel.style.color = "#664d03";
    } else if (claseNivel === "adecuado") {
        cuadroNivel.style.backgroundColor = "#d1e7dd";
        cuadroNivel.style.color = "#0f5132";
    } else {
        cuadroNivel.style.backgroundColor = "#cfe2ff";
        cuadroNivel.style.color = "#084298";
    }

    }

    // El fondo permanece azul claro
    document.body.style.backgroundColor = "#DBEAFE";

