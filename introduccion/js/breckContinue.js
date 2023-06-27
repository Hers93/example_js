/*
    📌 breack
   La sentencia break nos sirve para salir de bloques de tipo switch.
   Pero tambien nos sirve para forzar la salida de un ciclo
*/
const nombres = ['Arturo','Andres','Alejandro','Roberto', 'Adrian','Antonio'];

for( let i=0; i<nombres.length; i++){
   if(nombres[i][0] !== 'A'){
    break;
   }
   console.log(nombres[i])
}

/*
    📌 Continue
    La sentencia continue nos sirve para saltar a la siguiente iteracion
*/

const invitados = ['Carlos','Christian', 'Christoper','Estefania','Erika','Manuel']