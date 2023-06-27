/*
    ⚡Name imports
*/

/* import {nombre as nombreImportado, obtenerPost } from './namedExports.js'

console.log(`mi nombre es ${nombreImportado}`)
console.log(post)
 */
/*
    ⚡Namespace imports
*/

import * as datos from './namedExports.js'

console.log(`mi nombre es ${datos.nombre}`)

/*
   ⚡ default imports
*/

import  obtenerUsuario  from './defaultsExport.js'
console.log(obtenerUsuario)