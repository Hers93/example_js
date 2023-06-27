const btnCookie  = document.getElementById('crear');
const btnIniciarSession = document.getElementById('IniciarSesion');

btnCookie.addEventListener('click', () => {
    /* document.cookie = 'nombre=herson'; */
    document.cookie = 'nombre=herson;, expires= 1 Jan 2023 01:00:00 UTC';
})

btnIniciarSession.addEventListener('click',() => {
    const usuario = prompt('Usuaro');
    const password = prompt('Password');

    document.cookie =`nombre=${usuario}; expires= 1 Jan 2024 01:00:00 UTC`;
    alert('sesion iniciada')
})


/* Forma para obtener el usuario de las cookies. */
let users;
const cookies = document.cookie.split(';');
cookies.forEach((val) => {
    const propiedad = val.split('=')[0];
    propiedad == 'nombre' ? users = val.split('=')[1] : '';
})
console.log(users)