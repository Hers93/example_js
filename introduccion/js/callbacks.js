const obtenerPostsDeUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post ded ${usuario}...`)
    setTimeout(()=> {
        let  posts = ['Post1','Post2','Post3']
        callback(posts)
    },2000)
}

obtenerPostsDeUsuario('herson',(posts)=>{
    console.log(posts);
})