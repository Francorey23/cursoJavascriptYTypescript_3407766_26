//Middeleware de loggin personalizado es una funcion que tiene esta estructra
function logger(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next(); //sin next la petición no continua
}

export default logger;