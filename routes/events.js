const { Router } = require('express')
const { check } = require('express-validator')
const {
	getEventos,
	crearEvento,
	actualizarEvento,
	eliminarEvento,
} = require('../controllers/events')
const { validarJWT } = require('../middlewares/validar-jwt')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

// Ruta base => host + /events

// Todas tiene que estar validadas
router.use(validarJWT)

// Obtener eventos
router.get('/', getEventos)

// Crear un nuevo evento
router.post(
	'/',
	[
		check('title', 'El título es obligatorio').notEmpty(),
		check('start', 'Fecha de inicio es obligatoria').isDate(),
		check('end', 'Fecha de finalización es obligatoria').isDate(),
		validarCampos,
	],
	crearEvento
)

// Acualizar evento
router.put('/:id', actualizarEvento)

// Eliminar evento
router.delete('/:id', eliminarEvento)

module.exports = router
