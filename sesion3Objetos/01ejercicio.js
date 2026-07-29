let empleado = {
    id: "EMP_01",
    nombre: "Valentina Castillo",
    cargo: "Administradora",
    salario: 3200000,
    activo: true,
    fechaIngreso: "2020-04-12",
    //objeto anidado
    contacto: {
        email: "vcastillo@gmail.com",
        telefono: 3217894567,
        ciudad: "Popayán"
    },
    //array 
    habilidades: ["Gestion Inventario", "Excel","Atencion Cliente"],
    //metodo accedeer a las propiedades del objeto
    fichaCompleta(){
        return `
            ==FICHA EMPLEADO==
            Id: ${this.id},
            Nombre: ${this.activo?"Empleado":"Inactivo"},
        `;
    }
}; //fin del objeto
//mostrar la ficha de usuario
console.log(empleado.fichaCompleta());

