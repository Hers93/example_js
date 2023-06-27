const personaArreglo = ['Carlos', 27, 'correo@correo.com',true,true]
const persona = {
    nombre: 'Herson',
    apellidoPaterno: 'Mancera',
    edad: 29,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos:['rojo','Negro','Azul'],
    saludo:function(){
        alert('Hola mundo')
    }
}

console.log(persona.nombre)
console.log(persona['edad'])


const variable = 'correo'
console.log(persona[variable])

persona.pais = 'Mexico';