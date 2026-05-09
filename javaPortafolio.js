// FUNCION PARA CAMBIAR SECCIONES


function mostrarSeccion(idSeccion, botonClickeado) {

    // Ocultar secciones

    const secciones = document.querySelectorAll('.contenido-seccion');

    secciones.forEach(seccion => {
        seccion.classList.add('d-none');
    });


    // Mostrar seccion seleccionada (menu header)

    document.getElementById(idSeccion)
            .classList.remove('d-none');


    // Descartar boton activo si se deja de seleccionar

    const botones = document.querySelectorAll('.menu-btn');

    botones.forEach(boton => {

        boton.classList.remove('btn-light');
        boton.classList.remove('text-dark');

        boton.classList.add('btn-outline-light');

    });


    // Activar boton al dar click

    botonClickeado.classList.remove('btn-outline-light');

    botonClickeado.classList.add('btn-light');
    botonClickeado.classList.add('text-dark');

}


// ==========================================
// MOSTRAR SEMANA 1 AL INICIAR
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    const primerBoton = document.querySelector('.menu-btn');

    mostrarSeccion('semana1', primerBoton);

});