class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  set marca(marca) {
    this._marca = marca;
  }

}

class Raton extends DispositivoEntrada {
  
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }

}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(tamanio, marca) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._tamanio = tamanio;
        this._marca = marca;
    }

    get idMonitor() {        
        return this._idMonitor;
    }

    get tamanio() {
        return this._tamanio;
    }

    get marca() {
        return this._marca;
    }

    set tamanio(tamanio) {
        this._tamanio = tamanio;
    }

    set marca(marca) {
        this._marca = marca;
    }

    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, tamaño: ${this._tamanio}, marca: ${this._marca}]`;
    }
}

//Pruebas Ratón

let raton = new Raton('USB', 'Logitech');
console.log(raton.toString());
raton = new Raton('USB', 'Dell');
raton.marca = 'Asus';
console.log(raton.toString());

//Prueba Teclado

let teclado = new Teclado('USB', 'Logitech');
console.log(teclado.toString());
teclado = new Teclado('Mecanico', 'Dell');
teclado.marca = 'Asus';
console.log(teclado.toString());

//Prueba Monitor

let monitor = new Monitor('20 pulgadas', 'Samsung');
console.log(monitor.toString());
monitor = new Monitor('15 pulgadas', 'Dell');
monitor.marca = 'Asus';
console.log(monitor.toString());