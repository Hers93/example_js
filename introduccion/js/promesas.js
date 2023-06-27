const promesa = new Promise((resolve, reject) =>{
    // Accion  que se ejecutara.
    setTimeout(() => {
        const exito = false;
        if(exito){
            resolve('La operacion tuvo exito');
        }else{
            reject('fallaste perro')
        }
    },4000)
});
promesa.then((res) => {
    console.log(res)
});
promesa.catch((res)=>{
    console.log(res)
})