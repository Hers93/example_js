/*
    📌 Operador spread
    Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

const frutas = ['Manzana', 'Pera','Pina', 'Melon'];
const comidaFavorita = ['Pizza','Sushi', ...frutas];

console.log(comidaFavorita)

const datosLogin = {
    correo: 'correo@correo.com',
    password: '123'
}

const usuario = {
    nombre: 'Herson',
    ...comidaFavorita,
    edad: 29
}

console.log(usuario)


/*
    📌 Parametros Rest
    Permite que una funcion contenga un numero indefinido de argumentos.
    Los argumentos extra que encuentres los convertira en un arreglo
*/

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
console.log(nombre,correo, datosAdicionales)
}

registrarUsuario('herson', 'correo@correo.com',23, 'capricornio')

/*
    📌 destructuracion de objetos
    nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

const amigos = ['alejandro', 'Cesar', 'Manuel']
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos

const persona = {
    nombre:'Carlos',
    edad: 27,
    pais: 'Mexico'
}

const {nombre,pais} = persona;