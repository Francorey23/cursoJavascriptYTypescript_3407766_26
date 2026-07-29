//clase en POO: Es una plantilla o molde para crear objetos
//El constructor seria el metodo principal y permite crear los objetos

class Producto {
    //El constructor recibe los datos iniciales de cada objeto
    constructor(id, nombre, precio, stock=5) {
        //this asigna los valores a cada propiedad
        this.id =       id;
        this.nombre =   nombre;
        this.precio =   precio;
        this.stock =    stock;
        this.fechaC =   new Date();
    }//end constructor
    //crear los Metodos utilizados para cualquier objeto
    descripcion(){
        return `[Producto Id: ${this.id} Precio: ${this.nombre}]`
    }
    //metodo para mostrar el producto con stock mayor a 5
    productoDisponible(){
        return this.stock > 5
        ?`se cuenta con un stock alto ${this.stock}`
        :`debe hacer un nuevo pedido ${this.stock}`
    }
    //Hacer un descuento de acuerdo al valor indicado desde el llamado al metodo
    descuentoProducto(numero){
        let porcentaje = numero 
        return porcentaje > 5
        ? `no aplica`
        : `aplica`
    }
}//fin clase
let prod1 = new Producto(1001, "Laptop D3ll XPS", 5500000, 3);
let prod2 = new Producto(1002, "Mouse Logitech", 80000, 4);
let prod3 = new Producto(1003, "Teclado Mecánico", 100000, 10);
//console.log(prod1);
//llamar a la funcion descripcion
console.log(prod1.descripcion());
console.log(prod1.productoDisponible());
console.log(prod1.descuentoProducto(5)); //resultado valor actual del producto
//si es mayor a 5 mensaje no se puede hacer descuento sino hacer la operacion