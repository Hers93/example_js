'use strict';

//Forma 1 - Palabra export
/* export const nombre = 'Herson'

export const obtenerPost = () => {
    return ['Post1','Post2','Post3']
} */


//Forma 2 - Final del documento
 const nombre = 'Herson';

var obtenerUsuario = () => {
    return {
        nombre:'Carlos',
        correo:'correo@correo.com'
    }
};

/*
    ⚡Name imports
*/


console.log(`mi nombre es ${nombre}`);
console.log(obtenerUsuario);
