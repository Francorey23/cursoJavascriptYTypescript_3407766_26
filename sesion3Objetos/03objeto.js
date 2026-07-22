//subtema 3. Object.keys, Object.values, Object.entries
let producto ={
    nombre: "Web Cam FHD",
    precio: 2800000,
    stock: 40,
    categoria: "perifericos"
};
//Object.keys
let claves = Object.keys(producto); //array con las claves del objeto
console.log(claves);
let valores = Object.values(producto); //aaray con los valores
console.log(valores);
let entradas = Object.entries(producto); //array de pares [clave, valor]
console.log(entradas); 
//iteracion sobre un objeto con ciclo for
console.log("\nFicha Técnica:");
for (let [clave,valor] of Object.entries(producto)) {
    console.log(` ${clave.padEnd(12)}: ${valor}`);
}