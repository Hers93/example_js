const  usuario = {
    nombre : 'Carlos',
    edad : 27,
    amigos : ['Alejandro', 'Cesar','Manuel'],
    saludo: () => {
        console.log('hola')
    }
}
/*
  📌 .Metodos Propios()
    Los objetos pueden tener metodos propios.
*/
    usuario.saludo();
//===================================================================

/*
  📌 Object.keys()
  Nos devuelve un arreglo con las llaves (keys) del objeto
*/

const resultados =console.log(Object.keys(usuario))
console.log(resultados)
//===================================================================

/*
  📌 .Object.values()
  Nos permite ejecutar una funcion por cada elemento y luego crear un arreglo con 
   base a los resultados de esa funcion
*/
const resultadosValues =console.log(Object.values(usuario))
console.log(resultadosValues)
//===================================================================

/*
  📌 .Object.entrie()
  Nos devuelve un arreglo con las parejas de clave y valor del objeto
*/
const resultadosEntrie =console.log(Object.entries(usuario))
console.log(resultadosEntrie)
//===================================================================