class Usuario{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrarUsuario(id_usuario){
        console.log(`el usuario con el id: ${id_usuario} ha sido borrado de la base de datos`)
    }
}

const usuario = new Usuario('herson','correo@correo.com')
console.log(usuario)