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


/* =========================================
   BOTÓN "SÍ, QUIERO"
========================================= */

const btnAceptar =
    document.getElementById("btnAceptar");

const transicionAmor =
    document.getElementById("transicionAmor");

const finalAmor =
    document.getElementById("finalAmor");


if (btnAceptar) {

    btnAceptar.addEventListener(
        "click",
        function () {

            /*
             * =====================================
             * INICIAR CONTADOR DEL NOVIAZGO
             * =====================================
             */fechaInicioAmor = new Date();
            actualizarContador();


            // Iniciar / actualizar el contador
            actualizarContador();


            /*
             * Evitar que pueda presionarse
             * varias veces.
             */

            btnAceptar.disabled = true;


            /*
             * Efecto de corazones
             */

            lanzarCorazonesAceptacion();


            /*
             * Activar transición
             */

            transicionAmor.classList.add(
                "activo"
            );


            /*
             * Después de la transición
             * mostramos el mensaje final.
             */

            setTimeout(() => {

                finalAmor.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                /*
                 * Después de comenzar el
                 * desplazamiento quitamos
                 * la pantalla de transición.
                 */

                setTimeout(() => {

                    transicionAmor.classList.remove(
                        "activo"
                    );

                }, 10);

            }, 2200);

        }

    );

}


/* =========================================
   CONTADOR DEL NOVIAZGO
========================================= */

/* =========================================
   CONTADOR DEL NOVIAZGO
========================================= */

let fechaInicioAmor = null;


/*
   Actualizar contador
*/

function actualizarContador() {

    // Si todavía no se ha presionado
    // "Sí, quiero", no hacer nada.
    if (!fechaInicioAmor) {
        return;
    }


    const ahora =
        new Date();


    const diferencia =
        ahora - fechaInicioAmor;


    /*
       Conversión
    */

    const segundo =
        1000;

    const minuto =
        segundo * 60;

    const hora =
        minuto * 60;

    const dia =
        hora * 24;


    const dias =
        Math.floor(
            diferencia / dia
        );


    const horas =
        Math.floor(
            (diferencia % dia) / hora
        );


    const minutos =
        Math.floor(
            (diferencia % hora) / minuto
        );


    const segundos =
        Math.floor(
            (diferencia % minuto) / segundo
        );


    /*
       Mostrar
    */

    const elementoDias =
        document.getElementById("dias");

    const elementoHoras =
        document.getElementById("horas");

    const elementoMinutos =
        document.getElementById("minutos");

    const elementoSegundos =
        document.getElementById("segundos");


    if (elementoDias) {

        elementoDias.textContent =
            dias;

    }


    if (elementoHoras) {

        elementoHoras.textContent =
            String(horas).padStart(
                2,
                "0"
            );

    }


    if (elementoMinutos) {

        elementoMinutos.textContent =
            String(minutos).padStart(
                2,
                "0"
            );

    }


    if (elementoSegundos) {

        elementoSegundos.textContent =
            String(segundos).padStart(
                2,
                "0"
            );

    }

}


/*
   Actualizar cada segundo
*/

setInterval(
    actualizarContador,
    1000
);

/* =========================================
   CORAZONES DE ACEPTACIÓN
========================================= */

function lanzarCorazonesAceptacion() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        setTimeout(() => {

            crearCorazon();

        }, i * 60);

    }

}


/* =========================================
   TRANSICIÓN DEL VIDEO
========================================= */

const videoHistoria =
    document.getElementById("videoHistoria");

const transicionVideo =
    document.getElementById("transicionVideo");

const seccionFinal =
    document.querySelector(".seccion.final");


let videoTerminado =
    false;


if (videoHistoria) {

    videoHistoria.addEventListener(
        "timeupdate",
        function () {

            /*
               2 minutos y 5 segundos
               = 125 segundos
            */

            if (
                videoHistoria.currentTime >= 125 &&
                !videoTerminado
            ) {

                videoTerminado = true;


                /*
                   Detener exactamente
                   en 2:05
                */

                videoHistoria.currentTime = 125;

                videoHistoria.pause();


                /*
                   Activar transición
                */

                transicionVideo.classList.add(
                    "activo"
                );


                /*
                   Después del efecto,
                   ir a la sección final
                */

                setTimeout(() => {

                    seccionFinal.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    /*
                       Quitar transición
                       después del scroll
                    */

                    setTimeout(() => {

                        transicionVideo.classList.remove(
                            "activo"
                        );

                    }, 10);

                }, 3000);

            }

        }

    );

}