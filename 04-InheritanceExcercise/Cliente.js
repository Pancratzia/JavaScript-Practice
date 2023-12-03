class Cliente extends Persona {
    static contadorClientes = 0;

    constructor (nombre, apellido, edad){
        super (nombre, apellido, edad);
        this._fechaRegistro = new Date().toLocaleDateString();
        this._idCliente = ++Cliente.contadorClientes;
    }

    getIdCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }

    toString(){
        return `${super.toString()} Fue registrado el ${this._fechaRegistro}.`
    }
}
