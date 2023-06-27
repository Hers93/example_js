/*
    📌 Modificar estilos css mediante clases
*/
const  btnAddClass = document.getElementById('agregarClase');
const btnDeleteClass = document.getElementById('eliminarClase');
const btnToggleClass = document.getElementById('toggleClase');
const btnConfirmClass = document.getElementById('comprobarClase');
const primeraCaja = document.querySelector("#contenedor1 .caja");
//console.log(primeraCaja.classList)


//classList.add() - Noos permite agregar clases a un elemento
btnAddClass.addEventListener('click',() =>{
    primeraCaja.classList.add('activa')
})
//classList.remove() - Nos permite eliminar clases de un elememento
btnDeleteClass.addEventListener('click',() =>{
    primeraCaja.classList.remove('activa')
})
//classList.toggle() Nos permiite alternar clases de un elemento
btnToggleClass.addEventListener('click',()=>{
    primeraCaja.classList.toggle('activa')
})

btnConfirmClass.addEventListener('click', () =>{
    if(primeraCaja.classList.contains('activa')){
        console.log('la caja tiene la clase activa')
    } else {
        console.log('la caja no tiene la clase activa') 
    }

    console.log('y contiene las siguientes clases')
    primeraCaja.classList.forEach((value) => {
        console.log(value)
    })
})