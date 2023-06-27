const btnIngresar = document.getElementById("ingresar")
const btnSaludar = document.getElementById("saludo")

/* 
    📌Alerta
    Para informarle al usuario de algo
*/
window.alert('hola usuario')

/* 
    📌 Ventana de confirmacion
    Una ventana donde el usuario puede aceptar o cancelar.
    Retorna verdadero o falso dependiendo de la respuesta del usuario
*/

btnIngresar.addEventListener('click',() => {
   const confirmar = confirm('Eres mayor de edar?');
    confirmar ? alert('Bienvenido') : alert('le vamos a decir a tus padres')
  
})


/* 
    📌 Ventana con un input
    Una ventana donde el usuario pueda introducir un valor.
    Retorna una cadena de texto con la respuesta del usuario
*/

btnSaludar.addEventListener('click', () => {
    const texto = prompt('Escribe tu nombre');
    console.log(texto)
})