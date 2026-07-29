//demostrar los metodos getter y setter
//Permiten acceder a los atributos de la clase y modificarlos

class Empleado {
    #nombre;
    #salario;
    constructor(nombre, salario) {
        this.#nombre = nombre;
        this.#salario = salario;
    }
    //GETTER que accede a la propiedad no a la funcion 
    get nombre(){
        return this.#nombre.toUpperCase();
    }
    get salario(){
        return this.#salario;
    }
    get salarioconFormato(){
        return `$${this.#salario.toLocaleString("es-CO")}`;
    }
    //metodo setter
    set salario(valor){
        let SMLV = 1000000;
        if (valor<SMLV) {
            throw new Error(`Error salario de $${valor} esta por debajo del SMLV`);
        }
        this.salario = valor;
    }

}//termina clase empleado
let empleado = new Empleado("Carlos Andres Velasco", 2000000);
console.log(empleado.nombre);
console.log(empleado.salario);
console.log(empleado.salarioconFormato);
//console.log(empleado.salario(900000));
try {//validacion verdadero try / falso igual if/else con correccion error
    empleado.salario = 500000;
} catch (error) {
    console.log(error.message);
}
console.log(empleado.salario);
