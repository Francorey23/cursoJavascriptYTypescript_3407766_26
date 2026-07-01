console.log('Hola aprendices ADSO');
/*session1: variables */

let edad = 25; //let declara una variable
edad = 30;
//let edad = 20;
let nombre = "Andres";
console.log(nombre);

const PI = 3.141598; //const mantiene el valor en todo el programa

//Number numerico o decimal
const entero = 50;
const decimal = 31.40;
const negativo = -21;
console.log("numero entero: ", entero);

//Boolean solo tiene 2 estados falso o verdadero
let estadoActivo = true;
let tienePermiso = false;

//null ausencia intensional de valor
const resultado = null;

//undefined - variable declarada sin valor
let sinValor;
console.log(sinValor);

//typeof - tipo de valor
console.log(typeof -21);
console.log(typeof "Andres");

/*3. Operadores aritmeticos */
let a = 20;
let b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);//division
console.log(a%b);//modulo
console.log(a**b);//potencia de 20 a 10

//operadores comparacion condicionales
console.log(5 == "5"); //true -igualdad de valor
console.log(5 === "5");//false igualdad estricta usar siempre
console.log(5 !== 3);// true - diferencia estricta
console.log(10 > 5); //true
console.log(3 <= 3); //true

//operadores logicos
console.log("operadores logicos");
let email = "andres@gmail.com";
let pass ="andres123";
//AND las 2 condiciones deben ser verdaderas
console.log(false && false); //AND o Y si correo es V y password V entonces ingreso
console.log(false || false); //OR al menos una condicion debe ser verdadera
console.log(!true); //NOT niega el valor !

//operadores de asignacion
console.log("operadores de asignación");

let contador = 0
contador = contador +4;
contador +=4;
console.log(contador);
contador -=4;
contador ++;  //incremento en 1
contador --; //decremento en 1
console.log(contador);

//estructuras condicionales
//if else 
let temperatura = 21;

// si la temperatura es mayor de 35 grados es clima calido
if (temperatura > 35) {
    console.log("Hace mucho calor, temperatura calida");
    //temperatura menor a 25  clima templado
}else if(temperatura < 25){
    console.log("Clima templado, sal a pasear");    
}else if(temperatura > 15){
    console.log("clima frio");
}

//switch case
let dia = "lunes";

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log(dia, "Dia laboral");
        break; //salir del case
    case "sabado":
    case "domingo":
        console.log(" Fin de semana");
        break;
    default:
        console.log("dia desconocido");
}

//operador ternario es la simplificación del if else
let edad2 = 17;
let tarjetaCredito = edad2 >= 18 ? "Acceso: Permitido" : "Acceso:Denegado";
console.log(tarjetaCredito); // ?entonces o verdadero : Else o False

let mensaje;
if(edad2>18){
    mensaje = "Mayor de edad";
}else{
    mensaje = "Menor de edad";
}
console.log(mensaje);

//ejercicio: Si nota esta entre 1 y 70 Deficiente sino si esta entre 70 y 100 Aprobado 
let nota = 68;
let respuesta = nota <= 70 ? "Deficiente" : "Aprobado"; 
console.log(respuesta);