/*
    📌getElementById
    Nos permite obtener un elemento en base a tu atributo id
 */
const contenedor1 = document.getElementById('contenedor1')
console.log(contenedor1)

/*
    📌 children
        Nos permite obtener los elementos hijo
*/

console.log(contenedor1.children)

/*
    📌parentElement
      Nos permite obtener el elemento padre de un elemento
*/

console.log(contenedor1.parentElement)


/* 📌 getElementsByTagName
   Nos permite obtener una coleccion de elementos en base a la etiqueta.
   Nota: Devuelve una coleccion HTML. Una coleccion no es un arreglo.
*/

const divs = document.getElementsByTagName('div');
console.log(divs)

console.log(`Tenemos: ${divs.length} divs en la pagina`)

/* 📌 getElementsByClassName
    Nos permite obtener una coleccion de elementos en base a su clase CSS.
    Nota: Devuelve una coleccion HTML.
*/
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores)


/* 📌 querySelector
    Nos devuelve el primer elemento que coincida con un selector estilo css.
    Nota: Devuelve un nodeList
*/

const caja = document.querySelector('#contenedor1 .caja')
console.log(caja)


/*
    📌 querySelectorAlL
        Nos permite obtener una coleccion de elementos de base a un selector estilo css.
        Nota: Devuelve un nodeList.
*/


const cajas = document.querySelectorAll('#contenedor1 .caja')
console.log(cajas)
cajas.forEach((val) => {
    console.log(val)
})


/*
    📌 closest
       Nos permite buscar de adentro hacia afuera en busca de un elemento
*/

const ultimaCaja =  document.querySelector('.caja:last-child')
console.log(ultimaCaja.closest('.contenedor-principal'))

/*
    📌 podemos encadenar todos los metodos para obtener elementos
*/