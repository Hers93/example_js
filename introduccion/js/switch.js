const usuario = {
    nombre: 'herson',
    pais: 'mexico'
}

switch(usuario.pais){
    case 'mexico':
        console.log(`El usuario es de mexico`);
        break;
    case 'colombia':
        console.log(`El usuario es de colombia`);
        break;
    default:
        console.log(`El usuario es de otro pais`);
    
}