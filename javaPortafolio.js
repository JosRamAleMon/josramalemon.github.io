function mostrarSeccion(idSeccion, botonClickeado) {
    const secciones = document.querySelectorAll('.contenido-seccion');

    secciones.forEach(seccion => {
        seccion.classList.add('d-none');
    });

    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.remove('d-none');
    }

    const botones = document.querySelectorAll('.menu-btn');

    botones.forEach(boton => {
        boton.classList.remove('btn-light');
        boton.classList.remove('text-dark');
        boton.classList.add('btn-outline-light');
    });

    if (botonClickeado) {
        botonClickeado.classList.remove('btn-outline-light');
        botonClickeado.classList.add('btn-light');
        botonClickeado.classList.add('text-dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const primerBoton = document.querySelector('.menu-btn');
    mostrarSeccion('portada', primerBoton);
});
