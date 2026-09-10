import { Router } from "express";
import recursosController from "../controllers/recursos.controller.js";
import validarRecurso from "../middlewares/validarRecurso.js";
const router = Router();

router.get('/', recursosController.listar);
router.get('/:id', recursosController.obtenerPorId);
router.post('/', validarRecurso, recursosController.crear);
router.put('/:id', validarRecurso, recursosController.actualizar);
router.delete('/:id', recursosController.eliminar);

export default router;