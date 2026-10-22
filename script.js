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
        cuadroNivel.style.backgroundColor = "#DBEAFE";
        cuadroNivel.style.color = "#1D4ED8";
    }

    // El fondo permanece azul claro
    document.body.style.backgroundColor = "#DBEAFE";
}
