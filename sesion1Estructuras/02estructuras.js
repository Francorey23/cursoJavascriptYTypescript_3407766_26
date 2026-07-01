//ciclos for, while, do-while
//1. Estructura for  cuando se sabe cuantas veces repetir el ciclo
for (let i = 0; i < 5; i++) {
    console.log('Iteración de número:', i);
    
}

//while
let intentos = 0;
const MAX_INTENTOS = 5;

while (intentos < MAX_INTENTOS) {
    console.log('Intento', intentos+1, 'de', MAX_INTENTOS);
    intentos++;
}

//break y continue
for (let i = 0; i < 10; i++) {
    if (i === 4) continue;
    if (i===7) break;
    console.log(i);
 }
    
//funciones
//funcion clasica
function saludar(nombre) {
    return `Hola tu nombre es, ${nombre}`;
}

console.log(saludar("Ana Maria"));

//2. Funcion anonima asignada a variable, no tiene nombre propio, se guarda en una variable
let calcularArea = function(base, altura){
    return base*altura;
}
console.log(calcularArea(6,8));

//3. funciones arrow
let sumar = (val1, val2)=> val1+val2;
console.log(sumar(12000, 45000));

//4. parametros
function crearProducto(nombre, precio, stock = 5) {
    return { nombre, precio, stock};
}
console.log(crearProducto("Silla", 75000));
console.log(crearProducto("Silla", 75000, 50));

//alcance de una variable
const appNombre = "StoreApp"; //variable accesible desde cualquier parte del archivo

function pagoAlquiler() {
    let totalFactura = 3000000; //variable accesible dentro de la funcion
}
//console.log(`Proceso de pago: ${totalFactura}`);

//5. Callback una funcion puede recibir como parámetro otra funcion
function procesarOperacion(a, b, operacion) {
    let resultado = operacion(a,b);
    return `Resultado: ${resultado}`;
}
let multiplicar = (x,y) => x*y;
let restar = (x,y) => x-y;

console.log(procesarOperacion(10,5, multiplicar));
console.log(procesarOperacion(10,5, restar));