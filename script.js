function nuevaMedicion() {
    // SIMULACIÓN provisional: no es una lectura real del sensor.
    const ph = Math.round(Math.random() * 140) / 10;

    let nivelTexto;
    let claseNivel;
    let colorFondo;
    let colorTexto;

    if (ph < 5.5) {
        nivelTexto = "NIVEL: ÁCIDO";
        claseNivel = "bajo";
        colorFondo = "#f8d7da";
        colorTexto = "#842029";
    } else if (ph < 6.5) {
        nivelTexto = "NIVEL: LIGERAMENTE ÁCIDO";
        claseNivel = "medio";
        colorFondo = "#fff3cd";
        colorTexto = "#664d03";
    } else if (ph <= 7.5) {
        nivelTexto = "NIVEL: CERCANO A NEUTRO";
        claseNivel = "adecuado";
        colorFondo = "#d1e7dd";
        colorTexto = "#0f5132";
    } else {
        nivelTexto = "NIVEL: ALCALINO";
        claseNivel = "alto";
        colorFondo = "#cfe2ff";
        colorTexto = "#084298";
    }

    const resultadoPh = document.getElementById("ph");
    const cuadroNivel = document.getElementById("nivel");

    if (resultadoPh) {
        resultadoPh.textContent = ph.toFixed(1);
    }

    if (cuadroNivel) {
        cuadroNivel.textContent = nivelTexto;
        cuadroNivel.className = "nivel " + claseNivel;
        cuadroNivel.style.display = "inline-block";
        cuadroNivel.style.padding = "12px 25px";
        cuadroNivel.style.borderRadius = "10px";
        cuadroNivel.style.fontWeight = "bold";
        cuadroNivel.style.backgroundColor = colorFondo;
        cuadroNivel.style.color = colorTexto;
    }

  
