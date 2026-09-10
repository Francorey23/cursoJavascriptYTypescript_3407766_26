import express from "express";
import morgan from 'morgan';
import recursosRouter from './routes/recursos.routes.js';
import logger from './middlewares/logger.js'
// instancia para llamar o usar express
const app = express();
//Middleware para que Express entienda JSON
app.use(express.json());
//Llamar al Middeleware morgan
app.use(morgan('dev'));
app.use(logger);

//Ruta para verificar el funcionamiento de nuestro servidor o API
app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "API aprendices Sena Reservas funciona satisfactoriamente"
    })
});
//Ruta de mi proyecto
app.use('/api/recursos', recursosRouter);

// Al final de tu archivo src/app.js:
export default app; 
