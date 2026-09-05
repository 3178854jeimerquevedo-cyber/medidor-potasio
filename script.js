function nuevaMedicion() {

    // Generamos una lectura de prueba
    // para simular el sensor TCS230.
    let lectura = Math.floor(Math.random() * 500) + 300;

    // Valores simulados del sensor
    let rojo = lectura;

    let verde = Math.floor(lectura * 0.80);

    let azul = Math.floor(lectura * 0.70);

    // Conversión PROVISIONAL.
    // Estos valores NO son mediciones reales
    // de potasio.
    let potasio = Math.round((900 - lectura) / 8);

    // Evitamos valores negativos
    if (potasio < 0) {
        potasio = 0;
    }

    // Determinamos el nivel
    let nivelTexto;
    let claseNivel;

    if  (potasio < 40) {

        nivelTexto = "NIVEL: BAJO";
        claseNivel = "bajo";
    } else if (potasio <  80) {

        nivelTexto = "NIVEL: MEDIO";
        claseNivel = "medio";

    } else if (potasio <= 120) {

        nivelTexto = "NIVEL: ADECUADO";
        claseNivel =  "adecuado";

    } else {

        nivelTexto = "NIVEL: ALTO";
        claseNivel = "alto";
    }

    // Mostramos los resultados
    document.getElementById("potasio").textContent = potasio;

    document.getElementById("lectura").textContent = lectura;

    document.getElementById("rojo").textContent = rojo;

    document.getElementById("verde").textContent = verde;

    document.getElementById("azul").textContent = azul;

    document.getElementById("nivel").textContent = nivelTexto;
    document.getElementById("nivel").className = "nivel" + claseNivel;
    
    document.body.className = "fondo-" + claseNivel;
}
