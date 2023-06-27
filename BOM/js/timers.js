const btnIniciar =  document.getElementById('iniciar')
const btnParar = document.getElementById('parar')

/* 
    📌 window.setTimeOut
    nos permite ejecutar una funcion despues de cierto tiempo
*/
/* 
let time;

btnIniciar.addEventListener('click', () => {
    time = setTimeout(() => {
        console.log('ya llegue perro')
    },5000)
})

btnParar.addEventListener('click', () => {
    console.log('Parando timer')
    clearTimeout(time);
}) */

/* 
    📌 window.setInterval
    Nos permite ejecutar una funcion cada cierto tiempo
*/

let cuenta = 0;



let time;

btnIniciar.addEventListener('click', () => {
    time = setInterval(() => {
        console.log(cuenta);
        cuenta ++;
    },1000)
})

btnParar.addEventListener('click', () => {
    console.log('Parando interval')
    clearInterval(time);
})