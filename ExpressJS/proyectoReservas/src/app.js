import express from "express";
import morgan from 'morgan';
import {Router} from 'express';
// instancia para llamar o usar express
const app = express();
//Middleware para que Express entienda JSON
app.use(express.json());
//Llamar al Middeleware morgan
app.use(morgan('dev'));
//
const recursosRouter = Router();
app.use('/api/recursos', recursosRouter);
//recursosRouter.get('/', (req, res) => {});
app.use(logger);

const recursos = [
    { id: 1, nombre: 'Aula 101', tipo: 'aula', capacidad: 30 },
    { id: 2, nombre: 'Laboratorio de Redes', tipo: 'laboratorio', capacidad: 20 },
    { id: 3, nombre: 'Videobeam portátil #1', tipo: 'equipo', capacidad: null },
    { id: 4, nombre: 'Videobeam portátil #1', tipo: 'equipo', capacidad: null }
];
//Middeleware de loggin personalizado es una funcion que tiene esta estructra
function logger(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next(); //sin next la petición no continua
}


//Ruta para verificar el funcionamiento de nuestro servidor o API
app.get('/',(req, res)=>{
    res.status(200).json({
        mensaje: "API aprendices Sena Reservas funciona satisfactoriamente"
    })
});

//2. Metodo para listar los recursos
app.get('/api/recursos',(req, res)=> {
    const {tipo} = req.query;
    if (tipo) {
        const filtrados = recursos.filter(r => r.tipo==tipo);
        return res.status(200).json(filtrados);
    }
    res.status(200).json(recursos);
}); //fin
// 3. Metodo para consultar un solo recurso por ID
app.get('/api/recursos/:id', (req, res) => {
    const id = Number(req.params.id);
    const recurso = recursos.find(r => r.id ===id);

    if (!recurso) {//falso recurso no encontrado
        return res.status(404).json({
            error: 'No existe un recurso con id: ${id}'
        });
    }
    res.status(200).json(recurso);
});

//5. Metodo para registrar un nuevo recurso POST
recursosRouter.post('/', (req, res)=> {
    const {nombre, tipo, capacidad} = req.body;
    const nuevoRecurso = {
        id: recursos.length+1,
        nombre,
        tipo, 
        capacidad: capacidad ?? null
    };
    recursos.push(nuevoRecurso);
    res.status(201).json(nuevoRecurso)
});
//6. Metodo PUT para modificar el registro
recursosRouter.put('/:id', (req, res)=> {
    const id = Number(req.params.id);
    const recurso = recursos.find(r=>r.id ==id);

    if (!recurso) {
        return res.status(404).json({error: 'No se encuentra el recurso por id'});
    }
    const {nombre, tipo, capacidad} = req.body;
    recurso.nombre = nombre;
    recurso.tipo = tipo;
    recurso.capacidad = capacidad ?? null;
});

//7. metodo elimina DELETE
recursosRouter.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = recursos.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({error: `No se encontro un recurso con id ${id}`});
    }
    recursos.splice(index, 1);
    res.status(200).json({mensaje: `Recurso ${id} eliminado correctamente`});
});

// Al final de tu archivo src/app.js:
export default app; 
