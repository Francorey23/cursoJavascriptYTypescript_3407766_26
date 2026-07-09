//operaciones basicas carrito de compras
let carrito = [];
function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("Carrito vacio");
        return;
    }
    console.log(`Carrito (${carrito.length} items):[${carrito.join(", ")}] `);
}
mostrarCarrito();
//agregar productos
carrito.push("Portatil Asus");
carrito.push("Mouse");
carrito.push("Memoria USB");
carrito.push("Adapatador HDMI");
carrito.push("SSID");
mostrarCarrito();
//agregar al inicio productos con unshift : Memoria RAM, Cable poder

//eliminar el ultimo elemento con pop

//verificar la existencia con finder o includes