const recursos = [
    { id: 1, nombre: 'Aula 101', tipo: 'aula', capacidad: 30 },
    { id: 2, nombre: 'Laboratorio de Redes', tipo: 'laboratorio', capacidad: 20 },
    { id: 3, nombre: 'Videobeam portátil #1', tipo: 'equipo', capacidad: null }
];
function listarRecursos(tipo) {
    if (tipo) {
        return recursos.filter(r => r.tipo === tipo);
    }
    return recursos;
}
function obtenerRecursoPorId(id) {
    return recursos.find(r => r.id === id);
}
function crearRecurso({ nombre, tipo, capacidad }) {
    const nuevoRecurso = { id: recursos.length + 1, nombre, tipo, capacidad: capacidad ?? null };
    recursos.push(nuevoRecurso);
    return nuevoRecurso;
}
function actualizarRecurso(id, { nombre, tipo, capacidad }) {
    const recurso = obtenerRecursoPorId(id);
    if (!recurso) return null;
    recurso.nombre = nombre;
    recurso.tipo = tipo;
    recurso.capacidad = capacidad ?? null;
    return recurso;
}
function eliminarRecurso(id) {
    const index = recursos.findIndex(r => r.id === id);
    if (index === -1) return false;
    recursos.splice(index, 1);
    return true;
}
export default {
    listarRecursos,
    obtenerRecursoPorId,
    crearRecurso,
    actualizarRecurso,
    eliminarRecurso
};