//archivos JSON JavaScript Object Notation Formato estandar de intercambio de datos
let producto = {
    id: 2002,
    nombre: "Monitor LG 35",
    precio: 12000000,
    activo: true,
    etiquetas: ["IPS", "4K", "HDR"]
};
console.log(producto);
console.log(typeof producto);
//convertrir objeto JS a texto JSON stringify
let productoJSON = JSON.stringify(producto);
console.log(productoJSON); //texto
console.log(typeof productoJSON); //es texto no objeto
//verificado con formato legible para programar
console.log("\n Formato legible:")
let productoJSON2 = JSON.stringify(producto, null, 2);
console.log(productoJSON2);
//JSON.parse convierte texto JSON a Objeto JavaScript
let textoRecibido = '{"id": 21, "mouse": "Mouse", "precio": 85000, "stock": 30}';
let objetoRecuperado = JSON.parse(textoRecibido);
console.log(objetoRecuperado.nombre);
console.log(typeof objetoRecuperado);

//caso de uso simulacion guardar y recuperar datos
function guardar(clave, datos){
    let json = JSON.stringify(datos);
    console.log(`Guardando.. "${clave}": ${json}`);
    return json;
}
function cargar(json){
    return JSON.parse(json);
}

let guardado = guardar("producto_1001", producto);
let recupero = cargar(guardado);
console.log(`Recuperado: ${recupero.nombre} - $${recupero.precio.toLocaleString("es-CO")}`);