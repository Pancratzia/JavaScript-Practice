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

class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre}\n
        ${this._monitor}\n
        ${this._teclado}\n
        ${this._raton}`;
    }
}

//Pruebas Ratón

let raton = new Raton('USB', 'Logitech');
console.log(raton.toString());
let raton2 = new Raton('USB', 'Dell');
raton2.marca = 'Asus';
console.log(raton2.toString());

//Prueba Teclado

let teclado = new Teclado('USB', 'Logitech');
console.log(teclado.toString());
let teclado2 = new Teclado('Mecanico', 'Dell');
teclado2.marca = 'Asus';
console.log(teclado2.toString());

//Prueba Monitor

let monitor = new Monitor('20 pulgadas', 'Samsung');
console.log(monitor.toString());
let monitor2 = new Monitor('15 pulgadas', 'Dell');
monitor2.marca = 'Asus';
console.log(monitor2.toString());

//Prueba Computadora

let computadora = new Computadora('Asus', monitor, teclado, raton2);
console.log(computadora.toString());

let computadora2 = new Computadora('Dell', monitor2, teclado2, raton);
console.log(computadora2.toString());