export default function validarRecurso(req, res, next) {
    const { nombre, tipo } = req.body;
    if (!nombre || !tipo) {
        return res.status(400).json({ error: 'Los campos "nombre" y "tipo" son obligatorios' });
    }
    next();
}