import recursosService from '../services/recursos.service.js';
function listar(req, res) {
    const { tipo } = req.query;
    const resultado = recursosService.listarRecursos(tipo);
    res.status(200).json(resultado);
}
function obtenerPorId(req, res) {
    const id = Number(req.params.id);
    const recurso = recursosService.obtenerRecursoPorId(id);
    if (!recurso) {
        return res.status(404).json({ error: `No se encontró un recurso con id ${id}` });
    }
    res.status(200).json(recurso);
}
function crear(req, res) {
    const nuevoRecurso = recursosService.crearRecurso(req.body);
    res.status(201).json(nuevoRecurso);
}
function actualizar(req, res) {
    const id = Number(req.params.id);
    const recursoActualizado = recursosService.actualizarRecurso(id, req.body);
    if (!recursoActualizado) {
        return res.status(404).json({ error: `No se encontró un recurso con id ${id}` });
    }
    res.status(200).json(recursoActualizado);
}
function eliminar(req, res) {
    const id = Number(req.params.id);
    const eliminado = recursosService.eliminarRecurso(id);
    if (!eliminado) {
        return res.status(404).json({ error: `No se encontró un recurso con id ${id}` });
    }
    res.status(200).json({ mensaje: `Recurso ${id} eliminado correctamente` });
}
export default { listar, obtenerPorId, crear, actualizar, eliminar };