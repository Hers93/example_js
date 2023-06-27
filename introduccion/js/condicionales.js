/*
  📌 Operadores de comparacion:
    == Igual que
    === Igual en valor y tipo de valor
    != Diferente
    !== Diferente en valor y tipo de valor
    > Mayor que
    < Menor que
     >= Mayor o igual que
     <= Menor o igual que
     ? Operador ternario

     📌 Operadores logicos
     && and
    || or
    ! not
*/

//📌 Ejemplo #1:
const usuario = {
    edad: 29,
    pais: 'Mexico',
    ticket: true
}

if(usuario.edad > 17){
    console.log(`El usuario es mayor de edad`)
}