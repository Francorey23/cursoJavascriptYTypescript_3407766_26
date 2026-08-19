//Diferencia en Js de codigo sincronico y asincronico
//sincronico al mismo tiempo asincronico a destiempo después
//1. muestra codigo sincronico
console.log("1. Inicio");
console.log("2. Medio");
console.log("3. Final");
//2. muestra codigo asincronico
console.log("2. Codigo Asincrónico");
//SetTimeOut simula un tiempo en espera o tardio ejemplo respuesta servidor
setTimeout(() =>{
    console.log("3. Este mensaje llega despues de 3 segundos...");
}, 0);
console.log("4.Linea que se ejecuta antes que el contenido en setTimeOut");