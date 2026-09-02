import express from "express";
// instancia para llamar o usar express
const app = express();
//Middleware para que Express entienda JSON
app.use(express.json());

//Ruta para verificar el funcionamiento de nuestro servidor o API
app.get('/',(req, res)=>{
    res.status(200).json({
        mensaje: "API aprendices Sena Reservas funciona satisfactoriamente"
    })
});

// Al final de tu archivo src/app.js:
export default app; 
