const colores = ['Rojo','Verde','Azul'];
/*
📌 .length
    (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo
 */
console.log(colores.length)

//===================================================================
/* 
 📌 .toString()
    Nos permite transformar un arreglo a una cadena de texto.
    Por ejemplo para poder mostrarlo en el navegador
*/
colores.toLocaleString();
//===================================================================

/*
  📌 .join()
  Nos permite trasnformar un arreglo a una cadena de texto y separar cada elemento.
*/

console.log(colores.join('-'))
//===================================================================

/*
  📌 .sort()
    Nos permite  ordernar un arreglo de cadenas de texto, de forma alfabetica
*/

const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort())

const numeros = [3,2,4,1];
console.log(numeros.sort())
//===================================================================

/*
  📌 .reverse()
  Nos permite ordenar un arreglo de forma descendente.
*/

console.log(letras.reverse())
//===================================================================

/*
  📌 .concat()
  Nos permite juntar dos arreglos en uno solo
*/

const array3 = letras.concat(numeros)
console.log(array3)
//===================================================================

/*
  📌 .push()
  Nos permite agregar un elemento al final de un arreglo
*/
//===================================================================

/*
  📌 .pop()
  Nos permite eliminar el ultimo elemento de un array
*/
//===================================================================

/*
  📌 .shift()
  elimina el primer elemento de un arreglo y recorre los elementos.
  Retorna el dia eliminado
*/

const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
console.log(dias.shift())
//===================================================================

/*
  📌 .unshift()
  agrega un elemento al inicio del arreglo y empuja los elementos
*/
console.log(dias.unshift('herson'))
//===================================================================

/*
  📌 .splice()
  Nos permite insertar elementos  a un arreglo donde la especifiquemos.
  - 1er parametro - Posicion donde queremos comenzar a insertar los elementos.
  - 2er parametro - Si queremos eliminar elementos del arreglo desde la posicion indicada.
  - Resto de parametros - Los elementos a insertar.
*/

const  amigos = ['alejandro','Cesar','Manuel'];
 amigos.splice(1,2,'Rafael','Roberto')
 console.log(amigos)
//===================================================================

 /*
  📌 .slice()
  Nos permite copiar una parte de una arreglo a otro
  - 1er parametro - Posicion desde donde queremos copiar.
  - 2er parametro - Hasta antes de que elemento copiar.

*/

const fruta = ['Fresa','Manzan','Uva','Pina','Mango','Naranja','Melon']
const frutasFavoritas = fruta.slice(1,6);
console.log(frutasFavoritas);
//===================================================================

/*
  📌 .indexOf()
  Obtenemos el primer index de un elemento.
  Si  no hay elemento nos retorna -1
*/

const nombres = ['Carlos','Rafael','Estefania','Rodrigo','Rafael', 'Gema','Diana','Sara', 45]
console.log(nombres.indexOf('Rafael'))

//===================================================================


/*
  📌 .lastIndexOf()
  Obtenemos el ultimo index de un elemento
*/
//===================================================================


/*
  📌 .forEach()
  Nos permite ejecutar una funcion por cada elemento
*/
nombres.forEach((value, index) => {
    console.log(`Hola soy: ${value} ,mi index es ${index}`)
})
//===================================================================

/*
  📌 .find()
  Nos permite recorrer un arreglo y devuelve el primer elemento que retornemos
*/

const resultado = nombres.find((value) => {
    if(value[0] == 'E'){
        return value
    }
})
//===================================================================

/*
  📌 .map()
  Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo con base a los resultados de esa funcion
*/


const nombresMayusculas = nombres.map((value) => value.toUpperCase())

console.log(nombresMayusculas)
//===================================================================

/*
  📌 .filter()
  Nos permite ejecutar una funcion por cada elemento y luego crear un arreglo con 
   base a los resultados de esa funcion
*/

const nombresFilter = nombres.filter((value) =>{
    if(value.length === 5){
        return nombre
    }
})
console.log(nombresFilter)
//===================================================================

/*
  📌 .includes()
  Nos permite saber si e arreglo contiene un elemento especificado
*/

console.log(nombres.includes('Carlos'))
//===================================================================
/*
  📌 .every()
  Nos permite ejecutar una condicional sobre cada elemento y nos devuelve true si    
   TODOS los elementos cumplieron la condicion
*/

const nombresValidos = nombres.every((value) => {
  if(typeof(value) === 'string'){
    return true;
  }else{
    return false
  }
})
//===================================================================

/*
  📌 .some()
  Nos permite ejecutar una condicional sobre cada elemento y nos devuelve true si algun elemento cumplio la condicion.
*/

//true si hay algun valor invalio
//false si no hay algun valor invalido


const nombresSome = nombres.some((value) => {
  if(typeof(value) !== 'string'){
    return true;
  }else{
    return false
  }
})
//===================================================================