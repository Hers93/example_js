const btnEliminarCaja = document.getElementById('eliminarCaja');

btnEliminarCaja.addEventListener('click', () => {
    const padre = document.getElementById('contenedor1');
    const cajaEliminar = padre.querySelector('.caja');

    padre.removeChild(cajaEliminar)
})