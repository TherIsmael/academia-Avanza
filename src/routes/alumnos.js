const express = require('express')
const router = express.Router()
const alumnoController = require('../controllers/alumnoController.js')

router.get('/alumnos', alumnoController.list)
router.post('/alumnos/add', alumnoController.save)
router.get('/alumnos/delete/:id_estudiante', alumnoController.delete)
router.get('/alumnos/update/:id_estudiante', alumnoController.edit)
router.post('/alumnos/update/:id_estudiante', alumnoController.update)

module.exports = router
