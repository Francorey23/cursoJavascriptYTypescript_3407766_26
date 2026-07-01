let productos = ["Laptop", "Mouse", "Teclado", "Monitor"];
//Acceso por indice 0
console.log(productos[0]);
console.log(productos[2]);
console.log(productos[productos.length +1]);//Monitor
console.log(productos.length);//length funcion contar elementos
let carrito = []; //array vacio
//arreglo de objetos casos mas comunes
let inventario = [
    {nombre: "laptop", precio: 2300000, stock: 10},//objeto
    {nombre: "mouse", precio: 35000, stock: 15},//objeto
    {nombre: "teclado", precio: 55000, stock: 20}//objeto
];
console.log(inventario[0].nombre);
console.log(inventario[0].precio);
console.log(inventario[0].stock);
//subtema 2. metodos básicos modifican el array original
let carrito2 = ["Portatil Lenovo", 3400000];
//1. push agregar elementos al final del array
carrito2.push("teclado");
console.log(carrito2);
//2. pop elimina y retorna el ultimo elemento
let eliminado = carrito2.pop();//teclado
console.log(eliminado);
console.log(carrito2);
//3. unshift agrega al inicio el primer elemento
carrito2.unshift("Diademas");
console.log(carrito2);
//4. shift elimina y retorna el primer elemento
let primero = carrito2.shift();
console.log(primero);
console.log(carrito2);
//5. splice elimina o inserta en cualquier posicion
carrito2.splice(1,0, "WebCam");//en la posicion 1 elimana 0
console.log(carrito2);
carrito2.splice(0,1); //elimina un elemento desde la posición 0
console.log(carrito2);
//subtema 3. metodos de iteraccion (no mutan el array)
//estos metodos retornan un nuevo array El original no se modifica
let precios = [125000, 300000, 450000, 650000];
//forEach - ejecuta una función por cada elemento
precios.forEach((precio,indice)=>{
    console.log(`Producto ${indice+1}: $${precio.toLocaleString("es-CO")}`);
});
//2. map transforma cada elemento del array y retorna un nuevo array
//El array original no se modifica
let precioIVA = precios.map(precio=>Math.round(precio * 1.19));
console.log(precioIVA); //precio cada elemento * 1.19
console.log(precios); // precio sin cambios
//3. filter para seleccionar elementos en un nuevo array mas pequeño
let premium = precios.filter(precio => precio>= 200000);
console.log(premium);
//4.find retorna el primer elemento que coincida con la busqueda
let busquedaProd = precios.find(precio => precio == 300000);
console.log(busquedaProd);