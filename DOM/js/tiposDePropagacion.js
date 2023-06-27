/**
 * 📌Bubbling (false, por defecto)
 * En bubbling el evento del elemento hijo reacciona primero y despues del evento del elemento padre
 * 
 */


const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click',(e) => {
    console.log('hiciste click en el contenedor')
})

const primeraCaja = document.querySelector('.caja');

primeraCaja.addEventListener('click',(e) => {
    //e.stopPropagation();
    console.log('hiciste click en la caja1')
})