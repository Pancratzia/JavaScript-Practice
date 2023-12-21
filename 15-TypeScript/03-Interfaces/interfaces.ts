interface Usuario{
    nombreUsuario: string;
    password: string;
    confirmarPassword?: string; //opcional
}

const user:Usuario = {
    nombreUsuario: 'Pancratzia',
    password: '123456'
}

/*const nonValidUser:Usuario = {
    nombreUsuario: 'Pancratzia'
}
    No es posible crear un usuario sin una contraseña
    Sin embargo, un usuario puede no tener una confirmación de contraseña
*/

alert(`Hola, ${user.nombreUsuario}. Contraseña: ${user.password}`);

interface Abordar{
    abordar(): void;
    abordoCorrecto(): boolean;
}

const avion:Abordar = {

    abordar(){
        if(this.abordoCorrecto()){
            alert('Se abordó el avión');
        }else{
            alert('No se abordó el avión');
        }
    },
    abordoCorrecto(){
        return (Math.random() > 0.5);
    }
}

avion.abordar();