//crear un objeto
let producto = {
    id: 101, //propiedades
    nombre: 'laptop Dell CPS 13"',
    precio: 5600000,
    stock: 10,
    disponible: true,
    //una propiedad puede ser otro objeto(anidado)
    dimensiones: {largo: 34, ancho: 25, alto:15},
    //array
    etiquetas: ["ultrabook", "Gamer", "Programacion"]
};
//acceder a una propiedad
console.log(producto.nombre);
console.log(producto.etiquetas);
console.log(producto.dimensiones);
//notacion o trabajo con corchetes
let clave = "precio";
console.log(producto[clave]);
//modificacion propiedades
producto.precio = 5500000; //modifico un valor existente
producto.disponible = false; //modifico
producto.color = "Plateado"; //agrego una propiedad
delete producto.disponible; //eliminar propiedad
//verificar si una propiedad existe
console.log("precio" in producto); //true
console.log("disponible" in producto);//false

