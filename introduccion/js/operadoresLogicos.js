/* 📌 Operadores Logicos
    && And
    || OR
    ! NOT
*/

const nombre = 'Herson';
const edad = 16;
const tieneEntrada = true;
const tienePermiso = true;

//ejemplo #1
//const permitirAcceso = edad >= 18 && tieneEntrada;
//console.log(permitirAcceso)

//ejemplo #2
const permitirAcceso = (edad >= 18 && tieneEntrada ) || (tienePermiso && tieneEntrada)
console.log( 'Acceso permitido al concierto '+permitirAcceso );


//ejemplo #3 - !
const variable = true;
console.log(!variable);
