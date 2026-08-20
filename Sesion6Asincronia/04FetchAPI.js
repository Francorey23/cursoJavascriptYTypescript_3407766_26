//fetch() es la funcion nativa para hacer peticiones HTTP desde el navegador web y desde Nodejs 18
//fetch() retorna una promesa

//ejemplo se va a consumir un API publico

async function obtenerDatosAPI(url) {
    try {
        let respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`HTTP ${respuesta.status}`);
        }
        let datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error al obtener los datos: ", error.message);
        return null;
    }
}

async function cargarUsuariosPublicos() {
    console.log("Cargar usuarios de internet...");
    let usuarios = await obtenerDatosAPI("https://jsonplaceholder.typicode.com/users");
    if (!usuarios) { //ejecute compruebe lo verdadero
        console.log("No se pudieron cargar los usuarios");
        return;
    }
    console.log(`Se cargaron ${usuarios.length} usuarios: `);
    usuarios.slice(0, 3).forEach(u => {
        console.log(` ${u.name} - ${u.email}`);  //id y username
    });
}

cargarUsuariosPublicos();