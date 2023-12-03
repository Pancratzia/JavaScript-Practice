class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}$`;
    }
}

class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._fecha = new Date().toLocaleDateString();
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length <= Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto; OTRA SINTAXIS
        }else{
            console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal(){
        let total = 0;
        for(let producto of this._productos){
            total += producto.precio;
        }
        return total;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + '\n';
        }
        return (`Orden: ${this._idOrden}, fecha: ${this._fecha}, total: ${this.calcularTotal()}$. Productos:\n${productosOrden}`);
    }

}

let producto = new Producto("Tablet", 200);
console.log(producto.toString());

let orden = new Orden();

orden.agregarProducto(producto);
orden.agregarProducto(new Producto("Audifonos", 100));
orden.agregarProducto(new Producto("Teclado", 50));
orden.agregarProducto(new Producto("Celular", 500));

console.log(orden.calcularTotal());
console.log(orden.mostrarOrden());

orden.agregarProducto(new Producto("Laptop", 1000)); //No se puede agregar más productos porque se supera el límite

orden = new Orden();
orden.agregarProducto(new Producto("Camisa", 10));
orden.agregarProducto(new Producto("Pantalon", 20));

console.log(orden.calcularTotal());
console.log(orden.mostrarOrden());