const btnAgregarCaja = document.getElementById('boton1');

btnAgregarCaja.addEventListener('click', () => {
    /*
        📌1.- Creamos el elemento
        createElement - Recibe como paramtro una cadena de texto con la etiqueta
        que queremos crear.
    */

    const nuevaCaja = document.createElement('div');

    /*
        📌2.- Agregamos texto y atributos
    */
    nuevaCaja.innerText = 'NuevaCaja';
    nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    /*
        📌3.- Agregamos el elemento al DOM
    */

    const contenedor = document.getElementById('contenedor1');

    //.appendChild - Agrega un elemento al final.
    /* contenedor.appendChild(nuevaCaja) */

    /*
        .insertAdjacentElement() - Nos permite agregar un elemento
        valores:
            afterbegin - como primer elemento
            beforebegin - antes del elemento padre
            beforeend - como ultimo elemento
            afterend - despues del elemento padre.
    */
   /* contenedor.insertAdjacentElement('afterend',nuevaCaja) */

   // .replaceWith() - Nos permite remplazar el elemento por otro

   document.querySelector('#contedor1 .caja').replaceWith(nuevaCaja)

})