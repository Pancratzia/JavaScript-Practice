"use strict";
const user = {
    nombreUsuario: 'Pancratzia',
    password: '123456'
};
/*const nonValidUser:Usuario = {
    nombreUsuario: 'Pancratzia'
}
    No es posible crear un usuario sin una contraseña
    Sin embargo, un usuario puede no tener una confirmación de contraseña
*/
alert(`Hola, ${user.nombreUsuario}. Contraseña: ${user.password}`);
const avion = {
    abordar() {
        if (this.abordoCorrecto()) {
            alert('Se abordó el avión');
        }
        else {
            alert('No se abordó el avión');
        }
    },
    abordoCorrecto() {
        return (Math.random() > 0.5);
    }
};
avion.abordar();
