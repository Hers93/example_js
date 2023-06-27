/* window.alert('hola') */

console.log(`la ventana de tu navegador mide ${window.innerWidth}px de ancho`)
console.log(`la ventana de tu navegador mide ${window.innerHeight}px de ancho`)

/*
    📌  window.open()
        Nos permite abrir ventanas del navegador
        Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

        1er parametro : Direccion de la nueva ventana.
        2do parametro : Nombre de la ventana.
        3er parametro: Cadena de texto de opciones

        Nos devuelve un objeto para aceder a esa ventana.
*/

const btnAbrirVentana = document.getElementById("abrir");
const btnCerrarVentana = document.getElementById("cerrar");
let ventana;
btnAbrirVentana.addEventListener('click', () => {
   ventana = window.open('','mi nueva ventana','width=500, height=500');
  /*  ventana.document.write('<h1>perrazo</h1>') */
})

btnCerrarVentana.addEventListener('click',() => {
    ventana.close();
})

/*
    📌  Screen Object

    Representa la pantalla del usuario
*/
console.log('Ancho de pantalla:', window.screen.width)
console.log('Alto de pantalla:', window.screen.height)
console.log('ancho de pantalla sin barra de windows :', window.screen.availHeight)