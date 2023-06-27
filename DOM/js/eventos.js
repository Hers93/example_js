const btn1 = document.getElementById('boton1')
const primeraCaja = document.querySelector('.caja')

btn1.addEventListener('click',(e)=>{
    //console.log(e)
    primeraCaja.classList.toggle('activa')
})

/**
 *📌 Agregando el evento a multiples elementos.
    Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
    Nota: Esta no es la forma optima.
 */

const caja = document.querySelectorAll('.caja')
caja.forEach((value)=>{
    value.addEventListener('click',(e) =>{
        console.log(`Haz echo click en ${e.target.innerHTML}`)
    })
})