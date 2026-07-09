/*
Ejercicio 4 — [Terminal]
Una tienda de tecnología tiene su inventario en un arreglo de objetos con nombre, 
precio y stock (mínimo 6 productos, definidos en el código). Usa filter para obtener 
solo los productos que tienen stock mayor a 0. Luego usa map sobre ese resultado para 
crear un nuevo arreglo donde cada elemento sea un string con el formato "Nombre — 
$Precio" usando toLocaleString("es-CO"). Imprime el arreglo resultante con forEach. 
Al final usa reduce para calcular el valor total del inventario disponible 
(precio × stock de cada producto con stock > 0) y muéstralo en consola.

*/
let inventario = [
    {nombre: "Equipo PC", precio: 520, stock: 7},
    {nombre: "Mouse", precio: 120, stock: 10},
    {nombre: "Teclado", precio: 50, stock: 5},
    {nombre: "Pantalla", precio: 400, stock: 25},
    {nombre: "Memoria RAM", precio: 180, stock: 18},
];

//1. filter -solo productos con el stock
let disponibles = inventario.filter(p=>p.precio>340);
console.log(disponibles);
//2. map - convertir cada objeto en texto legible
let etiquetas = disponibles.map(p =>`${p.nombre} - $${p.precio.toLocaleString("es-CO")}`
);
console.log(etiquetas);
