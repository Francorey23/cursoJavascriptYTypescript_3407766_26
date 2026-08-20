//Async || Await Este concepto es como el azucar sintético del sincronismo
//para que el codigo asincronico se vea y se piense como codigo sincronico

//una funcion que contenga async SIEMPRE devolvera una promesa
//await pausa la ejecución SOLO dentro de esa función (no se bloquea el programa)

//funciones asincronas simuladas
function obtenerProducto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let productos ={
                P001: {
                    id: "P001",
                    nombre: "Laptop Dell",
                    precio: 4500000
                },
                P002: {
                    id: "P002",
                    nombre: "Mouse Logitech",
                    precio: 60000
                }
            };
            let producto = productos[id];

            if (producto) {
                resolve(producto);
            }else{
                reject(new Error(`Producto ${id} no encontrado`));
            }
        }, 2000);
    });
}
//obtener producto utilizando Async/Await
async function cargarDatosProducto(id) {
    try{
        let producto = await obtenerProducto(id);
        let precioConIva = Math.round(producto.precio*1.19);
        return {
            ...producto,
            precioConIva,
            cargadoEn: new Date().toLocaleTimeString("es-CO")
        };
    }catch(error){
        console.error(
            `Error al cargar producto ${id}:`, error.message
        );
        return null;
    }
}
//procesar catalogo
async function procesarCatalago() {
    console.log("Cargando catalogo ...");
    let [prod1, prod2] = await Promise.all([
        cargarDatosProducto("P001"),
        cargarDatosProducto("P002")
    ]);

    if (prod1) {
        console.log(`${prod1.nombre}: $${prod1.precioConIva.toLocaleString("es-CO")} (con IVA)`);
    }
    if (prod2) {
        console.log(`${prod2.nombre}: $${prod2.precioConIva.toLocaleString("es-CO")} (con IVA)`);
    }
    console.log("Catalogo listo..");
}
//Ejecutar catalago
procesarCatalago();

//2. Comparar .then() vs async/await
function calcularDescuento(producto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let descuento = producto.precio * 0.15;
            let productoDescuento = {
                ...producto,
                descuento,
                precioFinal: producto.precio - descuento
            };
            resolve(productoDescuento);
        }, 1000);
    });
}

function registrarVenta(producto) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve({
                mensaje: "venta registrada satisfactoriamente",
                producto: producto.nombre,
                total: producto.precioFinal
            });
        }, 1000);
    });
}
//llamado a las funciones
obtenerProducto("P001")
.then(p=> calcularDescuento(p))
.then(p=> registrarVenta(p))
.then(resultado => console.log(resultado))
.catch(error => console.error(error.message));

async function procesarVenta() {
    try{
        let producto = await obtenerProducto("P001");
        let conDesc = await calcularDescuento(producto);    
        console.log(resultado);
        return resultado;
    }catch(error){
        console.error("Error al registrar la venta: ", error.message);
    }
}
procesarVenta();
//obtnerProducto()->Promise->await->producto->calcularDescuento()->Promise->await->registrarVenta()->Promise->await->resultado()