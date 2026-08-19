//una promesa es un objeto que representa el resultado futuro de una operacion
//asincrona puede tener 3 estados
//pending (pendiente): la operación aun no termino
//fulfilled(cumplida): La operación termino con exito ->resolve
//rejected(rechazada): La operación falló ->reject

//creación de una promesa
function obtenerProducto(id) {
    return new Promise((resolve, reject) =>{
        //simulamos el llamado a una base de datos con setTimeOut
        setTimeout(()=>{
            let productos ={
                "POO1": {nombre: "Laptop", precio: 5200000},
                "POO2": {nombre: "Mouse Genius", precio: 90000},
            };
            let producto = productos[id];
            if (producto) {
                resolve(producto); //se cumplio la promesa =>es exitosa
                console.log(producto);
            }else{
                reject(new Error('Producto ${id} no encontrado'));
                console.log("Error de producto");
            }
        }, 2000);
    });
}
//consumir una promesa se puede utilizar .then() / .catch() / .finally()
obtenerProducto("POO1")
.then((producto)=>{
    //esto se ejecuta si la promesa es satisfactoria (fulfill)
    console.log("Producto: ", producto.nombre);
    return producto.precio * 1.19; //el valor retornado pasa al siguiente .then()
})
.then((precioConIva)=>{
    console.log("Con IVA: ", precioConIva.toLocaleString("es-CO"));
})
.catch((error)=>{
    //catch se ejecuta si existe error en uno de los .then o si la promesa falla
    console.error("Error: ", error.message);
})