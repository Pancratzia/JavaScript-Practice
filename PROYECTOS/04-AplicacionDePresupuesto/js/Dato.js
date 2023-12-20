class Dato{

    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get descripcion(){
        return this._descripcion;
    }

    get valor(){
        return this._valor;
    }

    set descripcion(nuevaDescripcion){
        this._descripcion = nuevaDescripcion;
    }

    set valor(nuevoValor){
        this._valor = nuevoValor;
    }

}