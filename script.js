/* =========================================
   BOTÓN ABRIR DEDICATORIA
========================================= */

const btnAbrir = document.getElementById("btnAbrir");

const pantallaInicio =
    document.getElementById("inicio");

const contenido =
    document.getElementById("contenido");


btnAbrir.addEventListener("click", function () {

    // Ocultar pantalla inicial
    pantallaInicio.classList.add("ocultar");

    // Mostrar contenido
    contenido.classList.remove("oculto");

    // Iniciar música
    musica.volume = 0.5;
    musica.play();

    // Esperar un poco y comenzar corazones
    setTimeout(() => {

        crearCorazon();

    }, 700);

});


/* =========================================
   CORAZONES FLOTANTES
========================================= */

const contenedorCorazones =
    document.getElementById("corazones");


function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.classList.add(
        "corazon-flotante"
    );

    // Diferentes símbolos
    const simbolos = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];

    corazon.textContent =
        simbolos[
            Math.floor(
                Math.random() * simbolos.length
            )
        ];


    // Posición horizontal aleatoria
    corazon.style.left =
        Math.random() * 100 + "vw";


    // Tamaño aleatorio
    const tamaño =
        15 + Math.random() * 20;

    corazon.style.fontSize =
        tamaño + "px";


    // Duración aleatoria
    const duracion =
        4 + Math.random() * 4;

    corazon.style.animationDuration =
        duracion + "s";


    contenedorCorazones.appendChild(
        corazon
    );


    // Eliminar después de la animación
    setTimeout(() => {

        corazon.remove();

    }, duracion * 1000);

}


/* =========================================
   GENERAR CORAZONES AUTOMÁTICAMENTE
========================================= */

setInterval(() => {

    // Solo generar si la página
    // ya fue abierta

    if (
        !pantallaInicio.classList.contains(
            "ocultar"
        )
    ) {
        return;
    }

    crearCorazon();

}, 900);