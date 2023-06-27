class Usuario {
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password
    }

    obtenerPosts(){
        const posts = ['post1','post2'];
        return posts;
    }
}

class Moderador extends Usuario {
    constructor(usuario, password, permisos){
        super(usuario,password);
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con el ${id} ha sido borrado`);
        }
    }
}

const usuario = new Usuario('carlos','123')
usuario.obtenerPosts

const usuario2 = new Moderador('arturo', '456',['borrar','editar'])
console.log(usuario2.obtenerPosts())