//subtema 2. Metodos en objetos
const carrito = {//objeto
    items: [],//propiedad
    total: 0,
    //metodos 
    agregarProducto(producto, cantidad){ 
        //this hacer referencia al producto objeto de carrito
        this.items.push({producto, cantidad});
        this.total +=producto.precio *cantidad;
    },
    //metodo mostrar productos
    verProductos(){
        console.log(`Items: ${this.items.length} | Total: $${this.total.toLocaleString("es-CO")}`);
    }
};//fin objeto
carrito.agregarProducto({nombre: "mouse", precio: 30000}, 5);
carrito.agregarProducto({nombre: "teclado", precio: 45000}, 10);
carrito.verProductos();
//forma correcta de usar una funcion 
let objeto = { //costruyo metodo
    nombre: "StoreApp",
    mostrar(){console.log(this.nombre);}
};
objeto.mostrar();  //llamado al metodo