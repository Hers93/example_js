/* 
    📌 Modificar estilos css mediante "inline styles"
*/
const btnIncrementarFont = document.getElementById('IncrementarFunte');
const btnDecrementarFont = document.getElementById('DecrementarFuente');
const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child ")
ultimaCaja.style.background = '#000'
ultimaCaja.style.color = '#fff'

const cajas = document.querySelectorAll('.caja');
let tamano = 24;

btnIncrementarFont.addEventListener('click',()=>{
    cajas.forEach((value) => {
        tamano ++;
        value.style.fontSize = `${tamano}px`;
        
    })
})

btnDecrementarFont.addEventListener('click',()=>{
    cajas.forEach((value) => {
        tamano --;
        value.style.fontSize = `${tamano}px`;
        
    })
})