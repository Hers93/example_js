const btnCargar = document.getElementById("cargar");
const btnRegresar = document.getElementById("regresar");

 //href - retorna la URL de la pagina actual'
 console.log(location.href)

 //hostname  - Retorna el host de la pagina actual.
 console.log(location.hostname)

 //pathname - Retorna la ruta y archivode la pagina actual
 console.log(location.pathname);

 //protocolo - Retorna el protocolo
 console.log(location.protocol)

btnCargar.addEventListener("click",  () => {
    location.assign('https://google.com')
})

btnRegresar.addEventListener('click',() => {
    history.back();
    history.forward();
})